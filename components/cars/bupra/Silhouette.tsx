import { GLASS, Wheel } from "../parts";

// Boyota Bupra side view: low 2-door coupe, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BupraSilhouette() {
  return (
    <>
      {/* Rear wing: posts, then blade */}
      <rect x="84" y="148" width="5" height="14" fill="var(--color-ink)" />
      <rect x="112" y="147" width="5" height="12" fill="var(--color-ink)" />
      <path d="M58 146 L130 142 L132 148 L62 153 Z" fill="var(--color-ink)" />
      {/* Body: short rear deck, cab set back, fast roofline, long hood */}
      <path
        d="M48 204 C48 182 58 170 88 164 L190 156 C232 124 282 104 338 102 C392 100 432 116 484 150 L700 166 C736 170 752 186 752 204 L752 214 C752 223 744 228 734 228 L66 228 C56 228 48 222 48 214 Z"
        fill="var(--car-paint)"
      />
      {/* One side window (2 doors) */}
      <path
        d="M222 153 C256 128 296 114 338 113 C376 112 408 124 446 151 Z"
        fill={GLASS}
        opacity="0.88"
      />
      {/* Door cut and side intake */}
      <path d="M452 156 L460 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M266 202 L310 196 L312 206 Z" fill="var(--color-ink)" opacity="0.35" />
      {/* Belt line */}
      <path d="M62 194 L742 194" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tail light */}
      <rect x="704" y="174" width="40" height="8" rx="4" fill="var(--color-paper)" opacity="0.9" />
      <rect
        x="52"
        y="172"
        width="30"
        height="8"
        rx="4"
        fill="var(--color-ember)"
        stroke="var(--color-ink)"
        strokeOpacity="0.3"
      />
      <Wheel cx={196} r={47} hub={28} />
      <Wheel cx={606} r={47} hub={28} />
    </>
  );
}
