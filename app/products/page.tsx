import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
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
        title="A deliberately tight range — sold direct."
        intro="Carpet, SPC plank, vinyl, carpet tile. Only floors we'd lay in our own homes. Free samples to your door, free in-home measure across Auckland."
      />

      <ProductShowroom />

      {/* ── Category index — editorial list, no card chrome ─── */}
      <section className="border-t border-stone/70 bg-off-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-40">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-12">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe md:col-span-3">
                The full range
              </p>
              <h2 className="text-display-xl font-medium tracking-tight text-charcoal md:col-span-9">
                Every floor we keep, and what it&apos;s for.
              </h2>
            </div>
          </Reveal>

          <ol className="mt-20 flex flex-col">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <li className="group grid items-center gap-6 border-t border-charcoal/15 py-10 last:border-b md:grid-cols-12 md:gap-10 md:py-14">
                  <span className="text-display-m font-light tabular-nums text-taupe md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="text-display-l font-medium tracking-tight text-charcoal">
                      {c.label}
                    </h3>
                  </div>
                  <p className="text-body-l text-charcoal/80 md:col-span-5">
                    {c.blurb}
                  </p>
                  <div className="flex flex-col gap-2 md:col-span-2 md:items-end">
                    <Link
                      href={`/contact?cat=${c.id}`}
                      className="inline-flex items-center gap-2 text-small font-medium text-charcoal hover:text-gold"
                    >
                      <span className="border-b border-gold pb-1">Quote this</span>
                      <span aria-hidden>→</span>
                    </Link>
                    <Link
                      href={`/contact?topic=samples&cat=${c.id}`}
                      className="text-small text-taupe hover:text-charcoal"
                    >
                      Free sample
                    </Link>
                  </div>
                  {/* Hidden preview image surfaces on hover for desktop */}
                  <div className="hidden md:block md:col-span-12">
                    <div className="relative aspect-[16/4] w-full max-h-0 origin-top scale-y-0 overflow-hidden rounded-md bg-stone opacity-0 transition-all duration-500 ease-out group-hover:max-h-[260px] group-hover:scale-y-100 group-hover:opacity-100">
                      <Image
                        src={CAT_IMG[c.id] ?? "/photos/living-room-carpet.jpg"}
                        alt={c.label}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
