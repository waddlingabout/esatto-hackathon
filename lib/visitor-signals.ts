// Client-side visitor signals for the router prompt. Everything lives in
// sessionStorage (this tab only, gone when it closes) and nothing persists
// across visits, so no consent is needed. Every access may throw (private
// mode, blocked storage), so all functions quietly do nothing on failure.

const KEY = "boyota.signals";
const MAX_VIEWS = 10;
const MAX_EVENTS = 10;
const MAX_PROMPTS = 5;
// Coming back to "/" this soon after being routed counts as a bounce.
const BOUNCE_MS = 15_000;

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
// Click ids are stored as presence flags only; the ids themselves identify a click.
const CLICK_IDS = ["gclid", "fbclid", "ttclid", "msclkid", "li_fat_id"] as const;
// Our own link parameters: partner/dealer, showroom QR, newsletter segment, ad intent.
const OWN_PARAMS = ["ref", "qr", "seg", "intent"] as const;

type PageView = { path: string; at: number; dwellMs?: number; scrollPct?: number };
type PromptRecord = {
  prompt: string;
  mode: InputMode;
  routedTo: string | null;
  at: number;
  bounced?: boolean;
};

type Signals = {
  startedAt: number;
  entryPath: string;
  referrer: string | null;
  params: Record<string, string>;
  clickIds: string[];
  views: PageView[];
  events: string[];
  prompts: PromptRecord[];
};

export type InputMode = "typed" | "voice";

function load(): Signals | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Signals) : null;
  } catch {
    return null;
  }
}

function update(fn: (s: Signals) => void) {
  const s = load();
  if (!s) return;
  fn(s);
  try {
    sessionStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

// Once per session: the campaign parameters, referrer and entry page we arrived with.
export function captureLanding() {
  if (load()) return;
  const url = new URL(location.href);
  const params: Record<string, string> = {};
  for (const name of [...UTM_PARAMS, ...OWN_PARAMS]) {
    const value = url.searchParams.get(name);
    if (value) params[name] = value.slice(0, 120);
  }
  let referrer: string | null = null;
  try {
    // Only the host: the full referrer URL can carry another site's query.
    const ref = document.referrer && new URL(document.referrer);
    if (ref && ref.host !== location.host) referrer = ref.host;
  } catch {}
  const signals: Signals = {
    startedAt: Date.now(),
    entryPath: url.pathname,
    referrer,
    params,
    clickIds: CLICK_IDS.filter((id) => url.searchParams.has(id)),
    views: [],
    events: [],
    prompts: [],
  };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(signals));
  } catch {}
}

export function recordPageView(path: string) {
  update((s) => {
    const now = Date.now();
    const last = s.prompts.at(-1);
    if (path === "/" && last?.routedTo && !last.bounced && now - last.at < BOUNCE_MS) {
      last.bounced = true;
    }
    s.views.push({ path, at: now });
    s.views = s.views.slice(-MAX_VIEWS);
  });
}

// Closes the dwell time of the latest view of `path`.
export function recordDwell(path: string) {
  update((s) => {
    const view = s.views.findLast((v) => v.path === path);
    if (view) view.dwellMs = Date.now() - view.at;
  });
}

export function recordScroll(path: string, pct: number) {
  update((s) => {
    const view = s.views.findLast((v) => v.path === path);
    if (view) view.scrollPct = Math.max(view.scrollPct ?? 0, Math.round(pct));
  });
}

// Small interactions, e.g. "bupra color:red".
export function recordEvent(name: string) {
  update((s) => {
    s.events.push(name.slice(0, 60));
    s.events = s.events.slice(-MAX_EVENTS);
  });
}

export function recordPrompt(prompt: string, mode: InputMode, routedTo: string | null) {
  update((s) => {
    s.prompts.push({ prompt: prompt.slice(0, 120), mode, routedTo, at: Date.now() });
    s.prompts = s.prompts.slice(-MAX_PROMPTS);
  });
}

type NetworkInformation = { effectiveType?: string; saveData?: boolean };

// Everything the server can't see in the request headers. Shape is checked
// (and capped) by clientContextSchema in lib/visitor-context.ts.
export function snapshotClientContext(input: {
  mode: InputMode;
  typingMs: number | null;
  edits: number;
}) {
  const s = load();
  const now = Date.now();
  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    deviceMemory?: number;
  };
  const media = (q: string) => window.matchMedia(q).matches;
  return {
    input,
    session: s && {
      ageMs: now - s.startedAt,
      entryPath: s.entryPath,
      referrer: s.referrer,
      params: s.params,
      clickIds: s.clickIds,
      // The view still open has no dwell yet; measure it up to now.
      views: s.views.map((v, i) =>
        i === s.views.length - 1 && v.dwellMs === undefined ? { ...v, dwellMs: now - v.at } : v,
      ),
      events: s.events,
      prompts: s.prompts.map(({ at, ...p }) => ({ ...p, agoMs: now - at })),
    },
    device: {
      screen: [screen.width, screen.height],
      viewport: [innerWidth, innerHeight],
      dpr: devicePixelRatio,
      touch: navigator.maxTouchPoints > 0,
      reducedMotion: media("(prefers-reduced-motion: reduce)"),
      colorScheme: media("(prefers-color-scheme: dark)") ? "dark" : "light",
      standalone: media("(display-mode: standalone)"),
      cores: navigator.hardwareConcurrency,
      memoryGb: nav.deviceMemory,
      connection: nav.connection?.effectiveType,
      saveData: nav.connection?.saveData,
    },
    languages: [...navigator.languages].slice(0, 5),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export type ClientContextSnapshot = ReturnType<typeof snapshotClientContext>;
