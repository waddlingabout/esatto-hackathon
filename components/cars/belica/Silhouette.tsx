import { GLASS, Wheel } from "../parts";

// Boyota Belica side view: retro three-door hatch coupe with a long sloping glass hatch, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BelicaSilhouette() {
  return (
    <>
      {/* Body: short square tail, long fastback hatch, high roof peak, short hood */}
      <path
        d="M62 206 C62 182 70 166 92 160 L118 152 C196 120 298 98 384 96 C452 94 502 114 550 150 L706 164 C736 168 746 184 746 206 L746 214 C746 223 738 228 728 228 L80 228 C70 228 62 222 62 214 Z"
        fill="var(--car-paint)"
      />
      {/* Long side window, one door */}
      <path d="M232 151 C276 126 330 109 384 108 L388 151 Z" fill={GLASS} opacity="0.88" />
      <path d="M400 151 L398 108 C448 108 486 122 524 151 Z" fill={GLASS} opacity="0.88" />
      {/* Louvered rear quarter */}
      <path d="M150 148 L222 128 L222 151 L150 155 Z" fill={GLASS} opacity="0.88" />
      <path
        d="M168 152 L168 140 M186 151 L186 135 M204 151 L204 130"
        stroke="var(--car-paint)"
        strokeWidth="5"
      />
      {/* Retro side stripe */}
      <path d="M78 186 L736 186" stroke="var(--color-paper)" strokeOpacity="0.55" strokeWidth="5" />
      <path d="M530 156 L536 204" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Round-ish headlight and square tail light */}
      <rect x="708" y="170" width="30" height="12" rx="6" fill="var(--color-paper)" opacity="0.9" />
      <rect x="66" y="168" width="22" height="14" rx="2" fill="var(--color-ember)" />
      <Wheel cx={190} r={42} />
      <Wheel cx={612} r={42} />
    </>
  );
}
