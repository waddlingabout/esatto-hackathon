import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BjcruiserSilhouette } from "@/components/cars/bjcruiser/Silhouette";
import { bjcruiser } from "@/lib/cars/bjcruiser";

export const metadata: Metadata = {
  title: "Boyota BJ Cruiser",
  description: bjcruiser.summary,
};

export default function BjcruiserPage({ searchParams }: PageProps<"/cars/bjcruiser">) {
  return <ProductPage car={bjcruiser} silhouette={<BjcruiserSilhouette />} searchParams={searchParams} />;
}
