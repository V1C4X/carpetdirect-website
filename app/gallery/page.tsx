import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
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

      {/* ── Final CTA, editorial ──────────────────────── */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1280px] border-t border-stone/70 px-6 py-24 md:py-40">
          <Reveal className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Want yours in here?
              </p>
              <h2 className="mt-5 text-display-xl font-medium tracking-tight text-charcoal">
                Start with a free in-home measure.
                <br />
                <span className="text-taupe">
                  We&apos;ll walk your space and quote it directly.
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-body-l font-medium text-charcoal"
              >
                <span className="border-b border-gold pb-1.5">Book a measure</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
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
