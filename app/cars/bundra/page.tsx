import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BundraSilhouette } from "@/components/cars/bundra/Silhouette";
import { bundra } from "@/lib/cars/bundra";

export const metadata: Metadata = {
  title: "Boyota Bundra",
  description: bundra.summary,
};

export default function BundraPage({ searchParams }: PageProps<"/cars/bundra">) {
  return <ProductPage car={bundra} silhouette={<BundraSilhouette />} searchParams={searchParams} />;
}
