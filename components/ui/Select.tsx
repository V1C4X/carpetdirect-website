import { cn } from "@/lib/cn";
import { forwardRef } from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { label, error, options, name, required, className, ...rest },
  ref,
) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-eyebrow font-bold uppercase tracking-[0.15em] text-taupe">
        {label} {required && <span aria-hidden="true" className="text-gold">*</span>}
      </label>
      <select
        ref={ref}
        id={id}
        name={name}
        required={required}
        aria-invalid={!!error || undefined}
        className={cn(
          "rounded-sm border border-stone bg-off-white px-3 py-2.5 text-body text-charcoal focus:outline-none focus:ring-2 focus:ring-gold",
          error && "border-red-700",
          className,
        )}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <p id={`${id}-error`} role="alert" className="text-small text-red-700">{error}</p>}
    </div>
  );
});
