"use client";
import { useActionState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitQuote, type QuoteFormState } from "@/app/contact/actions";

const INITIAL: QuoteFormState = { status: "idle" };

const FLOOR_OPTIONS = [
  { value: "", label: "Choose floor type" },
  { value: "carpet", label: "Carpet" },
  { value: "spc", label: "SPC planks" },
  { value: "vinyl", label: "Vinyl" },
  { value: "tiles", label: "Carpet tiles" },
  { value: "garage", label: "Garage carpet" },
  { value: "unsure", label: "Not sure yet" },
];

const TOPIC_OPTIONS = [
  { value: "measure", label: "Free in-home measure" },
  { value: "samples", label: "Free samples to my door" },
  { value: "quote", label: "Quote on a known floor" },
  { value: "commercial", label: "Commercial / trade enquiry" },
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitQuote, INITIAL);

  if (state.status === "ok") {
    return (
      <div className="rounded-lg border border-green/40 bg-green/10 p-8">
        <p className="text-eyebrow font-bold uppercase tracking-[0.2em] text-green">
          Got it
        </p>
        <p className="mt-3 text-display-m font-black tracking-tight text-charcoal">
          {state.message}
        </p>
        <p className="mt-4 text-body text-taupe">
          In the meantime, you&apos;re welcome to phone Mike directly on{" "}
          <a className="font-bold text-charcoal underline-offset-4 hover:underline" href="tel:+64214864476">
            021 486 476
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <fieldset className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input label="Your name" name="name" required autoComplete="name" />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="021…"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="(optional)"
        />
        <Input
          label="Suburb"
          name="suburb"
          required
          autoComplete="address-level2"
          placeholder="e.g. Pakuranga"
        />
      </fieldset>

      <fieldset className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Select label="What can we help with" name="topic" options={TOPIC_OPTIONS} />
        <Select label="Floor type" name="floor" options={FLOOR_OPTIONS} />
      </fieldset>

      <Input
        label="Rooms / approx m²"
        name="rooms"
        placeholder="e.g. 3 bedrooms + lounge, ~70m²"
      />

      <Textarea
        label="Anything else?"
        name="message"
        placeholder="Sub-floor type, deadlines, parking, kids/pets…"
      />

      {/* honeypot */}
      <label className="honeypot" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" name="website" type="text" />
      </label>

      {state.status === "error" && (
        <p role="alert" className="rounded-sm border border-red/60 bg-red/10 px-4 py-3 text-small text-red">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-pill bg-charcoal px-7 py-3.5 text-eyebrow font-bold uppercase tracking-[0.18em] text-off-white shadow-soft transition-colors hover:bg-gold hover:text-charcoal disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send to Mike"}
          {!pending && <span aria-hidden>→</span>}
        </button>
        <p className="text-small text-taupe">
          We&apos;ll only use your details to get back to you about flooring.
        </p>
      </div>
    </form>
  );
}
