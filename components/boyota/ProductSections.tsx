import type { Car } from "@/lib/cars/types";
import { AskAgain } from "./AskAgain";
import { Icon } from "./icons";
import { linkFocusRing } from "./styles";

export function FeatureGrid({ car }: { car: Car }) {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-20">
      <h2 className="m-0 max-w-[640px] font-display text-[40px] leading-[1.1] font-bold [font-stretch:112%]">
        {car.featuresHeading}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {car.features.map((f) => (
          <article
            key={f.title}
            className="flex flex-col gap-3 rounded-panel border border-line bg-surface p-7"
          >
            <Icon name={f.icon} size={32} className="text-ember" />
            <h3 className="m-0 text-xl font-semibold">{f.title}</h3>
            <p className="m-0 text-base leading-[1.55] text-body-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TrimTable({ car }: { car: Car }) {
  return (
    <section id="build" className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-20">
      <h2 id="compare-trims" className="m-0 font-display text-[32px] font-bold [font-stretch:112%]">
        Compare trims
      </h2>
      {/* Scrolls sideways on narrow screens, so it takes focus for arrow-key scrolling. */}
      <div
        role="region"
        aria-labelledby="compare-trims"
        tabIndex={0}
        className={`${linkFocusRing} overflow-x-auto rounded-panel border border-line bg-surface`}
      >
        <table className="w-full min-w-[640px] border-collapse text-base">
          <thead>
            <tr className="border-b border-line text-left">
              <th scope="col" className="px-6 py-[18px] font-medium text-steel">
                <span className="sr-only">Feature</span>
              </th>
              {car.trims.map((t) => (
                <th key={t.id} scope="col" className="px-6 py-[18px] font-mono font-medium">
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {car.compareRows.map((row, i) => (
              <tr
                key={row.label}
                className={i < car.compareRows.length - 1 ? "border-b border-line-subtle" : ""}
              >
                <th scope="row" className="px-6 py-4 text-left font-medium">
                  {row.label}
                </th>
                {row.values.map((v, j) => (
                  <td key={j} className={`px-6 py-4 ${row.mono ? "font-mono" : ""}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AskAgainCTA({ placeholder }: { placeholder: string }) {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 px-6 py-16 text-center">
        <h2 className="m-0 font-display text-[28px] font-bold [font-stretch:112%]">
          Not quite the one?
        </h2>
        <p className="m-0 text-[17px] text-body-muted">
          Tell the assistant what&apos;s missing and it&apos;ll take you somewhere better.
        </p>
        <AskAgain variant="footer" label="Tell the assistant what's missing" placeholder={placeholder} />
      </div>
    </section>
  );
}
