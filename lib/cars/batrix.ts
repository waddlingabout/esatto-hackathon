import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const batrix: Car = {
  slug: "batrix",
  name: "Boyota Batrix",
  model: "Batrix",
  eyebrow: "2027 · Tall wagon",
  summary:
    "A tall five-door wagon with a flat load floor, fold-flat seats and 68 cu ft of space for bikes, boards and gear.",
  tagline:
    "A square back, a low floor and seats that fold flat. If it fits through the door, it fits in the Batrix.",
  colors: [
    { id: "basalt", name: "Basalt Grey", hex: "#4A4E54" },
    { id: "spruce", name: "Spruce Green", hex: "#2F5A4A" },
    { id: "signal", name: "Signal Orange", hex: "#E0702A" },
    { id: "salt", name: "Salt White", hex: "#EEEEEA" },
  ],
  defaultColorId: "spruce",
  trims: [
    { id: "l", name: "L", blurb: "Space first", price: "$24,600", specs: { cargo: "68.2", mpg: "32" } },
    { id: "xr", name: "XR", blurb: "Rails, rack and AWD", price: "$28,300", specs: { cargo: "68.2", mpg: "30" } },
    { id: "xr-trek", name: "XR Trek", blurb: "Lifted, for dirt roads", price: "$31,150", specs: { cargo: "66.8", mpg: "29" } },
  ],
  defaultTrimId: "xr",
  headlineSpecs: [
    { key: "cargo", label: "cu ft, rear seats folded" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "floor", value: "24.6", label: "in load floor height" },
    { key: "length", value: "6.4", label: "ft flat floor, seats down" },
  ],
  featuresHeading: "Room for the whole weekend",
  features: [
    {
      icon: "seat",
      title: "Seats that fold flat, one hand",
      body: "Pull a strap and the 60/40 rear seats drop flush with the floor. Front passenger seat folds too, for 9-foot boards.",
    },
    {
      icon: "wrench",
      title: "Tie it down anywhere",
      body: "Eight floor anchors, a wipe-clean cargo liner and roof rails rated for 165 lb of bikes, boxes or a tent.",
    },
    {
      icon: "gauge",
      title: "Light on fuel, even loaded",
      body: "A 2.0L engine with a smooth CVT, and available all-wheel drive for the gravel road to the campsite.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$24,600", "$28,300", "$31,150"], mono: true },
    { label: "Drive", values: ["Front-wheel drive", "All-wheel drive", "All-wheel drive, +1.2 in lift"] },
    { label: "Combined mpg (est.)", values: ["32", "30", "29"], mono: true },
    { label: "Max cargo (cu ft)", values: ["68.2", "68.2", "66.8"], mono: true },
    { label: "Roof", values: ["Bare", "Rails", "Rails and crossbars"] },
    { label: "Cargo area", values: ["Carpet", "Rubber liner", "Rubber liner, 12V outlet"] },
  ],
  askAgainPlaceholder: "Something small and quick to park in the city…",
  pageSections: [
    {
      heading: "What fits in the back",
      summary:
        "Two mountain bikes with front wheels on, a 9 ft surfboard with the passenger seat folded, or a full camping kit for four. 41.5 in wide between the wheel wells, 39 in tall tailgate opening.",
    },
  ],
};
