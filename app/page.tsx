import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { InstagramCta } from "@/components/InstagramCta";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, categories, offerings, reasons } from "@/lib/site";

export default function HomePage() {
  const featured = offerings.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="border-y border-gold/15 bg-smoke">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {["Hardwood smoked", "Butcher-cut presentation", "Catering trays"].map((item) => (
            <p key={item} className="font-display text-center text-sm tracking-[0.22em] text-gold uppercase">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Shop by cut"
          title="The meat counter"
          copy="BBque butcher-shop energy: category tiles first, then the board. These are signature pit items inspired by the meats we smoke and show at @thesmokeypit31 — not a fabricated full printed menu."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href="/menu" className="group relative isolate min-h-56 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-3xl tracking-wide uppercase">{category.name}</p>
                <p className="mt-1 text-sm text-parchment">{category.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-smoke py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading kicker="Featured from the pit" title="On the board" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                image={item.image}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/assets/butcher-counter.jpg"
            alt="Butcher-style raw cuts ready for the smoker"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="stamp mb-4 inline-block px-3 py-1 text-[10px]">About the shop</p>
          <h2 className="font-display text-4xl tracking-[0.06em] uppercase sm:text-5xl">
            Not a diner. A pit with a counter.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            {brand.name} is built like a meat shop that learned to wait on fire — hanging cuts,
            stamped paper, cream and charcoal, and a red stripe that means the rack is up. The
            story, the hours, and the live drop stay on Instagram because that is where the pit
            actually posts.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t border-gold/25 pt-4">
                <h3 className="font-display tracking-wide uppercase">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{reason.copy}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-ghost mt-8 inline-flex px-6 py-3 text-xs font-semibold">
            Read the pit story
          </Link>
        </div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker={brand.instagramLabel}
            title="Proof in the smoke"
            copy={brand.instagramNote}
          />
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-6">
            <Image
              src={brand.logo}
              alt={`${brand.name} official Instagram profile mark`}
              width={160}
              height={160}
              className="h-40 w-40 rounded-full border-2 border-gold/50 object-cover"
            />
            <InstagramEmbed />
          </div>
        </div>
      </section>

      <InstagramCta />
    </>
  );
}
