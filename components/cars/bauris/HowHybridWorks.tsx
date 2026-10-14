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

export function HowHybridWorks() {
  return (
    <section aria-labelledby="how-hybrid-works" className="bg-lane-tint">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-20">
        <div className="flex flex-col gap-3">
          <div className="font-mono text-sm tracking-[0.08em] text-lane-deep uppercase">
            The efficiency story
          </div>
          <h2
            id="how-hybrid-works"
            className="m-0 max-w-[640px] font-display text-[40px] leading-[1.1] font-bold text-ink [font-stretch:112%]"
          >
            How the hybrid works
          </h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 p-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-4 rounded-panel border border-lane/25 bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[34px] leading-none font-medium text-lane">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-11 items-center justify-center rounded-pill bg-lane text-white">
                  <Icon name={s.icon} size={22} />
                </span>
              </div>
              <h3 className="m-0 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="m-0 text-base leading-[1.55] text-body-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="m-0 text-[15px] text-lane-deep">
          Limited adds a plug-in battery for up to 44 miles on electric alone (est.).
        </p>
      </div>
    </section>
  );
}
