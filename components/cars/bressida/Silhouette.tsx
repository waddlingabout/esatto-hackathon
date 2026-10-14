import { GLASS, Wheel } from "../parts";

// Boyota Bressida side view: three-box rear-drive sedan, long hood, upright cabin set back, formal trunk, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BressidaSilhouette() {
  return (
    <>
      {/* Body: flat trunk deck, upright greenhouse, long flat hood */}
      <path
        d="M54 206 C54 180 64 160 94 156 L232 152 C258 118 284 98 320 96 L414 96 C444 98 466 118 494 154 L718 160 C744 164 752 182 752 206 L752 214 C752 223 744 228 734 228 L72 228 C62 228 54 222 54 214 Z"
        fill="var(--car-paint)"
      />
      {/* Two side windows with a thin pillar */}
      <path d="M258 150 C274 124 292 108 322 107 L360 107 L360 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M374 150 L374 107 L414 107 C438 109 456 126 476 152 Z" fill={GLASS} opacity="0.88" />
      {/* Bright waist strip and door cut */}
      <path d="M68 172 L738 172" stroke="var(--color-paper)" strokeOpacity="0.5" strokeWidth="3" />
      <path d="M66 198 L740 198" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M367 154 L367 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Upright headlight and wide tail light */}
      <rect x="718" y="166" width="26" height="14" rx="3" fill="var(--color-paper)" opacity="0.9" />
      <rect x="58" y="164" width="30" height="12" rx="3" fill="var(--color-ember)" />
      <Wheel cx={176} />
      <Wheel cx={630} />
    </>
  );
}
