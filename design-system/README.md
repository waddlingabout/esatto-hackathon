# Boyota design system (v0.1)

> Browse by asking. One window, every car.

Boyota is a fictional car brand. The site has no menus: the visitor types what they want into a chat window, and the router (`POST /api/navigate`) takes them to the right page.

This folder is a copy of the **Boyota Design System** canvas on claude.ai, so anyone with the repo can build with it. If the canvas changes, update this folder to match.

| File | What it is |
| --- | --- |
| `tokens.css` | Colors, fonts, radii and shadow as a Tailwind v4 `@theme` |
| `assets/` | The emblem (on paper, on ink) and the app icon as SVG |
| `reference/system-spec.dc.html` | The spec board: logo, color, type, controls, chat states, spec tiles |
| `reference/home-chat.dc.html` | Home page mockup: logo and the AI chat window |
| `reference/product-borolla.dc.html` | Product page mockup: hero, color and trim pickers, specs, trim table |

The reference files are in the canvas's own format and don't render on their own. Read them as markup: every style is inline, so you can copy exact values from them.

## Setup

1. **Tokens.** In `app/globals.css`:
   ```css
   @import "tailwindcss";
   @import "../design-system/tokens.css";
   ```
2. **Fonts.** Load them in `app/layout.tsx` and put the variables on `<html>`:
   ```tsx
   import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

   const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });
   const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" });
   const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

   // <html className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
   ```
   The `wdth` axis is required: the display styles use Archivo's expanded widths through `font-stretch`.
3. **Page base.** Use `bg-paper text-ink font-sans` on `body`.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#121417` | Text, chrome, inverted surfaces (the spec band, selected trim, user bubbles) |
| `paper` | `#F4F3EF` | Page background |
| `surface` | `#FFFFFF` | Chat window, cards, inputs |
| `ember` | `#D9381E` | Primary action and brand. Use it as a fill with white text, never as small text |
| `ember-ink` | `#B02A14` | Ember for links and text |
| `lane` | `#0F6E6A` | Routing and success status |
| `steel` | `#5A5F66` | Secondary text, labels, captions |
| `line` | `#DAD8D2` | Borders and dividers |

Supporting colors: `body-muted` `#3E4248` for muted paragraphs, `on-ink-muted` `#C9CCD1` for secondary text on ink, `placeholder` `#6B7077`, `line-subtle` `#ECEAE5` for table rows, `line-dashed` `#A8A6A0` for empty tiles. The status tints `lane-tint` (with `lane-deep` text) and `error-tint` (with `error-deep` text) are only for chat bubbles and badges.

The system defines **no dark theme**. "Dark" means an inverted ink section on a light page.

## Type

| Role | Font | Size / line height | Notes |
| --- | --- | --- | --- |
| Wordmark | Archivo 800, `font-stretch: 125%` | — | Set as text, uppercase `BOYOTA`, `letter-spacing: 0.04em` |
| Display | Archivo 800, `font-stretch: 125%` | 64/64; hero `clamp(48px, 7vw, 88px)` / 0.95 | `letter-spacing: -0.01em` |
| Heading | Archivo 700, `font-stretch: 112%` | 32/37 (also 40 and 28) | |
| Body | IBM Plex Sans 400 | 18/28; chat 15–17 at 1.5 | 600 for button labels, 500 for emphasis |
| Data | IBM Plex Mono 500 | 22; spec tiles 34–44 | Specs, prices, trim names, numbers |
| Eyebrow | IBM Plex Mono 400 | 13–14 | Uppercase, `letter-spacing: 0.08em`, `steel` |

## Spacing, radius, elevation

- **Spacing:** 4 / 8 / 16 / 24 / 48 / 80, which is Tailwind's `1 2 4 6 12 20`. Content is max 1280px wide with 24px side padding; the chat window is max 720px.
- **Radius:** `rounded-trim` 10px (selectable trims), `rounded-card` 16px (cards, tiles), `rounded-panel` 20px (panels, tables, feature cards), `rounded-window` 28px (chat window, hero card), `rounded-pill` for every button, chip and input.
- **Elevation:** only the chat window has a shadow (`shadow-window`). Everything else is flat, with 1px `line` borders.

