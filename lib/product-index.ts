// Type-only imports so scripts/collect-products.ts can run this under plain Node.
import type { Car } from "./cars/types";
import type { Destination } from "./destinations";

// Flat "dot.path": "value" facts about one product page.
export type ProductDetails = Record<string, string>;

// Destination id → details. Generated into lib/generated/product-index.json.
export type ProductIndex = Record<string, ProductDetails>;

export function flatten(value: unknown, prefix = "", out: ProductDetails = {}): ProductDetails {
  if (value === null || value === undefined) return out;
  if (typeof value === "object") {
    for (const [key, v] of Object.entries(value)) {
      flatten(v, prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  out[prefix] = String(value);
  return out;
}

// Everything a visitor could ask about, keyed by names they'd recognise. UI-only
// fields (hex values, icons, defaults, placeholders) are left out.
export function collectProductDetails(car: Car): ProductDetails {
  const specLabels = new Map(car.headlineSpecs.map((s) => [s.key, s.label]));
  return flatten({
    name: car.name,
    model: car.model,
    category: car.eyebrow,
    summary: car.summary,
    tagline: car.tagline,
    colors: car.colors.map((c) => c.name).join(", "),
    specs: Object.fromEntries(
      car.headlineSpecs.filter((s) => s.value).map((s) => [s.label, s.value]),
    ),
    trims: Object.fromEntries(
      car.trims.map((t) => [
        t.name,
        {
          blurb: t.blurb,
          price: t.price,
          ...Object.fromEntries(
            Object.entries(t.specs).map(([key, v]) => [specLabels.get(key) ?? key, v]),
          ),
        },
      ]),
    ),
    features: Object.fromEntries(car.features.map((f) => [f.title, f.body])),
    compare: Object.fromEntries(
      car.compareRows.map((r) => [
        r.label,
        Object.fromEntries(r.values.map((v, i) => [car.trims[i]?.name ?? String(i), v])),
      ]),
    ),
    sections: Object.fromEntries((car.pageSections ?? []).map((s) => [s.heading, s.summary])),
  });
}

// Pairs every car with its /cars/<slug> destination and fails on any mismatch,
// so a new page can't silently miss the router's details layer.
export function buildProductIndex(
  cars: readonly Car[],
  destinations: readonly Destination[],
): ProductIndex {
  const problems: string[] = [];
  const index: ProductIndex = {};
  const seenModels = new Set<string>();

  for (const car of cars) {
    const dest = destinations.find((d) => d.path === `/cars/${car.slug}`);
    if (!dest) problems.push(`car "${car.slug}" has no destination with path /cars/${car.slug}`);
    else index[dest.id] = collectProductDetails(car);

    // quickMatch routes on exact model names, so they must be unambiguous.
    const model = car.model.toLowerCase();
    if (seenModels.has(model)) problems.push(`model name "${car.model}" is used twice`);
    seenModels.add(model);
  }

  for (const d of destinations) {
    if (d.path.startsWith("/cars/") && !index[d.id]) {
      problems.push(`destination "${d.id}" (${d.path}) has no car data`);
    }
  }

  if (problems.length) throw new Error(`Product index is inconsistent:\n- ${problems.join("\n- ")}`);
  return index;
}
