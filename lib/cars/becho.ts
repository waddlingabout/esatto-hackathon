import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const becho: Car = {
  slug: "becho",
  name: "Boyota Becho",
  model: "Becho",
  eyebrow: "2027 · Economy hatch",
  summary:
    "The lowest-priced Boyota. A small three-cylinder hatchback with four doors, low insurance and almost nothing to go wrong.",
  tagline:
    "Four doors, four seats and a price that starts with a one. Everything a car has to do, and not a dollar more.",
  colors: [
    { id: "paper", name: "Paper White", hex: "#F0EFEA" },
    { id: "pebble", name: "Pebble Grey", hex: "#8C9096" },
    { id: "tomato", name: "Tomato Red", hex: "#C9412E" },
  ],
  defaultColorId: "paper",
  trims: [
    { id: "j", name: "J", blurb: "Just the car", price: "$15,490", specs: { price: "$15,490", mpg: "40" } },
    { id: "ce", name: "CE", blurb: "Air and a screen", price: "$16,890", specs: { price: "$16,890", mpg: "40" } },
    { id: "le", name: "LE", blurb: "Alloys and cruise", price: "$18,250", specs: { price: "$18,250", mpg: "39" } },
  ],
  defaultTrimId: "j",
  headlineSpecs: [
    { key: "price", label: "starting price" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "hp", value: "98", label: "horsepower, 1.2L three-cylinder" },
    { key: "turn", value: "30.8", label: "ft turning circle" },
  ],
  featuresHeading: "Less car, less to pay for",
  features: [
    {
      icon: "leaf",
      title: "Small engine, small bills",
      body: "A 1.2L three-cylinder that sips regular gas. Smaller tires, cheaper brakes and one of the lowest insurance groups we sell.",
    },
    {
      icon: "shield",
      title: "Safety isn't an option",
      body: "Six airbags, pre-collision braking and lane departure warning on every Becho, including the cheapest one.",
    },
    {
      icon: "wrench",
      title: "Service in an hour",
      body: "Oil every 10,000 miles, a timing chain instead of a belt, and parts priced like it's still 2010.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$15,490", "$16,890", "$18,250"], mono: true },
    { label: "Transmission", values: ["5-speed manual", "CVT automatic", "CVT automatic"] },
    { label: "Combined mpg (est.)", values: ["40", "40", "39"], mono: true },
    { label: "Air conditioning", values: ["Optional", "Standard", "Standard"] },
    { label: "Infotainment", values: ["Radio, Bluetooth", '7" touchscreen', '7" touchscreen, wireless mirroring'] },
    { label: "Wheels", values: ['14" steel', '14" steel, covers', '15" alloy'] },
  ],
  askAgainPlaceholder: "Something roomier for long trips with the family…",
  pageSections: [
    {
      heading: "What it costs to run",
      summary:
        "About $6.50 a day in fuel at 40 mpg for a 30-mile round trip (est.), 3 yr / 36,000 mi warranty, 5 yr / 60,000 mi powertrain, 10k miles between services. The cheapest Boyota to buy and to keep.",
    },
  ],
};
