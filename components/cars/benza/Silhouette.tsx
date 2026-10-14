import { GLASS, Wheel } from "../parts";

// Boyota Benza side view: long, slightly raised wagon-crossover with a low roof and gently sloped tail.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BenzaSilhouette() {
  return (
    <>
      {/* Body: long flat roof running back to a raked tailgate */}
      <path
        d="M58 204 C58 176 66 152 90 140 L150 116 C214 96 294 88 404 88 C500 88 562 100 614 142 L714 158 C744 164 754 184 754 204 L754 214 C754 222 748 226 740 226 L72 226 C64 226 58 220 58 212 Z"
        fill="var(--car-paint)"
      />
      {/* Three side windows: rear quarter, rear door, front door */}
      <path d="M118 140 L166 118 C186 112 208 108 230 106 L232 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M244 140 L242 104 C290 100 340 99 392 99 L394 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M406 140 L404 99 C490 99 546 110 590 142 Z" fill={GLASS} opacity="0.88" />
      {/* Roof rail */}
      <path d="M176 100 C250 86 340 82 430 84" stroke="var(--color-ink)" strokeOpacity="0.5" strokeWidth="4" fill="none" />
      {/* Door cuts and belt line */}
      <path d="M398 144 L402 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M238 144 L242 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M70 196 L744 196" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Lower cladding */}
      <rect x="58" y="212" width="696" height="14" rx="6" fill="var(--color-ink)" opacity="0.3" />
      {/* Light bar headlight and full-width tail light */}
      <rect x="706" y="166" width="44" height="7" rx="3.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="62" y="150" width="32" height="8" rx="4" fill="var(--color-ember)" />
      <Wheel cx={190} r={45} hub={26} />
      <Wheel cx={622} r={45} hub={26} />
    </>
  );
}
