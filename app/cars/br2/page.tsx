import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { Br2Silhouette } from "@/components/cars/br2/Silhouette";
import { br2 } from "@/lib/cars/br2";

export const metadata: Metadata = {
  title: "Boyota BR2",
  description: br2.summary,
};

export default function Br2Page({ searchParams }: PageProps<"/cars/br2">) {
  return <ProductPage car={br2} silhouette={<Br2Silhouette />} searchParams={searchParams} />;
}
