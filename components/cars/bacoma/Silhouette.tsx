import { GLASS, Wheel } from "../parts";

// Boyota Bacoma side view: midsize pickup, double cab and open 5-ft bed, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BacomaSilhouette() {
  return (
    <>
      {/* Body: open bed at the back, upright cab, squared-off hood */}
      <path
        d="M50 214 L50 144 C50 140 53 138 58 138 L326 138 L332 140 L346 92 C349 84 355 80 366 80 L486 80 C498 80 506 84 514 92 L556 136 L714 146 C740 150 752 164 752 186 L752 214 C752 223 744 228 734 228 L66 228 C56 228 50 222 50 214 Z"
        fill="var(--car-paint)"
      />
      {/* Bed rail and bed/cab gap */}
      <path d="M58 150 L326 150" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M336 140 L336 210" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      {/* Rear and front side windows */}
      <path d="M356 134 L366 94 L426 94 L426 134 Z" fill={GLASS} opacity="0.88" />
      <path d="M440 134 L440 94 L494 94 C500 94 504 96 508 100 L540 134 Z" fill={GLASS} opacity="0.88" />
      {/* Door cut and belt line */}
      <path d="M433 98 L433 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M342 192 L744 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tall tail light */}
      <rect x="708" y="158" width="38" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="52" y="148" width="10" height="30" rx="4" fill="var(--color-ember)" />
      <Wheel cx={172} r={46} hub={25} />
      <Wheel cx={628} r={46} hub={25} />
    </>
  );
}
