import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bacoma: Car = {
  slug: "bacoma",
  name: "Boyota Bacoma",
  model: "Bacoma",
  eyebrow: "2027 · Midsize pickup",
  summary:
    "The Boyota Bacoma: a midsize pickup with a 5-foot bed, 4x4 on every trim but one, and room to tow a small boat.",
  tagline:
    "A truck that fits in the garage. A 5-foot bed, real four-wheel drive, and enough pull for the boat or the bikes.",
  colors: [
    { id: "canyon", name: "Canyon Orange", hex: "#C2541F" },
    { id: "sagebrush", name: "Sagebrush", hex: "#7D8466" },
    { id: "basalt", name: "Basalt", hex: "#2F3236" },
    { id: "chalk", name: "Chalk White", hex: "#E9E7E1" },
  ],
  defaultColorId: "canyon",
  trims: [
    { id: "sr", name: "SR", blurb: "The honest truck", price: "$32,400", specs: { tow: "3,500", hp: "228", payload: "1,710" } },
    { id: "trail", name: "Trail", blurb: "Built for dirt", price: "$41,900", specs: { tow: "6,000", hp: "278", payload: "1,480" } },
    { id: "limited", name: "Limited", blurb: "Leather and a bed", price: "$47,500", specs: { tow: "6,500", hp: "278", payload: "1,520" } },
  ],
  defaultTrimId: "sr",
  headlineSpecs: [
    { key: "tow", label: "lb max towing (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "payload", label: "lb payload (est.)" },
    { key: "bed", value: "5.0", label: "ft bed, tie-downs included" },
  ],
  featuresHeading: "Small enough to park, tough enough to work",
  features: [
    {
      icon: "wrench",
      title: "A bed that earns its keep",
      body: "A composite bed that won't dent or rust, adjustable tie-downs, and a 120V outlet for tools or a fridge.",
    },
    {
      icon: "flag",
      title: "Four-wheel drive that means it",
      body: "Part-time 4x4 with low range and a locking rear differential. Crawl control on the Trail.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking, adaptive cruise and trailer sway control come standard on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$32,400", "$41,900", "$47,500"], mono: true },
    { label: "Engine", values: ["2.4L gas, 228 hp", "2.4L turbo, 278 hp", "2.4L turbo, 278 hp"] },
    { label: "Drive", values: ["Rear-wheel drive", "Part-time 4x4, locking rear diff", "Full-time 4x4"] },
    { label: "Max towing, lb (est.)", values: ["3,500", "6,000", "6,500"], mono: true },
    { label: "Wheels", values: ['17" steel', '17" alloy, all-terrain tires', '20" alloy'] },
    { label: "Seats", values: ["Cloth", "Water-resistant fabric", "Heated and ventilated leather"] },
  ],
  askAgainPlaceholder: "Something with seven seats for the family…",
  pageSections: [
    {
      heading: "What fits in the bed",
      summary:
        "5.0 ft bed, 1,710 lb max payload (est.), composite liner, adjustable tie-downs, 120V outlet. Fits two mountain bikes or a stack of plywood with the tailgate down.",
    },
  ],
};
