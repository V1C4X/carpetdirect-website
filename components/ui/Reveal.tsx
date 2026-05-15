"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface Props {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Scroll-driven fade + translate. Animation styles live in globals.css. */
export function Reveal({ delay = 0, className, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.setAttribute("data-reveal", "in");
            }, delay);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    el.setAttribute("data-reveal", "out");
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
