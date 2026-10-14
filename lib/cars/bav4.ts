import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bav4: Car = {
  slug: "bav4",
  name: "Boyota BAV4",
  model: "BAV4",
  eyebrow: "2027 · Compact SUV",
  summary:
    "The do-everything SUV. A compact crossover with all-wheel drive, a raised seat and a big flat cargo floor, sized for the city.",
  tagline:
    "Sits up high, parks small. All-wheel drive, a wide cargo floor and enough clearance for the dirt road to the cabin.",
  colors: [
    { id: "moss", name: "Moss Green", hex: "#4E5B3A" },
    { id: "frost", name: "Frost White", hex: "#E9EAE6" },
    { id: "lava", name: "Lava Orange", hex: "#C2532B" },
    { id: "iron", name: "Iron Grey", hex: "#4A4E54" },
  ],
  defaultColorId: "moss",
  trims: [
    { id: "le", name: "LE", blurb: "Simple and sure-footed", price: "$29,800", specs: { mpg: "30", cargo: "37.6" } },
    { id: "xle", name: "XLE", blurb: "AWD and the good stuff", price: "$32,900", specs: { mpg: "29", cargo: "37.6" } },
    { id: "trail", name: "TRAIL", blurb: "Lifted, with all-terrain tires", price: "$35,700", specs: { mpg: "27", cargo: "37.0" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "cargo", label: "cu ft behind the rear seats" },
    { key: "clearance", value: "8.6", label: "in of ground clearance" },
    { key: "seats", value: "5", label: "seats, raised and easy in" },
  ],
  featuresHeading: "Ready for the weekend",
  features: [
    {
      icon: "flag",
      title: "All-wheel drive that thinks ahead",
      body: "Sends power to the rear before the front slips. Snow, gravel and wet boat ramps stop being a question.",
    },
    {
      icon: "wrench",
      title: "A cargo floor that works",
      body: "Wide, flat and low, with tie-downs and a two-level floor. Bikes, dogs and flat-pack furniture all fit.",
    },
    {
      icon: "shield",
      title: "Boyota Guard 3.0",
      body: "Lane keeping, pre-collision braking and adaptive cruise come standard on every trim.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$29,800", "$32,900", "$35,700"], mono: true },
    { label: "Drive", values: ["Front-wheel drive", "All-wheel drive", "All-wheel drive, trail mode"] },
    { label: "Combined mpg (est.)", values: ["30", "29", "27"], mono: true },
    { label: "Ground clearance (in)", values: ["8.1", "8.1", "8.6"], mono: true },
    { label: "Roof", values: ["Plain", "Roof rails", "Roof rails, load-rated crossbars"] },
  ],
  askAgainPlaceholder: "Something lower and quicker, just two doors…",
  pageSections: [
    {
      heading: "What fits in the back",
      summary:
        "37.6 cu ft behind the rear seats, 69.8 cu ft folded, two-level cargo floor, 1,500 lb towing (est.) and roof rails from XLE up.",
    },
  ],
};
