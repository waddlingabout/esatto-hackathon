import { GLASS, Wheel } from "../parts";

// Boyota BR2 side view: low open-top mid-engine roadster, cabin forward, engine deck behind the roll hoop, nose to the right.
// Shapes for the 800×290 viewBox in CarConfigurator; the ground shadow is drawn there.
export function Br2Silhouette() {
  return (
    <>
      {/* Roll hoop behind the seats */}
      <path
        d="M360 160 C360 140 368 130 382 130 C396 130 404 140 404 160"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="7"
      />
      {/* Body: low, wedge-shaped, short nose, long engine deck */}
      <path
        d="M52 204 C52 184 60 172 82 166 L150 160 C230 154 300 150 352 146 C372 144 396 146 410 158 L520 162 L712 174 C740 178 750 192 750 206 L750 214 C750 223 742 228 732 228 L70 228 C60 228 52 222 52 214 Z"
        fill="var(--car-paint)"
      />
      {/* Raked windshield */}
      <path d="M470 160 L438 124 L430 126 L452 160 Z" fill={GLASS} opacity="0.88" />
      {/* Big side intake feeding the engine */}
      <path d="M268 204 L318 178 L336 180 L334 206 Z" fill="var(--color-ink)" opacity="0.4" />
      {/* Engine cover vents */}
      <path
        d="M170 160 L200 158 M214 157 L244 155 M258 154 L288 152"
        stroke="var(--color-ink)"
        strokeOpacity="0.35"
        strokeWidth="3"
      />
      <path d="M62 194 L742 194" stroke="var(--color-ink)" strokeOpacity="0.18" strokeWidth="2" />
      {/* Slim headlight and full-width tail strip */}
      <rect x="704" y="180" width="38" height="7" rx="3.5" fill="var(--color-paper)" opacity="0.9" />
      <rect x="56" y="172" width="34" height="7" rx="3.5" fill="var(--color-ember)" />
      <Wheel cx={186} r={44} hub={26} />
      <Wheel cx={612} r={40} hub={24} />
    </>
  );
}
