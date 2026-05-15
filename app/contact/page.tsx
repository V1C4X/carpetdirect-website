import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8 md:col-span-5">
            <div className="rounded-lg bg-charcoal p-7 text-off-white">
              <Eyebrow className="text-gold">Talk to Mike directly</Eyebrow>
              <a
                href="tel:+64214864476"
                className="mt-4 block text-[2.5rem] font-black leading-[1.05] tracking-tight hover:text-gold"
              >
                021 486 476
              </a>
              <a
                href="mailto:carpetdirectsale@gmail.com"
                className="mt-3 inline-block text-body-l text-off-white/85 hover:text-gold"
              >
                carpetdirectsale@gmail.com
              </a>
            </div>

            <div className="rounded-lg border border-stone bg-off-white p-7">
              <Eyebrow>Warehouse</Eyebrow>
              <p className="mt-3 text-headline font-bold text-charcoal">
                28 Lovegrove Crescent
                <br />
                Otara, Auckland
              </p>
              <p className="mt-3 text-body text-taupe">
                Walk-in welcome — grab free samples to take home, talk floors in person.
              </p>
              <Link
                href="https://www.google.com/maps?q=28+Lovegrove+Crescent+Otara+Auckland"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-eyebrow font-bold uppercase tracking-[0.18em] text-green border-b-2 border-green pb-1 hover:opacity-80"
              >
                Get directions →
              </Link>
            </div>

            <div className="rounded-lg border border-stone bg-off-white p-7">
              <Eyebrow>Hours</Eyebrow>
              <dl className="mt-4 space-y-2 text-body">
                <div className="flex justify-between">
                  <dt className="text-taupe">Mon – Fri</dt>
                  <dd className="font-bold text-charcoal">8am – 3pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-taupe">Saturday</dt>
                  <dd className="font-bold text-charcoal">11am – 3pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-taupe">Sunday</dt>
                  <dd className="font-bold text-charcoal">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg border border-stone bg-stone/40 p-7">
              <Eyebrow>Auckland-wide</Eyebrow>
              <p className="mt-3 text-body-l text-charcoal/85">
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
