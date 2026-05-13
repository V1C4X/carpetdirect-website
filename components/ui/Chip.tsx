"use client";
import { cn } from "@/lib/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Chip({ active, className, children, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-pressed={!!active}
      {...rest}
      className={cn(
        "rounded-pill border px-3 py-1.5 text-small font-medium transition-colors",
        active
          ? "border-charcoal bg-charcoal text-off-white"
          : "border-stone bg-off-white text-charcoal hover:border-charcoal",
        className,
      )}
    >
      {children}
    </button>
  );
}
