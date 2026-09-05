import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { offerings } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Counter",
  description:
    "Signature pit meats from Jimmy's Smokey Pit BarBecue — brisket, ribs, pork, chicken, and butcher boards.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        image="/assets/hero-platter.jpg"
        kicker="The counter"
        title="Meats. Boards. Fire."
        copy="Shop-style offerings, not a generic restaurant list. Each item is a signature cut inspired by what the pit actually smokes and shows at @thesmokeypit31."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          kicker="Signature items"
          title="From the butcher paper"
          copy="No invented full price list. Follow Instagram for today’s drop, trays, and availability."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item) => (
            <div key={item.id}>
              <ProductCard
                name={item.name}
                category={item.category}
                description={item.description}
                image={item.image}
                badge={item.badge}
                href="/contact"
              />
              <p className="mt-2 text-xs leading-5 text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
