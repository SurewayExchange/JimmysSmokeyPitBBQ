import Image from "next/image";
import { brand } from "@/lib/site";

export function InstagramCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "bg-ash" : "bg-blood"}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex items-start gap-4">
          <Image
            src={brand.logo}
            alt={`${brand.name} Instagram profile mark`}
            width={72}
            height={72}
            className="h-[72px] w-[72px] shrink-0 rounded-full border border-gold/50 object-cover"
          />
          <div>
            <p className="font-display text-sm tracking-[0.24em] text-gold uppercase">
              From {brand.instagramLabel}
            </p>
            <h2 className="font-display mt-2 text-3xl tracking-wide uppercase sm:text-4xl">
              The official pit mark
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-cream/85">{brand.instagramNote}</p>
          </div>
        </div>
        <a
          href={brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost bg-charcoal/30 px-7 py-3.5 text-xs font-semibold"
        >
          Open Instagram
        </a>
      </div>
    </section>
  );
}
