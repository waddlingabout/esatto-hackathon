import { GLASS, Wheel } from "../parts";

// Boyota Band Cruiser side view: long, tall overlander with a roof tent, A-pillar snorkel and chrome belt trim.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BandcruiserSilhouette() {
  return (
    <>
      {/* Hard-shell roof tent on rails */}
      <rect x="132" y="84" width="6" height="10" fill="var(--color-ink)" />
      <rect x="436" y="84" width="6" height="10" fill="var(--color-ink)" />
      <rect x="112" y="60" width="348" height="26" rx="6" fill="var(--color-ink)" />
      <path d="M124 72 L448 72" stroke="var(--color-steel)" strokeWidth="2" />
      {/* Body: rounded rear, long flat roof, raked screen, long hood */}
      <path
        d="M52 196 L52 118 C52 102 62 94 78 94 L470 92 C488 92 498 96 508 104 L572 148 L716 158 C738 160 752 172 752 188 L752 204 C752 212 746 216 738 216 L68 216 C58 216 52 210 52 200 Z"
        fill="var(--car-paint)"
      />
      {/* Three side windows */}
      <path d="M80 106 C80 104 82 104 84 104 L188 104 L188 144 L80 144 Z" fill={GLASS} opacity="0.88" />
      <path d="M204 104 L334 104 L334 144 L204 144 Z" fill={GLASS} opacity="0.88" />
      <path d="M350 104 L478 104 C486 104 492 106 498 110 L550 144 L350 144 Z" fill={GLASS} opacity="0.88" />
      {/* Chrome belt trim under the glass */}
      <path d="M78 152 L560 152" stroke="var(--color-paper)" strokeOpacity="0.7" strokeWidth="3" />
      {/* Door cuts and lower body line */}
      <path d="M342 98 L342 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M196 98 L196 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M58 190 L746 190" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Snorkel up the A-pillar */}
      <path
        d="M598 182 L598 156 L532 106 L532 90"
        stroke="var(--color-ink)"
        strokeWidth="8"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="524" y="82" width="20" height="12" rx="3" fill="var(--color-ink)" />
      {/* Side step */}
      <rect x="240" y="210" width="290" height="7" rx="3" fill="var(--color-ink)" opacity="0.8" />
      {/* Headlight and tail light */}
      <rect x="706" y="168" width="40" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="56" y="122" width="10" height="30" rx="4" fill="var(--color-ember)" />
      <Wheel cx={178} r={50} hub={28} />
      <Wheel cx={624} r={50} hub={28} />
    </>
  );
}
