import { GLASS, Wheel } from "../parts";

// Boyota Bercel side view: smooth electric crossover with a raised ride, sloping roof, closed front and full-width light bar.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BercelSilhouette() {
  return (
    <>
      {/* Body: short hatch, roof sloping gently back, long windshield, smooth closed nose */}
      <path
        d="M60 206 L60 140 C60 116 72 102 98 96 L180 86 C230 80 330 78 420 80 C476 82 516 94 552 120 L604 150 L700 162 C734 166 748 182 748 204 L748 214 C748 223 740 228 730 228 L76 228 C66 228 60 222 60 214 Z"
        fill="var(--car-paint)"
      />
      {/* Black roof and window band */}
      <path d="M100 98 L180 90 C230 85 330 84 418 86 C470 88 506 98 540 120 L582 150 L100 150 Z" fill="var(--color-ink)" opacity="0.2" />
      <path d="M110 146 L118 112 C120 104 126 100 136 99 L212 94 L212 146 Z" fill={GLASS} opacity="0.88" />
      <path d="M226 146 L226 93 L380 91 L380 146 Z" fill={GLASS} opacity="0.88" />
      <path d="M394 146 L394 91 C452 92 494 102 528 124 L560 146 Z" fill={GLASS} opacity="0.88" />
      {/* Wheel-arch and rocker cladding */}
      <path d="M60 210 L60 200 L748 200 L748 210 Z" fill="var(--color-ink)" opacity="0.35" />
      {/* Door cuts and flush handles */}
      <path d="M219 96 L219 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M387 94 L387 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <rect x="320" y="160" width="40" height="5" rx="2.5" fill="var(--color-ink)" opacity="0.3" />
      <rect x="490" y="160" width="40" height="5" rx="2.5" fill="var(--color-ink)" opacity="0.3" />
      {/* Charge port door on the front fender */}
      <rect x="632" y="166" width="22" height="16" rx="3" fill="none" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="2" />
      {/* Full-width light bar front, slim tail light rear */}
      <rect x="696" y="166" width="50" height="6" rx="3" fill="var(--color-paper)" opacity="0.95" />
      <rect x="60" y="128" width="12" height="7" rx="3.5" fill="var(--color-ember)" />
      <Wheel cx={180} r={46} hub={30} />
      <Wheel cx={616} r={46} hub={30} />
    </>
  );
}
