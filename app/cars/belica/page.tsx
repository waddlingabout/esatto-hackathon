import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BelicaSilhouette } from "@/components/cars/belica/Silhouette";
import { belica } from "@/lib/cars/belica";

export const metadata: Metadata = {
  title: "Boyota Belica",
  description: belica.summary,
};

export default function BelicaPage({ searchParams }: PageProps<"/cars/belica">) {
  return <ProductPage car={belica} silhouette={<BelicaSilhouette />} searchParams={searchParams} />;
}
