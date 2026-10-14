import { Icon } from "@/components/boyota/icons";
import { TransmissionToggle } from "./TransmissionToggle";

export function TrackMode() {
  return (
    <section aria-labelledby="track-mode-heading" className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1280px] flex-wrap gap-12 px-6 py-20">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
          <div className="flex items-center gap-2.5 font-mono text-sm tracking-[0.08em] text-on-ink-muted uppercase">
            <Icon name="flag" size={20} className="text-ember" />
            Track mode
          </div>
          <h2
            id="track-mode-heading"
            className="m-0 max-w-[560px] font-display text-[40px] leading-[1.1] font-bold [font-stretch:112%]"
          >
            One button. Then the circuit.
          </h2>
          <p className="m-0 max-w-[520px] text-lg leading-[1.55] text-on-ink-muted">
            Launch control holds the revs and puts the power down clean. Sharper throttle,
            firmer dampers, looser stability control. Choose a 6-speed manual or a quick
            automatic.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center gap-2.5">
              <Icon name="gauge" size={24} className="text-ember" />
              <span>Launch control</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="flag" size={24} className="text-ember" />
              <span>Lap timer</span>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
          <TransmissionToggle />
        </div>
      </div>
    </section>
  );
}
