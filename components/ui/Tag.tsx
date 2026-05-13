import { cn } from "@/lib/cn";

interface Props {
  variant?: "gold" | "stone" | "charcoal";
  children: React.ReactNode;
  className?: string;
}

const styles: Record<NonNullable<Props["variant"]>, string> = {
  gold: "bg-gold text-charcoal",
  stone: "bg-stone text-charcoal",
  charcoal: "bg-charcoal text-off-white",
};

export function Tag({ variant = "gold", children, className }: Props) {
  return (
    <span className={cn("inline-block rounded-sm px-2.5 py-1 text-eyebrow font-bold uppercase tracking-[0.18em]", styles[variant], className)}>
      {children}
    </span>
  );
}
