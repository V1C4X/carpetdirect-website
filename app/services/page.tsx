import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Services — Measure, supply, install",
  description:
    "Free in-home measure, direct supply, expert installation, floor prep and uplift. Auckland-wide flooring services since 2005.",
};

const SERVICES = [
  {
    n: "01",
    title: "Free in-home measure",
    body: "Mike or one of the crew comes to your place, takes proper measurements, talks through what your room actually needs — sub-floor, traffic, light, your budget. No charge, no obligation.",
    photo: "/photos/carpet-install-1.jpg",
  },
  {
    n: "02",
    title: "Direct supply",
    body: "Carpet, vinyl, SPC plank and tiles brought in straight from manufacturers and importers. No middle-man markup, no showroom rent baked into your price.",
    photo: "/photos/spc-planks.jpg",
  },
  {
    n: "03",
    title: "Expert installation",
    body: "Our own install crew — not a sub-contracted stranger. Trained on every floor we sell, careful with skirtings, doorways and stairs. We turn up on time and leave the site tidy.",
    photo: "/photos/lounge-2.jpg",
  },
  {
    n: "04",
    title: "Floor prep & uplift",
    body: "Old carpet uplifted and removed, plywood or self-levelling laid where needed, sub-floor cleaned and checked. We don't lay a new floor over a problem.",
    photo: "/photos/real-install-1.webp",
  },
];

const SECTORS = [
  {
    title: "Residential",
    body: "Whole-home re-floors, single rooms, stair runners and rentals. From a $20/m² budget carpet for a tenant turnover to a luxury wool for the new build.",
  },
  {
    title: "Commercial",
    body: "Offices, churches, community halls, retail and hospitality. Carpet tiles, contract-grade vinyl, and out-of-hours installs that don't shut you down.",
  },
  {
    title: "Builders & investors",
    body: "Standing relationships with builders, developers and property managers across Auckland. Predictable lead times, repeatable trim details, one invoice.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Measured properly. Laid carefully. Cleaned up after."
        intro="What you actually get when you book Carpet Direct — from the first knock on your door to the last off-cut in the van."
      />

      {/* ── Big service blocks (alternating) ─────────────── */}
      <section className="bg-off-white pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="space-y-20 md:space-y-32">
            {SERVICES.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={s.n}
                  className="grid items-center gap-10 md:grid-cols-12 md:gap-16"
                >
                  <div
                    className={`relative aspect-[5/4] overflow-hidden rounded-lg bg-stone md:col-span-7 ${
                      flip ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={s.photo}
                      alt={s.title}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                    <span className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
                      Step {s.n}
                    </span>
                    <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[2.75rem] md:leading-[1.05]">
                      {s.title}
                    </h2>
                    <p className="mt-5 text-body-l text-taupe">{s.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who we work for ───────────────────────────────── */}
      <section className="bg-stone/40 py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[640px]">
            <Eyebrow>Who we work for</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3rem] md:leading-[1.05]">
              Three jobs we keep doing well.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-stone/60 md:grid-cols-3">
            {SECTORS.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-4 bg-off-white p-8 md:p-10"
              >
                <h3 className="text-display-m font-black tracking-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="text-body-l text-taupe">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage band ─────────────────────────────────── */}
      <section className="bg-charcoal py-section-mobile text-off-white md:py-section">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow className="text-gold">Auckland-wide</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight md:text-[3rem] md:leading-[1.05]">
              From Albany to Pukekohe, we measure for free.
            </h2>
            <p className="mt-5 max-w-[58ch] text-body-l text-off-white/80">
              Based in Otara, on the road across Auckland five days a week. North Shore,
              East, West, South — same direct pricing, same crew, same standard of install.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal shadow-lift transition-transform hover:scale-[1.02]"
            >
              Book free measure <span aria-hidden>→</span>
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
