import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductShowroom } from "@/components/sections/ProductShowroom";
import { CATEGORIES } from "@/lib/content/products";

const CAT_IMG: Record<string, string> = {
  carpet: "/photos/bedroom-1.jpg",
  spc: "/photos/spc-planks.jpg",
  vinyl: "/photos/vinyl-floor.jpg",
  tiles: "/photos/carpet-tiles.jpg",
  garage: "/photos/garage-carpet.jpg",
};

export const metadata = {
  title: "Products — Carpet, SPC, Vinyl & Tiles",
  description:
    "Carpet, SPC planks, vinyl and carpet tiles, sourced direct and laid by the Carpet Direct NZ crew across Auckland.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Floors we lay, sold direct."
        intro="A deliberately tight range of carpet, SPC planks, vinyl and tiles — the floors we'd lay in our own homes. Free samples, free in-home measure, direct pricing right across Auckland."
      />

      <ProductShowroom />

      {/* ── Category list ─────────────────────────────────── */}
      <section className="bg-stone/40 py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-[640px]">
            <Eyebrow>The range</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3.25rem] md:leading-[1.05]">
              Every floor we keep, and what it&apos;s for.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CATEGORIES.map((c) => (
              <article
                key={c.id}
                className="group flex flex-col overflow-hidden rounded-md border border-stone bg-off-white transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                  <Image
                    src={CAT_IMG[c.id] ?? "/photos/living-room-carpet.jpg"}
                    alt={c.label}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-7">
                  <Eyebrow>{c.id === "garage" ? "Extras" : "Floor"}</Eyebrow>
                  <h3 className="text-display-m font-black tracking-tight text-charcoal">
                    {c.label}
                  </h3>
                  <p className="text-body-l text-taupe">{c.blurb}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <Link
                      href={`/contact?cat=${c.id}`}
                      className="text-eyebrow font-bold uppercase tracking-[0.18em] text-green border-b-2 border-green pb-1 hover:opacity-80"
                    >
                      Quote on this →
                    </Link>
                    <Link
                      href={`/contact?topic=samples&cat=${c.id}`}
                      className="text-eyebrow font-bold uppercase tracking-[0.18em] text-taupe hover:text-charcoal"
                    >
                      Free sample
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample CTA band ───────────────────────────────── */}
      <section className="bg-off-white py-section-mobile md:py-section">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-10 rounded-lg bg-charcoal px-8 py-14 text-off-white md:grid-cols-12 md:px-14">
            <div className="md:col-span-8">
              <Eyebrow className="text-gold">Free samples</Eyebrow>
              <h2 className="mt-3 text-display-l font-black tracking-tight md:text-[2.75rem] md:leading-[1.05]">
                Pick three. We&apos;ll drop them to your door.
              </h2>
              <p className="mt-4 max-w-[58ch] text-body-l text-off-white/80">
                Tell us what you&apos;re thinking. Mike will get free A4 samples of your top
                picks out to you anywhere in Auckland — no purchase required.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                href="/contact?topic=samples"
                className="inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal shadow-lift transition-transform hover:scale-[1.02]"
              >
                Request samples <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
