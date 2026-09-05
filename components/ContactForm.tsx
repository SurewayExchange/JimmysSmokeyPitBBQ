"use client";

import { FormEvent, useState } from "react";
import { brand } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(brand.instagramUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/30 bg-ash p-8">
        <p className="font-display text-2xl tracking-wide uppercase">Take it to the pit</p>
        <p className="mt-3 leading-7 text-muted">
          Instagram is how this shop talks. Send the note to {brand.instagramLabel} and we will
          confirm the tray, the time, and the smoke.
        </p>
        <a
          href={brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ember mt-6 inline-flex px-6 py-3 text-xs font-semibold"
        >
          Message {brand.instagramLabel}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-gold/20 bg-smoke p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="font-display text-xs tracking-[0.2em] uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full border border-gold/20 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="kind" className="font-display text-xs tracking-[0.2em] uppercase">
          What do you need
        </label>
        <select
          id="kind"
          name="kind"
          className="mt-2 w-full border border-gold/20 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold"
          defaultValue="Order for pickup"
        >
          <option>Order for pickup</option>
          <option>Catering / trays</option>
          <option>Private pit</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="font-display text-xs tracking-[0.2em] uppercase">
          The details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-gold/20 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold"
          placeholder="Headcount, date, meats you want on the board..."
        />
      </div>
      <button type="submit" className="btn-ember px-7 py-3.5 text-xs font-semibold">
        Send via Instagram
      </button>
    </form>
  );
}
