import type { ReactNode } from "react";
import type { Car } from "@/lib/cars/types";
import { CarConfigurator } from "./CarConfigurator";
import { AskAgainCTA, FeatureGrid, TrimTable } from "./ProductSections";
import { AskedChip, SiteFooter, SiteHeader } from "./SiteChrome";

type Props = {
  car: Car;
  silhouette: ReactNode; // see CarConfigurator: paint with fill="var(--car-paint)"
  q?: string; // the visitor's prompt when the router sent them here (?q=…)
  children?: ReactNode; // the model's own section, between features and the trim table
};

// Page order follows design-system/reference/product-borolla.dc.html.
export function ProductPage({ car, silhouette, q, children }: Props) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CarConfigurator car={car} silhouette={silhouette} chip={<AskedChip q={q} />} />
        <FeatureGrid car={car} />
        {children}
        <TrimTable car={car} />
        <AskAgainCTA placeholder={car.askAgainPlaceholder} />
      </main>
      <SiteFooter />
    </>
  );
}
