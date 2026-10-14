import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const biace: Car = {
  slug: "biace",
  name: "Boyota Biace",
  model: "Biace",
  eyebrow: "2027 · Full-size van",
  summary:
    "The Boyota Biace: a high-roof van with a 2.8L diesel, as a cargo van for deliveries or with seats for up to twelve.",
  tagline:
    "A big box on wheels, and that's the point. Haul tools and parcels all week, or move a whole team at once.",
  colors: [
    { id: "fleet", name: "Fleet White", hex: "#EEEEEA" },
    { id: "signal", name: "Signal Silver", hex: "#A9ADB1" },
    { id: "courier", name: "Courier Blue", hex: "#24476E" },
    { id: "charcoal", name: "Charcoal", hex: "#33363B" },
  ],
  defaultColorId: "fleet",
  trims: [
    {
      id: "cargo",
      name: "Cargo",
      blurb: "Two seats and a lot of floor",
      price: "$38,500",
      specs: { cargo: "330", seats: "2", payload: "3,300" },
    },
    {
      id: "crew",
      name: "Crew",
      blurb: "Five seats, still a load bay",
      price: "$41,900",
      specs: { cargo: "210", seats: "5", payload: "2,950" },
    },
    {
      id: "commuter",
      name: "Commuter",
      blurb: "Twelve seats, sliding doors both sides",
      price: "$47,200",
      specs: { cargo: "48", seats: "12", payload: "2,500" },
    },
  ],
  defaultTrimId: "cargo",
  headlineSpecs: [
    { key: "cargo", label: "cu ft of load space" },
    { key: "seats", label: "seats" },
    { key: "payload", label: "lb payload (est.)" },
    { key: "height", value: "6.2", label: "ft interior height, stand up inside" },
  ],
  featuresHeading: "Built for the daily route",
  features: [
    {
      icon: "wrench",
      title: "A load bay that works",
      body: "A flat floor, twelve tie-down points and a rear door that swings 270° so a forklift can get close.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0, for big vehicles",
      body: "Pre-collision braking, blind-spot warning along the whole length and a crosswind assist for open roads.",
    },
    {
      icon: "screen",
      title: "Fleet-ready dash",
      body: "A touchscreen with phone mirroring, a built-in fleet tracker and a phone shelf where you can see it.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$38,500", "$41,900", "$47,200"], mono: true },
    { label: "Powertrain", values: ["2.8L diesel, 6-speed auto", "2.8L diesel, 6-speed auto", "2.8L diesel, 6-speed auto"] },
    { label: "Seats", values: ["2", "5", "12"], mono: true },
    { label: "Load space, cu ft", values: ["330", "210", "48"], mono: true },
    { label: "Side doors", values: ["One sliding, passenger side", "Two sliding", "Two sliding, power"] },
    { label: "Interior", values: ["Rubber floor, bulkhead", "Rubber floor, crew bench", "Carpet, rear climate"] },
  ],
  askAgainPlaceholder: "Something sporty, just for two…",
  pageSections: [
    {
      heading: "Fit it out your way",
      summary:
        "Factory shelving, roof racks, a ladder rack and a refrigerated box are available on the Cargo. Upfitter-ready wiring comes standard.",
    },
  ],
};
