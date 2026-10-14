import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bilux: Car = {
  slug: "bilux",
  name: "Boyota Bilux",
  model: "Bilux",
  eyebrow: "2027 · Work ute",
  summary:
    "The Boyota Bilux: a body-on-frame work ute with a 2.8L turbo diesel, a one-ton payload and a steel bed built for the farm.",
  tagline:
    "Built to be used, not admired. A 2.8L diesel, a one-ton payload and a steel bed that shrugs off fence posts, feed bags and gravel.",
  colors: [
    { id: "paddock", name: "Paddock White", hex: "#E9E8E2" },
    { id: "rust", name: "Red Dirt", hex: "#A4442A" },
    { id: "gum", name: "Gum Leaf Green", hex: "#5B6B4E" },
    { id: "bitumen", name: "Bitumen Grey", hex: "#45484C" },
  ],
  defaultColorId: "paddock",
  trims: [
    {
      id: "workmate",
      name: "Workmate",
      blurb: "Vinyl floors, steel wheels",
      price: "$29,900",
      specs: { payload: "2,200", towing: "7,000", hp: "201" },
    },
    {
      id: "sr",
      name: "SR",
      blurb: "Four-wheel drive, ready for the back paddock",
      price: "$35,400",
      specs: { payload: "2,100", towing: "7,700", hp: "201" },
    },
    {
      id: "sr5",
      name: "SR5",
      blurb: "Work all week, drive to town on Sunday",
      price: "$41,800",
      specs: { payload: "1,980", towing: "7,700", hp: "201" },
    },
  ],
  defaultTrimId: "workmate",
  headlineSpecs: [
    { key: "payload", label: "lb payload (est.)" },
    { key: "towing", label: "lb braked towing (est.)" },
    { key: "hp", label: "horsepower, 2.8L diesel" },
    { key: "bed", value: "7.5", label: "ft steel bed" },
  ],
  featuresHeading: "Made for mud, dust and early starts",
  features: [
    {
      icon: "wrench",
      title: "Easy to fix, hard to break",
      body: "A ladder frame, leaf springs and a diesel you can service in a shed. Parts at every Boyota dealer.",
    },
    {
      icon: "gauge",
      title: "Low-range four-wheel drive",
      body: "Part-time 4WD with a locking rear differential. Wet grass, creek crossings and steep tracks are just Tuesday.",
    },
    {
      icon: "seat",
      title: "A cab you can hose out",
      body: "Vinyl floors, wipe-clean seats and big knobs you can turn with gloves on.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$29,900", "$35,400", "$41,800"], mono: true },
    { label: "Drive", values: ["Rear-wheel drive", "Part-time 4WD, low range", "Part-time 4WD, rear locker"] },
    { label: "Payload, lb (est.)", values: ["2,200", "2,100", "1,980"], mono: true },
    { label: "Braked towing, lb (est.)", values: ["7,000", "7,700", "7,700"], mono: true },
    { label: "Cab", values: ["Single cab, 3 seats", "Extra cab, 4 seats", "Double cab, 5 seats"] },
    { label: "Wheels", values: ['16" steel', '17" steel, all-terrain tires', '18" alloy'] },
  ],
  askAgainPlaceholder: "Something smaller, just for city errands…",
  pageSections: [
    {
      heading: "Tray or tub",
      summary:
        "Choose a steel tub with tie-down rails, or a flat aluminum tray with drop sides for pallets, hay bales and fencing gear. Both carry the full payload.",
    },
  ],
};
