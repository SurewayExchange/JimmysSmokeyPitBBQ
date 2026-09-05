import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-smoke">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src={brand.logo}
            alt={`${brand.name} mark from Instagram`}
            width={72}
            height={72}
            className="mb-4 h-[72px] w-[72px] rounded-full border border-gold/40 object-cover"
          />
          <p className="stamp mb-3 inline-block px-2 py-0.5 text-[9px]">Jimmy&apos;s</p>
          <p className="font-display text-2xl tracking-[0.08em] uppercase">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{brand.tagline}</p>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Walk the shop</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/85 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">The live pit</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Hours, today&apos;s drop, and the current counter live on Instagram. No invented address —
            follow the smoke.
          </p>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember mt-5 inline-flex px-5 py-3 text-xs font-semibold"
          >
            {brand.instagramLabel}
          </a>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs tracking-wide text-muted sm:px-6">
          © {new Date().getFullYear()} {brand.name}. Shop mark is the official {brand.instagramLabel}{" "}
          profile photo. Food stills are licensed stand-ins — the public Instagram grid had no posts
          yet.
        </p>
      </div>
    </footer>
  );
}
