import { GLASS, Wheel } from "../parts";

// Boyota Birai side view: long, low fastback sedan with a long hood and a rear wheel skirt.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BiraiSilhouette() {
  return (
    <>
      {/* Body: short tail, cabin set back, roof flowing into the trunk, long hood */}
      <path
        d="M46 206 C46 186 56 174 88 168 L200 158 C252 118 320 98 396 96 C466 94 520 110 582 150 L716 166 C744 170 756 188 756 206 L756 214 C756 223 748 228 738 228 L62 228 C52 228 46 222 46 214 Z"
        fill="var(--car-paint)"
      />
      {/* Long greenhouse split by the B-pillar */}
      <path d="M232 156 C270 128 320 112 380 108 L382 156 Z" fill={GLASS} opacity="0.88" />
      <path d="M396 156 L394 108 C460 108 512 124 560 154 Z" fill={GLASS} opacity="0.88" />
      {/* Door cut and belt line */}
      <path d="M390 160 L394 210" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M60 192 L744 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Thin light bars front and rear */}
      <rect x="708" y="176" width="44" height="6" rx="3" fill="var(--color-paper)" opacity="0.9" />
      <rect x="48" y="176" width="36" height="6" rx="3" fill="var(--color-ember)" />
      <Wheel cx={196} r={42} hub={26} />
      <Wheel cx={616} r={42} hub={26} />
      {/* Rear wheel skirt covers the top of the rear wheel */}
      <path
        d="M146 182 L246 182 L246 212 C226 202 166 202 146 212 Z"
        fill="var(--car-paint)"
      />
    </>
  );
}
