import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact — Book your free measure",
  description:
    "Phone Mike on 021 486 476 or send your details for a free in-home flooring measure right across Auckland.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a free in-home measure."
        intro="Tell us a bit about the room, and Mike will come measure properly — no charge, no obligation. Most of Auckland gets booked within the week."
      />

      <section className="bg-off-white pb-section-mobile md:pb-section">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-12 md:col-span-5">
            <div>
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Talk to Mike directly
              </p>
              <a
                href="tel:+64214864476"
                className="mt-5 block text-display-l font-medium tracking-tight text-charcoal hover:text-gold"
              >
                021 486 476
              </a>
              <a
                href="mailto:carpetdirectsale@gmail.com"
                className="mt-4 inline-block text-body-l text-charcoal/80 hover:text-gold"
              >
                carpetdirectsale@gmail.com
              </a>
            </div>

            <div className="border-t border-charcoal/15 pt-8">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Warehouse
              </p>
              <p className="mt-4 text-headline font-medium tracking-tight text-charcoal">
                28 Lovegrove Crescent
                <br />
                Otara, Auckland
              </p>
              <p className="mt-4 max-w-[34ch] text-body text-taupe">
                Walk-in welcome — grab free samples to take home, talk floors in person.
              </p>
              <Link
                href="https://www.google.com/maps?q=28+Lovegrove+Crescent+Otara+Auckland"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-3 text-small font-medium text-charcoal"
              >
                <span className="border-b border-gold pb-1">Get directions</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="border-t border-charcoal/15 pt-8">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Hours
              </p>
              <dl className="mt-5 space-y-3 text-body">
                <div className="flex justify-between border-b border-charcoal/10 pb-3">
                  <dt className="text-taupe">Mon – Fri</dt>
                  <dd className="text-charcoal">8am – 3pm</dd>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-3">
                  <dt className="text-taupe">Saturday</dt>
                  <dd className="text-charcoal">11am – 3pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-taupe">Sunday</dt>
                  <dd className="text-taupe">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-charcoal/15 pt-8">
              <p className="text-caption uppercase tracking-[0.22em] text-taupe">
                Auckland-wide
              </p>
              <p className="mt-4 max-w-[34ch] text-body-l text-charcoal/80">
                We measure and install from Albany to Pukekohe — same direct pricing
                everywhere.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
