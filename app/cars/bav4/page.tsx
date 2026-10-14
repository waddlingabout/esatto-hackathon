import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { Bav4Silhouette } from "@/components/cars/bav4/Silhouette";
import { bav4 } from "@/lib/cars/bav4";

export const metadata: Metadata = {
  title: "Boyota BAV4",
  description: bav4.summary,
};

export default function Bav4Page({ searchParams }: PageProps<"/cars/bav4">) {
  return (
    <ProductPage car={bav4} silhouette={<Bav4Silhouette />} searchParams={searchParams} />
  );
}
