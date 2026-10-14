import { GLASS, Wheel } from "../parts";

// Boyota B-HR side view: short, raised crossover with a coupe-like roof and black cladding.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BhrSilhouette() {
  return (
    <>
      {/* Body: steep rear hatch, high beltline, roof sloping down toward the tail */}
      <path
        d="M92 206 C92 172 98 146 118 132 L172 110 C232 84 300 72 382 72 C452 72 500 86 560 128 L680 146 C712 152 724 172 724 198 L724 212 C724 220 718 224 710 224 L106 224 C98 224 92 218 92 210 Z"
        fill="var(--car-paint)"
      />
      {/* Contrast roof */}
      <path
        d="M170 112 C232 86 300 74 382 74 C452 74 500 88 556 126 L548 128 C496 94 450 82 382 82 C304 82 238 94 178 118 Z"
        fill="var(--color-ink)"
      />
      {/* Windows: front door glass, then a small kicked-up rear window */}
      <path d="M384 92 C442 92 482 102 528 130 L388 132 Z" fill={GLASS} opacity="0.88" />
      <path d="M372 92 L374 132 L262 134 C294 112 330 96 372 92 Z" fill={GLASS} opacity="0.88" />
      <path d="M248 132 C222 132 204 134 196 136 L214 122 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts */}
      <path d="M380 136 L384 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M248 138 L254 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Lower cladding */}
      <rect x="92" y="204" width="632" height="20" rx="6" fill="var(--color-ink)" opacity="0.4" />
      {/* Slim headlight and wrap-around tail light */}
      <rect x="684" y="158" width="38" height="8" rx="4" fill="var(--color-paper)" opacity="0.9" />
      <rect x="96" y="140" width="28" height="12" rx="5" fill="var(--color-ember)" />
      <Wheel cx={206} r={46} hub={26} />
      <Wheel cx={600} r={46} hub={26} />
    </>
  );
}
