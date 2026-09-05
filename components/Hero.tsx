"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/site";

const slides = [
  {
    src: "/assets/hero-brisket.jpg",
    alt: "Sliced pit brisket with a dark bark",
    kicker: "From the butcher block",
    title: brand.name,
    copy: "Smokehouse meats presented like a meat shop — bold cuts, warm reds, and charcoal chrome.",
  },
  {
    src: "/assets/hero-ribs.jpg",
    alt: "Glazed barbecue ribs",
    kicker: "The rack is ready",
    title: "Ribs. Bark. Fire.",
    copy: "Shop-style BBQ for the table, the tray, and the catering run.",
  },
  {
    src: "/assets/hero-platter.jpg",
    alt: "Loaded barbecue platter",
    kicker: "Load the board",
    title: "Counter energy.",
    copy: "Platters, pulled pork, chicken, and links — follow the pit for today’s drop.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="grain relative min-h-[88vh] overflow-hidden bg-charcoal">
      {slides.map((item, slideIndex) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority={slideIndex === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="stamp mb-6 inline-block w-fit px-3 py-1 text-[10px]">{slide.kicker}</p>
        <h1 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[0.04em] text-cream uppercase sm:text-7xl">
          {slide.title}
        </h1>
        <p className="font-serif mt-4 text-2xl text-gold italic sm:text-3xl">The pit is the shop.</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-parchment/90">{slide.copy}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/menu" className="btn-ember px-7 py-3.5 text-xs font-semibold">
            Shop the counter
          </Link>
          <Link href="/contact" className="btn-ghost px-7 py-3.5 text-xs font-semibold">
            Catering / order
          </Link>
        </div>
        <div className="mt-10 flex gap-2" aria-label="Hero slides">
          {slides.map((item, slideIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show slide ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-1.5 w-10 ${slideIndex === index ? "bg-ember" : "bg-cream/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
