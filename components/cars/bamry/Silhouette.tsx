import { GLASS, Wheel } from "../parts";

// Boyota Bamry side view: long, low midsize sedan with a sweeping roofline, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BamrySilhouette() {
  return (
    <>
      {/* Body: short trunk, long cabin, gently sloped rear glass */}
      <path
        d="M44 204 C44 180 60 168 100 162 L232 152 C282 112 340 90 418 88 C506 86 566 112 616 150 L716 162 C746 166 758 182 758 204 L758 214 C758 223 750 228 740 228 L62 228 C52 228 44 222 44 214 Z"
        fill="var(--car-paint)"
      />
      {/* Rear and front side windows (4 doors) */}
      <path d="M272 150 C310 120 354 102 412 100 L418 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M434 150 L430 100 C500 101 546 118 588 150 Z" fill={GLASS} opacity="0.88" />
      {/* Window trim and belt line */}
      <path d="M262 156 L600 156" stroke="var(--color-paper)" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M56 196 L746 196" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and full-width-style tail light */}
      <rect x="712" y="172" width="40" height="8" rx="4" fill="var(--color-paper)" opacity="0.9" />
      <rect x="48" y="174" width="36" height="8" rx="4" fill="var(--color-ember)" />
      <Wheel cx={186} r={45} hub={26} />
      <Wheel cx={630} r={45} hub={26} />
    </>
  );
}
