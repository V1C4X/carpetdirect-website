import Image from "next/image";
import Link from "next/link";
import { Caption } from "@/components/ui/Caption";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Services — Measure, supply, install",
  description:
    "Free in-home measure, direct supply, expert installation, floor prep and uplift. Auckland-wide flooring services since 2005.",
};

const SERVICES = [
  {
    n: "01",
    label: "Measure",
    title: "A free in-home measure, done properly.",
    body: "Mike or one of the crew comes to your place, takes proper measurements, talks through what your room actually needs — sub-floor, traffic, light, your budget. No charge, no obligation.",
    photo: "/photos/carpet-install-1.jpg",
    caption: "On-site measure · Pakuranga · talking through room flow before the quote",
  },
  {
    n: "02",
    label: "Supply",
    title: "Direct from the manufacturers, not the showroom.",
    body: "Carpet, vinyl, SPC plank and tiles brought in straight from manufacturers and importers. No middle-man markup, no showroom rent baked into your price.",
    photo: "/photos/spc-planks.jpg",
    caption: "Otara warehouse · plank stock landed direct from the importer",
  },
  {
    n: "03",
    label: "Install",
    title: "Our own crew — trained on every floor we sell.",
    body: "Not a sub-contracted stranger. Trained on every floor we sell, careful with skirtings, doorways and stairs. We turn up on time and leave the site tidy.",
    photo: "/photos/lounge-2.jpg",
    caption: "Lounge re-floor · Remuera · finishing transition into the hall",
  },
  {
    n: "04",
    label: "Prep",
    title: "Floor prep and uplift, before we lay anything.",
    body: "Old carpet uplifted and removed, plywood or self-levelling laid where needed, sub-floor cleaned and checked. We don't lay a new floor over a problem.",
    photo: "/photos/real-install-1.webp",
    caption: "Sub-floor prep · East Auckland · ply down before the SPC click-lock",
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

      {/* ── Big service pairs, alternating ─────────────────── */}
      <section className="bg-off-white pb-section-mobile md:pb-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col gap-24 md:gap-40">
            {SERVICES.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={s.n}>
                  <article className="grid items-end gap-10 md:grid-cols-12 md:gap-16">
                    <div
                      className={`relative aspect-[5/4] overflow-hidden rounded-md bg-stone md:col-span-7 ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={s.photo}
                        alt={s.title}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.025]"
                      />
                    </div>
                    <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                      <div className="flex items-baseline gap-4">
                        <span className="text-display-m font-light tabular-nums text-gold">
                          /{s.n}
                        </span>
                        <span className="text-caption uppercase tracking-[0.22em] text-taupe">
                          {s.label}
                        </span>
                      </div>
                      <h2 className="mt-5 text-display-l font-medium tracking-tight text-charcoal">
                        {s.title}
                      </h2>
                      <p className="mt-5 max-w-[44ch] text-body-l text-charcoal/80">
                        {s.body}
                      </p>
                    </div>
                    <Caption
                      className={`hidden md:col-span-7 md:block ${
                        flip ? "md:order-3" : ""
                      }`}
                    >
                      {s.caption}
                    </Caption>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who we work for ───────────────────────────────── */}
      <section className="border-t border-stone/70 bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
                Who we work for
              </p>
              <h2 className="text-display-l font-medium tracking-tight text-charcoal md:col-span-9">
                Three jobs we keep doing well.
              </h2>
            </div>
          </Reveal>

          <ol className="mt-20 flex flex-col">
            {SECTORS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="grid items-baseline gap-6 border-t border-charcoal/15 py-10 last:border-b md:grid-cols-12 md:gap-10 md:py-14">
                  <span className="text-display-m font-light tabular-nums text-taupe md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-display-m font-medium tracking-tight text-charcoal md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="text-body-l text-charcoal/80 md:col-span-7">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Coverage band, quieter ───────────────────────── */}
      <section className="bg-charcoal text-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-off-white/55 md:col-span-3">
                Auckland-wide
              </p>
              <h2 className="text-display-l font-medium tracking-tight md:col-span-9">
                From Albany to Pukekohe, we measure for free.
              </h2>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
              <p className="max-w-[58ch] text-body-l text-off-white/80 md:col-span-8">
                Based in Otara, on the road across Auckland five days a week. North Shore,
                East, West, South — same direct pricing, same crew, same standard of install.
              </p>
              <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-body-l font-medium text-off-white"
                >
                  <span className="border-b border-gold pb-1.5">Book a free measure</span>
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
