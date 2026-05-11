"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export function AnimationsInit() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    // Must wait for all resources (images, fonts) before refreshing trigger positions.
    // rAF fires before images load — window.load is the correct event.
    if (document.readyState === "complete") {
      const t = setTimeout(refresh, 100);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
