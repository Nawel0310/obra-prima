"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxEl({ children, className, speed = 0.4 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(ref.current, {
        yPercent: -100 * speed * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current!.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
