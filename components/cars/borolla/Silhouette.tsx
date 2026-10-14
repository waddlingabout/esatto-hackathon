import { GLASS, Wheel } from "../parts";

// Four-door sedan from design-system/reference/product-borolla.dc.html.
// Drawn inside CarConfigurator's 800×290 viewBox; the ground shadow is already there.
export function BorollaSilhouette() {
  return (
    <>
      <path
        d="M58 205 C58 178 74 167 112 162 L248 151 C292 116 344 92 422 90 C502 88 558 112 604 150 L702 162 C738 167 748 184 748 205 L748 214 C748 223 740 228 730 228 L72 228 C64 228 58 222 58 214 Z"
        fill="var(--car-paint)"
      />
      <path d="M286 150 C322 120 362 104 418 102 L424 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M440 150 L436 102 C498 103 540 120 574 150 Z" fill={GLASS} opacity="0.88" />
      <path d="M70 196 L740 196" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <rect x="700" y="172" width="38" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="62" y="174" width="26" height="9" rx="4.5" fill="var(--color-ember)" />
      <Wheel cx={182} />
      <Wheel cx={622} />
    </>
  );
}
