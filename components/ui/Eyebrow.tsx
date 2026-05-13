import { cn } from "@/lib/cn";
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("text-eyebrow font-bold uppercase tracking-[0.18em] text-taupe", className)}>
      {String(children).toUpperCase()}
    </span>
  );
}
