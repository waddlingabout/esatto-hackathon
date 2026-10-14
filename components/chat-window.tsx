"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components/Button";
import { Form } from "react-aria-components/Form";
import { Input, TextField } from "react-aria-components/TextField";
import { Cephalon, type CephalonState } from "@/components/boyota/Cephalon";
import { Icon } from "@/components/boyota/icons";
import { focusRing, linkFocusRing } from "@/components/boyota/styles";
import type { FollowUp } from "@/lib/ai-router";
import { recordPrompt, snapshotClientContext, type InputMode } from "@/lib/visitor-signals";

// Before routing, the assistant asks a few follow-up questions (lib/pre-navigation.ts);
// that conversation is shown as bubbles. A match then navigates straight away, so the
// only other replies are "no match" and errors.
type Reply = { kind: "none" | "error"; text: string };

type NavigateResponse =
  | { action: "ask"; question: string }
  | { action: "navigate"; url: string; title: string }
  | { action: "none"; url: null; message: string };

const GREETING = "Welcome to Boyota! How can I help you today?";
const ERROR_TEXT = "Navigation is unavailable right now.";
const NO_MATCH_TEXT = "I couldn't find a matching page. Try rephrasing?";
const STATE_LABELS: Record<CephalonState, string> = {
  idle: "Ready",
  thinking: "Thinking…",
  talking: "Replying",
  routed: "Taking you there",
};
// How long the avatar stays in its "talking" motion after a reply appears.
const TALK_MS = 1200;
// Voice input stops recording on its own after this long.
const MAX_RECORDING_MS = 30_000;
const VOICE_ERROR_TEXT = "Voice input is unavailable right now.";
const bubble = "max-w-[85%] px-4 py-3.5 text-[17px] leading-normal";
// Bubble radii from design-system/README.md → Chat bubbles.
const assistantShape = "self-start rounded-[4px_16px_16px_16px]";
const userShape = "self-end rounded-[16px_4px_16px_16px] bg-ink text-surface";

// Every page the chat sent the visitor to, oldest first, so coming back to "/" offers a
// chip for each. sessionStorage: this tab only. Access can throw (private mode, blocked storage).
type PastRoute = { url: string; title: string; prompt: string };
const ROUTES_KEY = "boyota.routes";
const MAX_ROUTES = 5;

// Read as the raw string so useSyncExternalStore gets a stable snapshot.
function readRoutes(): string | null {
  try {
    return sessionStorage.getItem(ROUTES_KEY);
  } catch {
    return null;
  }
}

// Nothing to subscribe to: only this window writes it, right before leaving the page.
const noSubscribe = () => () => {};

function parseRoutes(raw: string | null): PastRoute[] {
  try {
    const routes: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(routes) ? (routes as PastRoute[]) : [];
  } catch {
    return [];
  }
}

// Asking the same thing again moves its chip to the end instead of adding a second one.
function addRoute(route: PastRoute) {
  const routes = parseRoutes(readRoutes()).filter((r) => r.url !== route.url);
  try {
    sessionStorage.setItem(ROUTES_KEY, JSON.stringify([...routes, route].slice(-MAX_ROUTES)));
  } catch {}
}

