import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const brown: Car = {
  slug: "brown",
  name: "Boyota Brown",
  model: "Brown",
  eyebrow: "2027 · Lifted executive sedan",
  summary:
    "The flagship sedan, raised. An executive four-door with extra ground clearance, standard all-wheel drive and a hybrid powertrain.",
  tagline:
    "Sedan manners, a higher seat and all-wheel drive. Arrive composed, whatever the driveway looks like.",
  colors: [
    { id: "obsidian", name: "Obsidian", hex: "#16181C" },
    { id: "bronze", name: "Oxford Bronze", hex: "#7A5A3A" },
    { id: "silver", name: "Platinum Silver", hex: "#B9BCC1" },
    { id: "forest", name: "Deep Forest", hex: "#24392F" },
  ],
  defaultColorId: "obsidian",
  trims: [
    { id: "xle", name: "XLE", blurb: "Raised, refined", price: "$36,800", specs: { hp: "236", mpg: "41" } },
    { id: "limited", name: "Limited", blurb: "The executive spec", price: "$41,500", specs: { hp: "236", mpg: "38" } },
    { id: "platinum", name: "Platinum", blurb: "Turbo and two-tone", price: "$46,900", specs: { hp: "340", mpg: "29" } },
  ],
  defaultTrimId: "xle",
  headlineSpecs: [
    { key: "hp", label: "horsepower, combined" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "clearance", value: "5.9", label: "in of ground clearance" },
    { key: "drive", value: "AWD", label: "standard on every trim" },
  ],
  featuresHeading: "Taller, without trying to be an SUV",
  features: [
    {
      icon: "seat",
      title: "A higher, easier seat",
      body: "The hip point sits nearly four inches above a regular sedan. Step in, not down.",
    },
    {
      icon: "bolt",
      title: "Hybrid, and all-wheel drive",
      body: "A 2.5L hybrid with a rear electric motor on every trim. Platinum adds a 2.4L turbo hybrid with 340 hp.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Adaptive cruise, lane centering, and a 360° camera to watch the curbs on 21-inch wheels.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$36,800", "$41,500", "$46,900"], mono: true },
    { label: "Powertrain", values: ["2.5L hybrid, AWD", "2.5L hybrid, AWD", "2.4L turbo hybrid, AWD"] },
    { label: "Combined mpg (est.)", values: ["41", "38", "29"], mono: true },
    { label: "Wheels", values: ['19" alloy', '21" alloy', '21" alloy, two-tone'] },
    { label: "Seats", values: ["Synthetic leather, heated", "Leather, heated and ventilated", "Leather, ventilated, rear heated"] },
  ],
  askAgainPlaceholder: "A cheap little car for getting around town…",
  pageSections: [
    {
      heading: "Executive rear seat",
      summary:
        "38 in of rear legroom, rear climate controls, heated rear seats on Platinum, and a panoramic glass roof on Limited and up. Hands-free trunk with 15.2 cu ft of space.",
    },
  ],
};
