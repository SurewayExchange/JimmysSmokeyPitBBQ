"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blood text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase sm:px-6">
          <p className="truncate">Hardwood smoke · butcher cuts · follow the pit</p>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 underline-offset-4 hover:underline"
          >
            {brand.instagramLabel}
          </a>
        </div>
      </div>
      <div className="border-b border-gold/20 bg-charcoal/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="group flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} Instagram mark`}
              width={56}
              height={56}
              priority
              className="h-12 w-12 rounded-full border border-gold/40 object-cover sm:h-14 sm:w-14"
            />
            <span className="min-w-0">
              <p className="stamp mb-1 inline-block px-2 py-0.5 text-[9px]">Est. the pit</p>
              <p className="font-display text-lg leading-none tracking-[0.08em] text-cream uppercase sm:text-xl">
                Jimmy&apos;s Smokey Pit
              </p>
              <p className="font-serif text-gold italic">BarBecue</p>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-sm tracking-[0.2em] uppercase ${
                    active ? "text-gold" : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-ember px-5 py-2.5 text-xs font-semibold">
              Order / Cater
            </Link>
          </nav>

          <button
            type="button"
            className="btn-ghost px-3 py-2 text-xs lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-gold/15 px-4 py-4 lg:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display block py-2 tracking-[0.2em] text-cream uppercase"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-ember mt-2 inline-flex justify-center px-5 py-3 text-xs font-semibold"
              >
                Order / Cater
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
