import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BavalonSilhouette } from "@/components/cars/bavalon/Silhouette";
import { bavalon } from "@/lib/cars/bavalon";

export const metadata: Metadata = {
  title: "Boyota Bavalon",
  description: bavalon.summary,
};

export default function BavalonPage({ searchParams }: PageProps<"/cars/bavalon">) {
  return <ProductPage car={bavalon} silhouette={<BavalonSilhouette />} searchParams={searchParams} />;
}
