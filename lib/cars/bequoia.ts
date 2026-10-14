import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bequoia: Car = {
  slug: "bequoia",
  name: "Boyota Bequoia",
  model: "Bequoia",
  eyebrow: "2027 · Full-size SUV",
  summary:
    "The Boyota Bequoia: a full-size SUV with three real rows, eight seats and a hybrid V6 that tows a boat.",
  tagline:
    "Eight seats, a third row grown-ups can sit in and room for everyone's luggage behind it.",
  colors: [
    { id: "redwood", name: "Redwood", hex: "#7A2E22" },
    { id: "fog", name: "Coastal Fog", hex: "#B9BDBE" },
    { id: "evergreen", name: "Evergreen", hex: "#274236" },
    { id: "obsidian", name: "Obsidian", hex: "#16181B" },
  ],
  defaultColorId: "redwood",
  trims: [
    {
      id: "sr5",
      name: "SR5",
      blurb: "Eight seats, standard",
      price: "$61,200",
      specs: { seats: "8", cargo: "22.3", tow: "9,500" },
    },
    {
      id: "limited",
      name: "LIMITED",
      blurb: "Leather, three rows",
      price: "$69,800",
      specs: { seats: "8", cargo: "22.3", tow: "9,500" },
    },
    {
      id: "platinum",
      name: "PLATINUM",
      blurb: "Captain's chairs",
      price: "$78,400",
      specs: { seats: "7", cargo: "22.3", tow: "9,000" },
    },
  ],
  defaultTrimId: "sr5",
  headlineSpecs: [
    { key: "seats", label: "seats in three rows" },
    { key: "cargo", label: "cu ft behind the third row (est.)" },
    { key: "tow", label: "lb towing capacity (est.)" },
    { key: "hp", value: "437", label: "horsepower, hybrid V6 (est.)" },
  ],
  featuresHeading: "Room for everyone, and their stuff",
  features: [
    {
      icon: "seat",
      title: "A third row for adults",
      body: "Sliding second row, a power-folding third row and real legroom in the back. Eight seats on SR5 and LIMITED.",
    },
    {
      icon: "bolt",
      title: "Hybrid V6 torque",
      body: "A twin-turbo V6 with an electric motor in the transmission. 583 lb-ft for merging, climbing and towing (est.).",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Pre-collision braking, blind-spot monitoring and a trailer-aware rear camera come standard.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$61,200", "$69,800", "$78,400"], mono: true },
    { label: "Seating", values: ["8, cloth", "8, leather", "7, heated captain's chairs"] },
    { label: "Towing, lb (est.)", values: ["9,500", "9,500", "9,000"], mono: true },
    { label: "Third row", values: ["Manual fold", "Power fold", "Power fold, heated"] },
    { label: "Wheels", values: ['18" alloy', '20" alloy', '22" alloy'] },
    { label: "Rear entertainment", values: ["USB-C in every row", "Rear climate zone", "Twin rear screens"] },
  ],
  askAgainPlaceholder: "Something small and nimble for two…",
  pageSections: [
    {
      heading: "Three rows, measured",
      summary:
        "Third-row legroom 34.3 in (est.), 22.3 cu ft behind the third row, 86.9 cu ft with both rows folded (est.). Sliding second row with one-touch access to the back.",
    },
  ],
};
