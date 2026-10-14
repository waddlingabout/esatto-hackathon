import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const benza: Car = {
  slug: "benza",
  name: "Boyota Benza",
  model: "Benza",
  eyebrow: "2027 · Hybrid crossover wagon",
  summary:
    "The long, low crossover. A hybrid wagon-crossover with standard all-wheel drive, a quiet cabin and a big flat cargo floor.",
  tagline:
    "The comfort of a wagon, the ride height of a crossover. All-wheel-drive hybrid, standard, with space for the long weekend.",
  colors: [
    { id: "moss", name: "Moss Grey", hex: "#5E6A5A" },
    { id: "dune", name: "Dune Beige", hex: "#C8B79A" },
    { id: "midnight", name: "Midnight Navy", hex: "#1F2C44" },
    { id: "pearl", name: "Pearl White", hex: "#F0EFEA" },
  ],
  defaultColorId: "moss",
  trims: [
    { id: "le", name: "LE", blurb: "Well equipped", price: "$36,200", specs: { mpg: "40", cargo: "28.8" } },
    { id: "xle", name: "XLE", blurb: "Glass roof", price: "$40,650", specs: { mpg: "39", cargo: "28.8" } },
    { id: "limited", name: "Limited", blurb: "Every comfort", price: "$45,300", specs: { mpg: "39", cargo: "28.1" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "cargo", label: "cu ft behind the rear seats" },
    { key: "hp", value: "219", label: "horsepower, hybrid system" },
    { key: "awd", value: "AWD", label: "standard on every trim" },
  ],
  featuresHeading: "Made for the long weekend",
  features: [
    {
      icon: "leaf",
      title: "Hybrid AWD, standard",
      body: "A 2.5L hybrid with an electric motor on the rear axle. Grip in the rain, near 40 mpg on the highway.",
    },
    {
      icon: "seat",
      title: "A cabin that stays quiet",
      body: "Acoustic glass, thick door seals and reclining rear seats. Long drives feel shorter.",
    },
    {
      icon: "wrench",
      title: "A floor you can use",
      body: "Rear seats fold flat with one pull. Low load lip, under-floor bins and a power tailgate.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$36,200", "$40,650", "$45,300"], mono: true },
    { label: "Powertrain", values: ["2.5L hybrid, AWD", "2.5L hybrid, AWD", "2.5L hybrid, AWD"] },
    { label: "Combined mpg (est.)", values: ["40", "39", "39"], mono: true },
    { label: "Roof", values: ["Painted", "Fixed glass", "Dimming glass"] },
    { label: "Seats", values: ["Synthetic leather", "Heated, synthetic leather", "Heated and ventilated leather"] },
  ],
  askAgainPlaceholder: "Something small and cheap for the city…",
  pageSections: [
    {
      heading: "Cargo, measured",
      summary:
        "28.8 cu ft behind the rear seats, 55 cu ft folded flat, 1,500 lb tow rating, power tailgate with kick sensor on XLE and Limited.",
    },
  ],
};
