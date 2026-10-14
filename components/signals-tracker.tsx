"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  captureLanding,
  recordDwell,
  recordPageView,
  recordScroll,
} from "@/lib/visitor-signals";

const SCROLL_THROTTLE_MS = 500;

// Records page views, dwell time and scroll depth for the router's visitor context.
export function SignalsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureLanding();
    recordPageView(pathname);

    let last = 0;
    function onScroll() {
      const now = Date.now();
      if (now - last < SCROLL_THROTTLE_MS) return;
      last = now;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max > 0) recordScroll(pathname, (scrollY / max) * 100);
    }
    function onHide() {
      if (document.visibilityState === "hidden") recordDwell(pathname);
    }

    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onHide);
    addEventListener("pagehide", onHide);
    return () => {
      recordDwell(pathname);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onHide);
      removeEventListener("pagehide", onHide);
    };
  }, [pathname]);

  return null;
}
