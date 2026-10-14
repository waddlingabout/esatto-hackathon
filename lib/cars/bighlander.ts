import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bighlander: Car = {
  slug: "bighlander",
  name: "Boyota Bighlander",
  model: "Bighlander",
  eyebrow: "2027 · Three-row SUV",
  summary:
    "The family SUV. Three rows, seats for eight, a turbo 2.4L engine and room for the whole school run plus the groceries.",
  tagline:
    "Everyone fits. Three real rows, eight seats, and a third row you can reach without folding yourself in half.",
  colors: [
    { id: "ocean", name: "Deep Ocean", hex: "#23415A" },
    { id: "sand", name: "Desert Sand", hex: "#C8B79A" },
    { id: "alpine", name: "Alpine White", hex: "#EEEFEC" },
    { id: "obsidian", name: "Obsidian", hex: "#24272B" },
  ],
  defaultColorId: "ocean",
  trims: [
    { id: "le", name: "LE", blurb: "Eight seats, sorted", price: "$40,200", specs: { seats: "8", hp: "265" } },
    { id: "xle", name: "XLE", blurb: "Captain's chairs", price: "$45,600", specs: { seats: "7", hp: "265" } },
    { id: "platinum", name: "Platinum", blurb: "Every comfort, every row", price: "$52,900", specs: { seats: "7", hp: "265" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "seats", label: "seats, three rows" },
    { key: "hp", label: "horsepower" },
    { key: "cargo", value: "16.0", label: "cu ft behind the third row" },
    { key: "tow", value: "5,000", label: "lb towing capacity" },
  ],
  featuresHeading: "Room for everyone you bring",
  features: [
    {
      icon: "seat",
      title: "A third row for people",
      body: "Second-row seats slide and tip with one hand. The back row has its own vents, cupholders and USB-C.",
    },
    {
      icon: "screen",
      title: "Keep an eye on the back",
      body: "A camera view of the rear rows on the main screen, so you can see who started it without turning around.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Lane keeping, pre-collision braking and adaptive cruise come standard on every trim, plus a rear-seat reminder.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$40,200", "$45,600", "$52,900"], mono: true },
    { label: "Second row", values: ["Bench, 3 seats", "Captain's chairs", "Heated captain's chairs"] },
    { label: "Seats", values: ["8", "7", "7"], mono: true },
    { label: "Drive", values: ["Front-wheel drive", "All-wheel drive", "All-wheel drive"] },
    { label: "Wheels", values: ['18" alloy', '20" alloy', '20" alloy, chrome'] },
  ],
  askAgainPlaceholder: "Something small and easy to park in the city…",
  pageSections: [
    {
      heading: "Every row, explained",
      summary:
        "Eight seats on LE or seven with captain's chairs, one-touch tip-and-slide to the third row, 16.0 cu ft behind row three, 84.3 cu ft with both rows folded, 5,000 lb towing.",
    },
  ],
};
