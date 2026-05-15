import { cn } from "@/lib/cn";

/** Editorial photo caption — italic, small, taupe. Use under images. */
export function Caption({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 max-w-[60ch] text-caption italic leading-[1.5] text-taupe",
        className,
      )}
    >
      {children}
    </p>
  );
}
