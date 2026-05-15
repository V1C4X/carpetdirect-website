export type Segment = "residential" | "commercial";

export interface Swatch {
  id: string;
  name: string;
  category: "carpet" | "spc" | "vinyl" | "tiles";
  segment: Segment[];
  /** css color string for the floor overlay tint */
  color: string;
  /** short copy under the name */
  note: string;
}

export const ROOMS: Record<Segment, { src: string; alt: string }> = {
  residential: {
    src: "/photos/living-room-carpet.jpg",
    alt: "Auckland residential lounge — wide-plank floor laid by Carpet Direct",
  },
  commercial: {
    src: "/photos/spc-planks.jpg",
    alt: "Commercial interior with SPC plank flooring",
  },
};

export const SWATCHES: Swatch[] = [
  // ── Carpet ─────────────────────────────────────────────
  {
    id: "carpet-stone",
    name: "Stonefield",
    category: "carpet",
    segment: ["residential"],
    color: "#a89c8a",
    note: "Plush twist · warm beige",
  },
  {
    id: "carpet-charcoal",
    name: "Boulder",
    category: "carpet",
    segment: ["residential", "commercial"],
    color: "#4a4842",
    note: "Loop pile · deep charcoal",
  },
  {
    id: "carpet-oat",
    name: "Oat Heather",
    category: "carpet",
    segment: ["residential"],
    color: "#d4c8b0",
    note: "Cut pile · soft oat",
  },
  // ── SPC ─────────────────────────────────────────────────
  {
    id: "spc-natural",
    name: "Natural Oak",
    category: "spc",
    segment: ["residential", "commercial"],
    color: "#b48c5d",
    note: "SPC plank · honey oak",
  },
  {
    id: "spc-smoked",
    name: "Smoked Walnut",
    category: "spc",
    segment: ["residential", "commercial"],
    color: "#5a463a",
    note: "SPC plank · deep walnut",
  },
  // ── Vinyl ───────────────────────────────────────────────
  {
    id: "vinyl-driftwood",
    name: "Driftwood Vinyl",
    category: "vinyl",
    segment: ["residential"],
    color: "#a89180",
    note: "Sheet vinyl · driftwood grey",
  },
  {
    id: "vinyl-graphite",
    name: "Graphite Sheet",
    category: "vinyl",
    segment: ["commercial"],
    color: "#3f4147",
    note: "Wet-area vinyl · graphite",
  },
  // ── Tiles ───────────────────────────────────────────────
  {
    id: "tile-loop",
    name: "Contract Loop",
    category: "tiles",
    segment: ["commercial"],
    color: "#6b6960",
    note: "Modular tile · contract spec",
  },
];

export const CATEGORIES = [
  {
    id: "carpet",
    label: "Carpet",
    blurb:
      "Luxury, mid-range and everyday carpet. Twist, loop and cut-pile constructions for living, bedrooms and stairs.",
  },
  {
    id: "spc",
    label: "SPC Planks",
    blurb:
      "Stone-polymer composite plank — water-stable, dent-resistant, click-lock install over most sub-floors.",
  },
  {
    id: "vinyl",
    label: "Vinyl",
    blurb:
      "Sheet and plank vinyl. Wet-area ready, fast to lay, easy to live with — great for kitchens, bathrooms and rentals.",
  },
  {
    id: "tiles",
    label: "Carpet Tiles",
    blurb:
      "Modular tile floors for offices, churches, community halls and high-traffic rooms. Replace a tile, not the whole floor.",
  },
  {
    id: "garage",
    label: "Garage Carpet & Extras",
    blurb:
      "Hard-wearing garage carpet, underlay, tack strips and trims — everything that goes under or around the main floor.",
  },
] as const;
