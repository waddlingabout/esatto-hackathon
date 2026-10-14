import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BamrySilhouette } from "@/components/cars/bamry/Silhouette";
import { bamry } from "@/lib/cars/bamry";

export const metadata: Metadata = {
  title: "Boyota Bamry",
  description: bamry.summary,
};

export default function BamryPage({ searchParams }: PageProps<"/cars/bamry">) {
  return (
    <ProductPage car={bamry} silhouette={<BamrySilhouette />} searchParams={searchParams} />
  );
}
