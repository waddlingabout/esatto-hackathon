import { GLASS, Wheel } from "../parts";

// Boyota Bentury side view: long, stately limousine with a formal upright C-pillar, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BenturySilhouette() {
  return (
    <>
      {/* Body: short trunk, long flat roof, upright rear pillar, long hood */}
      <path
        d="M36 204 C36 182 48 170 80 166 L196 160 C202 132 210 104 236 98 L468 94 C518 94 546 114 586 152 L712 162 C742 166 758 182 758 202 L758 214 C758 223 750 228 740 228 L54 228 C44 228 36 222 36 214 Z"
        fill="var(--car-paint)"
      />
      {/* Side windows: rear quarter, rear door, front door */}
      <path d="M226 154 L232 116 C234 110 238 108 244 108 L282 108 L282 154 Z" fill={GLASS} opacity="0.88" />
      <path d="M296 154 L296 108 L420 108 L420 154 Z" fill={GLASS} opacity="0.88" />
      <path d="M434 154 L434 108 L470 108 C508 108 534 124 562 154 Z" fill={GLASS} opacity="0.88" />
      {/* Chrome window surround and belt strip */}
      <path d="M226 158 L566 158" stroke="var(--color-paper)" strokeOpacity="0.7" strokeWidth="3" />
      <path d="M48 196 L748 196" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Door cuts */}
      <path d="M289 160 L289 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M427 160 L427 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Hood ornament, headlight and tail light */}
      <rect x="700" y="152" width="4" height="10" rx="2" fill="var(--color-paper)" opacity="0.9" />
      <rect x="712" y="172" width="40" height="8" rx="4" fill="var(--color-paper)" opacity="0.9" />
      <rect x="40" y="174" width="30" height="8" rx="4" fill="var(--color-ember)" />
      <Wheel cx={156} r={42} hub={26} />
      <Wheel cx={646} r={42} hub={26} />
    </>
  );
}
