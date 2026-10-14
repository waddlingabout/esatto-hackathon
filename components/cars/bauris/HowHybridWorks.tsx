import { Icon, type IconName } from "@/components/boyota/icons";

const steps: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "bolt",
    title: "Pulls away on electric",
    body: "From a stop and in slow traffic, the electric motor does the work. Quiet, smooth, no fuel used.",
  },
  {
    icon: "leaf",
    title: "The engine joins in when you need it",
    body: "Merging or climbing, the petrol engine starts and shares the load. You won't feel the handover.",
  },
  {
    icon: "plug",
    title: "Braking recharges the battery",
    body: "Lift off or brake, and the motor turns motion back into charge. No cable needed.",
  },
];

// Laid out like the feature cards: lane and its tints are reserved for routing status.
export function HowHybridWorks() {
  return (
    <section
      aria-labelledby="how-hybrid-works"
      className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6"
    >
      <div className="flex flex-col gap-3">
        <div className="font-mono text-sm tracking-[0.08em] text-steel uppercase">
          The efficiency story
        </div>
        <h2
          id="how-hybrid-works"
          className="m-0 font-display text-[32px] leading-[1.15] font-bold [font-stretch:112%]"
        >
          How the hybrid works
        </h2>
      </div>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 p-0">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex flex-col gap-3 rounded-panel border border-line bg-surface p-7"
          >
            <div className="flex items-center justify-between">
              <Icon name={s.icon} size={32} className="text-ember" />
              <span className="font-mono text-sm tracking-[0.08em] text-steel" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="m-0 text-xl font-semibold">{s.title}</h3>
            <p className="m-0 text-base leading-[1.55] text-body-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="m-0 text-[15px] text-steel">
        Limited adds a plug-in battery for up to 44 miles on electric alone (est.).
      </p>
    </section>
  );
}
