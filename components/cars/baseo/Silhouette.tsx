import { GLASS, Wheel } from "../parts";

// Boyota Baseo side view: small, low two-seat convertible with the top folded, roll hoops and a short raked windshield.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BaseoSilhouette() {
  return (
    <>
      {/* Folded soft top on the rear deck */}
      <path d="M176 160 C178 146 196 140 222 140 L286 142 C298 144 302 152 300 160 Z" fill="var(--color-ink)" opacity="0.85" />
      {/* Roll hoops behind the seats */}
      <path d="M318 162 L322 130 C324 122 344 122 346 130 L350 162" fill="none" stroke="var(--color-ink)" strokeWidth="5" />
      {/* Body: short tail, open cockpit, rounded short hood */}
      <path
        d="M118 206 C118 184 128 170 154 166 L404 160 L452 160 L610 166 C654 170 690 184 690 206 L690 214 C690 223 682 228 672 228 L136 228 C126 228 118 222 118 214 Z"
        fill="var(--car-paint)"
      />
      {/* Windshield in a thin frame */}
      <path d="M466 161 L418 114 L410 117 L452 161 Z" fill="var(--color-ink)" opacity="0.8" />
      <path d="M452 161 L410 117 L404 122 L438 161 Z" fill={GLASS} opacity="0.88" />
      {/* Cockpit opening, door cut and belt line */}
      <path d="M300 163 L438 161" stroke="var(--color-ink)" strokeOpacity="0.35" strokeWidth="3" />
      <path d="M470 166 L464 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M128 192 L680 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Round headlight and tail light */}
      <rect x="652" y="172" width="30" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="122" y="174" width="22" height="9" rx="4.5" fill="var(--color-ember)" />
      <Wheel cx={222} r={40} hub={22} />
      <Wheel cx={586} r={40} hub={22} />
    </>
  );
}
