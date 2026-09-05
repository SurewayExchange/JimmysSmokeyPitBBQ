import type { Metadata, Viewport } from "next";
import { Oswald, Playfair_Display, Source_Sans_3 } from "next/font/google";
import { SiteFrame } from "@/components/SiteFrame";
import { brand } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    title: brand.name,
    description: brand.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100d0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-charcoal text-cream">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
