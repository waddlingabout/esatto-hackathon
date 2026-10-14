import { GLASS, Wheel } from "../parts";

// Boyota B4Runner side view: tall, boxy body-on-frame SUV with roof rack, rear spare and skid plate.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function B4runnerSilhouette() {
  return (
    <>
      {/* Roof rack: posts, then rail */}
      <rect x="120" y="84" width="6" height="10" fill="var(--color-ink)" />
      <rect x="430" y="84" width="6" height="10" fill="var(--color-ink)" />
      <rect x="108" y="78" width="344" height="7" rx="3" fill="var(--color-ink)" />
      {/* Rear-mounted spare */}
      <rect x="40" y="128" width="26" height="64" rx="8" fill="var(--color-ink)" />
      {/* Body: upright tailgate, flat roof, short hood, high belly */}
      <path
        d="M62 198 L62 110 C62 100 70 94 82 94 L484 92 L560 142 L714 152 C734 154 746 166 746 180 L746 200 C746 208 740 212 732 212 L76 212 C68 212 62 206 62 198 Z"
        fill="var(--car-paint)"
      />
      {/* Three side windows: rear quarter, rear door, front door */}
      <path d="M82 106 L196 106 L196 142 L82 142 Z" fill={GLASS} opacity="0.88" />
      <path d="M210 106 L338 106 L338 142 L210 142 Z" fill={GLASS} opacity="0.88" />
      <path d="M352 106 L494 106 L544 142 L352 142 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts and belt line */}
      <path d="M344 100 L344 200" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M202 100 L202 200" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M68 160 L742 160" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Rock rail and front skid plate */}
      <rect x="238" y="204" width="270" height="10" rx="3" fill="var(--color-ink)" opacity="0.8" />
      <path d="M700 212 L752 204 L748 216 L706 220 Z" fill="var(--color-ink)" />
      {/* Headlight and vertical tail light */}
      <rect x="708" y="164" width="34" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="66" y="112" width="9" height="34" rx="4" fill="var(--color-ember)" />
      <Wheel cx={172} r={50} hub={26} />
      <Wheel cx={612} r={50} hub={26} />
    </>
  );
}
