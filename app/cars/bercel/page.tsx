import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BercelSilhouette } from "@/components/cars/bercel/Silhouette";
import { bercel } from "@/lib/cars/bercel";

export const metadata: Metadata = {
  title: "Boyota Bercel",
  description: bercel.summary,
};

export default function BercelPage({ searchParams }: PageProps<"/cars/bercel">) {
  return <ProductPage car={bercel} silhouette={<BercelSilhouette />} searchParams={searchParams} />;
}
