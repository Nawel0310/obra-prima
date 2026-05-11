"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  delay?: number;
  start?: string;
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  y = 50,
  delay = 0,
  start = "top 85%",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const items = ref.current ? Array.from(ref.current.children) : [];
      if (!items.length) return;
      gsap.from(items, {
        y,
        opacity: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        stagger,
        immediateRender: false,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
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
