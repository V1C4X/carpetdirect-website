# Carpet Direct NZ — Website

Marketing site for **Carpet Direct NZ Ltd** — Auckland flooring supply and installation,
proudly walked on since 2005.

- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript
- **Design direction:** Photo-first showroom · editorial restraint · Advance Flooring as the north star
- **Brand palette:** earth-tone (charcoal, off-white, stone, taupe, direct gold, installation green)
- **Type:** Roboto Flex (single-family rule)

## Pages

| Route       | What's on it                                                                |
|-------------|-----------------------------------------------------------------------------|
| `/`         | Editorial hero, trust strip, floor categories, story, process, reviews, CTA |
| `/products` | Showroom (R/C toggle + swatch picker), full category cards, samples CTA    |
| `/services` | Measure → supply → install → prep, sectors served, Auckland-wide coverage  |
| `/gallery`  | Asymmetric project grid filtered by residential / commercial                |
| `/about`    | Mike's story, values, by-the-numbers, warehouse visit CTA                  |
| `/contact`  | Free measure form (server action + honeypot), phone, hours, address card   |

## Run Locally

```bash
bun install
bun run dev          # http://localhost:3000
bun run typecheck    # strict TS
bun run test         # vitest (unit)
bun run build        # production build
bun run e2e          # playwright (after `bun run e2e:install`)
```

## Project layout

```
app/                Next.js routes (one folder per page) + globals.css + layout shell
components/
  layout/           Header, Footer, MobileNav
  sections/         Page-level composite sections (ProductShowroom, GalleryGrid, ContactForm)
  ui/               Primitives (Button, Card, Chip, Eyebrow, Input, PageHeader, Select, Tag, Textarea, RCToggle)
lib/
  cn.ts             clsx helper
  content/          Typed content for products + gallery (single source of truth)
public/
  brand/            Logos
  photos/           Install photography
tests/
  unit/             Vitest component tests
  e2e/              Playwright nav + footer smoke tests
```

## Contact form

The `/contact` form posts to a server action in `app/contact/actions.ts`. It currently
logs submissions server-side and returns a success message. To wire up email delivery:

1. Add a Resend API key as `RESEND_API_KEY` in env.
2. In `app/contact/actions.ts`, replace the `console.log` with a Resend send to
   `carpetdirectsale@gmail.com`.

## Brand reference

- `BRAIN/brand_refs/brand_redesign_2026-05-12.png` — full lockup + alt logos
- `BRAIN/brand_refs/brand_palette_2026-05-12.png` — locked palette
- `BRAIN/design_system.md` — rules of engagement before any new visual asset
