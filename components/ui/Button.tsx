import { cn } from "@/lib/cn";

type Variant = "gold" | "ghost" | "link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  gold:
    "bg-gold text-charcoal hover:scale-[1.02] active:scale-[0.99] transition-transform px-5 py-3 rounded-sm text-eyebrow font-bold uppercase tracking-[0.15em]",
  ghost:
    "border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-colors px-5 py-3 rounded-sm text-eyebrow font-bold uppercase tracking-[0.15em]",
  link:
    "text-green font-bold text-eyebrow uppercase tracking-[0.15em] border-b-2 border-green pb-0.5 hover:opacity-80 transition-opacity",
};

export function Button({ variant = "gold", className, children, ...rest }: Props) {
  return (
    <button {...rest} className={cn(variants[variant], className)}>
      {children}
    </button>
  );
}
