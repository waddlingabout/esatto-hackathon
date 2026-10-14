import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bhr: Car = {
  slug: "bhr",
  name: "Boyota B-HR",
  model: "B-HR",
  eyebrow: "2027 · Small crossover",
  summary:
    "The small crossover with a loud face. A city-sized hybrid with a coupe roofline, a two-tone roof and room for five.",
  tagline:
    "Small enough for any parking spot, odd enough to find again. A hybrid crossover that refuses to look like everything else.",
  colors: [
    { id: "citrus", name: "Citrus Pop", hex: "#E3B21C" },
    { id: "lagoon", name: "Lagoon Teal", hex: "#1F8A8A" },
    { id: "chalk", name: "Chalk White", hex: "#EEEDE8" },
    { id: "ember", name: "Ember Red", hex: "#D9381E" },
  ],
  defaultColorId: "citrus",
  trims: [
    { id: "xle", name: "XLE", blurb: "City ready", price: "$26,450", specs: { mpg: "50", hp: "138" } },
    { id: "nightshade", name: "Nightshade", blurb: "Blacked out", price: "$28,900", specs: { mpg: "49", hp: "138" } },
    { id: "limited", name: "Limited AWD", blurb: "All-weather", price: "$31,750", specs: { mpg: "46", hp: "149" } },
  ],
  defaultTrimId: "xle",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "hp", label: "horsepower, hybrid system" },
    { key: "turning", value: "34.8", label: "ft turning circle" },
    { key: "roof", value: "2", label: "tones, roof and body" },
  ],
  featuresHeading: "Small car, big opinions",
  features: [
    {
      icon: "leaf",
      title: "Hybrid, no plug",
      body: "A 1.8L hybrid that charges itself while you brake. Most city trips use barely any fuel.",
    },
    {
      icon: "flag",
      title: "Park it anywhere",
      body: "Short overhangs and a tight turning circle. Squeezes into gaps the bigger crossovers drive past.",
    },
    {
      icon: "screen",
      title: "Pick your roof",
      body: "Every color comes with a contrast roof at no extra cost. Black, white or matching, your call.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$26,450", "$28,900", "$31,750"], mono: true },
    { label: "Powertrain", values: ["1.8L hybrid, FWD", "1.8L hybrid, FWD", "2.0L hybrid, AWD"] },
    { label: "Combined mpg (est.)", values: ["50", "49", "46"], mono: true },
    { label: "Wheels", values: ['17" alloy', '18" alloy, black', '18" alloy, machined'] },
    { label: "Seats", values: ["Cloth", "Black sport cloth", "Heated, synthetic leather"] },
  ],
  askAgainPlaceholder: "Something with a pickup bed for weekend projects…",
  pageSections: [
    {
      heading: "Make it yours",
      summary:
        "Two-tone roof in black, white or body color at no extra cost, colored interior trim inserts, and a dealer accessory kit with roof bars and bike mounts.",
    },
  ],
};
