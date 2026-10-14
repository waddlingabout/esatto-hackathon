import type { IconName } from "@/components/boyota/icons";

export type CarColor = { id: string; name: string; hex: string };

export type Trim = {
  id: string;
  name: string; // shown in Plex Mono, e.g. "LE"
  blurb: string; // one short line under the name
  price: string; // made-up sample price, e.g. "$22,950"
  // Values shown in the ink spec band for this trim, keyed by HeadlineSpec.key.
  specs: Record<string, string>;
};

export type HeadlineSpec = {
  key: string; // looked up in Trim.specs; falls back to `value`
  value?: string; // fixed value when it doesn't vary by trim
  label: string;
};

export type Feature = { icon: IconName; title: string; body: string };

export type CompareRow = {
  label: string;
  values: string[]; // one per trim, same order as Car.trims
  mono?: boolean; // numbers and prices use Plex Mono
};

// Plain-text summary of a car-specific section rendered below the configurator.
export type PageSection = { heading: string; summary: string };

export type Car = {
  slug: string;
  name: string; // "Boyota Borolla"
  model: string; // "Borolla", the second line of the hero title
  eyebrow: string; // "2027 · Compact sedan"
  summary: string; // the page's meta description
  tagline: string;
  colors: CarColor[];
  defaultColorId: string;
  trims: Trim[];
  defaultTrimId: string;
  headlineSpecs: HeadlineSpec[];
  featuresHeading: string;
  features: Feature[];
  compareRows: CompareRow[];
  askAgainPlaceholder: string; // "Something bigger, with seven seats…"
  // Feeds the router's product index. Keep in sync with components/cars/<slug>/*.
  pageSections?: PageSection[];
};
