import { GLASS, Wheel } from "../parts";

// Boyota BJ Cruiser side view: boxy retro 4x4 with a flat roof, upright windshield and rear spare, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BjcruiserSilhouette() {
  return (
    <>
      {/* Body: flat roof, near-upright windshield, short flat hood, square tail */}
      <path
        d="M82 212 L82 72 C82 65 87 60 94 60 L512 60 L546 128 L714 132 C725 133 730 139 730 148 L730 214 C730 223 724 228 714 228 L96 228 C88 228 82 222 82 214 Z"
        fill="var(--car-paint)"
      />
      {/* Contrast roof cap */}
      <path d="M94 60 L512 60 L516 68 L86 68 C86 63 89 60 94 60 Z" fill="var(--color-paper)" opacity="0.85" />
      {/* Three flat side windows */}
      <rect x="100" y="76" width="128" height="50" rx="4" fill={GLASS} opacity="0.88" />
      <rect x="244" y="76" width="136" height="50" rx="4" fill={GLASS} opacity="0.88" />
      <path d="M396 76 L514 76 L536 126 L396 126 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts and belt line */}
      <path d="M388 70 L388 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M236 70 L236 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M90 140 L726 140" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Fender flares */}
      <path d="M128 228 C128 186 154 168 192 168 C230 168 256 186 256 228" fill="none" stroke="var(--color-ink)" strokeOpacity="0.55" strokeWidth="10" />
      <path d="M528 228 C528 186 554 168 592 168 C630 168 656 186 656 228" fill="none" stroke="var(--color-ink)" strokeOpacity="0.55" strokeWidth="10" />
      {/* Rear-mounted spare */}
      <circle cx="70" cy="150" r="34" fill="var(--color-ink)" />
      <circle cx="70" cy="150" r="16" fill="var(--color-paper)" opacity="0.35" />
      {/* Round headlight, bumper, tail light */}
      <circle cx="720" cy="152" r="9" fill="var(--color-paper)" opacity="0.9" />
      <rect x="714" y="196" width="28" height="12" rx="3" fill="var(--color-ink)" />
      <rect x="84" y="190" width="10" height="18" rx="3" fill="var(--color-ember)" />
      <Wheel cx={192} r={48} hub={22} />
      <Wheel cx={592} r={48} hub={22} />
    </>
  );
}
