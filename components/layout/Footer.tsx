import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  { href: "/products?cat=carpet", label: "Carpet" },
  { href: "/products?cat=vinyl", label: "Vinyl" },
  { href: "/products?cat=spc", label: "SPC Planks" },
  { href: "/products?cat=tiles", label: "Carpet Tiles" },
  { href: "/products?cat=garage", label: "Garage Carpet" },
  { href: "/services", label: "Install & Floor Prep" },
];

const SITE = [
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Free Quote" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-primary.png"
              alt="Carpet Direct NZ"
              width={420}
              height={120}
              className="h-10 w-auto brightness-0 invert opacity-95"
            />
          </div>
          <p className="mt-6 max-w-[40ch] text-body-l text-off-white/75">
            Flooring made simple. Installed properly. Priced directly. Auckland-wide,
            family-run, proudly walked on since 2005.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-2.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal transition-transform hover:scale-[1.02]"
          >
            Book Free Measure <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
            Floors
          </p>
          <ul className="mt-4 space-y-2.5 text-body text-off-white/85">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition-colors hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
            Visit
          </p>
          <ul className="mt-4 space-y-2.5 text-body text-off-white/85">
            {SITE.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition-colors hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-body text-off-white/85">
            <li>
              <a href="tel:+64214864476" className="hover:text-gold">
                021 486 476
              </a>
            </li>
            <li>
              <a href="mailto:carpetdirectsale@gmail.com" className="hover:text-gold break-words">
                carpetdirectsale@gmail.com
              </a>
            </li>
            <li className="text-off-white/70">
              28 Lovegrove Cres
              <br />
              Otara, Auckland
            </li>
            <li className="text-off-white/70">
              Mon–Fri 8–3
              <br />
              Sat 11–3
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-off-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-3 px-6 py-6 text-eyebrow uppercase tracking-[0.2em] text-off-white/55 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Carpet Direct NZ Ltd</span>
          <span>Proudly walked on since 2005</span>
        </div>
      </div>
    </footer>
  );
}
