"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RCToggle, type Segment } from "@/components/ui/RCToggle";
import { Chip } from "@/components/ui/Chip";
import { ROOMS, SWATCHES, type Swatch } from "@/lib/content/products";

const CATS = [
  { id: "all" as const, label: "All" },
  { id: "carpet" as const, label: "Carpet" },
  { id: "spc" as const, label: "SPC" },
  { id: "vinyl" as const, label: "Vinyl" },
  { id: "tiles" as const, label: "Tiles" },
];

type CatFilter = (typeof CATS)[number]["id"];

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

  // keep selection valid when filters change
  const active: Swatch =
    visible.find((s) => s.id === activeId) ?? visible[0] ?? SWATCHES[0];

  const room = ROOMS[segment];

  return (
    <section className="bg-off-white py-section-mobile md:py-section">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <Eyebrow>Showroom</Eyebrow>
            <h2 className="mt-3 text-display-l font-black tracking-tight text-charcoal md:text-[3.25rem] md:leading-[1.05]">
              See it in the room.
            </h2>
            <p className="mt-4 max-w-[58ch] text-body-l text-taupe">
              Switch between residential and commercial rooms, filter by floor type, and tap a
              swatch to preview the tone in context. For real samples, order free or pop into
              the Otara warehouse.
            </p>
          </div>
          <RCToggle value={segment} onChange={setSegment} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* ─── Room preview ────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone shadow-soft">
              <Image
                key={room.src}
                src={room.src}
                alt={room.alt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              {/* floor overlay — lower half tinted by selected swatch */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] mix-blend-multiply transition-colors duration-500 ease-out"
                style={{ backgroundColor: active.color, opacity: 0.55 }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-transparent to-off-white/10 mix-blend-overlay"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-pill bg-charcoal/85 px-4 py-2 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white backdrop-blur">
                <span
                  aria-hidden
                  className="h-3 w-3 rounded-full border border-off-white/40"
                  style={{ backgroundColor: active.color }}
                />
                Previewing · {active.name}
              </div>
            </div>
            <p className="mt-3 text-small text-taupe">
              Preview is illustrative only — tone varies in person and with daylight. Order
              free samples for the real read.
            </p>
          </div>

          {/* ─── Swatch picker ───────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
                  {c.label}
                </Chip>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
              {visible.map((s) => {
                const selected = s.id === active.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveId(s.id)}
                    className={`group relative flex aspect-square flex-col justify-end overflow-hidden rounded-md border-2 p-3 text-left transition-all ${
                      selected
                        ? "border-gold shadow-soft"
                        : "border-stone/70 hover:border-charcoal/70"
                    }`}
                    style={{ backgroundColor: s.color }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent"
                    />
                    <span className="relative text-eyebrow font-bold uppercase tracking-[0.15em] text-off-white">
                      {s.name}
                    </span>
                  </button>
                );
              })}
              {visible.length === 0 && (
                <p className="col-span-full rounded-md border border-dashed border-stone p-6 text-center text-small text-taupe">
                  No swatches in this combination — try another filter.
                </p>
              )}
            </div>

            <div className="mt-8 rounded-md border border-stone bg-off-white p-6">
              <Eyebrow>{active.category}</Eyebrow>
              <p className="mt-2 text-display-m font-black tracking-tight text-charcoal">
                {active.name}
              </p>
              <p className="mt-2 text-body text-taupe">{active.note}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact?topic=samples"
                  className="inline-flex items-center gap-2 rounded-pill bg-charcoal px-5 py-2.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white transition-colors hover:bg-gold hover:text-charcoal"
                >
                  Order free sample
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-pill border border-charcoal/80 px-5 py-2.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-charcoal hover:bg-charcoal hover:text-off-white"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
