import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BhrSilhouette } from "@/components/cars/bhr/Silhouette";
import { bhr } from "@/lib/cars/bhr";

export const metadata: Metadata = {
  title: "Boyota B-HR",
  description: bhr.summary,
};

export default function BhrPage({ searchParams }: PageProps<"/cars/bhr">) {
  return <ProductPage car={bhr} silhouette={<BhrSilhouette />} searchParams={searchParams} />;
}
