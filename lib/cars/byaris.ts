import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const byaris: Car = {
  slug: "byaris",
  name: "Boyota Byaris",
  model: "Byaris",
  eyebrow: "2027 · City hatchback",
  summary:
    "The small one. A subcompact city hatch with a tight turning circle, a frugal 1.5L engine and room for four.",
  tagline:
    "Short enough for any parking spot, tall enough to sit up straight. Made for narrow streets and quick errands.",
  colors: [
    { id: "citrus", name: "Citrus Yellow", hex: "#E8B923" },
    { id: "mint", name: "Mint Tram", hex: "#8FC9B0" },
    { id: "chalk", name: "Chalk White", hex: "#F0EFEA" },
    { id: "asphalt", name: "Asphalt Grey", hex: "#4A4E54" },
  ],
  defaultColorId: "citrus",
  trims: [
    { id: "l", name: "L", blurb: "Just the basics", price: "$17,950", specs: { mpg: "40", hp: "120" } },
    { id: "le", name: "LE", blurb: "City comforts", price: "$19,900", specs: { mpg: "39", hp: "120" } },
    { id: "xle", name: "XLE", blurb: "Small, not plain", price: "$22,400", specs: { mpg: "38", hp: "120" } },
  ],
  defaultTrimId: "l",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "hp", label: "horsepower" },
    { key: "length", value: "153", label: "inches long, bumper to bumper" },
    { key: "turning", value: "31.5", label: "ft turning circle" },
  ],
  featuresHeading: "Built for the tight spots",
  features: [
    {
      icon: "flag",
      title: "Parks where others circle",
      body: "153 inches long with a 31.5 ft turning circle. Parallel park in one go, U-turn on a side street.",
    },
    {
      icon: "gauge",
      title: "Sips, doesn't gulp",
      body: "A 1.5L three-cylinder and a CVT. Around 40 mpg, and a small tank that's cheap to fill.",
    },
    {
      icon: "screen",
      title: "Your phone, on the dash",
      body: "An 8-inch touchscreen with wireless phone mirroring, and a rear camera on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$17,950", "$19,900", "$22,400"], mono: true },
    { label: "Powertrain", values: ["1.5L gas, CVT", "1.5L gas, CVT", "1.5L gas, CVT"] },
    { label: "Combined mpg (est.)", values: ["40", "39", "38"], mono: true },
    { label: "Wheels", values: ['15" steel', '16" alloy', '17" alloy, two-tone'] },
    { label: "Parking help", values: ["Rear camera", "Rear camera, rear sensors", "360° camera, front and rear sensors"] },
  ],
  askAgainPlaceholder: "Something big enough for a family road trip…",
  pageSections: [
    {
      heading: "Small outside, sensible inside",
      summary:
        "Seats four adults or five in a pinch, 60/40 split-folding rear seats, 13.4 cu ft of cargo space behind them and a flat floor when folded. Fits in a compact parking space with room to open the doors.",
    },
  ],
};
