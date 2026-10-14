"use client";

import { useState } from "react";
import { Label, Radio, RadioGroup } from "react-aria-components/RadioGroup";
import { focusRing } from "@/components/boyota/styles";

const options = [
  {
    id: "manual",
    name: "Manual",
    blurb: "Three pedals",
    line: "6-speed manual with auto rev-matching. Every shift yours.",
    zeroToSixty: "4.1 s",
  },
  {
    id: "automatic",
    name: "Automatic",
    blurb: "Paddle shifters",
    line: "8-speed automatic with paddles. Faster shifts, easier traffic.",
    zeroToSixty: "3.9 s",
  },
] as const;

type OptionId = (typeof options)[number]["id"];

// A surface panel on the ink band, so the trim selector and spec tile keep their light styles.
export function TransmissionToggle() {
  const [selected, setSelected] = useState<OptionId>("manual");
  const current = options.find((o) => o.id === selected) ?? options[0];

  return (
    <div className="flex flex-col gap-5 rounded-panel bg-surface p-6 text-ink">
      <RadioGroup
        value={selected}
        onChange={(v) => setSelected(v as OptionId)}
        orientation="horizontal"
        className="flex flex-col gap-2"
      >
        <Label className="text-[13px] text-steel">Transmission</Label>
        <div className="grid grid-cols-2 gap-2">
          {options.map((o) => (
            <Radio
              key={o.id}
              value={o.id}
              className={`${focusRing} group flex min-h-16 cursor-pointer flex-col gap-0.5 rounded-trim border border-line bg-surface px-3.5 py-2.5 text-ink data-[selected]:border-2 data-[selected]:border-ink data-[selected]:bg-ink data-[selected]:text-white`}
            >
              <span className="font-mono text-[15px] font-medium">{o.name}</span>
              <span className="text-[13px] text-steel group-data-[selected]:text-on-ink-muted">
                {o.blurb}
              </span>
            </Radio>
          ))}
        </div>
      </RadioGroup>
      <div aria-live="polite" className="flex flex-col gap-1.5">
        <span className="font-mono text-[44px] font-medium">{current.zeroToSixty}</span>
        <span className="text-sm text-steel">0–60 mph (est.)</span>
        <p className="m-0 pt-2 text-base leading-[1.55] text-body-muted">{current.line}</p>
      </div>
    </div>
  );
}
