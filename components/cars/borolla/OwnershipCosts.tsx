type Tile = { value?: string; label: string };

// Sample values for design purposes. Unknown values render as dashed empty tiles.
const tiles: Tile[] = [
  { value: "3 yr", label: "basic warranty, or 36,000 miles" },
  { value: "5 yr", label: "powertrain warranty, or 60,000 miles" },
  { value: "10k", label: "miles between services (est.)" },
  { value: "2 yr", label: "roadside assistance, any distance" },
  { label: "scheduled maintenance included" },
];

export function OwnershipCosts() {
  return (
    <section
      aria-labelledby="borolla-own"
      className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6"
    >
      <div className="flex flex-col gap-3">
        <h2
          id="borolla-own"
          className="m-0 font-display text-[32px] leading-[1.15] font-bold [font-stretch:112%]"
        >
          What it costs to own
        </h2>
        <p className="m-0 max-w-[560px] text-lg leading-[1.55] text-body-muted">
          Cheap to buy is half of it. Cheap to keep is the rest.
        </p>
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-0">
        {tiles.map((t) =>
          t.value ? (
            <li
              key={t.label}
              className="flex flex-col gap-1.5 rounded-card border border-line bg-surface p-6"
            >
              <span className="font-mono text-[34px] font-medium">{t.value}</span>
              <span className="text-sm text-steel">{t.label}</span>
            </li>
          ) : (
            <li
              key={t.label}
              className="flex flex-col gap-1.5 rounded-card border border-dashed border-line-dashed p-6 text-steel"
            >
              <span className="font-mono text-[34px] font-medium">[—]</span>
              <span className="text-sm">{t.label}</span>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
