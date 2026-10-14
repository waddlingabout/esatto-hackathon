import { GLASS, Wheel } from "../parts";

// Boyota Batrix side view: tall five-door wagon with a long flat roof, roof rails and a square tailgate, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function BatrixSilhouette() {
  return (
    <>
      {/* Roof rails */}
      <rect x="100" y="78" width="356" height="5" rx="2.5" fill="var(--color-ink)" />
      <rect x="110" y="82" width="10" height="8" fill="var(--color-ink)" />
      <rect x="436" y="82" width="10" height="8" fill="var(--color-ink)" />
      {/* Body: square tail, long flat roof, raked windshield, short hood */}
      <path
        d="M60 212 L60 104 C60 94 66 88 76 88 L470 88 C520 92 556 120 590 152 L708 162 C736 166 746 182 746 204 L746 214 C746 223 738 228 728 228 L74 228 C66 228 60 222 60 214 Z"
        fill="var(--car-paint)"
      />
      {/* Cargo window, rear door, front door */}
      <path d="M78 102 L196 102 L196 148 L76 148 Z" fill={GLASS} opacity="0.88" />
      <rect x="212" y="102" width="138" height="46" rx="3" fill={GLASS} opacity="0.88" />
      <path d="M366 102 L470 102 C508 106 538 126 564 148 L366 148 Z" fill={GLASS} opacity="0.88" />
      {/* Door cuts and belt line */}
      <path d="M204 96 L204 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M358 96 L358 206" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M68 192 L738 192" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Tall tail light and headlight */}
      <rect x="62" y="110" width="9" height="44" rx="4" fill="var(--color-ember)" />
      <rect x="702" y="172" width="38" height="10" rx="5" fill="var(--color-paper)" opacity="0.9" />
      <Wheel cx={180} />
      <Wheel cx={620} />
    </>
  );
}
