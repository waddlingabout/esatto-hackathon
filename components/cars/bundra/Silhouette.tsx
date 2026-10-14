import { GLASS, Wheel } from "../parts";

// Boyota Bundra side view: tall full-size crew cab pickup with long bed and tow hitch, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BundraSilhouette() {
  return (
    <>
      {/* Tow hitch */}
      <rect x="22" y="200" width="26" height="8" rx="2" fill="var(--color-ink)" />
      {/* Body: long bed, tall crew cab, high flat hood */}
      <path
        d="M44 214 L44 128 C44 124 48 122 54 122 L292 122 L300 124 L312 76 C316 68 322 64 332 64 L506 64 C520 64 528 68 536 78 L572 120 L728 128 C746 130 756 142 756 160 L756 214 C756 223 748 228 738 228 L62 228 C52 228 44 222 44 214 Z"
        fill="var(--car-paint)"
      />
      {/* Bed rail and bed/cab gap */}
      <path d="M52 134 L292 134" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M304 124 L304 210" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      {/* Rear and front side windows */}
      <path d="M322 118 L332 78 L414 78 L414 118 Z" fill={GLASS} opacity="0.88" />
      <path d="M428 118 L428 78 L502 78 C512 78 518 80 524 86 L556 118 Z" fill={GLASS} opacity="0.88" />
      {/* Door cut and belt line */}
      <path d="M421 82 L421 208" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M310 176 L748 176" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Big grille, headlight and tail light */}
      <rect x="736" y="134" width="18" height="48" rx="3" fill="var(--color-ink)" opacity="0.35" />
      <rect x="712" y="138" width="34" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="46" y="132" width="10" height="34" rx="4" fill="var(--color-ember)" />
      <Wheel cx={176} r={50} hub={28} />
      <Wheel cx={640} r={50} hub={28} />
    </>
  );
}
