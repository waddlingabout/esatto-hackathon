import type { Metadata } from "next";
import { ProductPage } from "@/components/boyota/ProductPage";
import { B4runnerSilhouette } from "@/components/cars/b4runner/Silhouette";
import { b4runner } from "@/lib/cars/b4runner";

export const metadata: Metadata = {
  title: "Boyota B4Runner",
  description: b4runner.summary,
};

export default function B4runnerPage({ searchParams }: PageProps<"/cars/b4runner">) {
  return <ProductPage car={b4runner} silhouette={<B4runnerSilhouette />} searchParams={searchParams} />;
}
