"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export function AnimationsInit() {
  useEffect(() => {
    // Images and fonts may not be loaded when GSAP first calculates positions.
    // Refreshing after a frame ensures correct trigger offsets.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
