import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BiraiSilhouette } from "@/components/cars/birai/Silhouette";
import { birai } from "@/lib/cars/birai";

export const metadata: Metadata = {
  title: "Boyota Birai",
  description: birai.summary,
};

export default function BiraiPage({ searchParams }: PageProps<"/cars/birai">) {
  return <ProductPage car={birai} silhouette={<BiraiSilhouette />} searchParams={searchParams} />;
}
