"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { I18nProvider } from "react-aria-components/I18nProvider";

// The site is English-only, so the locale is fixed instead of read from Accept-Language.
export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <I18nProvider locale="en-US">
      <RouterProvider navigate={router.push}>{children}</RouterProvider>
    </I18nProvider>
  );
}
