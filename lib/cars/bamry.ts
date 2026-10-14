import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bamry: Car = {
  slug: "bamry",
  name: "Boyota Bamry",
  model: "Bamry",
  eyebrow: "2027 · Midsize sedan",
  summary:
    "The grown-up sedan. A roomy midsize four-door with a quiet 2.5L engine, a big trunk and space for five on long drives.",
  tagline:
    "More room, more quiet, more road. A 2.5L engine, a long wheelbase and a back seat adults actually like.",
  colors: [
    { id: "midnight", name: "Midnight Navy", hex: "#1F2B44" },
    { id: "pearl", name: "Pearl White", hex: "#F1F0EB" },
    { id: "bronze", name: "Dusk Bronze", hex: "#7A5A3C" },
    { id: "slate", name: "Slate Silver", hex: "#9AA0A6" },
  ],
  defaultColorId: "midnight",
  trims: [
    { id: "le", name: "LE", blurb: "Room to spare", price: "$28,400", specs: { mpg: "32", hp: "203" } },
    { id: "se", name: "SE", blurb: "Firmer, sharper", price: "$30,900", specs: { mpg: "31", hp: "203" } },
    { id: "xle", name: "XLE", blurb: "Quiet and plush", price: "$34,600", specs: { mpg: "30", hp: "203" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "trunk", value: "15.1", label: "cu ft of trunk space" },
    { key: "legroom", value: "38.0", label: "in of rear legroom" },
  ],
  featuresHeading: "Made for the long drive",
  features: [
    {
      icon: "seat",
      title: "A back seat for grown-ups",
      body: "A longer wheelbase means real legroom in the rear. Three adults, three hours, no complaints.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Lane keeping, pre-collision braking and adaptive cruise come standard on every trim.",
    },
    {
      icon: "gauge",
      title: "Quiet at speed",
      body: "Acoustic glass and extra insulation keep the highway hum down. The 2.5L does the rest without fuss.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$28,400", "$30,900", "$34,600"], mono: true },
    { label: "Powertrain", values: ["2.5L gas", "2.5L gas, sport-tuned", "2.5L gas"] },
    { label: "Combined mpg (est.)", values: ["32", "31", "30"], mono: true },
    { label: "Wheels", values: ['17" alloy', '18" alloy, black', '18" alloy, machined'] },
    { label: "Seats", values: ["Cloth", "Sport cloth", "Heated leather, ventilated front"] },
  ],
  askAgainPlaceholder: "Something taller, with all-wheel drive…",
  pageSections: [
    {
      heading: "Room in the back",
      summary:
        "38.0 in rear legroom, 15.1 cu ft trunk, 60/40 split-folding rear seat, rear vents and USB-C on every trim. Built for passengers, not just the driver.",
    },
  ],
};
