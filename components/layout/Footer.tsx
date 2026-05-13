import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-charcoal text-off-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="text-display-m font-black">Carpet Direct NZ</p>
          <p className="mt-2 text-small opacity-80">
            Auckland&apos;s Trusted Flooring Specialists. Family-run since 2005.
          </p>
        </div>
        <div>
          <p className="text-eyebrow font-bold uppercase tracking-[0.18em] text-gold">Services</p>
          <ul className="mt-3 space-y-2 text-small opacity-90">
            <li><Link href="/services">Carpet</Link></li>
            <li><Link href="/services">Vinyl</Link></li>
            <li><Link href="/services">SPC Planks</Link></li>
            <li><Link href="/services">Floor Prep</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-eyebrow font-bold uppercase tracking-[0.18em] text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-small opacity-90">
            <li><a href="tel:0214864476">021 486 476</a></li>
            <li><a href="mailto:carpetdirectsale@gmail.com">carpetdirectsale@gmail.com</a></li>
            <li>28 Lovegrove Crescent, Otara, Auckland</li>
            <li>Mon–Fri 8am–3pm · Sat 11am–3pm</li>
          </ul>
        </div>
        <div>
          <p className="text-eyebrow font-bold uppercase tracking-[0.18em] text-gold">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-small opacity-90">
            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/" rel="noreferrer" target="_blank">Instagram</a></li>
            <li><a href="https://www.trademe.co.nz/" rel="noreferrer" target="_blank">Trade Me Store</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-eyebrow uppercase tracking-[0.18em] opacity-60">
        © 2026 Carpet Direct NZ Ltd · Quality flooring · Direct pricing · Expertly installed
      </div>
    </footer>
  );
}
