import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { address } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "110 PARTS | Premium Car Parts",
  description:
    "Premium quality car parts, reliable performance, and everything your vehicle needs in one place. Brake systems, batteries, filters, spark plugs, and more from 110 PARTS, Meek Street, Plot 4, OL2 6HL.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "110 PARTS",
  description:
    "Premium quality car parts, reliable performance, and everything your vehicle needs in one place.",
  telephone: ["+441614254420", "+447722566832"],
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    postalCode: address.postcode,
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-ink text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
