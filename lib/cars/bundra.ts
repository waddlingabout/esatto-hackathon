import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bundra: Car = {
  slug: "bundra",
  name: "Boyota Bundra",
  model: "Bundra",
  eyebrow: "2027 · Full-size pickup",
  summary:
    "The Boyota Bundra: a full-size crew cab pickup with a twin-turbo V6 that tows up to 12,000 lb.",
  tagline:
    "Hitch it and forget it's there. A twin-turbo V6, a crew cab for five, and up to 12,000 pounds behind you.",
  colors: [
    { id: "ironwood", name: "Ironwood", hex: "#4A3F36" },
    { id: "midnight", name: "Midnight Steel", hex: "#22272E" },
    { id: "summit", name: "Summit White", hex: "#EEEEEB" },
    { id: "rust", name: "Brick Red", hex: "#8C2E22" },
  ],
  defaultColorId: "midnight",
  trims: [
    { id: "sr", name: "SR", blurb: "Ready to haul", price: "$46,900", specs: { tow: "8,300", hp: "348", torque: "405" } },
    { id: "platinum", name: "Platinum", blurb: "Long-haul comfort", price: "$61,400", specs: { tow: "11,200", hp: "389", torque: "479" } },
    { id: "summit", name: "Summit", blurb: "Maximum pull", price: "$68,900", specs: { tow: "12,000", hp: "389", torque: "479" } },
  ],
  defaultTrimId: "sr",
  headlineSpecs: [
    { key: "tow", label: "lb max towing (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "torque", label: "lb-ft of torque" },
    { key: "bed", value: "6.5", label: "ft bed, crew cab" },
  ],
  featuresHeading: "Made for what's behind it",
  features: [
    {
      icon: "gauge",
      title: "Twin-turbo V6",
      body: "A 3.4L twin-turbo V6 with a 10-speed automatic. Full torque low in the revs, where a trailer needs it.",
    },
    {
      icon: "screen",
      title: "See the whole trailer",
      body: "A 14-inch screen with trailer-view cameras, a hitch guide and blind-spot coverage that stretches to the trailer's length.",
    },
    {
      icon: "wrench",
      title: "Tow package, standard",
      body: "Factory hitch, integrated brake controller, 7-pin wiring and a transmission cooler on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$46,900", "$61,400", "$68,900"], mono: true },
    { label: "Engine", values: ["3.4L twin-turbo V6, 348 hp", "3.4L twin-turbo V6, 389 hp", "3.4L twin-turbo V6, 389 hp"] },
    { label: "Max towing, lb (est.)", values: ["8,300", "11,200", "12,000"], mono: true },
    { label: "Payload, lb (est.)", values: ["1,940", "1,710", "1,665"], mono: true },
    { label: "Drive", values: ["Rear-wheel drive, 4x4 optional", "4x4", "4x4, air suspension"] },
    { label: "Seats", values: ["Cloth, bench front", "Heated and ventilated leather", "Massaging leather, heated rear"] },
  ],
  askAgainPlaceholder: "Something small and easy to park in the city…",
  pageSections: [
    {
      heading: "Towing, made easy",
      summary:
        "Up to 12,000 lb (est.) on the Summit. Integrated brake controller, trailer-view cameras, hitch guide, trailer sway control and a tow/haul mode that holds gears on grades.",
    },
  ],
};
