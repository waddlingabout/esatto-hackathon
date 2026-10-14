import { GLASS, Wheel } from "../parts";

// Boyota Balphard side view: tall, boxy luxury van with an upright nose, big grille, long flat roof and privacy glass.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BalphardSilhouette() {
  return (
    <>
      {/* Body: vertical tailgate, tall flat roof, steep windshield, short upright nose */}
      <path
        d="M56 214 L56 84 C56 64 68 54 92 54 L586 54 C608 54 622 62 634 78 L676 136 L728 142 C744 144 750 156 750 172 L750 214 C750 223 742 228 732 228 L74 228 C64 228 56 222 56 214 Z"
        fill="var(--car-paint)"
      />
      {/* Roof rails */}
      <path d="M110 52 L560 52" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
      {/* Privacy glass: rear quarter, long lounge-row window, front door, windshield */}
      <path d="M76 138 L76 82 C76 74 82 70 90 70 L190 70 L190 138 Z" fill={GLASS} opacity="0.95" />
      <path d="M204 138 L204 70 L452 70 L452 138 Z" fill={GLASS} opacity="0.95" />
      <path d="M466 138 L466 70 L580 70 C596 70 606 76 616 90 L650 138 Z" fill={GLASS} opacity="0.88" />
      {/* Chrome brightwork along the window line */}
      <path d="M76 144 L652 144" stroke="var(--color-paper)" strokeOpacity="0.7" strokeWidth="3" />
      {/* Sliding-door track, door cuts and belt line */}
      <path d="M204 154 L452 154" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M197 74 L197 208" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M459 74 L459 208" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M64 192 L742 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Big upright grille, headlight and tall tail light */}
      <rect x="734" y="150" width="14" height="44" rx="3" fill="var(--color-paper)" opacity="0.75" />
      <rect x="700" y="148" width="34" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="58" y="96" width="9" height="56" rx="4" fill="var(--color-ember)" />
      <Wheel cx={176} r={45} hub={26} />
      <Wheel cx={616} r={45} hub={26} />
    </>
  );
}
