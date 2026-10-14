import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const birai: Car = {
  slug: "birai",
  name: "Boyota Birai",
  model: "Birai",
  eyebrow: "2027 · Fuel cell sedan",
  summary:
    "The hydrogen car. A fuel cell sedan that refuels in five minutes, drives like an EV and leaves only water behind.",
  tagline:
    "Fill up in five minutes, drive on electricity, and leave nothing behind but a little water. The quietest way across town.",
  colors: [
    { id: "vapor", name: "Vapor Silver", hex: "#B9BEC4" },
    { id: "deep-sea", name: "Deep Sea Blue", hex: "#1C3A5E" },
    { id: "obsidian", name: "Obsidian", hex: "#22252A" },
  ],
  defaultColorId: "vapor",
  trims: [
    { id: "xle", name: "XLE", blurb: "Longest range", price: "$50,900", specs: { range: "402" } },
    { id: "limited", name: "Limited", blurb: "Every comfort", price: "$54,400", specs: { range: "357" } },
    { id: "executive", name: "Executive", blurb: "Rear-seat lounge", price: "$59,800", specs: { range: "349" } },
  ],
  defaultTrimId: "xle",
  headlineSpecs: [
    { key: "range", label: "miles of range (est.)" },
    { key: "refuel", value: "5", label: "minutes to refuel" },
    { key: "hp", value: "182", label: "horsepower, electric drive" },
    { key: "fuel", value: "$15k", label: "of hydrogen included (sample)" },
  ],
  featuresHeading: "Electric driving, five-minute fill-ups",
  features: [
    {
      icon: "bolt",
      title: "Drives like an EV",
      body: "A fuel cell turns hydrogen into electricity for a rear motor. Silent, smooth, instant pull.",
    },
    {
      icon: "gauge",
      title: "No waiting to charge",
      body: "Three carbon-fiber tanks fill at the pump in about five minutes. Over 400 miles on a full fill.",
    },
    {
      icon: "leaf",
      title: "Water is the only exhaust",
      body: "No tailpipe emissions. A button on the dash lets you drain the water before you park indoors.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$50,900", "$54,400", "$59,800"], mono: true },
    { label: "Range (est., mi)", values: ["402", "357", "349"], mono: true },
    { label: "Wheels", values: ['19" alloy', '20" alloy', '20" alloy, two-tone'] },
    { label: "Seats", values: ["Heated, synthetic leather", "Heated and ventilated leather", "Reclining rear, massage"] },
    { label: "Driver assist", values: ["Boyota Guard 3.0", "Guard 3.0 + park assist", "Guard 3.0 + hands-free highway"] },
  ],
  askAgainPlaceholder: "Something rugged for dirt roads and camping…",
  pageSections: [
    {
      heading: "Where to fill up",
      summary:
        "Hydrogen stations are limited to a few regions, mostly California. Sample offer: up to $15,000 of hydrogen over 6 years, plus loaner cars for long trips.",
    },
  ],
};
