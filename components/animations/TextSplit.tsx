"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type AllowedTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

interface Props {
  text: string;
  as?: AllowedTag;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextSplit({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.05,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const words = ref.current?.querySelectorAll(".word-inner");
      if (!words?.length) return;
      gsap.set(words, { y: "110%" });
      gsap.to(words, {
        y: "0%",
        duration: 0.85,
        ease: "power4.out",
        stagger,
        delay,
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

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden leading-[1.15]"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
        >
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
