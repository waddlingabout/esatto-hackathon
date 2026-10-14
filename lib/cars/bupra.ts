import type { Car } from "./types";

export const bupra: Car = {
  slug: "bupra",
  name: "Boyota Bupra",
  model: "Bupra",
  eyebrow: "2027 · Sports coupe",
  tagline: "Low, light and rear-wheel drive. Built for the long way home.",
  colors: [
    { id: "ember-red", name: "Ember Red", hex: "#D9381E" },
    { id: "track-orange", name: "Track Orange", hex: "#F27A12" },
    { id: "graphite", name: "Graphite", hex: "#2B2F35" },
    { id: "frost-white", name: "Frost White", hex: "#ECECEA" },
  ],
  defaultColorId: "ember-red",
  trims: [
    {
      id: "gr",
      name: "GR",
      blurb: "Pure driving",
      price: "[GR PRICE]",
      specs: { zeroSixty: "4.1 s", hp: "382", topSpeed: "155", weight: "3,280" },
    },
    {
      id: "gr-premium",
      name: "GR Premium",
      blurb: "Grand touring",
      price: "[GR PREMIUM PRICE]",
      specs: { zeroSixty: "4.0 s", hp: "382", topSpeed: "155", weight: "3,360" },
    },
    {
      id: "gr-track",
      name: "GR Track",
      blurb: "Built for the circuit",
      price: "[GR TRACK PRICE]",
      specs: { zeroSixty: "3.8 s", hp: "402", topSpeed: "165", weight: "3,190" },
    },
  ],
  defaultTrimId: "gr",
  headlineSpecs: [
    { key: "zeroSixty", label: "0–60 mph (est.)" },
    { key: "hp", label: "Horsepower (est.)" },
    { key: "topSpeed", label: "Top speed, mph (est.)" },
    { key: "weight", label: "Curb weight, lb (est.)" },
  ],
  featuresHeading: "Made to be driven, not parked.",
  features: [
    {
      icon: "gauge",
      title: "Turbo straight-six",
      body: "A 3.0-liter inline-six with a flat torque curve. Pulls hard from low revs to the limiter.",
    },
    {
      icon: "wrench",
      title: "Balanced chassis",
      body: "Front-engine, rear-drive, near 50:50 weight split. Adaptive dampers and a limited-slip differential.",
    },
    {
      icon: "flag",
      title: "Track ready",
      body: "Big brakes, a cooling package and a built-in lap timer. Drive to the circuit, drive home.",
    },
  ],
  compareRows: [
    {
      label: "Starting price",
      values: ["[GR PRICE]", "[GR PREMIUM PRICE]", "[GR TRACK PRICE]"],
      mono: true,
    },
    {
      label: "Engine",
      values: ["3.0L turbo I6, 382 hp (est.)", "3.0L turbo I6, 382 hp (est.)", "3.0L turbo I6, 402 hp (est.)"],
    },
    {
      label: "Transmission",
      values: ["6-speed manual or 8-speed auto", "6-speed manual or 8-speed auto", "6-speed manual or 8-speed auto"],
    },
    { label: "0–60 mph (est.)", values: ["4.1 s", "4.0 s", "3.8 s"], mono: true },
    { label: "Wheels", values: ["18-inch alloy", "19-inch alloy", "19-inch forged"] },
    {
      label: "Extras",
      values: ["Launch control", "Leather seats, premium audio", "Carbon wing, track brakes"],
    },
  ],
  askAgainPlaceholder: "Something practical, with room for five…",
};
