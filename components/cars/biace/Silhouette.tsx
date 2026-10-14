import { GLASS, Wheel } from "../parts";

// Boyota Biace side view: tall high-roof box van with a short sloped nose, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BiaceSilhouette() {
  return (
    <>
      {/* Body: one tall box, steep windshield, stubby hood */}
      <path
        d="M48 214 L48 74 C48 62 56 54 68 54 L598 54 C622 54 638 62 650 78 L706 150 L728 156 C744 160 754 174 754 190 L754 214 C754 223 746 228 736 228 L66 228 C56 228 48 222 48 214 Z"
        fill="var(--car-paint)"
      />
      {/* Side windows: rear, sliding door, front door */}
      <rect x="82" y="72" width="148" height="62" rx="6" fill={GLASS} opacity="0.88" />
      <rect x="258" y="72" width="148" height="62" rx="6" fill={GLASS} opacity="0.88" />
      <path d="M524 134 L524 72 L598 72 C610 72 618 76 626 86 L664 134 Z" fill={GLASS} opacity="0.88" />
      {/* Sliding door and front door cuts, slide rail */}
      <path d="M244 68 L244 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M420 68 L420 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M512 68 L512 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M60 148 L420 148" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="3" />
      {/* Belt line */}
      <path d="M60 192 L742 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and tail light */}
      <rect x="712" y="164" width="36" height="12" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="52" y="150" width="12" height="34" rx="3" fill="var(--color-ember)" />
      <Wheel cx={164} />
      <Wheel cx={618} />
    </>
  );
}
