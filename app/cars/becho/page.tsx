import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BechoSilhouette } from "@/components/cars/becho/Silhouette";
import { becho } from "@/lib/cars/becho";

export const metadata: Metadata = {
  title: "Boyota Becho",
  description: becho.summary,
};

export default function BechoPage({ searchParams }: PageProps<"/cars/becho">) {
  return <ProductPage car={becho} silhouette={<BechoSilhouette />} searchParams={searchParams} />;
}
