"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { RCToggle, type Segment } from "@/components/ui/RCToggle";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SWATCHES, type Swatch } from "@/lib/content/products";

const CATS = [
  { id: "all" as const, label: "All" },
  { id: "carpet" as const, label: "Carpet" },
  { id: "spc" as const, label: "SPC" },
  { id: "vinyl" as const, label: "Vinyl" },
  { id: "tiles" as const, label: "Tiles" },
];

type CatFilter = (typeof CATS)[number]["id"];

/**
 * Give a swatch chip a sense of material — fine grain via stacked radial
 * gradients on top of the base colour. CSS-only, no image required.
 */
function swatchTexture(baseColor: string): React.CSSProperties {
  return {
    backgroundColor: baseColor,
    backgroundImage: [
      // micro-fibre noise — tight radial dots, low contrast
      "radial-gradient(rgba(255,255,255,0.10) 0.5px, transparent 0.6px)",
      "radial-gradient(rgba(0,0,0,0.18) 0.5px, transparent 0.6px)",
      // soft directional sheen
      "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.08) 100%)",
    ].join(","),
    backgroundSize: "3px 3px, 5px 5px, 100% 100%",
    backgroundPosition: "0 0, 1.5px 1.5px, 0 0",
  };
}

export function ProductShowroom() {
  const [segment, setSegment] = useState<Segment>("residential");
  const [cat, setCat] = useState<CatFilter>("all");
  const [activeId, setActiveId] = useState<string>(SWATCHES[0].id);

  const visible = useMemo(
    () =>
      SWATCHES.filter((s) => s.segment.includes(segment)).filter(
        (s) => cat === "all" || s.category === cat,
      ),
    [segment, cat],
  );

  const active: Swatch =
    visible.find((s) => s.id === activeId) ?? visible[0] ?? SWATCHES[0];

  return (
    <section className="bg-off-white pb-section-mobile md:pb-section">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* ─── Intro row ───────────────────────────────────────── */}
        <Reveal>
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                The sample wall
              </p>
              <h2 className="mt-5 text-display-xl font-medium tracking-tight text-charcoal">
                Every floor we keep, in a single browse.
              </h2>
            </div>
            <p className="text-body-l text-taupe md:col-span-5">
              Filter by residential or commercial, narrow by floor type, and
              pick a tone. Order free samples to your door — the colour you
              choose at midnight on the laptop is rarely the colour you choose
              with the morning light in your room.
            </p>
          </div>
        </Reveal>

        {/* ─── Filters ─────────────────────────────────────────── */}
        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6 border-b border-charcoal/15 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATS.map((c) => (
              <Chip
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </Chip>
            ))}
          </div>
          <RCToggle value={segment} onChange={setSegment} />
        </Reveal>

        {/* ─── Swatch grid + active detail ─────────────────────── */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Swatch grid */}
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {visible.map((s) => {
                  const selected = s.id === active.id;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setActiveId(s.id)}
                        className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-md text-left transition-all duration-300 ease-out ${
                          selected
                            ? "ring-2 ring-charcoal ring-offset-4 ring-offset-off-white"
                            : "hover:-translate-y-1"
                        }`}
                      >
                        {/* Material texture */}
                        <span
                          aria-hidden
                          className="absolute inset-0"
                          style={swatchTexture(s.color)}
                        />
                        {/* Top edge highlight + bottom shadow for tactile depth */}
                        <span
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/12 to-transparent"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/35 to-transparent"
                        />
                        {/* Name plate */}
                        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                          <span className="text-caption uppercase tracking-[0.2em] text-off-white/75">
                            {s.category}
                          </span>
                          <span className="text-headline font-medium leading-tight text-off-white">
                            {s.name}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              {visible.length === 0 && (
                <p className="rounded-md border border-dashed border-stone p-8 text-center text-body text-taupe">
                  No swatches in this combination — try a different filter.
                </p>
              )}
            </Reveal>
          </div>

          {/* Active detail panel */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              {/* Big material zoom */}
              <div
                key={active.id}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-soft"
                style={swatchTexture(active.color)}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/30 to-transparent"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 text-caption uppercase tracking-[0.2em] text-off-white/85">
                  <span
                    aria-hidden
                    className="h-px w-6 bg-gold"
                  />
                  Detail · {active.category}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                  Now showing
                </p>
                <h3 className="mt-3 text-display-l font-medium tracking-tight text-charcoal">
                  {active.name}
                </h3>
                <p className="mt-3 text-body-l text-charcoal/80">{active.note}</p>
                <p className="mt-2 text-small italic text-taupe">
                  Tone shown is illustrative — real samples land within the week.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <Link
                    href={`/contact?topic=samples&swatch=${active.id}`}
                    className="group inline-flex items-center justify-between gap-3 rounded-md bg-charcoal px-5 py-3.5 text-body font-medium text-off-white transition-colors hover:bg-gold hover:text-charcoal"
                  >
                    Order this swatch
                    <span
                      aria-hidden
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-off-white/15 transition-all group-hover:bg-charcoal group-hover:text-off-white"
                    >
                      →
                    </span>
                  </Link>
                  <Link
                    href={`/contact?cat=${active.category}`}
                    className="inline-flex items-center gap-3 text-small font-medium text-charcoal hover:text-gold"
                  >
                    <span className="border-b border-charcoal pb-1">
                      Get a quote on {active.category}
                    </span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* ─── Real wall photo as honest counterweight ────────── */}
        <Reveal className="mt-24 grid items-end gap-10 md:mt-32 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-caption uppercase tracking-[0.22em] text-taupe">
              At the warehouse
            </p>
            <h3 className="mt-4 text-display-l font-medium tracking-tight text-charcoal">
              Or skip the screen — drive to Otara.
            </h3>
            <p className="mt-5 max-w-[44ch] text-body-l text-charcoal/80">
              The sample wall lives at 28 Lovegrove Crescent. Walk it, feel
              it, take what you like home.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-small font-medium text-charcoal hover:text-gold"
            >
              <span className="border-b border-gold pb-1">Plan a visit</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md bg-stone">
              <Image
                src="/photos/real-install-1.webp"
                alt="Numbered carpet swatches arranged on the warehouse sample wall"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 max-w-[60ch] text-caption italic leading-[1.5] text-taupe">
              The actual sample wall · Carpet Direct warehouse, Otara
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