## Logo

The emblem is a circle with two converging road lines and a dashed center line: the road ahead. Ember is the ring and dashes; the road lines are ink on light backgrounds and paper on ink.

- **Primary lockup:** emblem plus the `BOYOTA` wordmark on paper.
- **Reversed:** the same lockup on ink (`assets/emblem-reversed.svg`).
- **Emblem only:** white on an ember fill, for app icons and favicons (`assets/app-icon.svg`).

## Components

All targets are at least 44px tall. Icons are inline stroke SVGs: 24×24 viewBox, stroke 2–2.4, round caps, `currentColor`. The arrow `M5 12h14M13 6l6 6-6 6` means send, open and go. Don't use emoji.

- **Primary button:** 52px tall, pill, `bg-ember text-white`, Plex Sans 600 16px, padding 0 28px.
- **Secondary button:** 52px tall, pill, 2px `ink` border, transparent background.
- **Icon button (send):** 52px circle, `bg-ink` (or ember in the main chat input), white arrow. Needs `aria-label`.
- **Suggestion chip:** 40–44px tall, pill, 1px `line` border, `surface` background, 15px text. Clicking one sends it as a prompt.
- **Trim selector:** `rounded-trim` buttons in a `radiogroup`, Plex Mono name with a small blurb. Selected is `bg-ink` text white with blurb `on-ink-muted`; unselected is `surface` with a `line` border.
- **Color swatch:** 44px circle `radio`, 2px ring in `ink` when selected.
- **Spec tile:** `surface`, `rounded-card`, padding 24, a big Plex Mono number with a 14px `steel` label. The inverted version on `ink` is for the headline spec. Empty or unknown values get a dashed `line-dashed` border and show `[—]`.
- **Chat window:** `surface`, `rounded-window`, `shadow-window`, padding 24, gap 16. The input is a pill with a 2px `ink` border and the send button inside it. Below it, a 13px `steel` disclaimer: *"The assistant picks a page for you and can get it wrong. It never books or buys anything."*

### Accessibility

- **Focus:** every interactive element shows a 2px `ink` outline, offset 2px, on keyboard focus (`focusRing` / `linkFocusRing` in `components/boyota/styles.ts`). The chat input hides its own outline, so the pill around it takes the ring instead.
- **Announcements:** router states are read out from one visually hidden `role="status"` line; errors use `role="alert"`. Don't nest live regions, and don't rely on `aria-label` on a live region (only its text is read).
- **Motion:** with `prefers-reduced-motion: reduce`, the avatar shows a still shape per state instead of animating.
- **High contrast:** swatches keep their paint with `forced-color-adjust: none`; selected swatches and trims use the `Highlight` system color in forced-colors mode.
- **Labels:** the color and trim groups are labelled by their visible "Color" and "Trim" captions. Spec tiles are a `<dl>`: label first in the markup, number shown on top. `[—]` gets "Not available" for screen readers.
- **Ask again from product pages:** the header field and "Not quite the one?" are real inputs (typed or spoken, with mic and send buttons) that reroute from the current page; each has its own visually hidden status line and a `role="alert"` for errors. Product pages start with a "Skip to content" link.

### Chat bubbles and router states

These match the `POST /api/navigate` responses:

| State | Bubble |
| --- | --- |
| Assistant message | Left, `bg-paper`, radius `4px 16px 16px 16px` |
| User message | Right, `bg-ink text-white`, radius `16px 4px 16px 16px` |
| **Thinking** (request in flight) | Assistant bubble with three 8px `steel` dots at opacity 1 / 0.6 / 0.3, `role="status"` |
| **Routed** (`{ url, title }`) | `bg-lane-tint text-lane-deep`, weight 500, arrow icon, "Taking you to {title}", with an optional `bg-lane` "Open" pill |
| **No match** (`url: null`) | Normal assistant bubble: "I couldn't find a matching page. Try rephrasing?" |
| **Error** (502) | `bg-error-tint text-error-deep`: "Navigation is unavailable right now." |

## Voice

Short, plain and confident: "Built for the long way home." "Nothing you don't need." Never invent numbers; use placeholders like `[LE PRICE]` for real data you don't have.
