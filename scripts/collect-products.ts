// Builds the router's product details layer. Runs before `next dev` and `next build`;
// rerun with `npm run collect:products` after changing lib/cars/*.
import { mkdirSync, writeFileSync } from "node:fs";
import { b4runner } from "../lib/cars/b4runner.ts";
import { bacoma } from "../lib/cars/bacoma.ts";
import { balphard } from "../lib/cars/balphard.ts";
import { bamry } from "../lib/cars/bamry.ts";
import { bandcruiser } from "../lib/cars/bandcruiser.ts";
import { baseo } from "../lib/cars/baseo.ts";
import { batrix } from "../lib/cars/batrix.ts";
import { bauris } from "../lib/cars/bauris.ts";
import { bav4 } from "../lib/cars/bav4.ts";
import { bavalon } from "../lib/cars/bavalon.ts";
import { becho } from "../lib/cars/becho.ts";
import { belica } from "../lib/cars/belica.ts";
import { bentury } from "../lib/cars/bentury.ts";
import { benza } from "../lib/cars/benza.ts";
import { bequoia } from "../lib/cars/bequoia.ts";
import { bercel } from "../lib/cars/bercel.ts";
import { bhr } from "../lib/cars/bhr.ts";
import { biace } from "../lib/cars/biace.ts";
import { bienna } from "../lib/cars/bienna.ts";
import { bighlander } from "../lib/cars/bighlander.ts";
import { bilux } from "../lib/cars/bilux.ts";
import { birai } from "../lib/cars/birai.ts";
import { bjcruiser } from "../lib/cars/bjcruiser.ts";
import { borolla } from "../lib/cars/borolla.ts";
import { br2 } from "../lib/cars/br2.ts";
import { bressida } from "../lib/cars/bressida.ts";
import { brown } from "../lib/cars/brown.ts";
import { bundra } from "../lib/cars/bundra.ts";
import { bupra } from "../lib/cars/bupra.ts";
import { byaris } from "../lib/cars/byaris.ts";
import { destinations } from "../lib/destinations.ts";
import { buildProductIndex } from "../lib/product-index.ts";

const outDir = new URL("../lib/generated/", import.meta.url);
const outFile = new URL("product-index.json", outDir);

const index = buildProductIndex(
  [
    borolla,
    bauris,
    bupra,
    bamry,
    bav4,
    bighlander,
    bacoma,
    bundra,
    bienna,
    b4runner,
    bandcruiser,
    bequoia,
    bavalon,
    byaris,
    brown,
    bhr,
    benza,
    birai,
    bilux,
    biace,
    bentury,
    belica,
    br2,
    bressida,
    bjcruiser,
    batrix,
    becho,
    balphard,
    baseo,
    bercel,
  ], destinations);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${JSON.stringify(index, null, 2)}\n`);

const counts = Object.entries(index).map(([id, d]) => `${id} (${Object.keys(d).length})`);
console.log(`[collect-products] wrote ${outFile.pathname}: ${counts.join(", ")}`);
