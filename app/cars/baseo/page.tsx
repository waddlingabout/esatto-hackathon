import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BaseoSilhouette } from "@/components/cars/baseo/Silhouette";
import { baseo } from "@/lib/cars/baseo";

export const metadata: Metadata = {
  title: "Boyota Baseo",
  description: baseo.summary,
};

export default function BaseoPage({ searchParams }: PageProps<"/cars/baseo">) {
  return <ProductPage car={baseo} silhouette={<BaseoSilhouette />} searchParams={searchParams} />;
}
