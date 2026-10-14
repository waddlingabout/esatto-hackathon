import { GLASS, Wheel } from "../parts";

// Boyota Brown side view: four-door sedan raised on big wheels, with dark arch cladding and visible daylight under the sills, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BrownSilhouette() {
  return (
    <>
      {/* Body: sedan profile lifted clear of the ground */}
      <path
        d="M52 188 C52 162 70 150 110 146 L236 136 C282 100 340 78 420 76 C504 74 562 98 608 134 L706 146 C740 150 750 166 750 188 L750 198 C750 207 742 212 732 212 L70 212 C60 212 52 206 52 198 Z"
        fill="var(--car-paint)"
      />
      {/* Glass: rear door, front door */}
      <path d="M276 134 C312 104 356 88 416 86 L422 134 Z" fill={GLASS} opacity="0.88" />
      <path d="M438 134 L434 86 C496 87 536 104 570 134 Z" fill={GLASS} opacity="0.88" />
      {/* Belt line */}
      <path d="M66 178 L736 178" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Arch and rocker cladding */}
      <path d="M126 212 A60 60 0 0 1 246 212 Z" fill="var(--color-ink)" opacity="0.4" />
      <path d="M558 212 A60 60 0 0 1 678 212 Z" fill="var(--color-ink)" opacity="0.4" />
      <rect x="246" y="202" width="312" height="10" fill="var(--color-ink)" opacity="0.4" />
      {/* Headlight and tail light */}
      <rect x="704" y="156" width="40" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="56" y="158" width="30" height="8" rx="4" fill="var(--color-ember)" />
      <Wheel cx={186} r={48} hub={28} />
      <Wheel cx={618} r={48} hub={28} />
    </>
  );
}
