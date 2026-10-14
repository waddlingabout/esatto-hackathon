import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const b4runner: Car = {
  slug: "b4runner",
  name: "Boyota B4Runner",
  model: "B4Runner",
  eyebrow: "2027 · Off-road SUV",
  summary:
    "The Boyota B4Runner: a body-on-frame, 4x4 SUV with locking differentials, real ground clearance and room for five.",
  tagline:
    "A ladder frame, a low-range transfer case and a rear window that rolls down. Built for where the pavement ends.",
  colors: [
    { id: "canyon", name: "Canyon Clay", hex: "#B5643A" },
    { id: "lichen", name: "Lichen Green", hex: "#5C6B4E" },
    { id: "basalt", name: "Basalt Black", hex: "#1F2124" },
    { id: "salt-flat", name: "Salt Flat White", hex: "#E9E7E1" },
  ],
  defaultColorId: "canyon",
  trims: [
    {
      id: "sr5",
      name: "SR5",
      blurb: "The honest 4x4",
      price: "$41,300",
      specs: { clearance: "9.0", hp: "278", approach: "32°" },
    },
    {
      id: "trail",
      name: "TRAIL",
      blurb: "Lockers and skid plates",
      price: "$47,850",
      specs: { clearance: "9.6", hp: "278", approach: "33°" },
    },
    {
      id: "bro",
      name: "BRO",
      blurb: "Long-travel, all-terrain",
      price: "$55,900",
      specs: { clearance: "10.2", hp: "326", approach: "35°" },
    },
  ],
  defaultTrimId: "sr5",
  headlineSpecs: [
    { key: "clearance", label: "in of ground clearance (est.)" },
    { key: "hp", label: "horsepower (est.)" },
    { key: "approach", label: "approach angle (est.)" },
    { key: "tow", value: "6,000", label: "lb towing capacity (est.)" },
  ],
  featuresHeading: "Built for the end of the road",
  features: [
    {
      icon: "wrench",
      title: "Body-on-frame, on purpose",
      body: "A fully boxed ladder frame and a solid rear axle. It takes the rocks, the ruts and the years.",
    },
    {
      icon: "gauge",
      title: "Low range when you need it",
      body: "Part-time 4WD with a two-speed transfer case, crawl control and a locking rear differential.",
    },
    {
      icon: "shield",
      title: "Steel underneath",
      body: "Skid plates for the engine, transfer case and fuel tank. Rock rails on TRAIL and up.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$41,300", "$47,850", "$55,900"], mono: true },
    {
      label: "Engine",
      values: ["2.4L turbo I4", "2.4L turbo I4", "2.4L turbo I4 hybrid"],
    },
    { label: "Ground clearance, in (est.)", values: ["9.0", "9.6", "10.2"], mono: true },
    { label: "4WD", values: ["Part-time, low range", "Part-time, rear locker", "Full-time, front and rear lockers"] },
    { label: "Suspension", values: ["Standard", "Trail-tuned", "Long-travel remote-reservoir shocks"] },
    { label: "Tires", values: ['17" all-season', '17" all-terrain', '18" mud-terrain'] },
  ],
  askAgainPlaceholder: "Something smooth and quiet for the highway…",
  pageSections: [
    {
      heading: "Trail numbers",
      summary:
        "Approach angle up to 35° (est.), departure angle 26° (est.), 10.2 in ground clearance on BRO (est.), 32.6 in water fording depth. Solid rear axle with a locking differential.",
    },
  ],
};
