import { cn } from "@/lib/cn";
import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, error, name, required, className, ...rest },
  ref,
) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-eyebrow font-bold uppercase tracking-[0.15em] text-taupe">
        {label} {required && <span aria-hidden="true" className="text-gold">*</span>}
      </label>
      <input
        ref={ref}
        id={id}
        name={name}
        required={required}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "rounded-sm border border-stone bg-off-white px-3 py-2.5 text-body text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-gold",
          error && "border-red-700",
          className,
        )}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-small text-red-700">
          {error}
        </p>
      )}
    </div>
  );
});
