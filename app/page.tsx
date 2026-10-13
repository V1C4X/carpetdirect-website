import Image from "next/image";
import Link from "next/link";
import { Caption } from "@/components/ui/Caption";
import { Reveal } from "@/components/ui/Reveal";

const FLOORS = [
  {
    n: "01",
    label: "Carpet",
    href: "/products?cat=carpet",
    title: "Carpet, for rooms you want to live in.",
    body:
      "Luxury wool blends, plush twists, loop pile for stairs. Chosen for the wear and the way you live — not the showroom lighting.",
    photo: "/photos/bedroom-1.jpg",
    caption: "Master bedroom · Pakuranga · plush twist carpet",
  },
  {
    n: "02",
    label: "SPC Plank",
    href: "/products?cat=spc",
    title: "Stone-polymer plank, the new hardwood.",
    body:
      "Water-stable, dent-resistant, click-lock over most sub-floors. The floor most Auckland renovations are quietly switching to.",
    photo: "/photos/spc-planks.jpg",
    caption: "Lounge re-floor · Remuera · smoked walnut SPC",
  },
  {
    n: "03",
    label: "Vinyl",
    href: "/products?cat=vinyl",
    title: "Vinyl, for the rooms that get used.",
    body:
      "Sheet and plank — kitchens, laundries, bathrooms, rentals. Fast install, hard to damage, easy to live with.",
    photo: "/photos/carpet-install-1.jpg",
    caption: "Kitchen + dining · Newmarket · plank vinyl over ply",
  },
  {
    n: "04",
    label: "Carpet Tile",
    href: "/products?cat=tiles",
    title: "Modular tile, for buildings that move.",
    body:
      "Contract-grade tile for offices, churches and high-traffic rooms. Swap one tile, not the whole floor.",
    photo: "/photos/carpet-tiles.jpg",
    caption: "Office fit-out · Manukau · contract loop tile",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────
         HERO — single full-bleed photograph, headline restrained,
         one quiet CTA. Image breathes; type does the work.
      ────────────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[88dvh] min-h-[640px] w-full overflow-hidden bg-charcoal">
          <Image
            src="/photos/living-room-carpet.jpg"
            alt="Wide-plank SPC floor laid in an Auckland living room"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* gentle bottom-only vignette so the headline holds without washing the room */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-14 md:pb-20">
            <div className="pointer-events-auto max-w-[920px]">
              <span className="inline-flex items-center gap-3 text-caption tracking-[0.18em] text-off-white/85 before:inline-block before:h-px before:w-8 before:bg-gold">
                Auckland flooring · since 2005
              </span>
              <h1 className="mt-6 text-mega font-medium leading-[0.95] tracking-tight text-off-white">
                Flooring made simple.
                <br />
                <span className="text-off-white/70">Installed properly.</span>
                <br />
                <span className="text-gold">Priced directly.</span>
              </h1>
              <div className="mt-10 flex items-center gap-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-body-l font-medium text-off-white"
                >
                  <span className="border-b border-gold pb-1.5">Book a free measure</span>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-off-white/40 transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-charcoal"
                  >
                    →
                  </span>
                </Link>
                <a
                  href="tel:+64214864476"
                  className="hidden text-small text-off-white/75 hover:text-gold md:inline"
                >
                  or call 021 486 476
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         MANIFESTO — single editorial paragraph, big breathing room.
         Lets the eye rest after the hero photograph.
      ────────────────────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 pt-24 pb-16 md:pt-40 md:pb-24">
          <Reveal className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                A note from the workshop
              </p>
            </div>
            <p className="text-display-m font-light leading-[1.25] tracking-tight text-charcoal md:col-span-8">
              We&apos;ve been laying floors across Auckland for twenty years.
              No showroom mark-up, no sales pitch, no theatre — just material
              brought in direct, measured properly, and installed by the same
              crew every time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         FLOORS — four editorial pairs, image-text alternating.
         No overlay-card grid. Each gets its own page space.
      ────────────────────────────────────────────────────────── */}
      <section id="solutions" className="bg-off-white pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col gap-24 md:gap-40">
            {FLOORS.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={f.n}>
                  <article className="grid items-end gap-10 md:grid-cols-12 md:gap-16">
                    <div
                      className={`relative aspect-[5/4] overflow-hidden rounded-md bg-stone md:col-span-7 ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={f.photo}
                        alt={f.title}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.025]"
                      />
                    </div>
                    <div
                      className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-display-m font-light tabular-nums text-gold">
                          /{f.n}
                        </span>
                        <span className="text-caption uppercase tracking-[0.22em] text-taupe">
                          {f.label}
                        </span>
                      </div>
                      <h2 className="mt-5 text-display-l font-medium tracking-tight text-charcoal">
                        {f.title}
                      </h2>
                      <p className="mt-5 max-w-[44ch] text-body-l text-charcoal/80">
                        {f.body}
                      </p>
                      <Caption className={flip ? "md:hidden" : "md:hidden"}>
                        {f.caption}
                      </Caption>
                      <Link
                        href={f.href}
                        className="mt-8 inline-flex items-center gap-3 text-small font-medium text-charcoal hover:text-gold"
                      >
                        <span className="border-b border-charcoal pb-1 transition-colors group-hover:border-gold">
                          See {f.label.toLowerCase()}
                        </span>
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                    <Caption
                      className={`hidden md:col-span-7 md:block ${
                        flip ? "md:order-3" : ""
                      }`}
                    >
                      {f.caption}
                    </Caption>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         BY THE NUMBERS — oversize, asymmetric, editorial.
         Replaces the four-tile equal grid.
      ────────────────────────────────────────────────────────── */}
      <section className="border-t border-stone/70 bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-12 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
                The shape of twenty years
              </p>
              <h2 className="text-display-l font-medium tracking-tight text-charcoal md:col-span-9">
                We don&apos;t list every floor we&apos;ve laid. These three
                hold up the wall.
              </h2>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8">
              {[
                {
                  v: "2005",
                  k: "Year Mike opened the warehouse on Lovegrove Cres.",
                },
                {
                  v: "20+",
                  k: "Years on the tools — same crew, same standard.",
                },
                {
                  v: "AKL",
                  k: "Albany to Pukekohe — free measure, same direct price.",
                },
              ].map((s) => (
                <div key={s.k} className="flex flex-col gap-4 border-t border-charcoal/15 pt-6">
                  <p className="text-[clamp(3.5rem,8vw,6.5rem)] font-light leading-none tracking-tight text-charcoal">
                    {s.v}
                  </p>
                  <p className="max-w-[28ch] text-body text-taupe">{s.k}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         PULL QUOTE — one big review, not three cards. Editorial weight.
      ────────────────────────────────────────────────────────── */}
      <section className="bg-charcoal text-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-28 md:py-44">
          <Reveal>
            <p className="text-caption uppercase tracking-[0.22em] text-off-white/55">
              From a Google review · Catherine F.
            </p>
            <blockquote className="mt-10 max-w-[24ch] text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-tight md:max-w-[18ch]">
              <span aria-hidden className="text-gold">“</span>Five bedrooms,
              two lounges, hallway and stairs — plush, comfortable, and the
              install was exceptional. It&apos;s renewed our home.
              <span aria-hidden className="text-gold">”</span>
            </blockquote>
            <div className="mt-16 grid gap-8 border-t border-off-white/15 pt-8 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-off-white/55 md:col-span-3">
                Other voices
              </p>
              <ul className="md:col-span-9 md:grid md:grid-cols-2 md:gap-10">
                {[
                  {
                    q: "Really great installation and easy communication with Mike. Neat and tidy finish without any issues — highly recommended.",
                    a: "Joshua M.",
                  },
                  {
                    q: "Mike and his crew are fast, careful, and on time. Cleaned up properly before leaving. Great quality of work.",
                    a: "Mohinesh B.",
                  },
                ].map((r) => (
                  <li key={r.a} className="mb-8 last:mb-0 md:mb-0">
                    <p className="text-body-l text-off-white/85">{r.q}</p>
                    <p className="mt-3 text-caption uppercase tracking-[0.2em] text-off-white/55">
                      — {r.a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         WAREHOUSE MOMENT — uses Mike's real swatch photo as a
         "samples wall" beat. Asymmetric, captioned, premium.
      ────────────────────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Visit · 28 Lovegrove Cres, Otara
              </p>
              <h2 className="mt-5 text-display-xl font-medium tracking-tight text-charcoal">
                Real samples. Real warehouse. Real Mike.
              </h2>
              <p className="mt-6 max-w-[42ch] text-body-l text-charcoal/80">
                Drop into the Otara warehouse to walk the sample wall, talk
                floors in person, and take swatches home for free. Mon–Fri
                eight to three, Saturdays eleven to three.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-3 text-small font-medium text-charcoal hover:text-gold"
              >
                <span className="border-b border-charcoal pb-1">More about the workshop</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone md:aspect-[5/6]">
                <Image
                  src="/photos/real-install-1.webp"
                  alt="Sample wall of carpet swatches in numbered grid at the Otara warehouse"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Caption>
                A wall of carpet swatches at the Otara warehouse — every
                number a colour we keep in stock.
              </Caption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
         FINAL CTA — quiet, confident, one action.
      ────────────────────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1280px] border-t border-stone/70 px-6 py-24 md:py-40">
          <Reveal className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Ready when you are
              </p>
              <h2 className="mt-5 text-display-xl font-medium tracking-tight text-charcoal">
                Book a free in-home measure.
                <br />
                <span className="text-taupe">
                  We&apos;ll be at your door within the week.
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-body-l font-medium text-charcoal"
              >
                <span className="border-b border-gold pb-1.5">Book a measure</span>
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-off-white transition-all group-hover:bg-gold group-hover:text-charcoal"
                >
                  →
                </span>
              </Link>
              <a
                href="tel:+64214864476"
                className="text-small text-taupe hover:text-charcoal"
              >
                or call 021 486 476
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
