"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  style,
  delay = 0,
  y = 48,
  duration = 0.9,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.set(ref.current, { y, opacity: 0 });
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
