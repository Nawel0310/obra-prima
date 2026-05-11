"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Props {
  className?: string;
  duration?: number;
  delay?: number;
}

export function LineReveal({ className, duration = 1.6, delay = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.set(ref.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(ref.current, {
        scaleX: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: ref }
  );

  return <div ref={ref} className={className} />;
}
