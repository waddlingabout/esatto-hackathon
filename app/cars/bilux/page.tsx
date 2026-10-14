import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BiluxSilhouette } from "@/components/cars/bilux/Silhouette";
import { bilux } from "@/lib/cars/bilux";

export const metadata: Metadata = {
  title: "Boyota Bilux",
  description: bilux.summary,
};

export default function BiluxPage({ searchParams }: PageProps<"/cars/bilux">) {
  return <ProductPage car={bilux} silhouette={<BiluxSilhouette />} searchParams={searchParams} />;
}
