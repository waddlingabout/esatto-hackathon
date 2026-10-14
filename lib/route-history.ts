import type { FollowUp } from "@/lib/ai-router";

// Where the assistant has sent the visitor this visit. sessionStorage: this tab only.
// Access can throw (private mode, blocked storage), so every read and write is guarded.

function read(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function parseList<T>(raw: string | null): T[] {
  try {
    const list: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? (list as T[]) : [];
  } catch {
    return [];
  }
}

// Every page the assistant sent the visitor to, oldest first, so coming back to "/"
// offers a "Back to …" chip for each.
export type PastRoute = { url: string; title: string; prompt: string };
const ROUTES_KEY = "boyota.routes";
const MAX_ROUTES = 5;

// Read as the raw string so useSyncExternalStore gets a stable snapshot.
export const readRoutes = () => read(ROUTES_KEY);
export const parseRoutes = (raw: string | null) => parseList<PastRoute>(raw);

// Asking the same thing again moves its chip to the end instead of adding a second one.
export function addRoute(route: PastRoute) {
  const routes = parseRoutes(readRoutes()).filter((r) => r.url !== route.url);
  write(ROUTES_KEY, [...routes, route].slice(-MAX_ROUTES));
}

// The requests that led to the current page, oldest first: the chat's statement and
// follow-ups, then each reroute from a product page. Sent along when rerouting so the
// router can read "something cheaper" against what came before.
export type HistoryTurn = { statement: string; followUps: FollowUp[]; path: string };
const HISTORY_KEY = "boyota.history";
const MAX_HISTORY = 5;

export const readHistory = () => parseList<HistoryTurn>(read(HISTORY_KEY));

// The chat starts it over with one turn; each reroute adds one.
export function writeHistory(turns: HistoryTurn[]) {
  write(HISTORY_KEY, turns.slice(-MAX_HISTORY));
}
