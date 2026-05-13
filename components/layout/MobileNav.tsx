"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="md:hidden flex items-center gap-3">
      <Link
        href="/contact"
        className="rounded-sm bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-charcoal"
      >
        Free Quote
      </Link>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-stone"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
          <rect width="20" height="2" rx="1" fill="currentColor" />
          <rect y="6" width="14" height="2" rx="1" fill="currentColor" />
          <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-50 flex flex-col bg-off-white p-6"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-headline font-bold text-charcoal">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-2xl text-charcoal"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {items.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-display-m font-bold text-charcoal"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-sm bg-gold px-5 py-3 text-center text-eyebrow font-bold uppercase tracking-[0.15em] text-charcoal"
          >
            Book Free Quote
          </Link>
        </div>
      )}
    </div>
  );
}
