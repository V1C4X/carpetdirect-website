import Image from "next/image";
import Link from "next/link";
import { Caption } from "@/components/ui/Caption";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "About — Carpet Direct NZ, Otara",
  description:
    "Family-run flooring business based in Otara, Auckland. Two decades of carpet, vinyl, SPC plank and tile installs across Auckland. Founded by Mike in 2005.",
};

const VALUES = [
  {
    title: "Direct, not discounted.",
    body: "We bring product in ourselves. The price you pay is the warehouse price plus an honest install — no showroom mark-up, no random discounts to make the original number look reasonable.",
  },
  {
    title: "We finish what we start.",
    body: "Same crew from uplift to last off-cut. Skirtings, doorways, stairs and transitions get the same care as the open floor.",
  },
  {
    title: "Local, all of Auckland.",
    body: "Based in Otara, on the road from Albany to Pukekohe five days a week. We answer the phone and we turn up when we said we would.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A family flooring business out of Otara."
        intro="Carpet Direct NZ has been laying floors across Auckland since 2005. Family-run, warehouse-based, and proudly walked on every single day since."
      />

      {/* ── Mike's story ──────────────────────────────────── */}
      <section className="bg-off-white pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal className="grid items-start gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone">
                <Image
                  src="/photos/lounge-2.jpg"
                  alt="Modern Auckland interior — completed Carpet Direct install"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Caption>A completed install · East Auckland · plush twist into a renovated lounge.</Caption>
            </div>
            <div className="md:col-span-7 md:pt-2">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Our story
              </p>
              <h2 className="mt-5 text-display-l font-medium tracking-tight text-charcoal">
                Twenty years, one crew, the same standard.
              </h2>
              <div className="mt-8 space-y-6 text-body-l text-charcoal/80">
                <p>
                  Mike started Carpet Direct in 2005 with a simple frustration — there was no
                  reason flooring should cost what the big chains were charging. He&apos;d been
                  on the tools for years, knew the suppliers, and knew the install side cold.
                  So he cut out the middle and started selling and laying floors direct.
                </p>
                <p>
                  Twenty years later, the business looks the same. Warehouse on Lovegrove
                  Crescent in Otara, samples you can walk in and grab, an install crew that
                  knows the floors because they lay them every week. The only thing
                  that&apos;s really changed is the number of Auckland homes we&apos;ve
                  walked through.
                </p>
                <p>
                  We work with homeowners, landlords, builders and commercial clients — but
                  the job is the same every time. Measure properly. Quote honestly. Lay it
                  like it&apos;s our own place.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What we hold to ─────────────────────────────── */}
      <section className="border-t border-stone/70 bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
                What we hold to
              </p>
              <h2 className="text-display-l font-medium tracking-tight text-charcoal md:col-span-9">
                Three things we don&apos;t bend on.
              </h2>
            </div>
          </Reveal>

          <ol className="mt-20 flex flex-col">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <li className="grid items-baseline gap-6 border-t border-charcoal/15 py-10 last:border-b md:grid-cols-12 md:gap-10 md:py-14">
                  <span className="text-display-m font-light tabular-nums text-taupe md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-display-m font-medium tracking-tight text-charcoal md:col-span-4">
                    {v.title}
                  </h3>
                  <p className="text-body-l text-charcoal/80 md:col-span-7">
                    {v.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── By the numbers ────────────────────────────────── */}
      <section className="border-t border-stone/70 bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
                The shape of twenty years
              </p>
              <h2 className="text-display-l font-medium tracking-tight text-charcoal md:col-span-9">
                The numbers, plain.
              </h2>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-y-16 md:grid-cols-4 md:gap-x-8">
              {[
                { v: "2005", k: "Year Mike opened the warehouse on Lovegrove Cres." },
                { v: "20+", k: "Years on the tools, same crew, same standard." },
                { v: "AKL", k: "Albany to Pukekohe — one direct price." },
                { v: "Free", k: "In-home measure, no strings, no obligation." },
              ].map((s) => (
                <div key={s.k} className="flex flex-col gap-4 border-t border-charcoal/15 pt-6">
                  <p className="text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-none tracking-tight text-charcoal">
                    {s.v}
                  </p>
                  <p className="max-w-[26ch] text-body text-taupe">{s.k}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Visit the warehouse ───────────────────────────── */}
      <section className="bg-charcoal text-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-off-white/55 md:col-span-3">
                Visit the warehouse
              </p>
              <h2 className="text-display-l font-medium tracking-tight md:col-span-9">
                28 Lovegrove Crescent, Otara.
              </h2>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
              <p className="max-w-[58ch] text-body-l text-off-white/80 md:col-span-8">
                Drop by during shop hours to walk the samples, talk floors with Mike, and
                take swatches home for free. Mon–Fri 8–3, Sat 11–3.
              </p>
              <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-body-l font-medium text-off-white"
                >
                  <span className="border-b border-gold pb-1.5">Book a measure</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <a
                  href="tel:+64214864476"
                  className="text-small text-off-white/70 hover:text-gold"
                >
                  or call 021 486 476
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
