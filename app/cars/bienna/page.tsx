import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BiennaSilhouette } from "@/components/cars/bienna/Silhouette";
import { bienna } from "@/lib/cars/bienna";

export const metadata: Metadata = {
  title: "Boyota Bienna",
  description: bienna.summary,
};

export default function BiennaPage({ searchParams }: PageProps<"/cars/bienna">) {
  return <ProductPage car={bienna} silhouette={<BiennaSilhouette />} searchParams={searchParams} />;
}
