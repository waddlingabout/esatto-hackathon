import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BequoiaSilhouette } from "@/components/cars/bequoia/Silhouette";
import { bequoia } from "@/lib/cars/bequoia";

export const metadata: Metadata = {
  title: "Boyota Bequoia",
  description: bequoia.summary,
};

export default function BequoiaPage({ searchParams }: PageProps<"/cars/bequoia">) {
  return <ProductPage car={bequoia} silhouette={<BequoiaSilhouette />} searchParams={searchParams} />;
}
