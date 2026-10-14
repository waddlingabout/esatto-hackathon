// Primary lockup: emblem plus the BOYOTA wordmark, on paper.
export function BoyotaLogo() {
  return (
    <h1 className="m-0 flex items-center gap-4">
      <svg width="60" height="60" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="17" className="stroke-ember" strokeWidth="3" />
        <path
          d="M11 32 L19 9 M29 32 L21 9"
          className="stroke-ink"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 30 v-3 M20 23 v-3"
          className="stroke-ember"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-5xl font-extrabold leading-none tracking-[0.04em] [font-stretch:125%]">
        BOYOTA
      </span>
    </h1>
  );
}
