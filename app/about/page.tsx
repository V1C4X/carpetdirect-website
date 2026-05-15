import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHeader } from "@/components/ui/PageHeader";

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
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-6 md:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone md:col-span-5">
            <Image
              src="/photos/lounge-2.jpg"
              alt="Modern Auckland interior — completed Carpet Direct install"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-6">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3rem] md:leading-[1.05]">
              Twenty years, one crew, the same standard.
            </h2>
            <div className="mt-6 space-y-5 text-body-l text-charcoal/85">
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
        </div>
      </section>

      {/* ── Values strip ──────────────────────────────────── */}
      <section className="bg-stone/40 py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[640px]">
            <Eyebrow>What we hold to</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[2.75rem] md:leading-[1.05]">
              Three things we don&apos;t bend on.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-stone/60 md:grid-cols-3">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="flex flex-col gap-4 bg-off-white p-8 md:p-10"
              >
                <h3 className="text-headline font-bold text-charcoal md:text-display-m md:font-black md:tracking-tight">
                  {v.title}
                </h3>
                <p className="text-body-l text-taupe">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── By the numbers ────────────────────────────────── */}
      <section className="bg-off-white py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {[
              { v: "2005", k: "Founded" },
              { v: "20+", k: "Years on the tools" },
              { v: "100%", k: "Auckland-wide" },
              { v: "1", k: "Free in-home measure" },
            ].map((s) => (
              <div key={s.k} className="flex flex-col gap-2">
                <p className="text-[3.25rem] font-black tracking-tight text-charcoal md:text-[4rem] md:leading-none">
                  {s.v}
                </p>
                <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-taupe">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit / CTA ───────────────────────────────────── */}
      <section className="bg-charcoal py-section-mobile text-off-white md:py-section">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow className="text-gold">Visit the warehouse</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight md:text-[3rem] md:leading-[1.05]">
              28 Lovegrove Crescent, Otara.
            </h2>
            <p className="mt-5 max-w-[58ch] text-body-l text-off-white/80">
              Drop by during shop hours to walk the samples, talk floors with Mike, and
              take swatches home for free. Mon–Fri 8–3, Sat 11–3.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal shadow-lift transition-transform hover:scale-[1.02]"
            >
              Book a measure <span aria-hidden>→</span>
            </Link>
            <a
              href="tel:+64214864476"
              className="inline-flex items-center gap-2 rounded-pill border border-off-white/30 px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white hover:border-gold hover:text-gold"
            >
              021 486 476
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
