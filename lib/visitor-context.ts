import { userAgent } from "next/server";
import { z } from "zod";
import { destinations } from "@/lib/destinations";

// Background signals about the visitor for the router prompt: request headers
// (geo from Vercel, device, language) merged with the client snapshot from
// lib/visitor-signals.ts. Nothing here is stored.

const str = z.string().max(120);
const ms = z.number().int().min(0).max(30 * 24 * 3600_000);

export const clientContextSchema = z.object({
  input: z.object({
    mode: z.enum(["typed", "voice"]),
    typingMs: ms.nullable(),
    edits: z.number().int().min(0).max(1000),
  }),
  session: z
    .object({
      ageMs: ms,
      entryPath: str,
      referrer: str.nullable(),
      params: z.record(z.string().max(20), str),
      clickIds: z.array(z.string().max(20)).max(10),
      views: z
        .array(
          z.object({
            path: str,
            at: z.number(),
            dwellMs: ms.optional(),
            scrollPct: z.number().min(0).max(100).optional(),
          }),
        )
        .max(10),
      events: z.array(z.string().max(60)).max(10),
      prompts: z
        .array(
          z.object({
            prompt: str,
            mode: z.enum(["typed", "voice"]),
            routedTo: str.nullable(),
            agoMs: ms,
            bounced: z.boolean().optional(),
          }),
        )
        .max(5),
    })
    .nullable(),
  device: z.object({
    screen: z.tuple([z.number(), z.number()]),
    viewport: z.tuple([z.number(), z.number()]),
    dpr: z.number().min(0).max(10),
    touch: z.boolean(),
    reducedMotion: z.boolean(),
    colorScheme: z.enum(["light", "dark"]),
    standalone: z.boolean(),
    cores: z.number().int().min(0).max(512).optional(),
    memoryGb: z.number().min(0).max(1024).optional(),
    connection: z.string().max(10).optional(),
    saveData: z.boolean().optional(),
  }),
  languages: z.array(z.string().max(35)).max(5),
  timezone: z.string().max(60),
});

export type ClientContext = z.infer<typeof clientContextSchema>;

export type VisitorContext = {
  // Set when the visitor sends Sec-GPC: everything but country and language is dropped.
  gpc: boolean;
  geo: {
    country?: string;
    region?: string;
    city?: string;
    postalCode?: string;
    latLong?: string;
    timezone?: string;
  };
  languages: string[];
  localTime?: string;
  timezoneMismatch?: boolean;
  device?: {
    type: string;
    vendor?: string;
    model?: string;
    os?: string;
    browser?: string;
    inAppBrowser?: string;
    network?: string;
    memoryGb?: number;
    saveData?: boolean;
  };
  client?: ClientContext;
};

const IN_APP_BROWSERS: [RegExp, string][] = [
  [/FBAN|FBAV|FB_IAB/, "Facebook"],
  [/Instagram/, "Instagram"],
  [/musical_ly|TikTok|BytedanceWebview/, "TikTok"],
  [/LinkedInApp/, "LinkedIn"],
  [/Snapchat/, "Snapchat"],
  [/\bLine\//, "LINE"],
  [/Pinterest/, "Pinterest"],
];

const REFERRER_CLASSES: [RegExp, string][] = [
  [/(^|\.)(google|bing|duckduckgo|yahoo|ecosia|yandex|baidu|startpage)\./, "search"],
  [/(^|\.)(facebook|fb|instagram|t\.co|x\.com|twitter|linkedin|reddit|pinterest|threads)\b/, "social"],
  [/(^|\.)(youtube|youtu\.be|tiktok|vimeo|twitch)\b/, "video"],
  [/(^|\.)(caranddriver|edmunds|motortrend|kbb|autotrader|whatcar|topgear|carwow|teknikensvarld|vibilagare|blocket)\b/, "review/marketplace"],
  [/(^|\.)(mail\.|outlook|gmail)/, "email"],
  [/(^|\.)(chatgpt|openai|perplexity|claude\.ai|gemini)\b/, "ai assistant"],
];

function classifyReferrer(host: string | null): string {
  if (!host) return "direct";
  return REFERRER_CLASSES.find(([re]) => re.test(host))?.[1] ?? "other";
}

function decode(value: string | null) {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function localTime(timezone: string | undefined): string | undefined {
  if (!timezone) return undefined;
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      weekday: "long",
      hour: "numeric",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const weekday = parts.find((p) => p.type === "weekday")?.value;
    const hour = Number(parts.find((p) => p.type === "hour")?.value);
    const part =
      hour < 5 ? "night" : hour < 12 ? "morning" : hour < 17 ? "afternoon" : hour < 22 ? "evening" : "night";
    return `${weekday} ${part} (${hour}:00)`;
  } catch {
    return undefined;
  }
}

function languages(acceptLanguage: string | null): string[] {
  if (!acceptLanguage) return [];
  return acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim())
    .filter(Boolean)
    .slice(0, 3);
}

// Client hints arrive with quotes ("Pixel 8").
function hint(headers: Headers, name: string) {
  return headers.get(name)?.replace(/^"|"$/g, "") || undefined;
}

