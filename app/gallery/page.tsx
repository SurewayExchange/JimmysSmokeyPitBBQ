import type { Metadata } from "next";
import Image from "next/image";
import { InstagramCta } from "@/components/InstagramCta";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Pit photography and the live Instagram feed for ${brand.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        image="/assets/hero-ribs.jpg"
        kicker="Gallery"
        title="Smoke, steel, and slice."
        copy={`${brand.instagramNote} The wall below is licensed pit photography until ${brand.instagramLabel} publishes plates.`}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading kicker="The wall" title="Pit stills" />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((shot) => (
            <figure key={shot.src} className="mb-4 break-inside-avoid overflow-hidden bg-smoke">
              <div className="relative aspect-[4/5]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 font-display text-xs tracking-[0.2em] text-gold uppercase">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="bg-smoke py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <SectionHeading kicker="Live feed" title={brand.instagramLabel} />
          <div className="mt-10 flex flex-col items-center gap-6">
            <Image
              src={brand.logo}
              alt={`${brand.name} official Instagram profile mark`}
              width={140}
              height={140}
              className="h-[140px] w-[140px] rounded-full border-2 border-gold/50 object-cover"
            />
            <InstagramEmbed />
          </div>
        </div>
      </section>
      <InstagramCta compact />
    </>
  );
}
