import { GLASS, Wheel } from "../parts";

// Boyota Bienna side view: one-box minivan with a long flat roof, sliding-door track and short nose.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BiennaSilhouette() {
  return (
    <>
      {/* Body: near-vertical tailgate, long flat roof, raked windshield, short hood */}
      <path
        d="M52 214 L52 104 C52 84 64 74 88 74 L548 74 C572 74 590 82 606 98 L660 148 L716 158 C740 162 750 176 750 196 L750 214 C750 223 742 228 732 228 L70 228 C60 228 52 222 52 214 Z"
        fill="var(--car-paint)"
      />
      {/* Three rows of glass */}
      <path d="M72 140 L72 100 C72 92 78 88 86 88 L200 88 L200 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M214 140 L214 88 L400 88 L400 140 Z" fill={GLASS} opacity="0.88" />
      <path d="M414 140 L414 88 L544 88 C560 88 572 94 584 106 L622 140 Z" fill={GLASS} opacity="0.88" />
      {/* Sliding-door track, door cuts and belt line */}
      <path d="M214 150 L400 150" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M207 92 L207 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M407 92 L407 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M60 188 L742 188" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tall tail light */}
      <rect x="704" y="168" width="38" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="54" y="112" width="9" height="34" rx="4" fill="var(--color-ember)" />
      <Wheel cx={170} />
      <Wheel cx={612} />
    </>
  );
}
