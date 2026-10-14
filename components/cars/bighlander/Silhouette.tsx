import { GLASS, Wheel } from "../parts";

// Boyota Bighlander side view: long three-row SUV with a high roof, three side windows and roof rails.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BighlanderSilhouette() {
  return (
    <>
      {/* Roof rails */}
      <rect x="130" y="56" width="380" height="6" rx="3" fill="var(--color-ink)" />
      {/* Body: long flat roof over three rows, upright tailgate, squared nose */}
      <path
        d="M40 202 C40 176 50 160 72 152 L84 84 C88 70 98 64 114 64 L520 64 C556 64 580 76 606 102 L646 142 L716 152 C748 156 760 176 760 200 L760 210 C760 219 752 224 742 224 L58 224 C48 224 40 218 40 210 Z"
        fill="var(--car-paint)"
      />
      {/* Third-row, second-row and front glass */}
      <path d="M100 138 L110 84 C112 80 116 78 122 78 L230 78 L230 138 Z" fill={GLASS} opacity="0.88" />
      <path d="M244 138 L244 78 L392 78 L392 138 Z" fill={GLASS} opacity="0.88" />
      <path d="M406 138 L406 78 L516 78 C544 78 566 88 586 106 L618 138 Z" fill={GLASS} opacity="0.88" />
      {/* Belt line and lower trim */}
      <path d="M54 172 L750 172" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M54 202 L750 202" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tail light */}
      <rect x="712" y="162" width="42" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="44" y="150" width="12" height="30" rx="5" fill="var(--color-ember)" />
      <Wheel cx={176} r={48} hub={27} />
      <Wheel cx={630} r={48} hub={27} />
    </>
  );
}
