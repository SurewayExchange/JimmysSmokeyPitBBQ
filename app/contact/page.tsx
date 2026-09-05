import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Us",
  description: `Hours, location, catering, and orders for ${brand.name} via Instagram ${brand.instagramLabel}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/assets/about-smoke.jpg"
        kicker="Find us"
        title="Hours. Location. The order."
        copy="We will not invent a street corner. The live pit posts where the smoke is today, when the counter is open, and how to grab a tray."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="stamp mb-4 inline-block px-3 py-1 text-[10px]">The facts</p>
          <h2 className="font-display text-4xl tracking-[0.05em] uppercase">Talk to the pit</h2>
          <dl className="mt-8 space-y-6">
            <div className="border-t border-gold/20 pt-4">
              <dt className="font-display text-sm tracking-[0.2em] text-gold uppercase">Instagram</dt>
              <dd className="mt-2">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream underline-offset-4 hover:underline"
                >
                  {brand.instagramLabel}
                </a>
              </dd>
            </div>
            <div className="border-t border-gold/20 pt-4">
              <dt className="font-display text-sm tracking-[0.2em] text-gold uppercase">Hours & location</dt>
              <dd className="mt-2 leading-7 text-muted">
                Posted on Instagram when the pit is lit. Check stories and the latest post before
                you roll up.
              </dd>
            </div>
            <div className="border-t border-gold/20 pt-4">
              <dt className="font-display text-sm tracking-[0.2em] text-gold uppercase">Order / catering</dt>
              <dd className="mt-2 leading-7 text-muted">
                Boards, trays, and pickup. Send the headcount and the meats you want. We confirm on
                Instagram — the same place the shop already lives.
              </dd>
            </div>
          </dl>
          <div className="mt-10">
            <InstagramEmbed />
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
