import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FLOORS = [
  {
    href: "/products?cat=carpet",
    title: "Carpet",
    blurb: "Luxury to everyday. Plush, twist, and looped — chosen for the wear your home gets.",
    photo: "/photos/bedroom-1.jpg",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[16/11]",
  },
  {
    href: "/products?cat=spc",
    title: "SPC Planks",
    blurb: "Stone-polymer composite. Water-stable, dent-resistant, click-lock install.",
    photo: "/photos/spc-planks.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    href: "/products?cat=vinyl",
    title: "Vinyl",
    blurb: "Sheet and plank. Wet-area ready, fast install, easy to live with.",
    photo: "/photos/vinyl-floor.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    href: "/products?cat=tiles",
    title: "Carpet Tiles",
    blurb: "Modular tiles for offices, churches and high-traffic rooms. Replace one — not the whole floor.",
    photo: "/photos/carpet-tiles.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/9]",
  },
];

const PROOF = [
  { label: "Since", value: "2005" },
  { label: "Auckland", value: "Wide" },
  { label: "In-Home Measure", value: "Free" },
  { label: "Pricing", value: "Direct" },
];

const STEPS = [
  {
    n: "01",
    title: "We measure",
    body: "Free in-home measure across Auckland. Honest assessment of sub-floor, traffic, and what your room actually needs.",
  },
  {
    n: "02",
    title: "You choose",
    body: "We bring samples to your door. Carpet, vinyl, SPC, tiles — see them in your light, beside your couch.",
  },
  {
    n: "03",
    title: "We install",
    body: "Old floor uplifted, sub-floor prepped, new floor laid by our team. Turn up on time. Leave it clean.",
  },
];

