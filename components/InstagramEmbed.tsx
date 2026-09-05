import { brand } from "@/lib/site";

export function InstagramEmbed() {
  return (
    <div className="overflow-hidden border border-gold/20 bg-smoke">
      <iframe
        title={`${brand.name} on Instagram`}
        src="https://www.instagram.com/thesmokeypit31/embed"
        className="h-[540px] w-full bg-charcoal"
        loading="lazy"
      />
    </div>
  );
}
