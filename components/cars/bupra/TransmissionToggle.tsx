"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const options = [
  {
    id: "manual",
    name: "Manual",
    line: "6-speed manual with auto rev-matching. Three pedals, every shift yours.",
    spec: "0–60 mph 4.1 s (est.)",
  },
  {
    id: "automatic",
    name: "Automatic",
    line: "8-speed automatic with paddles. Faster shifts, easier traffic.",
    spec: "0–60 mph 3.9 s (est.)",
  },
] as const;

type OptionId = (typeof options)[number]["id"];

export function TransmissionToggle() {
  const [selected, setSelected] = useState<OptionId>("manual");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = options.find((o) => o.id === selected) ?? options[0];

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const step = e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1;
    const next = (i + step + options.length) % options.length;
    setSelected(options[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col gap-5 rounded-panel border border-on-ink-muted/30 p-6">
      <span id="transmission-label" className="text-[13px] text-on-ink-muted">
        Transmission
      </span>
      <div
        role="radiogroup"
        aria-labelledby="transmission-label"
        className="grid grid-cols-2 gap-2"
      >
        {options.map((o, i) => {
          const checked = o.id === selected;
          return (
            <button
              key={o.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              onClick={() => setSelected(o.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-14 cursor-pointer rounded-trim px-3.5 py-2.5 font-mono text-[15px] font-medium ${
                checked
                  ? "border-2 border-white bg-white text-ink"
                  : "border border-on-ink-muted bg-transparent text-white"
              }`}
            >
              {o.name}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="flex flex-col gap-2">
        <span className="font-mono text-[28px] font-medium">{current.spec}</span>
        <p className="m-0 text-base leading-[1.55] text-on-ink-muted">{current.line}</p>
      </div>
    </div>
  );
}
