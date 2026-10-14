import { GLASS, Wheel } from "../parts";

// Boyota Bavalon side view: long, low full-size sedan with a stretched wheelbase and six-light glass, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BavalonSilhouette() {
  return (
    <>
      {/* Body: long trunk deck, long cabin, long hood */}
      <path
        d="M38 206 C38 182 54 170 96 165 L226 154 C276 118 340 96 424 94 C512 92 576 116 622 152 L720 164 C752 168 764 184 764 206 L764 214 C764 223 756 228 746 228 L54 228 C44 228 38 222 38 214 Z"
        fill="var(--car-paint)"
      />
      {/* Six-light glass: quarter window, rear door, front door */}
      <path d="M264 152 C278 140 292 130 306 122 L314 152 Z" fill={GLASS} opacity="0.88" />
      <path d="M326 152 L318 116 C350 106 384 102 420 102 L424 152 Z" fill={GLASS} opacity="0.88" />
      <path d="M440 152 L436 102 C506 103 552 122 590 152 Z" fill={GLASS} opacity="0.88" />
      {/* Belt line and chrome rocker trim */}
      <path d="M52 196 L752 196" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M210 214 L590 214" stroke="var(--color-paper)" strokeOpacity="0.6" strokeWidth="3" />
      {/* Headlight and full-width tail light */}
      <rect x="716" y="172" width="42" height="9" rx="4.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="40" y="174" width="34" height="8" rx="4" fill="var(--color-ember)" />
      <Wheel cx={168} r={45} hub={26} />
      <Wheel cx={644} r={45} hub={26} />
    </>
  );
}
