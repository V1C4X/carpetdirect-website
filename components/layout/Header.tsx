import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const NAV = [
  { href: "/products", label: "Products" },
  { href: "/#solutions", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-off-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-4 md:py-5">
        <Link href="/" aria-label="Carpet Direct NZ — home" className="flex items-center">
          <Image
            src="/brand/logo-primary.png"
            alt="Carpet Direct NZ"
            width={420}
            height={120}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-small text-charcoal/75 transition-colors hover:text-charcoal"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-small font-medium text-charcoal"
          >
            <span className="border-b border-gold pb-1">Free measure</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>
        <MobileNav items={NAV} />
      </div>
    </header>
  );
}
