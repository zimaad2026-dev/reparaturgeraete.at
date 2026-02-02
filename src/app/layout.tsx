import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.haushaltsgeraete-kundendienst.at";
const siteName = "GeräteProfi Kundendienst";
const siteDescription =
  "Schneller und zuverlässiger Haushaltsgeräte Kundendienst in Österreich – Reparatur von Waschmaschinen, Geschirrspülern, Kühlschränken, Backöfen und Trocknern.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – Haushaltsgeräte Reparatur in Österreich`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} – Haushaltsgeräte Reparatur in Österreich`,
    description: siteDescription,
    siteName,
    locale: "de_AT",
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#localbusiness`,
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: "+43 1 234 56 78",
  email: "service@haushaltsgeraete-kundendienst.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 12",
    addressLocality: "Wien",
    postalCode: "1010",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  areaServed: [
    "Wien",
    "Graz",
    "Linz",
    "Salzburg",
    "Innsbruck",
    "St. Pölten",
    "Klagenfurt",
    "Villach",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
            <script
              type="application/ld+json"
              suppressHydrationWarning
              // JSON-LD for LocalBusiness schema
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(localBusinessJsonLd),
              }}
            />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
