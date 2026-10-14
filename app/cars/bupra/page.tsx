import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { BupraSilhouette } from "@/components/cars/bupra/Silhouette";
import { TrackMode } from "@/components/cars/bupra/TrackMode";
import { bupra } from "@/lib/cars/bupra";

export const metadata: Metadata = {
  title: "Boyota Bupra",
  description: "The Boyota Bupra: a light, rear-drive 2-door sports coupe with launch control and a 6-speed manual.",
};

export default function BupraPage({ searchParams }: PageProps<"/cars/bupra">) {
  return (
    <ProductPage
      car={bupra}
      silhouette={<BupraSilhouette />} searchParams={searchParams}
    >
      <TrackMode />
    </ProductPage>
  );
}
