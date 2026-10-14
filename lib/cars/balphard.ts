import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const balphard: Car = {
  slug: "balphard",
  name: "Boyota Balphard",
  model: "Balphard",
  eyebrow: "2027 · Luxury people mover",
  summary:
    "The first-class cabin on wheels. A tall, quiet luxury van with reclining second-row lounge seats and a 2.5L hybrid.",
  tagline:
    "The back seat is the best seat. Two reclining lounge chairs, a hushed cabin and a ride that lets you sleep through the city.",
  colors: [
    { id: "pearl", name: "Opal Pearl", hex: "#E9E6DF" },
    { id: "obsidian", name: "Obsidian Black", hex: "#16181B" },
    { id: "champagne", name: "Champagne Mist", hex: "#B8A98C" },
    { id: "midnight", name: "Midnight Navy", hex: "#1F2A40" },
  ],
  defaultColorId: "pearl",
  trims: [
    { id: "z", name: "Z", blurb: "Seven in comfort", price: "$68,900", specs: { seats: "7", hp: "250", mpg: "32" } },
    { id: "executive", name: "Executive", blurb: "Lounge second row", price: "$84,500", specs: { seats: "6", hp: "250", mpg: "31" } },
    { id: "spacious", name: "Spacious Lounge", blurb: "Four seats, all first class", price: "$112,000", specs: { seats: "4", hp: "275", mpg: "29" } },
  ],
  defaultTrimId: "executive",
  headlineSpecs: [
    { key: "seats", label: "seats, every one heated" },
    { key: "hp", label: "horsepower, hybrid" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "legroom", value: "45.2", label: "in of second-row legroom" },
  ],
  featuresHeading: "Made for the people in the back",
  features: [
    {
      icon: "seat",
      title: "Lounge seats that lie back",
      body: "Power ottomans, heating, cooling and massage. The second row reclines nearly flat at the press of a button.",
    },
    {
      icon: "screen",
      title: "A ceiling screen and a quiet room",
      body: "A 14-inch rear display folds down from the roof. Laminated glass and thick insulation keep the road outside.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking, lane centering and a 360° camera come standard. The driver works less, too.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$68,900", "$84,500", "$112,000"], mono: true },
    { label: "Seating", values: ["7, bench third row", "6, lounge second row", "4, partition wall"] },
    { label: "Combined mpg (est.)", values: ["32", "31", "29"], mono: true },
    { label: "Second row", values: ["Heated captain's chairs", "Reclining, ottomans, massage", "Full recline, cooled, tray tables"] },
    { label: "Rear entertainment", values: ["Tablet holders", '14" ceiling screen', '14" screen, privacy glass'] },
  ],
  askAgainPlaceholder: "Something small and fun with the roof off…",
  pageSections: [
    {
      heading: "A cabin you can work in",
      summary:
        "Fold-out tables, wireless charging at every seat, a rear climate zone, privacy shades and a quiet-call mode that dims the audio up front.",
    },
  ],
};
