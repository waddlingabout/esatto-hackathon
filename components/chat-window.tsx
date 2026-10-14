"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components/Button";
import { Form } from "react-aria-components/Form";
import { Input, TextField } from "react-aria-components/TextField";
import { Cephalon, type CephalonState } from "@/components/boyota/Cephalon";
import { Icon } from "@/components/boyota/icons";
import { focusRing } from "@/components/boyota/styles";

// The chat never echoes the visitor's prompt; a match navigates straight away,
// so the only replies shown are "no match" and errors.
type Reply = { kind: "none" | "error"; text: string };

type NavigateResponse =
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

export function ChatWindow() {
  const router = useRouter();
  const [reply, setReply] = useState<Reply | null>(null);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [routing, setRouting] = useState(false);
  const [talking, setTalking] = useState(false);
  const [pulse, setPulse] = useState(0);
  const talkTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  // Voice input: record with the mic button, transcribe, then send like a typed prompt.
  const [voice, setVoice] = useState<"idle" | "recording" | "transcribing">("idle");
  const recorder = useRef<MediaRecorder | null>(null);
  const discardRecording = useRef(false);
  const recordTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

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

  function say(next: Reply) {
    setReply(next);
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
      void transcribeAndSend(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
    };

    recorder.current = rec;
    discardRecording.current = false;
    rec.start();
    setVoice("recording");
    setReply(null);
    recordTimer.current = setTimeout(() => rec.stop(), MAX_RECORDING_MS);
  }

  function stopRecording() {
    if (recorder.current?.state === "recording") recorder.current.stop();
  }

  async function transcribeAndSend(audio: Blob) {
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
    await send(prompt);
  }

  async function send(prompt: string) {
    prompt = prompt.trim();
    if (!prompt || pending) return;

    setText("");
    setPending(true);
    setReply(null);

    let next: Reply;
    try {
      const res = await fetch("/api/navigate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error(`navigate responded ${res.status}`);
      const data: NavigateResponse = await res.json();

      // The chat lives on "/", so a route to the home page itself is no help.
      if (data.action === "navigate" && data.url.startsWith("/") && data.url !== "/") {
        // Go straight there; the thinking dots stay up until the page changes,
        // and the product page shows the prompt as "You asked for …".
        setRouting(true);
        router.push(`${data.url}?q=${encodeURIComponent(prompt)}`);
        return;
      } else if (data.action === "none" || data.url === "/") {
        next = { kind: "none", text: NO_MATCH_TEXT };
      } else {
        throw new Error("navigate returned an unusable url");
      }
    } catch (err) {
      console.error(err);
      next = { kind: "error", text: ERROR_TEXT };
    }

    setPending(false);
    say(next);
  }

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

      <div aria-live="polite" className="flex min-h-[180px] flex-col gap-3">
        <div className={`${bubble} ${assistantShape} bg-paper`}>{GREETING}</div>

        {reply?.kind === "none" && (
          <div className={`${bubble} ${assistantShape} bg-paper`}>{reply.text}</div>
        )}
        {reply?.kind === "error" && (
          <div role="alert" className={`${bubble} ${assistantShape} bg-error-tint text-error-deep`}>
            {reply.text}
          </div>
        )}

        {(pending || voice === "transcribing") && (
          <div
            role="status"
            aria-label={pending ? "Finding the right page" : "Listening to your question"}
            className={`${assistantShape} flex gap-1.5 bg-paper px-4 py-[18px]`}
          >
            <span className="size-2 rounded-pill bg-steel" />
            <span className="size-2 rounded-pill bg-steel opacity-60" />
            <span className="size-2 rounded-pill bg-steel opacity-30" />
          </div>
        )}
      </div>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!busy) send(text);
        }}
        className="m-0 flex items-center gap-2 rounded-pill border-2 border-ink py-1.5 pr-1.5 pl-[22px]"
      >
        <TextField
          aria-label="Ask Boyota"
          value={text}
          onChange={setText}
          autoComplete="off"
          className="min-w-0 grow"
        >
          <Input
            ref={inputRef}
            placeholder={voice === "recording" ? "Listening…" : "Hi, I'm looking for a car that can…"}
            className="h-11 w-full border-0 bg-transparent font-sans text-[17px] text-ink outline-none"
          />
        </TextField>
        <Button
          aria-label={voice === "recording" ? "Stop recording" : "Speak your question"}
          onPress={voice === "recording" ? stopRecording : startRecording}
          isDisabled={pending || voice === "transcribing"}
          className={`${focusRing} flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-pill data-[disabled]:cursor-default data-[disabled]:opacity-60 ${
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
          isDisabled={busy}
          className={`${focusRing} flex size-[52px] shrink-0 cursor-pointer items-center justify-center rounded-pill bg-ember text-surface data-[disabled]:cursor-default data-[disabled]:opacity-60`}
        >
          <Icon name="arrow" size={22} strokeWidth={2.4} />
        </Button>
      </Form>
    </section>
  );
}
