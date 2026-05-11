"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: "none" });
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
      rafId = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], label, select")) {
        gsap.to(ring, {
          scale: 2.2,
          borderColor: "rgba(201,169,110,1)",
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], label, select")) {
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(201,169,110,0.45)",
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-[9999] hidden lg:block rounded-full bg-accent"
        style={{
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed pointer-events-none z-[9998] hidden lg:block rounded-full"
        style={{
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: "1px solid rgba(201,169,110,0.45)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
