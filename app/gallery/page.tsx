import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata = {
  title: "Gallery — Real installs across Auckland",
  description:
    "Recent flooring installs by Carpet Direct NZ — residential and commercial projects from across Auckland, from Pakuranga to Papatoetoe.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Real floors, in real Auckland homes."
        intro="A working sample of recent jobs. We update this as projects finish — for the full reel, follow us on Facebook and Instagram."
      />

      <GalleryGrid />

      {/* ── CTA strip ─────────────────────────────────────── */}
      <section className="bg-stone/40 py-section-mobile md:py-section">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <Eyebrow>Want yours in here?</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[2.75rem] md:leading-[1.05]">
              Start with a free in-home measure.
            </h2>
            <p className="mt-4 max-w-[58ch] text-body-l text-taupe">
              We&apos;ll walk your space, talk through floors that suit it, and quote
              directly — no showroom mark-up, no pressure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-pill bg-charcoal px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white shadow-soft transition-colors hover:bg-gold hover:text-charcoal"
            >
              Book measure <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
