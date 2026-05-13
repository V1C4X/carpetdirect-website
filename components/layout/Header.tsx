import Link from "next/link";
import { MobileNav } from "./MobileNav";

const NAV = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-off-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-headline font-bold tracking-tight text-charcoal">
            Carpet <span className="font-black">Direct</span> NZ
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-small font-medium text-charcoal transition-colors hover:text-green"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-gold px-4 py-2 text-eyebrow font-bold uppercase tracking-[0.15em] text-charcoal transition-transform hover:scale-[1.02]"
          >
            Free Quote
          </Link>
        </nav>
        <MobileNav items={NAV} />
      </div>
    </header>
  );
}
