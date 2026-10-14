import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BatrixSilhouette } from "@/components/cars/batrix/Silhouette";
import { batrix } from "@/lib/cars/batrix";

export const metadata: Metadata = {
  title: "Boyota Batrix",
  description: batrix.summary,
};

export default function BatrixPage({ searchParams }: PageProps<"/cars/batrix">) {
  return <ProductPage car={batrix} silhouette={<BatrixSilhouette />} searchParams={searchParams} />;
}
