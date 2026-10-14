import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { OwnershipCosts } from "@/components/cars/borolla/OwnershipCosts";
import { BorollaSilhouette } from "@/components/cars/borolla/Silhouette";
import { borolla } from "@/lib/cars/borolla";

export const metadata: Metadata = {
  title: "Boyota Borolla",
  description: borolla.summary,
};

export default function BorollaPage({ searchParams }: PageProps<"/cars/borolla">) {
  return (
    <ProductPage
      car={borolla}
      silhouette={<BorollaSilhouette />} searchParams={searchParams}
    >
      <OwnershipCosts />
    </ProductPage>
  );
}
