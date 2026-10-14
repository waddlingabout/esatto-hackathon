// Builds the router's product details layer. Runs before `next build`;
// rerun with `npm run collect:products` after changing lib/cars/*.
import { mkdirSync, writeFileSync } from "node:fs";
import { bauris } from "../lib/cars/bauris.ts";
import { borolla } from "../lib/cars/borolla.ts";
import { bupra } from "../lib/cars/bupra.ts";
import { destinations } from "../lib/destinations.ts";
import { buildProductIndex } from "../lib/product-index.ts";

const outDir = new URL("../lib/generated/", import.meta.url);
const outFile = new URL("product-index.json", outDir);

const index = buildProductIndex([borolla, bauris, bupra], destinations);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${JSON.stringify(index, null, 2)}\n`);

const counts = Object.entries(index).map(([id, d]) => `${id} (${Object.keys(d).length})`);
console.log(`[collect-products] wrote ${outFile.pathname}: ${counts.join(", ")}`);
