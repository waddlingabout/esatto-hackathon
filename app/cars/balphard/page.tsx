import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BalphardSilhouette } from "@/components/cars/balphard/Silhouette";
import { balphard } from "@/lib/cars/balphard";

export const metadata: Metadata = {
  title: "Boyota Balphard",
  description: balphard.summary,
};

export default function BalphardPage({ searchParams }: PageProps<"/cars/balphard">) {
  return <ProductPage car={balphard} silhouette={<BalphardSilhouette />} searchParams={searchParams} />;
}
