import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BacomaSilhouette } from "@/components/cars/bacoma/Silhouette";
import { bacoma } from "@/lib/cars/bacoma";

export const metadata: Metadata = {
  title: "Boyota Bacoma",
  description: bacoma.summary,
};

export default function BacomaPage({ searchParams }: PageProps<"/cars/bacoma">) {
  return <ProductPage car={bacoma} silhouette={<BacomaSilhouette />} searchParams={searchParams} />;
}
