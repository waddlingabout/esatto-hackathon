"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components/Button";
import { Form } from "react-aria-components/Form";
import { Input, TextField } from "react-aria-components/TextField";
import { Icon } from "@/components/boyota/icons";
import { focusRing } from "@/components/boyota/styles";

type Message =
  | { kind: "assistant"; text: string }
  | { kind: "user"; text: string }
  | { kind: "error"; text: string };

type Turn = { role: "user" | "assistant"; content: string };

type NavigateResponse =
  | { action: "navigate"; url: string; title: string }
  | { action: "clarify"; url: null; question: string }
  | { action: "none"; url: null; message: string };

const GREETING =
  "Hi! Tell me what kind of car you're after — a model name, a budget, how many seats — and I'll take you straight to it.";
const ERROR_TEXT = "Navigation is unavailable right now.";
const SUGGESTIONS = [
  "A reliable compact sedan",
  "A hybrid for commuting",
  "Something sporty",
];
// Matches the history limit in app/api/navigate/route.ts.
const MAX_HISTORY = 10;

const bubble = "max-w-[85%] px-4 py-3.5 text-[17px] leading-normal";
// Bubble radii from design-system/README.md → Chat bubbles.
const assistantShape = "self-start rounded-[4px_16px_16px_16px]";

export function ChatWindow() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { kind: "assistant", text: GREETING },
  ]);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  // Turns of the current clarifying exchange, sent so the router keeps context.
  const history = useRef<Turn[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // With cacheComponents, Back restores this page from a hidden <Activity>.
  // When it's hidden (we navigated away), clear the in-flight state and drop the
  // user's own messages, so only the assistant's replies remain on return.
  useEffect(
    () => () => {
      setPending(false);
      setMessages((m) => m.filter((message) => message.kind !== "user"));
    },
    [],
  );

  const started = messages.length > 1;

  async function send(prompt: string) {
    prompt = prompt.trim();
    if (!prompt || pending) return;

    setText("");
    setPending(true);
    setMessages((m) => [...m, { kind: "user", text: prompt }]);

    let reply: Message;
    try {
      const res = await fetch("/api/navigate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, history: history.current }),
      });
      if (!res.ok) throw new Error(`navigate responded ${res.status}`);
      const data: NavigateResponse = await res.json();

      if (data.action === "clarify") {
        history.current = [
          ...history.current,
          { role: "user" as const, content: prompt },
          { role: "assistant" as const, content: data.question },
        ].slice(-MAX_HISTORY);
        reply = { kind: "assistant", text: data.question };
      } else {
        history.current = [];
        if (data.action === "navigate" && data.url.startsWith("/")) {
          // Go straight there; the thinking dots stay up until the page changes,
          // and the product page shows the prompt as "You asked for …".
          router.push(`${data.url}?q=${encodeURIComponent(prompt)}`);
          return;
        } else if (data.action === "none") {
          reply = { kind: "assistant", text: data.message };
        } else {
          throw new Error("navigate returned an unusable url");
        }
      }
    } catch (err) {
      console.error(err);
      reply = { kind: "error", text: ERROR_TEXT };
    }

    setMessages((m) => [...m, reply]);
    setPending(false);
    inputRef.current?.focus();
  }

  return (
    <section
      aria-label="Boyota assistant"
      className="box-border flex w-full max-w-[720px] flex-col gap-4 rounded-window border border-line bg-surface p-6 shadow-window"
    >
      <div aria-live="polite" className="flex min-h-[180px] flex-col gap-3">
        {messages.map((message, i) => {
          switch (message.kind) {
            case "assistant":
              return (
                <div key={i} className={`${bubble} ${assistantShape} bg-paper`}>
                  {message.text}
                </div>
              );
            case "user":
              return (
                <div
                  key={i}
                  className={`${bubble} self-end rounded-[16px_4px_16px_16px] bg-ink text-surface`}
                >
                  {message.text}
                </div>
              );
            case "error":
              return (
                <div
                  key={i}
                  role="alert"
                  className={`${bubble} ${assistantShape} bg-error-tint text-error-deep`}
                >
                  {message.text}
                </div>
              );
          }
        })}

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

      {!started && (
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
