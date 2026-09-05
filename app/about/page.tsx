import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { brand, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pit",
  description: `The story of ${brand.name} — a smokehouse counter with butcher-shop soul.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/assets/about-smoke.jpg"
        kicker="The pit"
        title="Jimmy's Smokey Pit BarBecue"
        copy="A shop that treats barbecue like a craft counter: trim, rub, smoke, slice, wrap."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-ash">
          <Image
            src="/assets/smoker.jpg"
            alt="Meat over open fire and smoke"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-40"
          />
          <Image
            src={brand.logo}
            alt={`${brand.name} official Instagram profile mark`}
            width={220}
            height={220}
            className="relative z-10 h-[220px] w-[220px] rounded-full border-4 border-gold/60 object-cover shadow-2xl"
          />
        </div>
        <div>
          <p className="stamp mb-4 inline-block px-3 py-1 text-[10px]">The story</p>
          <h2 className="font-display text-4xl tracking-[0.05em] uppercase">Born on hardwood</h2>
          <p className="mt-5 text-base leading-8 text-muted">
            {brand.name} is the pit and the counter in one room. We take the BBque butcher-shop
            idea seriously: dark wood energy, cream tickets, a red strike of heat, and meats that
            look like they came off a block — not a steam table. The public diary of that work is{" "}
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              {brand.instagramLabel}
            </a>
            .
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            If you came looking for a polished corporate restaurant story, you are in the wrong
            shop. This is smoke, steel, and the next rack.
          </p>
        </div>
      </section>
      <section className="bg-smoke py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.title} className="border border-gold/15 p-8">
              <h3 className="font-display text-2xl tracking-wide uppercase">{reason.title}</h3>
              <p className="mt-3 leading-7 text-muted">{reason.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-ember inline-flex px-7 py-3.5 text-xs font-semibold">
            Book the pit
          </Link>
        </div>
      </section>
    </>
  );
}
