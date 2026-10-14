"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-aria-components/Button";
import { Form } from "react-aria-components/Form";
import { Link } from "react-aria-components/Link";
import { Input, TextField } from "react-aria-components/TextField";

type Message =
  | { kind: "assistant"; text: string }
  | { kind: "user"; text: string }
  | { kind: "routed"; title: string; url: string }
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
  "Show me the Boyota Borolla",
  "A reliable compact sedan",
  "A hybrid for commuting",
];
// Long enough to read "Taking you to …" before the page changes.
const ROUTE_DELAY_MS = 900;
// Matches the history limit in app/api/navigate/route.ts.
const MAX_HISTORY = 10;

const focusRing =
  "outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-ink";
const bubble = "max-w-[85%] px-4 py-3.5 text-[17px] leading-normal";
const assistantShape = "self-start rounded-[4px_18px_18px_18px]";

function ArrowIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

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
  const routeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(routeTimer.current), []);

  const started = messages.length > 1;

  async function send(prompt: string) {
    prompt = prompt.trim();
    if (!prompt || pending) return;

    clearTimeout(routeTimer.current);
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
          const { url } = data;
          reply = { kind: "routed", title: data.title, url };
          routeTimer.current = setTimeout(() => router.push(url), ROUTE_DELAY_MS);
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
                  className={`${bubble} self-end rounded-[18px_4px_18px_18px] bg-ink text-surface`}
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
            case "routed":
              return (
                <div
                  key={i}
                  role="status"
                  className={`${assistantShape} flex max-w-[85%] flex-wrap items-center gap-3 bg-lane-tint py-3 pr-3 pl-4 text-[17px] font-medium text-lane-deep`}
                >
                  <span>Taking you to {message.title}</span>
                  <Link
                    href={message.url}
                    className={`${focusRing} inline-flex h-11 items-center gap-2 rounded-pill bg-lane px-[18px] text-[15px] font-semibold text-surface no-underline hover:text-surface`}
                  >
                    Open
                    <ArrowIcon size={16} />
                  </Link>
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
          <ArrowIcon size={22} />
        </Button>
      </Form>

      <p className="m-0 text-center text-[13px] text-steel">
        The assistant picks a page for you and can get it wrong. It never books or
        buys anything.
      </p>
    </section>
  );
}
