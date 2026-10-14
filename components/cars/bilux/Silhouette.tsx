import { GLASS, Wheel } from "../parts";

// Boyota Bilux side view: single-cab work ute with a long open bed behind, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BiluxSilhouette() {
  return (
    <>
      {/* Body: bed sides, upright cab, short squared hood */}
      <path
        d="M50 214 L50 146 C50 142 54 138 58 138 L386 138 L390 96 C391 89 397 84 404 84 L526 84 C538 84 546 88 552 96 L598 142 L718 150 C740 152 752 166 752 186 L752 214 C752 223 744 228 734 228 L66 228 C56 228 50 222 50 214 Z"
        fill="var(--car-paint)"
      />
      {/* Cab window */}
      <path d="M404 140 L406 100 L522 100 C532 100 538 104 542 110 L568 140 Z" fill={GLASS} opacity="0.88" />
      {/* Bed rail and gap between bed and cab */}
      <path d="M58 146 L380 146" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M380 140 L380 212" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="3" />
      {/* Door cut */}
      <path d="M574 146 L578 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Belt line */}
      <path d="M60 190 L742 190" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight, tail light and tow hitch */}
      <rect x="708" y="164" width="38" height="12" rx="4" fill="var(--color-paper)" opacity="0.9" />
      <rect x="54" y="156" width="14" height="24" rx="3" fill="var(--color-ember)" />
      <rect x="30" y="206" width="22" height="8" rx="2" fill="var(--color-ink)" />
      <Wheel cx={176} r={46} hub={22} />
      <Wheel cx={636} r={46} hub={22} />
    </>
  );
}
