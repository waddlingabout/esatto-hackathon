import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { OwnershipCosts } from "@/components/cars/borolla/OwnershipCosts";
import { BorollaSilhouette } from "@/components/cars/borolla/Silhouette";
import { borolla } from "@/lib/cars/borolla";

export const metadata: Metadata = {
  title: "Boyota Borolla",
  description: "The normal car. A dependable, affordable compact sedan with a 2.0L gas engine and room for five.",
};

export default async function BorollaPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q } = await searchParams;
  return (
    <ProductPage
      car={borolla}
      silhouette={<BorollaSilhouette />}
      q={typeof q === "string" ? q : undefined}
    >
      <OwnershipCosts />
    </ProductPage>
  );
}
