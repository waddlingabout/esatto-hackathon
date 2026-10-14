export type Destination = {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
  // Realistic user phrasings that should land here; rendered as few-shot examples.
  examples?: readonly string[];
};

// Single source of truth for where the router may send users.
// `description` is what the model routes on; `keywords` power the cheap pre-match.
// Keep keywords unique per destination so the pre-match stays unambiguous.
export const destinations = [
  {
    id: "home",
    path: "/",
    title: "Home",
    description: "Boyota start page with the chat assistant",
    keywords: ["home", "frontpage"],
    examples: ["take me back to the beginning", "go to the main page"],
  },
  {
    id: "borolla",
    path: "/cars/borolla",
    title: "Boyota Borolla",
    description:
      "Compact gas sedan. Affordable, reliable, practical everyday car for commuting, first car, seats five",
    keywords: ["borolla", "sedan", "affordable", "cheap", "reliable", "commuter", "commuting"],
    examples: [
      "a dependable car that won't cost much",
      "something simple for getting to work",
      "my first car",
    ],
  },
  {
    id: "bauris",
    path: "/cars/bauris",
    title: "Boyota Bauris",
    description:
      "Hybrid liftback, with a plug-in hybrid trim. Best fuel economy, high mpg, eco-friendly, electric driving",
    keywords: ["bauris", "hybrid", "plug-in", "eco", "electric", "mpg", "efficient"],
    examples: [
      "I want to save money on fuel",
      "something better for the environment",
      "can I drive on battery power",
    ],
  },
  {
    id: "bupra",
    path: "/cars/bupra",
    title: "Boyota Bupra",
    description:
      "Two-door sports coupe. Fast, powerful, performance driving, track days, manual transmission",
    keywords: ["bupra", "sporty", "sports", "fast", "coupe", "track", "performance", "manual"],
    examples: [
      "something fun to drive on weekends",
      "the quickest car you make",
      "I want a stick shift",
    ],
  },
] as const satisfies readonly Destination[];

export type DestinationId = (typeof destinations)[number]["id"];