export function ChatWindow() {
  const router = useRouter();
  const [reply, setReply] = useState<Reply | null>(null);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [routing, setRouting] = useState(false);
  const [talking, setTalking] = useState(false);
  const [pulse, setPulse] = useState(0);
  // The conversation before routing: the first statement, the answered follow-ups,
  // and the question waiting for an answer. The whole transcript is sent each turn.
  const [statement, setStatement] = useState<string | null>(null);
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);
  const [question, setQuestion] = useState<string | null>(null);
  const talkTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  // Voice input: record with the mic button and transcribe into the input box, where the
  // visitor can edit it and send it like a typed prompt. Talking again replaces the box.
  const [voice, setVoice] = useState<"idle" | "recording" | "transcribing">("idle");
  // The last transcript put in the box, read out once so screen-reader users know it's there.
  const [heard, setHeard] = useState("");
  const recorder = useRef<MediaRecorder | null>(null);
  const discardRecording = useRef(false);
  const recordTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // How the current prompt was typed, sent along as visitor context.
  const typingStartedAt = useRef<number | null>(null);
  const edits = useRef(0);
  // Whether the text in the box came from voice input.
  const fromVoice = useRef(false);
  // null on the server; read from sessionStorage in the browser.
  const routesRaw = useSyncExternalStore(noSubscribe, readRoutes, () => null);
  const pastRoutes = useMemo(() => parseRoutes(routesRaw), [routesRaw]);

  // With cacheComponents, Back restores this page from a hidden <Activity>, so
  // clear the in-flight state when it's hidden; otherwise the dots stay up.
  useEffect(
    () => () => {
      setPending(false);
      setRouting(false);
      setTalking(false);
      clearTimeout(talkTimer.current);
      // Leaving mid-recording: release the mic and drop the audio.
      setVoice("idle");
      clearTimeout(recordTimer.current);
      if (recorder.current?.state === "recording") {
        discardRecording.current = true;
        recorder.current.stop();
      }
    },
    [],
  );

  const avatarState: CephalonState = routing
    ? "routed"
    : pending || voice === "transcribing"
      ? "thinking"
      : talking || voice === "recording"
        ? "talking"
        : "idle";
  const stateLabel = voice === "recording" ? "Listening…" : STATE_LABELS[avatarState];
  const busy = pending || voice !== "idle";
  // Read out by the visually hidden status line; errors use role="alert" instead.
  const announcement = routing
    ? "Taking you there…"
    : pending
      ? "Finding the right page…"
      : voice === "recording"
        ? "Listening…"
        : voice === "transcribing"
          ? "Working out what you said…"
          : reply?.kind === "none"
            ? reply.text
            : heard
              ? `Heard: ${heard}. Edit it or press Enter to send.`
              : question ?? "";

  function say(next: Reply) {
    setReply(next);
    talk();
  }

  function talk() {
    setTalking(true);
    setPulse((n) => n + 1);
    clearTimeout(talkTimer.current);
    talkTimer.current = setTimeout(() => setTalking(false), TALK_MS);
    inputRef.current?.focus();
  }

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      say({ kind: "error", text: "Voice input isn't supported in this browser." });
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      say({ kind: "error", text: "I can't hear you. Allow microphone access and try again." });
      return;
    }

    const rec = new MediaRecorder(stream);
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      clearTimeout(recordTimer.current);
      recorder.current = null;
      if (discardRecording.current) {
        discardRecording.current = false;
        return;
      }
      void transcribe(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
    };

    recorder.current = rec;
    discardRecording.current = false;
    rec.start();
    setVoice("recording");
    setReply(null);
    setHeard("");
    recordTimer.current = setTimeout(() => rec.stop(), MAX_RECORDING_MS);
  }

  function stopRecording() {
    if (recorder.current?.state === "recording") recorder.current.stop();
  }

  async function transcribe(audio: Blob) {
    setVoice("transcribing");
    let prompt: string;
    try {
      const form = new FormData();
      form.append("audio", audio, "speech");
      const res = await fetch("/api/transcribe", { method: "POST", body: form });
      if (!res.ok) throw new Error(`transcribe responded ${res.status}`);
      prompt = ((await res.json()) as { text: string }).text;
    } catch (err) {
      console.error(err);
      setVoice("idle");
      say({ kind: "error", text: VOICE_ERROR_TEXT });
      return;
    }
    setVoice("idle");
    if (!prompt) {
      say({ kind: "none", text: "I didn't catch that. Try again?" });
      return;
    }
    // Replace whatever is in the box, then hand it back for editing with the caret at the end.
    setText(prompt);
    setHeard(prompt);
    fromVoice.current = true;
    edits.current = 0;
    typingStartedAt.current = null;
    requestAnimationFrame(() => {
      const input = inputRef.current;
      input?.focus();
      input?.setSelectionRange(prompt.length, prompt.length);
    });
  }

  function onTextChange(next: string) {
    typingStartedAt.current ??= Date.now();
    if (next.length < text.length) edits.current++;
    // Clearing the box drops the voice origin; edits to a transcript keep it.
    if (!next) fromVoice.current = false;
    setText(next);
  }

  function resetConversation() {
    setStatement(null);
    setFollowUps([]);
    setQuestion(null);
  }

  function startOver() {
    resetConversation();
    setReply(null);
    inputRef.current?.focus();
  }

  async function send(input: string, mode: InputMode) {
    input = input.trim();
    if (!input || pending) return;

    // The first message is the statement; every later one answers the open question.
    const prompt = statement ?? input;
    const answered = statement !== null && question !== null
      ? [...followUps, { question, answer: input }]
      : followUps;

    const typingMs = mode === "typed" && typingStartedAt.current !== null
      ? Date.now() - typingStartedAt.current
      : null;
    const ctx = snapshotClientContext({ mode, typingMs, edits: edits.current });
    typingStartedAt.current = null;
    edits.current = 0;
    fromVoice.current = false;

    setText("");
    setHeard("");
    setPending(true);
    setReply(null);
    setStatement(prompt);
    setFollowUps(answered);
    setQuestion(null);

    let next: Reply;
    try {
      const res = await fetch("/api/navigate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, followUps: answered, ctx }),
      });
      if (!res.ok) throw new Error(`navigate responded ${res.status}`);
      const data: NavigateResponse = await res.json();

      if (data.action === "ask") {
        setQuestion(data.question);
        setPending(false);
        talk();
        return;
      }

      // The chat lives on "/", so a route to the home page itself is no help.
      if (data.action === "navigate" && data.url.startsWith("/") && data.url !== "/") {
        // Go straight there; the thinking dots stay up until the page changes,
        // and the product page shows the prompt as "You asked for …".
        setRouting(true);
        recordPrompt(prompt, mode, data.url);
        const url = `${data.url}?q=${encodeURIComponent(prompt)}`;
        addRoute({ url, title: data.title, prompt });
        resetConversation();
        router.push(url);
        return;
      } else if (data.action === "none" || data.url === "/") {
        recordPrompt(prompt, mode, null);
        next = { kind: "none", text: NO_MATCH_TEXT };
      } else {
        throw new Error("navigate returned an unusable url");
      }
    } catch (err) {
      console.error(err);
      next = { kind: "error", text: ERROR_TEXT };
    }

    // No match or an error ends the conversation; the next message is a new statement.
    resetConversation();
    setPending(false);
    say(next);
  }

  const inConversation = statement !== null;

  return (
    <section
      aria-label="Boyota assistant"
      className="box-border flex w-full max-w-[720px] flex-col gap-4 rounded-window border border-line bg-surface p-6 shadow-window"
    >
      <div className="flex items-center gap-3">
        <Cephalon state={avatarState} pulse={pulse} size={64} />
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-lg leading-none font-bold [font-stretch:112%]">
            Boyota
          </span>
          <span className="font-mono text-xs leading-none tracking-[0.08em] text-steel uppercase">
            {stateLabel}
          </span>
        </div>
      </div>

      <p role="status" className="sr-only">
        {announcement}
      </p>

      <div className="flex min-h-[180px] flex-col gap-3">
        <div className={`${bubble} ${assistantShape} bg-paper`}>{GREETING}</div>

        {pastRoutes.length > 0 && !inConversation && !pending && !routing && (
          <ul aria-label="Pages you've been sent to" className="m-0 flex list-none flex-col items-start gap-2 p-0">
            {pastRoutes.map((r) => (
              <li key={r.url} className="max-w-full">
                <Link
                  href={r.url}
                  className={`${linkFocusRing} flex min-h-11 max-w-full items-center gap-2 rounded-pill bg-lane-tint px-4 py-2 text-[15px] text-lane-deep no-underline hover:text-lane-deep`}
                >
                  <Icon name="arrow" size={16} strokeWidth={2.2} className="shrink-0" />
                  <span className="min-w-0 truncate">
                    <span className="font-medium">Back to {r.title}</span>
                    <span className="text-lane-deep/80"> · “{r.prompt}”</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {statement !== null && (
          <div className={`${bubble} ${userShape}`}>{statement}</div>
        )}
        {followUps.map((f, i) => (
          <div key={i} className="contents">
            <div className={`${bubble} ${assistantShape} bg-paper`}>{f.question}</div>
            <div className={`${bubble} ${userShape}`}>{f.answer}</div>
          </div>
        ))}
        {question !== null && (
          <div className={`${bubble} ${assistantShape} bg-paper`}>{question}</div>
        )}

        {reply?.kind === "none" && (
          <div className={`${bubble} ${assistantShape} bg-paper`}>{reply.text}</div>
        )}
        {reply?.kind === "error" && (
          <div role="alert" className={`${bubble} ${assistantShape} bg-error-tint text-error-deep`}>
            {reply.text}
          </div>
        )}

        {(pending || voice === "transcribing") && (
          <div aria-hidden="true" className={`${assistantShape} flex gap-1.5 bg-paper px-4 py-[18px]`}>
            <span className="size-2 rounded-pill bg-steel" />
            <span className="size-2 rounded-pill bg-steel opacity-60" />
            <span className="size-2 rounded-pill bg-steel opacity-30" />
          </div>
        )}
      </div>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!busy) send(text, fromVoice.current ? "voice" : "typed");
        }}
        className="m-0 flex items-center gap-2 rounded-pill border-2 border-ink py-1.5 pr-1.5 pl-[22px] has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-ink"
      >
        <TextField
          aria-label="Ask Boyota"
          value={text}
          onChange={onTextChange}
          autoComplete="off"
          className="min-w-0 grow"
        >
          <Input
            ref={inputRef}
            placeholder={
              voice === "recording"
                ? "Listening…"
                : question !== null
                  ? "Your answer…"
                  : "Hi, I'm looking for a car that can…"
            }
            className="h-11 w-full border-0 bg-transparent font-sans text-[17px] text-ink outline-none"
          />
        </TextField>
        <Button
          aria-label={voice === "recording" ? "Stop recording" : "Speak your question"}
          onPress={voice === "recording" ? stopRecording : startRecording}
          isPending={pending || voice === "transcribing"}
          className={`${focusRing} flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-pill data-[pending]:cursor-default data-[pending]:opacity-60 ${
            voice === "recording"
              ? "bg-ink text-surface"
              : "bg-transparent text-ink data-[hovered]:bg-paper"
          }`}
        >
          <Icon name={voice === "recording" ? "stop" : "mic"} size={22} />
        </Button>
        <Button
          type="submit"
          aria-label="Send"
          isPending={busy}
          className={`${focusRing} flex size-[52px] shrink-0 cursor-pointer items-center justify-center rounded-pill bg-ember text-surface data-[pending]:cursor-default data-[pending]:opacity-60`}
        >
          <Icon name="arrow" size={22} strokeWidth={2.4} />
        </Button>
      </Form>

      {inConversation && !routing && (
        <Button
          onPress={startOver}
          isDisabled={busy}
          className={`${focusRing} min-h-11 cursor-pointer self-center rounded-pill bg-transparent px-4 text-[15px] text-steel data-[disabled]:cursor-default data-[disabled]:opacity-60 data-[hovered]:text-ink`}
        >
          Start over
        </Button>
      )}
    </section>
  );
}
