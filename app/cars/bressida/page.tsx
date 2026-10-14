import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BressidaSilhouette } from "@/components/cars/bressida/Silhouette";
import { bressida } from "@/lib/cars/bressida";

export const metadata: Metadata = {
  title: "Boyota Bressida",
  description: bressida.summary,
};

export default function BressidaPage({ searchParams }: PageProps<"/cars/bressida">) {
  return <ProductPage car={bressida} silhouette={<BressidaSilhouette />} searchParams={searchParams} />;
}
