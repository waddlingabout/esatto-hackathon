import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bercel: Car = {
  slug: "bercel",
  name: "Boyota Bercel",
  model: "Bercel",
  eyebrow: "2027 · Electric compact crossover",
  summary:
    "No gas, ever. A fully battery-powered compact crossover with up to 310 miles of range and fast charging.",
  tagline:
    "Plug in at night, wake up full. A compact crossover with no tailpipe, a flat floor and range for the whole week.",
  colors: [
    { id: "volt", name: "Volt Teal", hex: "#2F8F8A" },
    { id: "cloud", name: "Cloud Grey", hex: "#C9CCCF" },
    { id: "slate", name: "Night Slate", hex: "#2C3138" },
    { id: "ice", name: "Ice White", hex: "#F0F1EF" },
  ],
  defaultColorId: "volt",
  trims: [
    { id: "standard", name: "Standard", blurb: "Front motor, city range", price: "$34,900", specs: { range: "240", hp: "201", charge: "30" } },
    { id: "long-range", name: "Long Range", blurb: "The week on one charge", price: "$39,500", specs: { range: "310", hp: "221", charge: "28" } },
    { id: "awd", name: "Dual Motor AWD", blurb: "Two motors, all weather", price: "$44,200", specs: { range: "285", hp: "338", charge: "28" } },
  ],
  defaultTrimId: "long-range",
  headlineSpecs: [
    { key: "range", label: "miles of range (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "charge", label: "min, 10–80% fast charge" },
    { key: "cargo", value: "26.4", label: "cu ft behind the rear seats" },
  ],
  featuresHeading: "Electric, without the homework",
  features: [
    {
      icon: "plug",
      title: "Charge at home or on the road",
      body: "A home wall charger fills it overnight. On a trip, a fast charger gets you from 10 to 80% in under half an hour.",
    },
    {
      icon: "bolt",
      title: "Instant, silent pull",
      body: "Full torque from a standstill and nothing to shift. One-pedal driving lets you slow down just by lifting off.",
    },
    {
      icon: "screen",
      title: "Route planning that knows the chargers",
      body: "The navigation adds charging stops for you and warms the battery on the way, so every stop is quick.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$34,900", "$39,500", "$44,200"], mono: true },
    { label: "Drive", values: ["Front motor", "Front motor", "Dual motor, all-wheel"] },
    { label: "Range (est., mi)", values: ["240", "310", "285"], mono: true },
    { label: "Battery (kWh)", values: ["58", "77", "77"], mono: true },
    { label: "Extras", values: ["Heat pump", "Heat pump, glass roof", "Heat pump, glass roof, tow hitch"] },
  ],
  askAgainPlaceholder: "A big pickup for towing…",
  pageSections: [
    {
      heading: "Charging and battery",
      summary:
        "Level 2 home charging in about 7.5 hours, 150 kW DC fast charging, 8 yr / 100,000 mi battery warranty, and two years of free public charging.",
    },
  ],
};
