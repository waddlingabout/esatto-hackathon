import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bandcruiser: Car = {
  slug: "bandcruiser",
  name: "Boyota Band Cruiser",
  model: "Band Cruiser",
  eyebrow: "2027 · Luxury overlander",
  summary:
    "The Boyota Band Cruiser: a full-time 4WD luxury overlander with a twin-turbo V6, leather inside and the range to cross a continent.",
  tagline:
    "Leather seats, a fridge in the console and a fuel tank for the long empty stretches. Go anywhere, arrive rested.",
  colors: [
    { id: "dune", name: "Dune Beige", hex: "#C7B48F" },
    { id: "savanna", name: "Savanna Olive", hex: "#6B6A45" },
    { id: "midnight", name: "Midnight Slate", hex: "#2A3038" },
    { id: "pearl", name: "Desert Pearl", hex: "#EFEDE6" },
  ],
  defaultColorId: "dune",
  trims: [
    {
      id: "gx",
      name: "GX",
      blurb: "Expedition basics",
      price: "$72,500",
      specs: { range: "620", hp: "409", fording: "28" },
    },
    {
      id: "vx",
      name: "VX",
      blurb: "Leather and quiet",
      price: "$84,900",
      specs: { range: "620", hp: "409", fording: "28" },
    },
    {
      id: "expedition",
      name: "EXPEDITION",
      blurb: "Roof tent and long-range tank",
      price: "$96,400",
      specs: { range: "780", hp: "409", fording: "32" },
    },
  ],
  defaultTrimId: "vx",
  headlineSpecs: [
    { key: "range", label: "mi range on one tank (est.)" },
    { key: "hp", label: "horsepower (est.)" },
    { key: "fording", label: "in water fording depth (est.)" },
    { key: "tow", value: "8,000", label: "lb towing capacity (est.)" },
  ],
  featuresHeading: "Made for the long way across",
  features: [
    {
      icon: "flag",
      title: "Range for the empty map",
      body: "A 3.5L twin-turbo V6 and a long-range tank on EXPEDITION. Up to 780 miles between fuel stops (est.).",
    },
    {
      icon: "seat",
      title: "A lounge on stilts",
      body: "Ventilated leather, a cooled center console and a cabin quiet enough to talk at 70 mph on gravel.",
    },
    {
      icon: "screen",
      title: "Terrain you can see",
      body: "Multi-terrain cameras show what's under the front wheels. Pick sand, mud or rock and it sets the rest.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$72,500", "$84,900", "$96,400"], mono: true },
    { label: "Engine", values: ["3.5L twin-turbo V6", "3.5L twin-turbo V6", "3.5L twin-turbo V6"] },
    { label: "Range, mi (est.)", values: ["620", "620", "780"], mono: true },
    { label: "Seats", values: ["Cloth, 7 seats", "Ventilated leather, 7 seats", "Ventilated leather, 5 seats + cargo deck"] },
    { label: "Overland kit", values: ["Roof rails", "Roof rails, console fridge", "Roof tent, snorkel, dual batteries"] },
    { label: "Suspension", values: ["Coil springs", "Adaptive air", "Adaptive air, raised"] },
  ],
  askAgainPlaceholder: "Something small and easy to park in town…",
  pageSections: [
    {
      heading: "Overland kit",
      summary:
        "EXPEDITION adds a hard-shell roof tent, raised snorkel, dual-battery system with 120V outlets, a console fridge and a 36-gallon long-range tank (780 mi range est.).",
    },
  ],
};
