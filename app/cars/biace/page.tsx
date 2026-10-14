import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BiaceSilhouette } from "@/components/cars/biace/Silhouette";
import { biace } from "@/lib/cars/biace";

export const metadata: Metadata = {
  title: "Boyota Biace",
  description: biace.summary,
};

export default function BiacePage({ searchParams }: PageProps<"/cars/biace">) {
  return <ProductPage car={biace} silhouette={<BiaceSilhouette />} searchParams={searchParams} />;
}
