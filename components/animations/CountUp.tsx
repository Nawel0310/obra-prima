"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  target,
  suffix = "",
  duration = 2.2,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.floor(obj.val) + suffix;
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      return () => tween.kill();
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (ref.current) ref.current.textContent = target + suffix;
    });

    return () => mm.revert();
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
