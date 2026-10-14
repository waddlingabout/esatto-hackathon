import type { Car } from "@/lib/cars/types";

// Figures are sample values for design purposes. Prices stay placeholders.
export const bienna: Car = {
  slug: "bienna",
  name: "Boyota Bienna",
  model: "Bienna",
  eyebrow: "2027 · Minivan",
  summary:
    "The Boyota Bienna: an eight-seat minivan with power sliding doors, a flat cargo floor and 36 mpg.",
  tagline:
    "Room for eight, and the doors open themselves. The easiest way to move a family, its gear, and the friends who came along.",
  colors: [
    { id: "slate", name: "Slate Blue", hex: "#4B5D73" },
    { id: "pearl", name: "Pearl White", hex: "#EFEFEC" },
    { id: "moss", name: "Moss Green", hex: "#4F5E47" },
    { id: "cocoa", name: "Cocoa", hex: "#5A463B" },
  ],
  defaultColorId: "slate",
  trims: [
    { id: "le", name: "LE", blurb: "Room for everyone", price: "$39,800", specs: { seats: "8", mpg: "36" } },
    { id: "xle", name: "XLE", blurb: "Easier every day", price: "$45,200", specs: { seats: "8", mpg: "36" } },
    { id: "lounge", name: "Lounge", blurb: "First class, second row", price: "$54,600", specs: { seats: "7", mpg: "35" } },
  ],
  defaultTrimId: "le",
  headlineSpecs: [
    { key: "seats", label: "seats, adults in the third row too" },
    { key: "mpg", label: "mpg combined (est.)" },
    { key: "cargo", value: "101", label: "cu ft of cargo, seats folded" },
    { key: "doors", value: "2", label: "power sliding doors" },
  ],
  featuresHeading: "Every seat is a good seat",
  features: [
    {
      icon: "seat",
      title: "Seats that slide, fold and vanish",
      body: "Second-row seats slide 25 inches. The third row folds flat into the floor with one pull.",
    },
    {
      icon: "leaf",
      title: "36 mpg, without trying",
      body: "A 2.5L hybrid comes standard. No plug, no new habits, and fewer stops on the road trip.",
    },
    {
      icon: "screen",
      title: "Eyes on the back row",
      body: "A ceiling camera shows the back seats on the main screen, and a cabin mic carries your voice to row three.",
    },
  ],
  compareRows: [
    { label: "Starting price", values: ["$39,800", "$45,200", "$54,600"], mono: true },
    { label: "Seats", values: ["8, cloth", "8, synthetic leather", "7, second-row captain's chairs with ottomans"] },
    { label: "Combined mpg (est.)", values: ["36", "36", "35"], mono: true },
    { label: "Sliding doors", values: ["Power", "Power, hands-free", "Power, hands-free"] },
    { label: "Rear entertainment", values: ["USB-C at every seat", "Ceiling camera, cabin mic", "11.6\" rear screen"] },
  ],
  askAgainPlaceholder: "Something low and fun for two…",
  pageSections: [
    {
      heading: "Living with eight seats",
      summary:
        "Third row folds flat into the floor, second row slides 25 in, 101 cu ft cargo with seats folded (est.), 16 cupholders, USB-C at every seat, hands-free power sliding doors.",
    },
  ],
};
