import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const br2: Car = {
  slug: "br2",
  name: "Boyota BR2",
  model: "BR2",
  eyebrow: "2027 · Mid-engine roadster",
  summary:
    "The Boyota BR2: a light two-seat roadster with the engine behind the seats and a soft top that folds in 12 seconds.",
  tagline: "Two seats, no roof, engine right behind you. The shortest way to a good mood.",
  colors: [
    { id: "signal-yellow", name: "Signal Yellow", hex: "#F2C230" },
    { id: "racing-green", name: "Racing Green", hex: "#1F4D3A" },
    { id: "ember-red", name: "Ember Red", hex: "#D9381E" },
    { id: "silverstone", name: "Silverstone", hex: "#B8BCC0" },
  ],
  defaultColorId: "signal-yellow",
  trims: [
    {
      id: "s",
      name: "S",
      blurb: "Top down, light and simple",
      price: "$38,900",
      specs: { hp: "228", zeroSixty: "5.2 s", weight: "2,420" },
    },
    {
      id: "sr",
      name: "SR",
      blurb: "Sharper and stiffer",
      price: "$43,600",
      specs: { hp: "255", zeroSixty: "4.8 s", weight: "2,450" },
    },
    {
      id: "spyder",
      name: "Spyder",
      blurb: "Every gram counted",
      price: "$49,800",
      specs: { hp: "268", zeroSixty: "4.5 s", weight: "2,360" },
    },
  ],
  defaultTrimId: "s",
  headlineSpecs: [
    { key: "hp", label: "Horsepower (est.)" },
    { key: "zeroSixty", label: "0–60 mph (est.)" },
    { key: "weight", label: "Curb weight, lb (est.)" },
    { key: "roof", value: "12 s", label: "to fold the soft top" },
  ],
  featuresHeading: "The engine sits where you can hear it.",
  features: [
    {
      icon: "wrench",
      title: "Mid-engine layout",
      body: "A 1.8L turbo four behind the seats. Low polar inertia, so the car turns the moment you do.",
    },
    {
      icon: "gauge",
      title: "Light on purpose",
      body: "An aluminum tub and a fabric roof keep the base car under 2,500 lb. No big screen, no extra motors.",
    },
    {
      icon: "flag",
      title: "Roof down at a red light",
      body: "The soft top folds in 12 seconds at up to 30 mph. Two small trunks, front and back, take a weekend bag each.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$38,900", "$43,600", "$49,800"], mono: true },
    { label: "Engine", values: ["1.8L turbo I4, 228 hp (est.)", "1.8L turbo I4, 255 hp (est.)", "1.8L turbo I4, 268 hp (est.)"] },
    { label: "Transmission", values: ["6-speed manual", "6-speed manual or 7-speed dual-clutch", "7-speed dual-clutch"] },
    { label: "0–60 mph (est.)", values: ["5.2 s", "4.8 s", "4.5 s"], mono: true },
    { label: "Curb weight, lb (est.)", values: ["2,420", "2,450", "2,360"], mono: true },
    { label: "Roof", values: ["Manual soft top", "Power soft top", "Removable targa panel"] },
  ],
  askAgainPlaceholder: "Something with a back seat and a big trunk…",
  pageSections: [
    {
      heading: "Two trunks",
      summary:
        "4.9 cu ft up front and 5.3 cu ft behind the engine (est.). Enough for two soft weekend bags; the roof never eats into either.",
    },
  ],
};
