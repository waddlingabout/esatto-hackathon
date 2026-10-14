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
// `description` plus the generated product details (lib/generated/product-index.json)
// is what the model routes on. `keywords` power the cheap pre-match, which fires only
// when the whole prompt is one keyword. Keep them unique per destination.
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
  {
    id: "bamry",
    path: "/cars/bamry",
    title: "Boyota Bamry",
    description:
      "Midsize gas sedan. Roomy back seat, big trunk, quiet and comfortable on long highway drives, a grown-up step up from a compact",
    keywords: ["bamry", "midsize", "roomy", "legroom", "road-trip"],
    examples: [
      "a bigger sedan with room for adults in the back",
      "something comfortable for long highway trips",
      "a step up from a small car, but not an SUV",
    ],
  },
  {
    id: "bav4",
    path: "/cars/bav4",
    title: "Boyota BAV4",
    description:
      "Compact SUV crossover. All-wheel drive, raised seating, flat cargo floor, handles snow and dirt roads but still easy to park in the city",
    keywords: ["bav4", "crossover", "awd", "all-wheel", "snow", "compact-suv"],
    examples: [
      "a small SUV that can handle snowy winters",
      "something with room for the dog and the bikes",
      "I want to sit higher but still park easily",
    ],
  },
  {
    id: "bighlander",
    path: "/cars/bighlander",
    title: "Boyota Bighlander",
    description:
      "Three-row family SUV. Seats seven or eight, easy third-row access, school runs, carpools and towing a small trailer",
    keywords: ["bighlander", "three-row", "3-row", "third-row", "7-seater", "school-run"],
    examples: [
      "we have three kids and need more seats",
      "an SUV with a third row for carpooling",
      "something big enough for the whole family and the luggage",
    ],
  },
  {
    id: "bacoma",
    path: "/cars/bacoma",
    title: "Boyota Bacoma",
    description:
      "Midsize pickup truck with a 5-foot bed and real 4x4. Garage-friendly truck for weekend projects, bikes, camping trips and towing a small boat",
    keywords: ["bacoma", "pickup", "truck", "small truck", "4x4 truck"],
    examples: [
      "I need a truck but not a huge one",
      "something with a bed for my mountain bikes",
      "a pickup that still fits in my garage",
    ],
  },
  {
    id: "bundra",
    path: "/cars/bundra",
    title: "Boyota Bundra",
    description:
      "Full-size crew cab pickup with a twin-turbo V6. Heavy towing up to 12,000 lb, trailers, campers, horse and boat trailers, big payloads",
    keywords: ["bundra", "towing", "tow", "trailer", "full-size truck", "camper", "heavy-duty"],
    examples: [
      "I need to pull a 10,000 pound camper",
      "the biggest truck you make",
      "something that can tow my boat and horse trailer",
    ],
  },
  {
    id: "bienna",
    path: "/cars/bienna",
    title: "Boyota Bienna",
    description:
      "Eight-seat minivan with power sliding doors. Family hauler for kids, school runs, carpools and road trips with lots of cargo room",
    keywords: ["bienna", "minivan", "sliding doors", "school run", "carpool"],
    examples: [
      "we have three kids and a dog",
      "something easy to get car seats in and out of",
      "a van for driving the whole soccer team",
    ],
  },
  {
    id: "b4runner",
    path: "/cars/b4runner",
    title: "Boyota B4Runner",
    description:
      "Body-on-frame off-road SUV. Rugged 4WD with low range, locking differentials, high ground clearance and skid plates for trails, rocks and mud; seats five",
    keywords: ["b4runner", "off-road", "offroad", "trails", "rock-crawling", "mud"],
    examples: [
      "something that can handle real dirt trails",
      "I want to go rock crawling on weekends",
      "an SUV that won't get stuck in the mud",
    ],
  },
  {
    id: "bandcruiser",
    path: "/cars/bandcruiser",
    title: "Boyota Band Cruiser",
    description:
      "Luxury overlander SUV. Full-time 4WD with leather comfort, long fuel range, roof tent and snorkel for remote expeditions and long-distance adventure travel",
    keywords: ["bandcruiser", "band cruiser", "overland", "overlanding", "expedition", "roof tent"],
    examples: [
      "a comfortable truck to drive across the desert",
      "I want to camp off the grid for weeks",
      "a luxury 4x4 that can go anywhere",
    ],
  },
  {
    id: "bequoia",
    path: "/cars/bequoia",
    title: "Boyota Bequoia",
    description:
      "Full-size 8-seat SUV. Three adult-sized rows, big cargo space and strong hybrid V6 towing for large families, road trips and pulling a boat",
    keywords: ["bequoia", "8-seater", "eight-seater", "full-size", "large family"],
    examples: [
      "we need room for eight people",
      "the biggest SUV you make",
      "something that fits the whole family and tows our boat",
    ],
  },
  {
    id: "bavalon",
    path: "/cars/bavalon",
    title: "Boyota Bavalon",
    description:
      "Full-size comfort sedan with a smooth V6. Quiet, plush ride, huge rear legroom, relaxed long-distance highway cruising for five adults",
    keywords: ["bavalon", "quiet", "plush", "comfort"],
    examples: [
      "a really comfortable car for long highway drives",
      "something quiet and smooth with lots of back seat room",
      "a big sedan my parents would like",
    ],
  },
  {
    id: "byaris",
    path: "/cars/byaris",
    title: "Boyota Byaris",
    description:
      "Subcompact city hatchback. Small, easy to park, tight turning circle, frugal and low cost for urban driving and short errands",
    keywords: ["byaris", "city", "urban", "parking", "subcompact", "small"],
    examples: [
      "something tiny that's easy to park downtown",
      "a little car for getting around the city",
      "I live on narrow streets and need a small car",
    ],
  },
  {
    id: "brown",
    path: "/cars/brown",
    title: "Boyota Brown",
    description:
      "Lifted executive sedan with standard all-wheel drive and hybrid power. Upscale, higher seating position, extra ground clearance, sedan instead of an SUV",
    keywords: ["brown", "executive", "lifted", "upscale", "prestige"],
    examples: [
      "a classy sedan that sits a bit higher",
      "something upscale for business but not an SUV",
      "a premium car with all-wheel drive that's easy to get in and out of",
    ],
  },
  {
    id: "bhr",
    path: "/cars/bhr",
    title: "Boyota B-HR",
    description:
      "Small hybrid crossover with a coupe roofline and two-tone roof. Funky, stylish, city-sized, easy to park, for young drivers who want something different",
    keywords: ["bhr", "b-hr", "funky", "quirky", "stylish", "subcompact crossover"],
    examples: [
      "a small crossover that doesn't look boring",
      "something fun and different for the city",
      "easy to park but sits up a bit higher",
    ],
  },
  {
    id: "benza",
    path: "/cars/benza",
    title: "Boyota Benza",
    description:
      "Hybrid wagon-crossover with standard all-wheel drive. Comfortable, quiet road-trip car with a big flat cargo floor, for couples and small families who want space without a big SUV",
    keywords: ["benza", "wagon", "estate", "road trip", "all-wheel drive"],
    examples: [
      "a comfortable car for long weekend trips",
      "I want a station wagon but a bit higher",
      "something with all-wheel drive that still gets good mileage",
    ],
  },
  {
    id: "birai",
    path: "/cars/birai",
    title: "Boyota Birai",
    description:
      "Hydrogen fuel cell sedan. Zero emissions, only water out the tailpipe, refuels in five minutes with 400 miles of range, for drivers near hydrogen stations",
    keywords: ["birai", "hydrogen", "fuel cell", "fcev", "zero emissions"],
    examples: [
      "do you make a hydrogen car",
      "zero emissions but I don't want to wait to charge",
      "a clean car that refuels as fast as gas",
    ],
  },
  {
    id: "bilux",
    path: "/cars/bilux",
    title: "Boyota Bilux",
    description:
      "Body-on-frame work ute with a diesel and a steel bed. Farm and job-site workhorse, one-ton payload, tough and easy to fix",
    keywords: ["bilux", "ute", "farm", "tradesman", "workhorse", "ranch"],
    examples: [
      "I need something for hauling feed and fence posts on the farm",
      "a tough work vehicle for my building business",
      "a no-frills ute I can hose out",
    ],
  },
  {
    id: "biace",
    path: "/cars/biace",
    title: "Boyota Biace",
    description:
      "High-roof full-size van. Cargo van for deliveries and tradies, or a passenger shuttle with seats for up to twelve",
    keywords: ["biace", "van", "cargo", "delivery", "shuttle", "minibus"],
    examples: [
      "I need a van for my delivery business",
      "something to carry twelve people to the airport",
      "a big box I can stand up in and fill with tools",
    ],
  },
  {
    id: "bentury",
    path: "/cars/bentury",
    title: "Boyota Bentury",
    description:
      "Long-wheelbase chauffeur limousine. Rear-seat comfort for executives and VIPs, reclining lounge, quiet V8 hybrid",
    keywords: ["bentury", "limousine", "limo", "chauffeur", "vip"],
    examples: [
      "a car for my driver to take me to meetings",
      "the most comfortable back seat you make",
      "something stately for official guests",
    ],
  },
  {
    id: "belica",
    path: "/cars/belica",
    title: "Boyota Belica",
    description:
      "Retro three-door hatch coupe. Vintage seventies styling, glass liftback hatch, fun and stylish, seats four",
    keywords: ["belica", "retro", "vintage", "hatchback", "liftback", "classic-style"],
    examples: [
      "something with old-school styling but modern safety",
      "a cool-looking hatchback with character",
      "I want a car that looks like it's from the 70s",
    ],
  },
  {
    id: "br2",
    path: "/cars/br2",
    title: "Boyota BR2",
    description:
      "Mid-engine two-seat roadster. Open-top convertible soft top, lightweight, agile handling, weekend top-down driving",
    keywords: ["br2", "roadster", "mid-engine", "two-seater", "open-top", "soft-top"],
    examples: [
      "a little two-seater for summer drives with the roof down",
      "a mid-engine car that isn't a supercar price",
      "something light and nimble just for me and a passenger",
    ],
  },
  {
    id: "bressida",
    path: "/cars/bressida",
    title: "Boyota Bressida",
    description:
      "Classic rear-wheel-drive sedan. Long hood, inline-six engine, refined and balanced, roomy for five",
    keywords: ["bressida", "rear-wheel-drive", "rwd", "inline-six", "straight-six", "classic-sedan"],
    examples: [
      "a proper rear-wheel-drive four door",
      "a smooth six-cylinder sedan with a long hood",
      "something like the old-school sport sedans with power to the back",
    ],
  },
  {
    id: "bjcruiser",
    path: "/cars/bjcruiser",
    title: "Boyota BJ Cruiser",
    description:
      "Boxy retro 4x4 with a V6, low range and a locking diff. Classic-styled, rugged, simple to fix, for trails, rock crawling and backcountry adventures",
    keywords: ["bjcruiser", "classic-looking", "boxy", "rugged"],
    examples: [
      "something with old-school looks that can actually go off-road",
      "a tough classic-style 4x4 I can fix myself",
      "a boxy truck like the ones from the 70s",
    ],
  },
  {
    id: "batrix",
    path: "/cars/batrix",
    title: "Boyota Batrix",
    description:
      "Tall five-door wagon with a flat load floor and roof rails. Lots of cargo space for bikes, surfboards, camping gear and hauling stuff",
    keywords: ["batrix", "gear", "bikes", "camping"],
    examples: [
      "I need to fit two mountain bikes in the back",
      "something practical for carrying my outdoor gear",
      "a car with a big boot that isn't an SUV",
    ],
  },
  {
    id: "becho",
    path: "/cars/becho",
    title: "Boyota Becho",
    description:
      "Small four-door economy hatchback, the lowest-priced Boyota. Budget car with low running costs, cheap insurance, for tight budgets and students",
    keywords: ["becho", "budget", "cheapest", "economy", "student", "inexpensive"],
    examples: [
      "what's the least expensive car you sell",
      "I only have about 15 grand to spend",
      "a basic car for a student",
    ],
  },
  {
    id: "balphard",
    path: "/cars/balphard",
    title: "Boyota Balphard",
    description:
      "Luxury people mover van. Chauffeured comfort, reclining lounge rear seats, VIP and executive transport, quiet first-class cabin",
    keywords: ["balphard", "luxury van", "chauffeured", "lounge seats", "executive van"],
    examples: [
      "a van that feels like flying first class",
      "something posh to ferry clients around in",
      "I want to be driven in the back and nap",
    ],
  },
  {
    id: "baseo",
    path: "/cars/baseo",
    title: "Boyota Baseo",
    description:
      "Cheap small two-seat convertible. Top-down summer fun on a budget, soft top, light and easy to park",
    keywords: ["baseo", "convertible", "cabrio", "soft top", "open top", "drop top"],
    examples: [
      "a cheap car where the roof comes off",
      "something fun for summer that won't break the bank",
      "a little two-seater for sunny days",
    ],
  },
  {
    id: "bercel",
    path: "/cars/bercel",
    title: "Boyota Bercel",
    description:
      "All-electric compact crossover (BEV). Battery only, no gas, long range, home and fast charging",
    keywords: ["bercel", "ev", "bev", "battery electric", "no gas", "charging"],
    examples: [
      "a fully electric car I can charge at home",
      "I never want to buy gas again",
      "what's your EV with the best range",
    ],
  },
] as const satisfies readonly Destination[];

export type DestinationId = (typeof destinations)[number]["id"];
