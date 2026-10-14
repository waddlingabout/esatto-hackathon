"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components/Button";
import { Form } from "react-aria-components/Form";
import { Input, TextField } from "react-aria-components/TextField";
import { useVoiceInput, type VoiceMessage } from "@/components/use-voice-input";
import { addRoute, readHistory, writeHistory, type HistoryTurn } from "@/lib/route-history";
import { recordPrompt, snapshotClientContext } from "@/lib/visitor-signals";
import { Icon } from "./icons";
import { focusRing } from "./styles";

type NavigateResponse =
  | { action: "navigate"; url: string; title: string }
  | { action: "none"; url: null; message: string };

const NO_MATCH_TEXT = "I couldn't find a better match. Try rephrasing?";
const ERROR_TEXT = "Navigation is unavailable right now.";

const variants = {
  // Site header: quiet pill on paper.
  header: {
    wrapper: "flex flex-[0_1_420px] flex-col gap-1.5",
    form: "min-h-12 border border-line bg-surface pl-[18px] text-[15px]",
    input: "h-11 text-[15px]",
    mic: "size-11",
    micIcon: 18,
    send: "size-11 bg-ink",
    sendIcon: 16,
    message: "px-[18px] text-[13px]",
  },
  // "Not quite the one?" section: the bold input pill with the ember send.
  footer: {
    wrapper: "flex w-full max-w-[560px] flex-col gap-2",
    form: "min-h-14 border-2 border-ink pl-5 text-base",
    input: "h-11 text-base",
    mic: "size-11",
    micIcon: 20,
    send: "size-11 bg-ember",
    sendIcon: 20,
    message: "text-[15px]",
  },
};

// Ask the assistant again from a product page, typed or spoken. Skips the follow-up
// questions: the new statement goes straight to the router, with the requests that led
// here (and this page) as background, so "something cheaper" compares against it.
export function AskAgain({
  variant,
  label,
  placeholder,
}: {
  variant: keyof typeof variants;
  label: string;
  placeholder: string;
}) {
  const router = useRouter();
  const v = variants[variant];
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<VoiceMessage | null>(null);
  const { text, voice, heard, onTextChange, startRecording, stopRecording, take } = useVoiceInput({
    inputRef,
    onMessage: setMessage,
    onRecordingStart: () => setMessage(null),
  });
  const busy = pending || voice !== "idle";

  // Read out by the visually hidden status line; errors use role="alert" instead.
  const announcement = pending
    ? "Finding a better match…"
    : voice === "recording"
      ? "Listening…"
      : voice === "transcribing"
        ? "Working out what you said…"
        : message?.kind === "none"
          ? message.text
          : heard
            ? `Heard: ${heard}. Edit it or press Enter to send.`
            : "";

  // The requests that led here. Landing on a page some other way (a link, a reload in a
  // new tab) leaves no stored history, so fall back to the ?q= prompt that brought them.
  function historyHere(path: string): HistoryTurn[] {
    const history = readHistory();
    if (history.at(-1)?.path === path) return history;
    const q = new URLSearchParams(window.location.search).get("q");
    return q ? [...history, { statement: q, followUps: [], path }] : history;
  }

  async function send() {
    if (pending) return;
    const taken = take();
    if (!taken) return;
    const { text: prompt, mode } = taken;
    const from = window.location.pathname;
    const history = historyHere(from);
    const ctx = snapshotClientContext({ mode, typingMs: taken.typingMs, edits: taken.edits });

    setPending(true);
    setMessage(null);
    let next: VoiceMessage;
    try {
      const res = await fetch("/api/navigate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, from, history, ctx }),
      });
      if (!res.ok) throw new Error(`navigate responded ${res.status}`);
      const data: NavigateResponse = await res.json();

      if (data.action === "navigate" && data.url.startsWith("/") && data.url !== "/") {
        recordPrompt(prompt, mode, data.url);
        const url = `${data.url}?q=${encodeURIComponent(prompt)}`;
        addRoute({ url, title: data.title, prompt });
        writeHistory([...history, { statement: prompt, followUps: [], path: data.url }]);
        router.push(url);
        // Another page replaces this one; staying on this page only changes ?q=.
        if (data.url === from) setPending(false);
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
    setPending(false);
    setMessage(next);
    inputRef.current?.focus();
  }

  return (
    <div className={v.wrapper}>
      <p role="status" className="sr-only">
        {announcement}
      </p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!busy) send();
        }}
        className={`m-0 flex items-center gap-1 rounded-pill py-0 pr-1 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-ink ${v.form}`}
      >
        <TextField aria-label={label} value={text} onChange={onTextChange} autoComplete="off" className="min-w-0 grow">
          <Input
            ref={inputRef}
            placeholder={voice === "recording" ? "Listening…" : placeholder}
            className={`w-full border-0 bg-transparent font-sans text-ink outline-none placeholder:text-steel ${v.input}`}
          />
        </TextField>
        <Button
          aria-label={voice === "recording" ? "Stop recording" : "Speak your question"}
          onPress={voice === "recording" ? stopRecording : startRecording}
          isPending={pending || voice === "transcribing"}
          className={`${focusRing} flex shrink-0 cursor-pointer items-center justify-center rounded-pill data-[pending]:cursor-default data-[pending]:opacity-60 ${v.mic} ${
            voice === "recording" ? "bg-ink text-surface" : "bg-transparent text-ink data-[hovered]:bg-paper"
          }`}
        >
          <Icon name={voice === "recording" ? "stop" : "mic"} size={v.micIcon} />
        </Button>
        <Button
          type="submit"
          aria-label="Send"
          isPending={busy}
          className={`${focusRing} flex shrink-0 cursor-pointer items-center justify-center rounded-pill text-surface data-[pending]:cursor-default data-[pending]:opacity-60 ${v.send}`}
        >
          <Icon name="arrow" size={v.sendIcon} strokeWidth={2.4} />
        </Button>
      </Form>
      {message?.kind === "none" && <p className={`m-0 text-steel ${v.message}`}>{message.text}</p>}
      {message?.kind === "error" && (
        <p role="alert" className={`m-0 text-error-deep ${v.message}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}
