import { GLASS, Wheel } from "../parts";

// Boyota Becho side view: short, upright four-door city hatch on small wheels, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BechoSilhouette() {
  return (
    <>
      {/* Body: near-vertical hatch, tall cabin, stubby nose */}
      <path
        d="M150 208 L153 130 C154 116 162 108 176 106 L380 100 C430 100 470 120 520 150 L612 164 C638 168 650 182 650 202 L650 214 C650 223 643 228 634 228 L166 228 C157 228 150 222 150 214 Z"
        fill="var(--car-paint)"
      />
      {/* Quarter window, rear door, front door */}
      <path d="M170 118 L228 116 L228 150 L168 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M244 115 L360 111 L360 150 L244 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M374 111 C420 111 456 126 498 150 L374 150 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts and belt line */}
      <path d="M236 110 L236 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M367 106 L367 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M158 194 L644 194" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Tail light and headlight */}
      <rect x="153" y="124" width="8" height="26" rx="4" fill="var(--color-ember)" />
      <rect x="612" y="172" width="32" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <Wheel cx={246} r={36} hub={18} />
      <Wheel cx={558} r={36} hub={18} />
    </>
  );
}