export function buildVisitorContext(request: Request, client: ClientContext | null): VisitorContext {
  const h = request.headers;
  const gpc = h.get("sec-gpc") === "1";
  const country = h.get("x-vercel-ip-country") ?? undefined;
  const langs = languages(h.get("accept-language"));
  if (gpc) return { gpc, geo: { country }, languages: langs };

  const ipTimezone = h.get("x-vercel-ip-timezone") ?? undefined;
  const lat = h.get("x-vercel-ip-latitude");
  const long = h.get("x-vercel-ip-longitude");

  const ua = userAgent(request);
  const memory = Number(h.get("device-memory")) || client?.device.memoryGb;
  const ect = h.get("ect") ?? client?.device.connection;
  const rtt = h.get("rtt");

  return {
    gpc,
    geo: {
      country,
      region: h.get("x-vercel-ip-country-region") ?? undefined,
      city: decode(h.get("x-vercel-ip-city")),
      postalCode: h.get("x-vercel-ip-postal-code") ?? undefined,
      latLong: lat && long ? `${lat},${long}` : undefined,
      timezone: ipTimezone,
    },
    languages: langs,
    localTime: localTime(ipTimezone ?? client?.timezone),
    timezoneMismatch: !!ipTimezone && !!client && client.timezone !== ipTimezone,
    device: {
      type: ua.device.type ?? (hint(h, "sec-ch-ua-mobile") === "?1" ? "mobile" : "desktop"),
      vendor: ua.device.vendor,
      model: hint(h, "sec-ch-ua-model") ?? ua.device.model,
      os: [hint(h, "sec-ch-ua-platform") ?? ua.os.name, hint(h, "sec-ch-ua-platform-version") ?? ua.os.version]
        .filter(Boolean)
        .join(" ") || undefined,
      browser: ua.browser.name,
      inAppBrowser: IN_APP_BROWSERS.find(([re]) => re.test(ua.ua))?.[1],
      network: ect ? `${ect}${rtt ? `, rtt ${rtt}ms` : ""}` : undefined,
      memoryGb: memory || undefined,
      saveData: h.get("save-data") === "on" || client?.device.saveData || undefined,
    },
    client: client ?? undefined,
  };
}

const titles = new Map<string, string>(destinations.map((d) => [d.path, d.title]));

function pageName(path: string | null) {
  if (!path) return "nothing";
  return titles.get(path) ?? path;
}

function seconds(ms: number | undefined) {
  return ms === undefined ? "?" : `${Math.round(ms / 1000)}s`;
}

// Compact "key: value" lines for the prompt; empty fields are skipped.
export function formatVisitorContext(ctx: VisitorContext): string {
  const lines: string[] = [];
  const add = (key: string, value: unknown) => {
    if (value === undefined || value === null || value === "" || value === false) return;
    if (Array.isArray(value) && value.length === 0) return;
    lines.push(`${key}: ${Array.isArray(value) ? value.join(", ") : String(value)}`);
  };

  const { geo, device, client } = ctx;
  add("location", [geo.city, geo.region, geo.country].filter(Boolean).join(", "));
  add("postal code", geo.postalCode);
  add("languages", ctx.languages.length ? ctx.languages : client?.languages);
  add("local time", ctx.localTime);
  add("timezone differs from IP location (travelling or VPN)", ctx.timezoneMismatch);
  if (ctx.gpc) add("privacy", "visitor sent Global Privacy Control; other signals withheld");

  if (device) {
    add("device", [device.type, device.vendor, device.model].filter(Boolean).join(" "));
    add("os / browser", [device.os, device.browser].filter(Boolean).join(" / "));
    add("opened inside app", device.inAppBrowser);
    add("network", device.network);
    add("device memory", device.memoryGb && `${device.memoryGb} GB`);
    add("data saver on", device.saveData);
  }

  if (client) {
    const d = client.device;
    add("screen", `${d.screen.join("x")} @${d.dpr}x, viewport ${d.viewport.join("x")}${d.touch ? ", touch" : ""}`);
    add("prefers", [d.colorScheme === "dark" && "dark mode", d.reducedMotion && "reduced motion"].filter(Boolean));
    add("installed as app", d.standalone);

    const input = client.input;
    add(
      "this message",
      `${input.typingMs !== null ? `typed over ${seconds(input.typingMs)}` : input.mode}${input.edits ? `, ${input.edits} edits` : ""}`,
    );

    const s = client.session;
    if (s) {
      add("arrived from", s.referrer ? `${s.referrer} (${classifyReferrer(s.referrer)})` : "direct / unknown");
      add("landing page", pageName(s.entryPath));
      add("campaign", Object.entries(s.params).map(([k, v]) => `${k}=${v}`));
      add("clicked through from", s.clickIds.map((id) => CLICK_ID_SOURCES[id] ?? id));
      add("on site for", seconds(s.ageMs));
      add(
        "pages viewed (oldest first)",
        s.views.map(
          (v) => `${pageName(v.path)} ${seconds(v.dwellMs)}${v.scrollPct ? ` scrolled ${v.scrollPct}%` : ""}`,
        ),
      );
      add("interactions", s.events);
      for (const p of s.prompts) {
        add(
          "earlier prompt",
          `"${p.prompt}" (${p.mode}) → ${pageName(p.routedTo)}${p.bounced ? ", BOUNCED (came straight back)" : ""}, ${seconds(p.agoMs)} ago`,
        );
      }
    }
  }
  return lines.join("\n");
}

const CLICK_ID_SOURCES: Record<string, string> = {
  gclid: "Google Ads",
  fbclid: "Facebook/Instagram (ad or shared link)",
  ttclid: "TikTok Ads",
  msclkid: "Microsoft Ads",
  li_fat_id: "LinkedIn Ads",
};
