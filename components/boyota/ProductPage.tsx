import { Suspense, type ReactNode } from "react";
import type { Car } from "@/lib/cars/types";
import { CarConfigurator } from "./CarConfigurator";
import { AskAgainCTA, FeatureGrid, TrimTable } from "./ProductSections";
import { AskedChip, SiteFooter, SiteHeader, type SearchParams } from "./SiteChrome";

type Props = {
  car: Car;
  silhouette: ReactNode; // see CarConfigurator: paint with fill="var(--car-paint)"
  searchParams: SearchParams; // ?q=… is the visitor's prompt when the router sent them here
  children?: ReactNode; // the model's own section, between features and the trim table
};

// Page order follows design-system/reference/product-borolla.dc.html.
export function ProductPage({ car, silhouette, searchParams, children }: Props) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <CarConfigurator car={car} silhouette={silhouette} chip={
            <Suspense fallback={null}>
              <AskedChip searchParams={searchParams} />
            </Suspense>
          } />
        <FeatureGrid car={car} />
        {children}
        <TrimTable car={car} />
        <AskAgainCTA placeholder={car.askAgainPlaceholder} />
      </main>
      <SiteFooter />
    </>
  );
}
