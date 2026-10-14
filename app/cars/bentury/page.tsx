import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BenturySilhouette } from "@/components/cars/bentury/Silhouette";
import { bentury } from "@/lib/cars/bentury";

export const metadata: Metadata = {
  title: "Boyota Bentury",
  description: bentury.summary,
};

export default function BenturyPage({ searchParams }: PageProps<"/cars/bentury">) {
  return <ProductPage car={bentury} silhouette={<BenturySilhouette />} searchParams={searchParams} />;
}
