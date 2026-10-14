export type Destination = {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
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
  },
  {
    id: "settings",
    path: "/settings",
    title: "Settings",
    description: "Account settings, change password, email, notifications",
    keywords: ["settings", "password", "account", "notifications"],
  },
] as const satisfies readonly Destination[];

export type DestinationId = (typeof destinations)[number]["id"];

export const FALLBACK_ID = "none";
