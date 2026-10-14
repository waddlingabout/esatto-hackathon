import { GLASS, Wheel } from "../parts";

// Boyota Byaris side view: short, tall-roofed subcompact hatch with a near-vertical tailgate, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function ByarisSilhouette() {
  return (
    <>
      {/* Body: upright hatch, short roof, stubby hood */}
      <path
        d="M132 208 C132 172 136 142 150 120 C160 106 176 100 206 98 L404 96 C454 96 494 118 534 150 L630 164 C660 168 672 184 672 206 L672 214 C672 223 664 228 654 228 L148 228 C138 228 132 222 132 214 Z"
        fill="var(--car-paint)"
      />
      {/* Glass: rear side window, front door window */}
      <path d="M166 150 L172 120 C176 112 188 108 210 108 L300 108 L300 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M316 150 L316 108 L402 108 C444 108 476 126 506 150 Z" fill={GLASS} opacity="0.88" />
      {/* Door cut and belt line */}
      <path d="M308 156 L310 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M140 194 L664 194" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tall tail light */}
      <rect x="632" y="172" width="34" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="134" y="148" width="9" height="28" rx="4.5" fill="var(--color-ember)" />
      <Wheel cx={232} r={40} hub={22} />
      <Wheel cx={572} r={40} hub={22} />
    </>
  );
}
