import Link from "next/link";
import { AskAgain } from "./AskAgain";
import { Icon } from "./icons";
import { linkFocusRing } from "./styles";

export function Emblem({ size = 34, reversed = false }: { size?: number; reversed?: boolean }) {
  const road = reversed ? "var(--color-paper)" : "var(--color-ink)";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="var(--color-ember)" strokeWidth="3" />
      <path d="M11 32 L19 9 M29 32 L21 9" stroke={road} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M20 30 v-3 M20 23 v-3"
        stroke="var(--color-ember)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <a
        href="#main"
        className={`${linkFocusRing} sr-only rounded-pill bg-ink font-semibold text-white no-underline focus:not-sr-only focus:absolute focus:px-5 focus:py-3 focus:top-3 focus:left-3 focus:z-10 hover:text-white`}
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href="/"
          aria-label="Boyota home"
          className={`${linkFocusRing} flex min-h-11 items-center gap-2.5 text-ink no-underline hover:text-ink`}
        >
          <Emblem />
          <span className="font-display text-2xl font-extrabold tracking-[0.04em] [font-stretch:125%]">
            BOYOTA
          </span>
        </Link>
        <AskAgain variant="header" label="Ask Boyota something else" placeholder="Ask Boyota something else…" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 p-6 text-[13px] text-steel">
        <span>© Boyota Motor Co. — a fictional brand</span>
        <span>Figures are sample values for design purposes</span>
      </div>
    </footer>
  );
}

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Shown when the router sent the visitor here with ?q=<their prompt>.
// Reads searchParams itself so only this chip waits on the request (render it inside <Suspense>).
export async function AskedChip({ searchParams }: { searchParams: SearchParams }) {
  const { q } = await searchParams;
  if (typeof q !== "string" || !q) return null;
  return (
    <div className="inline-flex items-center gap-2 self-start rounded-pill bg-lane-tint px-3.5 py-2 text-sm font-medium text-lane-deep">
      <Icon name="arrow" size={16} strokeWidth={2.2} />
      You asked for “{q}”
    </div>
  );
}
