import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BaurisSilhouette } from "@/components/cars/bauris/Silhouette";
import { HowHybridWorks } from "@/components/cars/bauris/HowHybridWorks";
import { bauris } from "@/lib/cars/bauris";

export const metadata: Metadata = {
  title: "Boyota Bauris",
  description: bauris.summary,
};

export default function BaurisPage({ searchParams }: PageProps<"/cars/bauris">) {
  return (
    <ProductPage car={bauris} silhouette={<BaurisSilhouette />} searchParams={searchParams}>
      <HowHybridWorks />
    </ProductPage>
  );
}
