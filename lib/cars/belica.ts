import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const belica: Car = {
  slug: "belica",
  name: "Boyota Belica",
  model: "Belica",
  eyebrow: "2027 · Hatch coupe",
  summary:
    "The Boyota Belica: a retro three-door hatch coupe with a lift-up glass hatch, a 2.0L engine and room for four.",
  tagline:
    "A seventies shape with today's manners. Long doors, a big glass hatch, and a back seat that's actually usable.",
  colors: [
    { id: "marigold", name: "Marigold", hex: "#E0A11B" },
    { id: "avocado", name: "Avocado", hex: "#6B7A3A" },
    { id: "cream", name: "Cream Soda", hex: "#EFE6D2" },
    { id: "rust", name: "Rust Brown", hex: "#8A4B2A" },
  ],
  defaultColorId: "marigold",
  trims: [
    { id: "st", name: "ST", blurb: "The original idea", price: "$27,400", specs: { hp: "169", mpg: "33" } },
    { id: "gt", name: "GT", blurb: "Stripes and a stiffer chassis", price: "$30,900", specs: { hp: "196", mpg: "31" } },
    { id: "liftback", name: "Liftback LX", blurb: "Every comfort, still retro", price: "$34,250", specs: { hp: "196", mpg: "31" } },
  ],
  defaultTrimId: "st",
  headlineSpecs: [
    { key: "hp", label: "horsepower" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "cargo", value: "22.4", label: "cu ft under the hatch" },
    { key: "seats", value: "4", label: "seats, with a real back row" },
  ],
  featuresHeading: "Old shape, new tricks",
  features: [
    {
      icon: "gauge",
      title: "Analog-look gauges",
      body: "Two round dials behind the wheel, drawn on a screen. Switch to a modern layout with one button.",
    },
    {
      icon: "seat",
      title: "Seats for four, hatch for the rest",
      body: "The rear seats fold flat and the glass hatch lifts high. A bike fits with the front wheel off.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking, lane keeping and adaptive cruise on every trim. The retro stops at the styling.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$27,400", "$30,900", "$34,250"], mono: true },
    { label: "Engine", values: ["2.0L gas", "2.0L gas, GT tune", "2.0L gas, GT tune"] },
    { label: "Horsepower", values: ["169", "196", "196"], mono: true },
    { label: "Transmission", values: ["CVT", "6-speed manual or CVT", "CVT"] },
    { label: "Wheels", values: ['17" steel with hubcaps', '18" slotted alloy', '18" polished alloy'] },
    { label: "Interior", values: ["Plaid cloth", "Plaid cloth, sport bolsters", "Heated, tan synthetic leather"] },
  ],
  askAgainPlaceholder: "Something taller, with all-wheel drive…",
  pageSections: [
    {
      heading: "Heritage details",
      summary:
        "Side stripes on GT, louvered rear quarter windows, slotted wheels and plaid cloth seats. Every piece is optional to delete.",
    },
  ],
};
