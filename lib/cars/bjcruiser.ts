import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bjcruiser: Car = {
  slug: "bjcruiser",
  name: "Boyota BJ Cruiser",
  model: "BJ Cruiser",
  eyebrow: "2027 · Retro 4x4",
  summary:
    "A boxy, retro two-row 4x4 with a 4.0L V6, low-range transfer case and a locking rear differential.",
  tagline:
    "Flat glass, round lights and a real low range. It looks like 1975 and climbs like it means it.",
  colors: [
    { id: "sandstone", name: "Sandstone Beige", hex: "#C9B48A" },
    { id: "trail-blue", name: "Trail Blue", hex: "#3F7FA6" },
    { id: "moss", name: "Moss Green", hex: "#5B6B45" },
    { id: "chalk", name: "Chalk White", hex: "#E8E4DA" },
  ],
  defaultColorId: "sandstone",
  trims: [
    { id: "base", name: "Base", blurb: "Steel wheels, rubber floors", price: "$38,900", specs: { hp: "270", clearance: "9.6" } },
    { id: "trail", name: "Trail", blurb: "Locker and all-terrains", price: "$43,500", specs: { hp: "270", clearance: "10.2" } },
    { id: "heritage", name: "Heritage", blurb: "Two-tone, every comfort", price: "$48,250", specs: { hp: "270", clearance: "9.8" } },
  ],
  defaultTrimId: "trail",
  headlineSpecs: [
    { key: "hp", label: "horsepower, 4.0L V6" },
    { key: "clearance", label: "in of ground clearance" },
    { key: "approach", value: "36°", label: "approach angle" },
    { key: "wade", value: "27.5", label: "in wading depth" },
  ],
  featuresHeading: "Made for where the road ends",
  features: [
    {
      icon: "wrench",
      title: "Simple enough to fix on the trail",
      body: "A naturally aspirated V6, a solid rear axle and bolt-on fenders. Parts you can reach, with tools you already own.",
    },
    {
      icon: "flag",
      title: "Real low range",
      body: "A two-speed transfer case and a locking rear differential come standard from the Trail trim up.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking and adaptive cruise for the drive to the trailhead. Switch them off once you're there.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$38,900", "$43,500", "$48,250"], mono: true },
    { label: "Powertrain", values: ["4.0L V6, part-time 4WD", "4.0L V6, part-time 4WD", "4.0L V6, full-time 4WD"] },
    { label: "Ground clearance (in)", values: ["9.6", "10.2", "9.8"], mono: true },
    { label: "Rear locker", values: ["Optional", "Standard", "Standard"] },
    { label: "Tires", values: ['16" steel, highway', '17" alloy, all-terrain', '17" alloy, all-terrain'] },
    { label: "Roof", values: ["Painted", "Painted, with rack", "Contrast white"] },
  ],
  askAgainPlaceholder: "Something quieter for the highway, with three rows…",
  pageSections: [
    {
      heading: "Built to be kept",
      summary:
        "Body-on-frame with a galvanized ladder chassis, bolt-on body panels, washable rubber floors on Base, 5,000 lb towing (est.). Meant to run for decades, not lease cycles.",
    },
  ],
};
