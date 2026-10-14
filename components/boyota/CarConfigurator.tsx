"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Radio, RadioGroup } from "react-aria-components/RadioGroup";
import type { Car } from "@/lib/cars/types";
import { focusRing } from "./styles";

type Props = {
  car: Car;
  // SVG shapes in an 800×290 viewBox. Paint the body with fill="var(--car-paint)";
  // the configurator sets that variable to the chosen color.
  silhouette: ReactNode;
  // Optional node above the hero, e.g. <AskedChip />.
  chip?: ReactNode;
};

// Hero (title, price, CTAs, car, color + trim pickers) and the ink spec band,
// which shows the selected trim's numbers.
export function CarConfigurator({ car, silhouette, chip }: Props) {
  const [trimId, setTrimId] = useState(car.defaultTrimId);
  const [colorId, setColorId] = useState(car.defaultColorId);
  const trim = car.trims.find((t) => t.id === trimId) ?? car.trims[0];
  const color = car.colors.find((c) => c.id === colorId) ?? car.colors[0];

  return (
    <>
      <section className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 pt-10 pb-16">
        {chip}
        <div className="flex flex-wrap items-center gap-12">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
            <div className="font-mono text-sm tracking-[0.08em] text-steel uppercase">
              {car.eyebrow}
            </div>
            <h1 className="m-0 font-display text-[clamp(48px,7vw,88px)] leading-[0.95] font-extrabold tracking-[-0.01em] [font-stretch:125%]">
              Boyota
              <br />
              {car.model}
            </h1>
            <p className="m-0 max-w-[460px] text-xl leading-normal">{car.tagline}</p>
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="text-[15px] text-steel">From</span>
              <span className="font-mono text-[32px] font-medium">{trim.price}</span>
              <span className="text-[15px] text-steel">{trim.name}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#build"
                className="inline-flex h-[52px] items-center rounded-pill bg-ember px-7 text-base font-semibold text-white no-underline hover:text-white"
              >
                Build yours
              </a>
              <a
                href="#build"
                className="inline-flex h-[52px] items-center rounded-pill border-2 border-ink px-[26px] text-base font-semibold text-ink no-underline hover:text-ink"
              >
                Find a dealer
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-[1.4_1_520px] flex-col gap-5">
            <div className="flex flex-col gap-6 rounded-window border border-line bg-surface px-6 pt-10 pb-6">
              <svg
                viewBox="0 0 800 290"
                className="h-auto w-full"
                role="img"
                aria-label={`Side view of the ${car.name} in ${color.name}`}
                style={{ "--car-paint": color.hex } as CSSProperties}
              >
                <ellipse cx="400" cy="270" rx="350" ry="12" fill="var(--color-ink)" opacity="0.12" />
                {silhouette}
              </svg>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] text-steel">Color</span>
                  <span className="font-semibold">{color.name}</span>
                </div>
                <RadioGroup
                  aria-label="Paint color"
                  value={color.id}
                  onChange={setColorId}
                  orientation="horizontal"
                  className="flex gap-2"
                >
                  {car.colors.map((c) => (
                    <Radio
                      key={c.id}
                      value={c.id}
                      aria-label={c.name}
                      className={`${focusRing} size-11 cursor-pointer rounded-pill border-2 border-transparent p-1 data-[selected]:border-ink`}
                    >
                      <span
                        className="block size-full rounded-pill inset-ring inset-ring-ink/18"
                        style={{ background: c.hex }}
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <RadioGroup
              aria-label="Trim"
              value={trim.id}
              onChange={setTrimId}
              orientation="horizontal"
              className="grid gap-2"
              style={{ gridTemplateColumns: `repeat(${car.trims.length}, minmax(0, 1fr))` }}
            >
              {car.trims.map((t) => (
                <Radio
                  key={t.id}
                  value={t.id}
                  className={`${focusRing} group flex min-h-16 cursor-pointer flex-col gap-0.5 rounded-trim border border-line bg-surface px-3.5 py-2.5 text-left text-ink data-[selected]:border-2 data-[selected]:border-ink data-[selected]:bg-ink data-[selected]:text-white`}
                >
                  <span className="font-mono text-[15px] font-medium">{t.name}</span>
                  <span className="text-[13px] text-steel group-data-[selected]:text-on-ink-muted">
                    {t.blurb}
                  </span>
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      </section>

      <section aria-label="Key specs" className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 px-6 py-12">
          {car.headlineSpecs.map((s) => (
            <div key={s.key} className="flex flex-col gap-1.5">
              <span className="font-mono text-[44px] font-medium">
                {trim.specs[s.key] ?? s.value ?? "[—]"}
              </span>
              <span className="text-[15px] text-on-ink-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
