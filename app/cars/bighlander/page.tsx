import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BighlanderSilhouette } from "@/components/cars/bighlander/Silhouette";
import { bighlander } from "@/lib/cars/bighlander";

export const metadata: Metadata = {
  title: "Boyota Bighlander",
  description: bighlander.summary,
};

export default function BighlanderPage({ searchParams }: PageProps<"/cars/bighlander">) {
  return (
    <ProductPage car={bighlander} silhouette={<BighlanderSilhouette />} searchParams={searchParams} />
  );
}
