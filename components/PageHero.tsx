import Image from "next/image";

export function PageHero({
  image,
  kicker,
  title,
  copy,
}: {
  image: string;
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="grain relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="stamp mb-4 inline-block px-3 py-1 text-[10px]">{kicker}</p>
        <h1 className="font-display max-w-4xl text-5xl tracking-[0.05em] uppercase sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-parchment/90">{copy}</p>
      </div>
    </section>
  );
}
