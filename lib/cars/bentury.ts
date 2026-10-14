import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bentury: Car = {
  slug: "bentury",
  name: "Boyota Bentury",
  model: "Bentury",
  eyebrow: "2027 · Chauffeur limousine",
  summary:
    "The Boyota Bentury: a long-wheelbase chauffeur limousine with a quiet 5.0L V8 hybrid and a rear seat that reclines flat.",
  tagline:
    "Made for the back seat. A whisper-quiet V8 hybrid, a reclining rear lounge and a ride so calm you can sign papers on the way.",
  colors: [
    { id: "kamui", name: "Kamui Black", hex: "#16181B" },
    { id: "pearl", name: "Moonlit Pearl", hex: "#E6E3DA" },
    { id: "eternal", name: "Eternal Silver", hex: "#9EA2A6" },
    { id: "bordeaux", name: "Deep Bordeaux", hex: "#4A1E26" },
  ],
  defaultColorId: "kamui",
  trims: [
    {
      id: "executive",
      name: "Executive",
      blurb: "Four seats, all of them good",
      price: "$148,000",
      specs: { legroom: "45.3", hp: "425", noise: "58" },
    },
    {
      id: "state",
      name: "State",
      blurb: "Reclining rear lounge",
      price: "$172,500",
      specs: { legroom: "48.6", hp: "425", noise: "57" },
    },
    {
      id: "imperial",
      name: "Imperial",
      blurb: "Privacy partition, armored glass",
      price: "$219,000",
      specs: { legroom: "48.6", hp: "425", noise: "55" },
    },
  ],
  defaultTrimId: "executive",
  headlineSpecs: [
    { key: "legroom", label: "in of rear legroom" },
    { key: "hp", label: "horsepower, V8 hybrid (est.)" },
    { key: "noise", label: "dB at 60 mph (est.)" },
    { key: "wheelbase", value: "135", label: "in wheelbase" },
  ],
  featuresHeading: "Every detail faces the back seat",
  features: [
    {
      icon: "seat",
      title: "A rear seat that reclines flat",
      body: "Heated, cooled and massaging, with a fold-out footrest. The front passenger seat slides forward at a touch.",
    },
    {
      icon: "gauge",
      title: "A V8 you won't hear",
      body: "A 5.0L V8 hybrid pulls away on electric power alone. Air suspension reads the road ahead and smooths it out.",
    },
    {
      icon: "screen",
      title: "Control from the rear",
      body: "A rear touchpanel runs the climate, blinds, audio and seats. A desk folds out of the center console.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$148,000", "$172,500", "$219,000"], mono: true },
    { label: "Powertrain", values: ["5.0L V8 hybrid", "5.0L V8 hybrid", "5.0L V8 hybrid"] },
    { label: "Rear legroom, in", values: ["45.3", "48.6", "48.6"], mono: true },
    { label: "Rear seats", values: ["Heated, cooled", "Reclining lounge, massage", "Reclining lounge, massage"] },
    { label: "Cabin", values: ["Rear sunshades", "Rear desk, refrigerator", "Privacy partition, armored glass"] },
  ],
  askAgainPlaceholder: "Something I can drive myself, with off-road chops…",
  pageSections: [
    {
      heading: "Chauffeur package",
      summary:
        "A driver's display that shows the rear passenger's settings, a quiet-mode button that softens braking and shifts, and a door-close system that seals every door gently.",
    },
  ],
};
