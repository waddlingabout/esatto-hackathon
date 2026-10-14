import type { Car } from "./types";

// Spec figures are sample values until real data exists.
export const bauris: Car = {
  slug: "bauris",
  name: "Boyota Bauris",
  model: "Bauris",
  eyebrow: "2027 · Hybrid liftback",
  tagline:
    "Fewer stops for fuel, more room for the rest. A slippery liftback that pulls away on electric and recharges as you brake.",
  colors: [
    { id: "lane-teal", name: "Lane Teal", hex: "#0F6E6A" },
    { id: "glacier-white", name: "Glacier White", hex: "#F1F0EC" },
    { id: "graphite", name: "Graphite", hex: "#3A3F46" },
    { id: "fjord-blue", name: "Fjord Blue", hex: "#2F4D74" },
  ],
  defaultColorId: "lane-teal",
  trims: [
    {
      id: "le",
      name: "LE",
      blurb: "Most efficient",
      price: "$28,650",
      specs: { mpg: "57", ev: "—", hp: "196" },
    },
    {
      id: "xle",
      name: "XLE",
      blurb: "More comfort",
      price: "$32,100",
      specs: { mpg: "52", ev: "—", hp: "196" },
    },
    {
      id: "limited",
      name: "Limited",
      blurb: "Plug-in hybrid",
      price: "$39,450",
      specs: { mpg: "50", ev: "44", hp: "220" },
    },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "mpg", label: "Combined mpg (est.)" },
    { key: "ev", label: "Electric-only range, miles (est.)" },
    { key: "hp", label: "Horsepower (est.)" },
    { key: "cargo", value: "26.6", label: "Cargo, cu ft (est.)" },
  ],
  featuresHeading: "Built to go further on less.",
  features: [
    {
      icon: "leaf",
      title: "Hybrid as standard",
      body: "Every Bauris pairs a petrol engine with an electric motor. No settings to learn. It just uses less.",
    },
    {
      icon: "plug",
      title: "Plug in if you want",
      body: "Limited adds a bigger battery and a charge port. Most daily drives can run on electric alone.",
    },
    {
      icon: "gauge",
      title: "Shaped for the wind",
      body: "A long, low roof and a cut-off tail let air slip past. That means less noise and fewer stops for fuel.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$28,650", "$32,100", "$39,450"], mono: true },
    { label: "Powertrain", values: ["Hybrid", "Hybrid", "Plug-in hybrid"] },
    { label: "Combined mpg (est.)", values: ["57", "52", "50"], mono: true },
    { label: "Electric-only range (est.)", values: ["—", "—", "44 mi"], mono: true },
    { label: "Wheels", values: ['17" aero', '17" aero', '19" alloy'] },
    { label: "Seats", values: ["Cloth", "Heated fabric", "Heated and ventilated leather"] },
  ],
  askAgainPlaceholder: "Something faster, with two doors…",
};
