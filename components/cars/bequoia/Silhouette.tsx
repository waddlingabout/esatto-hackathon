import { GLASS, Wheel } from "../parts";

// Boyota Bequoia side view: long full-size SUV with three rows of side glass, roof rails and a raked tailgate.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BequoiaSilhouette() {
  return (
    <>
      {/* Low roof rails */}
      <rect x="100" y="92" width="400" height="5" rx="2.5" fill="var(--color-ink)" />
      {/* Body: slightly raked tailgate, long roof, sloped screen, tall hood */}
      <path
        d="M40 206 C40 184 50 170 70 166 L76 118 C78 106 86 100 100 100 L518 98 C546 98 564 108 588 130 L612 152 L722 162 C746 165 760 180 760 198 L760 212 C760 222 752 228 742 228 L58 228 C48 228 40 222 40 212 Z"
        fill="var(--car-paint)"
      />
      {/* Three rows of side glass: third row, second row, front */}
      <path d="M92 112 C92 110 94 108 98 108 L198 108 L198 146 L86 146 Z" fill={GLASS} opacity="0.88" />
      <path d="M212 108 L340 108 L340 146 L212 146 Z" fill={GLASS} opacity="0.88" />
      <path d="M354 108 L520 108 C538 108 552 116 568 132 L582 146 L354 146 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts and belt line */}
      <path d="M347 102 L347 214" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M205 102 L205 214" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M52 200 L752 200" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Headlight and wraparound tail light */}
      <rect x="714" y="174" width="40" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="46" y="170" width="30" height="10" rx="5" fill="var(--color-ember)" />
      <Wheel cx={196} r={47} hub={27} />
      <Wheel cx={616} r={47} hub={27} />
    </>
  );
}
