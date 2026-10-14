import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BaurisSilhouette } from "@/components/cars/bauris/Silhouette";
import { HowHybridWorks } from "@/components/cars/bauris/HowHybridWorks";
import { bauris } from "@/lib/cars/bauris";

export const metadata: Metadata = {
  title: "Boyota Bauris",
  description: "The Bauris hybrid liftback. Pulls away on electric, recharges as you brake. Plug-in on Limited.",
};

export default function BaurisPage({ searchParams }: PageProps<"/cars/bauris">) {
  return (
    <ProductPage car={bauris} silhouette={<BaurisSilhouette />} searchParams={searchParams}>
      <HowHybridWorks />
    </ProductPage>
  );
}
