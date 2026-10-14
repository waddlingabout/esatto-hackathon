import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { ByarisSilhouette } from "@/components/cars/byaris/Silhouette";
import { byaris } from "@/lib/cars/byaris";

export const metadata: Metadata = {
  title: "Boyota Byaris",
  description: byaris.summary,
};

export default function ByarisPage({ searchParams }: PageProps<"/cars/byaris">) {
  return <ProductPage car={byaris} silhouette={<ByarisSilhouette />} searchParams={searchParams} />;
}
