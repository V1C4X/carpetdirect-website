"use client";
import { cn } from "@/lib/cn";

export type Segment = "residential" | "commercial";

interface Props {
  value: Segment;
  onChange: (next: Segment) => void;
  className?: string;
}

export function RCToggle({ value, onChange, className }: Props) {
  return (
    <div
      role="group"
      aria-label="Choose Residential or Commercial"
      className={cn("inline-flex rounded-pill bg-stone p-1 text-eyebrow font-bold uppercase tracking-[0.18em]", className)}
    >
      {(["residential", "commercial"] as const).map((seg) => {
        const active = seg === value;
        return (
          <button
            key={seg}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(seg)}
            className={cn(
              "rounded-pill px-4 py-2 transition-colors",
              active ? "bg-charcoal text-off-white" : "text-taupe hover:text-charcoal",
            )}
          >
            {seg}
          </button>
        );
      })}
    </div>
  );
}