const REVIEWS = [
  {
    quote:
      "Really great installation and easy communication with Mike. Neat and tidy finish without any issues — highly recommended.",
    name: "Joshua Michael",
    where: "Google review",
  },
  {
    quote:
      "Five bedrooms, two lounges, hallway and stairs — plush, comfortable, and the install was exceptional. It's renewed our home.",
    name: "Catherine Faletanoai",
    where: "Google review",
  },
  {
    quote:
      "Mike and his crew are fast, careful, and on time. Cleaned up properly before leaving. Great quality of work.",
    name: "Mohinesh Bhan",
    where: "Google review",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[78dvh] min-h-[560px] w-full overflow-hidden">
          <Image
            src="/photos/living-room-carpet.jpg"
            alt="Auckland living room with wide-plank flooring laid by Carpet Direct"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* warm tone wash + dark anchor for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 md:pb-24">
            <div className="max-w-[680px] text-off-white">
              <Eyebrow className="text-gold">Auckland Flooring · Since 2005</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
                Flooring made simple.
                <br />
                Installed properly.
                <br />
                <span className="text-gold">Priced directly.</span>
              </h1>
              <p className="mt-6 max-w-[52ch] text-body-l text-off-white/85">
                Carpet, vinyl, SPC plank and carpet tiles — sourced direct and laid by our own crew.
                Free in-home measure right across Auckland.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal shadow-soft transition-transform hover:scale-[1.02]"
                >
                  Book Free Measure <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-pill border border-off-white/40 px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white transition-colors hover:border-gold hover:text-gold"
                >
                  Explore Floors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP ───────────────────────────────────────── */}
      <section className="border-b border-stone/70 bg-off-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-stone/40 px-6 py-0 md:grid-cols-4 md:px-0">
          {PROOF.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-start gap-1 bg-off-white px-6 py-8 md:items-center md:py-10"
            >
              <span className="text-eyebrow font-bold uppercase tracking-[0.2em] text-taupe">
                {p.label}
              </span>
              <span className="text-display-m font-black tracking-tight text-charcoal">
                {p.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLOORS GRID ──────────────────────────────────────── */}
      <section className="bg-off-white py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[640px]">
              <Eyebrow>Floors we lay</Eyebrow>
              <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3.5rem] md:leading-[1.05]">
                Four floors. One trusted crew.
              </h2>
              <p className="mt-4 max-w-[58ch] text-body-l text-taupe">
                We keep the range deliberately tight — only floors we&apos;d lay in our own homes,
                priced direct because there&apos;s no middle-man to feed.
              </p>
            </div>
            <Link
              href="/products"
              className="text-eyebrow font-bold uppercase tracking-[0.18em] text-green border-b-2 border-green pb-1 hover:opacity-80"
            >
              See full range →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            {FLOORS.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className={`group relative overflow-hidden rounded-md ${f.span} ${f.aspect} block bg-stone`}
              >
                <Image
                  src={f.photo}
                  alt={f.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-eyebrow font-bold uppercase tracking-[0.18em] text-gold">
                    {f.title}
                  </span>
                  <p className="mt-2 max-w-[36ch] text-body text-off-white/95 md:text-body-l">
                    {f.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white transition-transform group-hover:translate-x-1">
                    View {f.title} <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────── */}
      <section className="bg-stone/40 py-section-mobile md:py-section">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md md:col-span-5">
            <Image
              src="/photos/lounge-2.jpg"
              alt="Modern Auckland interior — dark plank floor installed by Carpet Direct"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Otara, since 2005</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3.25rem] md:leading-[1.05]">
              Two decades of laying floors across Auckland.
            </h2>
            <div className="mt-6 space-y-4 text-body-l text-charcoal/85">
              <p>
                Mike started Carpet Direct in 2005 with a simple idea — bring flooring in
                direct, sell it honestly, lay it properly. Twenty years later, that&apos;s
                still the brief.
              </p>
              <p>
                We&apos;re based at 28 Lovegrove Crescent in Otara — a real warehouse you
                can walk into, samples you can take home, and an installer who picks up
                the phone.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 md:max-w-[440px]">
              <div>
                <p className="text-display-l font-black text-gold">20+</p>
                <p className="mt-1 text-small uppercase tracking-[0.18em] text-taupe">
                  Years on the tools
                </p>
              </div>
              <div>
                <p className="text-display-l font-black text-gold">100%</p>
                <p className="mt-1 text-small uppercase tracking-[0.18em] text-taupe">
                  Auckland-wide
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal border-b-2 border-gold pb-1 hover:text-gold"
            >
              Read our story <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS / SERVICES PREVIEW ────────────────────────── */}
      <section className="bg-off-white py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[640px]">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3.5rem] md:leading-[1.05]">
              Three steps. No surprises.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-stone/60 md:grid-cols-3">
            {STEPS.map((s) => (
              <article
                key={s.n}
                className="flex flex-col gap-4 bg-off-white p-8 md:p-10"
              >
                <span className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
                  Step {s.n}
                </span>
                <h3 className="text-display-m font-black tracking-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="text-body-l text-taupe">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-start">
            <Link
              href="/services"
              className="text-eyebrow font-bold uppercase tracking-[0.18em] text-green border-b-2 border-green pb-1 hover:opacity-80"
            >
              Full services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="bg-charcoal py-section-mobile text-off-white md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[640px]">
            <Eyebrow className="text-gold">From our customers</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight md:text-[3.25rem] md:leading-[1.05]">
              What Aucklanders say after we&apos;ve left.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col gap-6 border-t border-off-white/15 pt-6"
              >
                <span aria-hidden className="text-display-l font-black text-gold">
                  &ldquo;
                </span>
                <blockquote className="text-body-l text-off-white/90 -mt-4">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-small font-bold text-off-white">{r.name}</p>
                  <p className="text-eyebrow uppercase tracking-[0.18em] text-off-white/55">
                    {r.where}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="bg-off-white py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="relative overflow-hidden rounded-lg bg-charcoal">
            <div className="relative grid items-center gap-10 px-8 py-14 md:grid-cols-12 md:px-14 md:py-20">
              <div className="md:col-span-7">
                <Eyebrow className="text-gold">Ready when you are</Eyebrow>
                <h2 className="mt-4 text-display-l font-black tracking-tight text-off-white md:text-[3rem] md:leading-[1.05]">
                  Book a free in-home measure today.
                </h2>
                <p className="mt-5 max-w-[52ch] text-body-l text-off-white/80">
                  Phone Mike on{" "}
                  <a href="tel:+64214864476" className="text-gold underline-offset-4 hover:underline">
                    021 486 476
                  </a>{" "}
                  or send the form. We&apos;ll be at your door, samples in hand, within the week.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:col-span-5 md:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal shadow-lift transition-transform hover:scale-[1.02]"
                >
                  Book Free Measure <span aria-hidden>→</span>
                </Link>
                <a
                  href="tel:+64214864476"
                  className="inline-flex items-center gap-2 rounded-pill border border-off-white/30 px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white hover:border-gold hover:text-gold"
                >
                  Call 021 486 476
                </a>
              </div>
            </div>
            {/* subtle gold rule */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" aria-hidden />
          </div>
        </div>
      </section>
    </>
  );
}
