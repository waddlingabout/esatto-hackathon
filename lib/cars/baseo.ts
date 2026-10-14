import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const baseo: Car = {
  slug: "baseo",
  name: "Boyota Baseo",
  model: "Baseo",
  eyebrow: "2027 · Small convertible",
  summary:
    "Open air for the price of a hatchback. A small, light two-seat convertible with a manual soft top and a 1.5L engine.",
  tagline:
    "Pull the latch, push the top back, go. A small car, a small price and the whole sky for a roof.",
  colors: [
    { id: "sunny", name: "Sunny Yellow", hex: "#F2C230" },
    { id: "coral", name: "Coral Pop", hex: "#E8634A" },
    { id: "mint", name: "Seafoam Mint", hex: "#8FCBB8" },
    { id: "chalk", name: "Chalk White", hex: "#EDECE6" },
  ],
  defaultColorId: "sunny",
  trims: [
    { id: "base", name: "Base", blurb: "Top down, price down", price: "$19,450", specs: { price: "$19,450", hp: "106" } },
    { id: "s", name: "S", blurb: "A few nice things", price: "$21,900", specs: { price: "$21,900", hp: "106" } },
    { id: "club", name: "Club", blurb: "Power top, bigger wheels", price: "$24,300", specs: { price: "$24,300", hp: "118" } },
  ],
  defaultTrimId: "base",
  headlineSpecs: [
    { key: "price", label: "starting price" },
    { key: "hp", label: "horsepower" },
    { key: "top", value: "8", label: "seconds to drop the top" },
    { key: "weight", value: "2,190", label: "lb curb weight" },
  ],
  featuresHeading: "Small car, big sky",
  features: [
    {
      icon: "flag",
      title: "A top you can work with one hand",
      body: "One latch, one push. The fabric top folds behind the seats in eight seconds, no buttons needed.",
    },
    {
      icon: "gauge",
      title: "Light, so it's lively",
      body: "Under 2,200 lb with a 1.5L engine. It doesn't need much power to feel quick around town.",
    },
    {
      icon: "shield",
      title: "Roll hoops and Boyota Guard",
      body: "Fixed roll hoops behind each seat, plus pre-collision braking and lane departure warning on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$19,450", "$21,900", "$24,300"], mono: true },
    { label: "Top", values: ["Manual fabric", "Manual fabric, glass window", "Power fabric"] },
    { label: "Horsepower", values: ["106", "106", "118"], mono: true },
    { label: "Wheels", values: ['15" steel', '16" alloy', '17" alloy'] },
    { label: "Seats", values: ["Cloth", "Heated cloth", "Heated, wind deflector"] },
  ],
  askAgainPlaceholder: "Something with three rows for the whole family…",
  pageSections: [
    {
      heading: "Living with the top down",
      summary:
        "6.2 cu ft trunk that stays the same top up or down, a wind deflector on the Club trim, and a fabric top rated for drive-through car washes.",
    },
  ],
};
