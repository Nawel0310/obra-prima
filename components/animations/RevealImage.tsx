"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  duration?: number;
  delay?: number;
}

export function RevealImage({
  children,
  className,
  direction = "up",
  duration = 1.4,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const clipStart =
    direction === "up"
      ? "inset(0 0 100% 0)"
      : direction === "left"
      ? "inset(0 100% 0 0)"
      : "inset(0 0 0 100%)";

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(ref.current, {
        clipPath: clipStart,
        duration,
        delay,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      const img = ref.current?.querySelector("img");
      if (img) {
        gsap.from(img, {
          scale: 1.18,
          duration: duration + 0.3,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      {children}
    </div>
  );
}
