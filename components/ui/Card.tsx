import { cn } from "@/lib/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-md border border-stone bg-off-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft", className)}>
      {children}
    </div>
  );
}
