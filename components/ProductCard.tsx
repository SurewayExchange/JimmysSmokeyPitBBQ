import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  href?: string;
};

export function ProductCard({
  name,
  category,
  description,
  image,
  badge,
  href = "/menu",
}: ProductCardProps) {
  return (
    <article className="card-cut group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {badge ? (
          <span className="absolute top-3 left-3 bg-blood px-2.5 py-1 font-display text-[10px] tracking-[0.18em] text-cream uppercase">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{category}</p>
        <h3 className="font-display mt-2 text-2xl tracking-wide uppercase">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        <Link
          href={href}
          className="font-display mt-5 inline-block text-xs tracking-[0.2em] text-gold uppercase underline-offset-4 hover:underline"
        >
          View the cut
        </Link>
      </div>
    </article>
  );
}
