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

const GREETING =
  "Hi! Tell me what kind of car you're after — a model name, a budget, how many seats — and I'll take you straight to it.";
const ERROR_TEXT = "Navigation is unavailable right now.";
const NO_MATCH_TEXT = "I couldn't find a matching page. Try rephrasing?";
const SUGGESTIONS = [
  "A reliable compact sedan",
  "A hybrid for commuting",
  "Something sporty",
];
const STATE_LABELS: Record<CephalonState, string> = {
  idle: "Ready",
  thinking: "Thinking…",
  talking: "Replying",
  routed: "Taking you there",
};
// How long the avatar stays in its "talking" motion after a reply appears.
const TALK_MS = 1200;
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

  // With cacheComponents, Back restores this page from a hidden <Activity>, so
  // clear the in-flight state when it's hidden; otherwise the dots stay up.
  useEffect(
    () => () => {
      setPending(false);
      setRouting(false);
      setTalking(false);
      clearTimeout(talkTimer.current);
    },
    [],
  );

  const avatarState: CephalonState = routing
    ? "routed"
    : pending
      ? "thinking"
      : talking
        ? "talking"
        : "idle";

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

    setReply(next);
    setPending(false);
    setTalking(true);
    setPulse((n) => n + 1);
    clearTimeout(talkTimer.current);
    talkTimer.current = setTimeout(() => setTalking(false), TALK_MS);
    inputRef.current?.focus();
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
            {STATE_LABELS[avatarState]}
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

        {pending && (
          <div
            role="status"
            aria-label="Finding the right page"
            className={`${assistantShape} flex gap-1.5 bg-paper px-4 py-[18px]`}
          >
            <span className="size-2 rounded-pill bg-steel" />
            <span className="size-2 rounded-pill bg-steel opacity-60" />
            <span className="size-2 rounded-pill bg-steel opacity-30" />
          </div>
        )}
      </div>

      {!pending && (
        <div className="flex flex-wrap gap-2.5">
          {SUGGESTIONS.map((suggestion) => (
            <Button
              key={suggestion}
              onPress={() => send(suggestion)}
              className={`${focusRing} inline-flex min-h-11 cursor-pointer items-center rounded-pill border border-line bg-surface px-[18px] text-[15px] text-ink data-[hovered]:border-ink`}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          send(text);
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
            placeholder="Ask about any Boyota…"
            className="h-11 w-full border-0 bg-transparent font-sans text-[17px] text-ink outline-none"
          />
        </TextField>
        <Button
          type="submit"
          aria-label="Send"
          isDisabled={pending}
          className={`${focusRing} flex size-[52px] shrink-0 cursor-pointer items-center justify-center rounded-pill bg-ember text-surface data-[disabled]:cursor-default data-[disabled]:opacity-60`}
        >
          <Icon name="arrow" size={22} strokeWidth={2.4} />
        </Button>
      </Form>
    </section>
  );
}
