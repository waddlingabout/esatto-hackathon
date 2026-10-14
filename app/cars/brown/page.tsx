import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BrownSilhouette } from "@/components/cars/brown/Silhouette";
import { brown } from "@/lib/cars/brown";

export const metadata: Metadata = {
  title: "Boyota Brown",
  description: brown.summary,
};

export default function BrownPage({ searchParams }: PageProps<"/cars/brown">) {
  return <ProductPage car={brown} silhouette={<BrownSilhouette />} searchParams={searchParams} />;
}
