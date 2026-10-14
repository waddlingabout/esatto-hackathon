import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const borolla: Car = {
  slug: "borolla",
  name: "Boyota Borolla",
  model: "Borolla",
  eyebrow: "2027 · Compact sedan",
  tagline:
    "The car you forget about — because it just keeps going. A simple 2.0L engine, room for five, and nothing you don't need.",
  colors: [
    { id: "ember", name: "Ember Red", hex: "#D9381E" },
    { id: "glacier", name: "Glacier White", hex: "#ECEDEA" },
    { id: "graphite", name: "Graphite", hex: "#3A3F46" },
    { id: "harbor", name: "Harbor Blue", hex: "#2E4F7A" },
  ],
  defaultColorId: "ember",
  trims: [
    { id: "le", name: "LE", blurb: "The essentials", price: "[LE PRICE]", specs: { mpg: "35", hp: "169" } },
    { id: "se", name: "SE", blurb: "Sport-tuned", price: "[SE PRICE]", specs: { mpg: "34", hp: "169" } },
    { id: "xse", name: "XSE", blurb: "Every comfort", price: "[XSE PRICE]", specs: { mpg: "33", hp: "169" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "trunk", value: "13.1", label: "cu ft of trunk space" },
    { key: "seats", value: "5", label: "seats, adults in all of them" },
  ],
  featuresHeading: "Built for the long way home",
  features: [
    {
      icon: "gauge",
      title: "Gas, and nothing to learn",
      body: "A 2.0L engine and a smooth automatic. Fill up, drive, repeat. No plugs, no new habits.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Lane keeping, pre-collision braking and adaptive cruise come standard on every trim.",
    },
    {
      icon: "screen",
      title: "A screen that stays out of the way",
      body: "A touchscreen with wireless phone mirroring, and real buttons for the climate.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["[LE PRICE]", "[SE PRICE]", "[XSE PRICE]"], mono: true },
    { label: "Powertrain", values: ["2.0L gas", "2.0L gas, sport-tuned", "2.0L gas"] },
    { label: "Combined mpg (est.)", values: ["35", "34", "33"], mono: true },
    { label: "Wheels", values: ['16" steel', '18" alloy', '18" alloy, black'] },
    { label: "Seats", values: ["Cloth", "Sport cloth", "Heated, synthetic leather"] },
  ],
  askAgainPlaceholder: "Something bigger, with seven seats…",
};
