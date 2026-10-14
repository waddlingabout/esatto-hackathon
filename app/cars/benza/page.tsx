import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BenzaSilhouette } from "@/components/cars/benza/Silhouette";
import { benza } from "@/lib/cars/benza";

export const metadata: Metadata = {
  title: "Boyota Benza",
  description: benza.summary,
};

export default function BenzaPage({ searchParams }: PageProps<"/cars/benza">) {
  return <ProductPage car={benza} silhouette={<BenzaSilhouette />} searchParams={searchParams} />;
}
