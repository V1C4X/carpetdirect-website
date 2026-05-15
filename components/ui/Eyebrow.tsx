import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Editorial variant — sentence case, not uppercase. Default keeps legacy uppercase look. */
  variant?: "uppercase" | "label";
}

export function Eyebrow({ children, className, variant = "uppercase" }: Props) {
  if (variant === "label") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 text-caption text-taupe before:inline-block before:h-px before:w-6 before:bg-taupe/60",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "text-eyebrow font-bold uppercase tracking-[0.2em] text-taupe",
        className,
      )}
    >
      {String(children).toUpperCase()}
    </span>
  );
}
