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
export const destinations = [
  {
    id: "home",
    path: "/",
    title: "Home",
    description: "Landing page, overview, start page",
    keywords: ["home", "start", "frontpage"],
    examples: ["take me back to the beginning", "go to the main page"],
  },
  {
    id: "settings",
    path: "/settings",
    title: "Settings",
    description: "Account settings, change password, email, notifications",
    keywords: ["settings", "password", "account", "notifications"],
    examples: [
      "how do I reset my password",
      "turn off email notifications",
      "I want to update my email address",
    ],
  },
] as const satisfies readonly Destination[];

export type DestinationId = (typeof destinations)[number]["id"];
