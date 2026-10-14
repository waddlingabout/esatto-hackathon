import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bavalon: Car = {
  slug: "bavalon",
  name: "Boyota Bavalon",
  model: "Bavalon",
  eyebrow: "2027 · Full-size sedan",
  summary:
    "The quiet one. A full-size comfort sedan with a smooth V6, a soft ride and limousine legroom in the back.",
  tagline:
    "A long wheelbase, a hushed cabin and a ride that irons out the road. Five adults, no one asking how much longer.",
  colors: [
    { id: "midnight", name: "Midnight Sapphire", hex: "#1F2A44" },
    { id: "pearl", name: "Pearl Ivory", hex: "#EDE8DC" },
    { id: "pewter", name: "Pewter Mist", hex: "#8C9096" },
    { id: "bordeaux", name: "Bordeaux", hex: "#5C1F2B" },
  ],
  defaultColorId: "midnight",
  trims: [
    { id: "xle", name: "XLE", blurb: "Quiet and complete", price: "$38,500", specs: { hp: "301", mpg: "26" } },
    { id: "touring", name: "Touring", blurb: "Adaptive ride", price: "$42,900", specs: { hp: "301", mpg: "25" } },
    { id: "limited", name: "Limited", blurb: "Every comfort, twice", price: "$47,600", specs: { hp: "301", mpg: "25" } },
  ],
  defaultTrimId: "xle",
  headlineSpecs: [
    { key: "hp", label: "horsepower, 3.5L V6" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "legroom", value: "40.9", label: "in of rear legroom" },
    { key: "seats", value: "5", label: "seats, all of them good ones" },
  ],
  featuresHeading: "Made for the long, smooth miles",
  features: [
    {
      icon: "seat",
      title: "A back seat worth riding in",
      body: "Rear legroom you can cross your legs in, heated outboard seats and a reclining rear bench on Limited.",
    },
    {
      icon: "gauge",
      title: "A V6 that never raises its voice",
      body: "301 hp delivered quietly through an 8-speed automatic. Acoustic glass keeps the highway outside.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Adaptive cruise with stop-and-go, blind-spot alert and pre-collision braking on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$38,500", "$42,900", "$47,600"], mono: true },
    { label: "Powertrain", values: ["3.5L V6", "3.5L V6", "3.5L V6"] },
    { label: "Combined mpg (est.)", values: ["26", "25", "25"], mono: true },
    { label: "Suspension", values: ["Comfort-tuned", "Adaptive dampers", "Adaptive dampers"] },
    { label: "Seats", values: ["Synthetic leather, heated", "Leather, heated and ventilated", "Semi-aniline leather, massaging front"] },
  ],
  askAgainPlaceholder: "Something small and easy to park in the city…",
  pageSections: [
    {
      heading: "The quiet cabin",
      summary:
        "Acoustic laminated front and side glass, active noise cancellation through the audio system, and extra sound deadening in the floor and wheel wells. Rear seats recline on Limited.",
    },
  ],
};
