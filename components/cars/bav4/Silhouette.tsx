import { GLASS, Wheel } from "../parts";

// Boyota BAV4 side view: compact SUV with a tall boxy roof, upright hatch, roof rails and lower cladding.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function Bav4Silhouette() {
  return (
    <>
      {/* Roof rails */}
      <rect x="162" y="66" width="296" height="6" rx="3" fill="var(--color-ink)" />
      {/* Body: near-vertical hatch, tall flat roof, short hood */}
      <path
        d="M70 200 C70 176 80 160 104 150 L118 92 C122 80 132 74 148 74 L470 74 C500 74 522 84 546 108 L582 142 L690 154 C720 158 734 176 734 200 L734 206 C734 215 726 220 716 220 L88 220 C78 220 70 214 70 206 Z"
        fill="var(--car-paint)"
      />
      {/* Rear quarter, rear door and front door glass */}
      <path d="M130 140 L140 92 C142 88 146 86 152 86 L232 86 L232 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M246 140 L246 86 L380 86 L380 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M394 140 L394 86 L466 86 C490 86 508 96 528 114 L552 140 Z" fill={GLASS} opacity="0.88" />
      {/* Belt line and dark lower cladding */}
      <path d="M84 170 L724 170" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <rect x="74" y="200" width="656" height="20" rx="8" fill="var(--color-ink)" opacity="0.28" />
      {/* Headlight and upright tail light */}
      <rect x="692" y="164" width="36" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="74" y="148" width="12" height="28" rx="5" fill="var(--color-ember)" />
      <Wheel cx={200} r={46} hub={26} />
      <Wheel cx={600} r={46} hub={26} />
    </>
  );
}
