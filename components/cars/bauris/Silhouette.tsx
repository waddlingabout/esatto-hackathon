// Side view of the Bauris liftback: wedge nose (right), long sloping roof,
// short Kammback tail (left). Drawn in the configurator's 800×290 viewBox.
function Wheel({ cx }: { cx: number }) {
  return (
    <>
      <circle cx={cx} cy="228" r="44" fill="#121417" />
      <circle cx={cx} cy="228" r="24" fill="#8A9099" />
      <circle cx={cx} cy="228" r="7" fill="#121417" />
    </>
  );
}

export function BaurisSilhouette() {
  return (
    <>
      <path
        d="M60 212 L62 170 C63 158 70 151 82 149 L150 140 C232 116 320 96 420 92 C482 90 530 106 590 148 L708 166 C736 171 752 182 754 198 L754 212 C754 222 746 228 736 228 L72 228 C64 228 60 222 60 212 Z"
        fill="var(--car-paint)"
      />
      {/* Rear spoiler lip at the Kammback cut */}
      <path d="M70 150 L118 143" stroke="#121417" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
      <path d="M172 145 C246 122 320 106 402 103 L406 148 Z" fill="#1E2329" opacity="0.88" />
      <path d="M422 148 L418 103 C474 103 516 118 560 148 Z" fill="#1E2329" opacity="0.88" />
      <path d="M70 192 L744 192" stroke="#121417" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M704 176 L744 182" stroke="#F4F3EF" strokeOpacity="0.9" strokeWidth="8" strokeLinecap="round" />
      <rect x="61" y="164" width="30" height="8" rx="4" fill="#D9381E" />
      <Wheel cx={182} />
      <Wheel cx={622} />
    </>
  );
}
