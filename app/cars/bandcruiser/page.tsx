import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BandcruiserSilhouette } from "@/components/cars/bandcruiser/Silhouette";
import { bandcruiser } from "@/lib/cars/bandcruiser";

export const metadata: Metadata = {
  title: "Boyota Band Cruiser",
  description: bandcruiser.summary,
};

export default function BandcruiserPage({ searchParams }: PageProps<"/cars/bandcruiser">) {
  return <ProductPage car={bandcruiser} silhouette={<BandcruiserSilhouette />} searchParams={searchParams} />;
}
