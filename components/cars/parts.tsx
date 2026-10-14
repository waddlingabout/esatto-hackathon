// Shared pieces for the car silhouettes, drawn in CarConfigurator's 800×290 viewBox.
// Glass and hub colors come from design-system/reference/product-borolla.dc.html;
// they are illustration shades, not UI tokens.
export const GLASS = "#1E2329";
const HUB = "#8A9099";

export function Wheel({ cx, r = 44, hub = 24 }: { cx: number; r?: number; hub?: number }) {
  return (
    <>
      <circle cx={cx} cy="228" r={r} fill="var(--color-ink)" />
      <circle cx={cx} cy="228" r={hub} fill={HUB} />
      <circle cx={cx} cy="228" r="7" fill="var(--color-ink)" />
    </>
  );
}
