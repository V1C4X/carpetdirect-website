"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { PROJECTS, type Project } from "@/lib/content/projects";

type Filter = "all" | Project["category"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
];

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section className="bg-off-white pb-section-mobile md:pb-section">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <Chip
              key={f.id}
              active={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Chip>
          ))}
          <span className="ml-auto text-eyebrow uppercase tracking-[0.18em] text-taupe">
            {visible.length} project{visible.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
          {visible.map((p) => (
            <figure
              key={p.id}
              className={`group relative overflow-hidden rounded-md bg-stone ${p.span} ${p.aspect}`}
            >
              <Image
                src={p.photo}
                alt={`${p.title} — ${p.suburb}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6 md:p-7">
                <span className="text-eyebrow font-bold uppercase tracking-[0.2em] text-gold">
                  {p.product}
                </span>
                <p className="text-body-l font-bold text-off-white md:text-headline">
                  {p.title}
                </p>
                <p className="text-small uppercase tracking-[0.15em] text-off-white/70">
                  {p.suburb} · {p.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
