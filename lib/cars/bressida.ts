import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bressida: Car = {
  slug: "bressida",
  name: "Boyota Bressida",
  model: "Bressida",
  eyebrow: "2027 · Rear-drive sedan",
  summary:
    "The Boyota Bressida: a classic rear-wheel-drive sedan with a long hood, a smooth inline-six and room for five.",
  tagline:
    "Long hood, upright cabin, power to the back wheels. The sedan the way it used to be done, done properly.",
  colors: [
    { id: "midnight", name: "Midnight Navy", hex: "#1C2740" },
    { id: "champagne", name: "Champagne", hex: "#CDB98F" },
    { id: "oxblood", name: "Oxblood", hex: "#5C1F24" },
    { id: "pearl", name: "Pearl White", hex: "#EEEDE6" },
  ],
  defaultColorId: "midnight",
  trims: [
    { id: "base", name: "Base", blurb: "The straight six", price: "$41,500", specs: { hp: "282", zeroSixty: "5.9 s", mpg: "27" } },
    { id: "royal", name: "Royal", blurb: "Wood, leather, quiet", price: "$47,800", specs: { hp: "282", zeroSixty: "5.9 s", mpg: "27" } },
    { id: "gs", name: "GS", blurb: "A twin-turbo for the long way", price: "$55,300", specs: { hp: "368", zeroSixty: "4.7 s", mpg: "24" } },
  ],
  defaultTrimId: "base",
  headlineSpecs: [
    { key: "hp", label: "horsepower (est.)" },
    { key: "zeroSixty", label: "0–60 mph (est.)" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "split", value: "51:49", label: "front-to-rear weight split" },
  ],
  featuresHeading: "Power goes to the back. As it should.",
  features: [
    {
      icon: "gauge",
      title: "Inline-six, front to back",
      body: "A 3.0L straight-six sits behind the front axle and drives the rear wheels through an 8-speed automatic.",
    },
    {
      icon: "seat",
      title: "A back seat for adults",
      body: "A long wheelbase and a flat floor. Three across the back, and 15.2 cu ft of trunk behind them.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking, lane keeping and adaptive cruise on every trim, plus a rear-drive-tuned stability system.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$41,500", "$47,800", "$55,300"], mono: true },
    { label: "Engine", values: ["3.0L I6", "3.0L I6", "3.0L twin-turbo I6"] },
    { label: "Horsepower (est.)", values: ["282", "282", "368"], mono: true },
    { label: "Drive", values: ["Rear-wheel drive", "Rear-wheel drive", "Rear-wheel drive, limited-slip"] },
    { label: "Wheels", values: ['18" alloy', '18" multi-spoke chrome', '19" forged'] },
    { label: "Interior", values: ["Cloth and synthetic leather", "Semi-aniline leather, open-pore wood", "Leather, aluminum trim"] },
  ],
  askAgainPlaceholder: "Something smaller that sips fuel…",
  pageSections: [
    {
      heading: "Why rear-wheel drive",
      summary:
        "Front wheels steer, rear wheels push. Cleaner steering feel, a tighter turning circle and a balanced 51:49 weight split (est.).",
    },
  ],
};
