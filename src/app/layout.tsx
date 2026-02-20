import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import { SERVICE_EMAIL, SERVICE_PHONE } from "@/lib/contact";

const GA4_MEASUREMENT_ID = "G-D95PCMY1MD";
const GOOGLE_ADS_ID = "AW-17863468955";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.haushaltsgeraete-kundendienst.at";
const siteName = "GeräteProfi";
const siteDescription =
  "Schneller Haushaltsgeräte-Kundendienst in Österreich – Waschmaschine, Geschirrspüler, Kühlschrank, Backofen, Trockner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Reparatur Österreich | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: "/raparaturkundendienstfavicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `Reparatur Österreich | ${siteName}`,
    description: siteDescription,
    siteName,
    locale: "de_AT",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "/",
      "en-AT": "/en",
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#localbusiness`,
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: SERVICE_PHONE,
  email: SERVICE_EMAIL,
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* Load Google Tag (Ads + GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        {/* Global gtag setup + Consent Mode */}
        <Script
          id="gtag-global"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              gtag('js', new Date());

              // Default consent (GDPR compliant)
              gtag('consent','default',{
                ad_storage:'denied',
                analytics_storage:'denied',
                ad_user_data:'denied',
                ad_personalization:'denied'
              });

              // Configure Google Ads
              gtag('config','${GOOGLE_ADS_ID}');

              // Configure GA4
              gtag('config','${GA4_MEASUREMENT_ID}');

              // Consent update function (used by CookieBanner)
              window.updateConsent = function(granted){
                if(!window.gtag) return;
                window.gtag('consent','update',{
                  ad_storage: granted ? 'granted' : 'denied',
                  analytics_storage: granted ? 'granted' : 'denied',
                  ad_user_data: granted ? 'granted' : 'denied',
                  ad_personalization: granted ? 'granted' : 'denied'
                });
              };

              // Track tel: clicks (Google Ads conversion)
              document.addEventListener("click", function(e) {
                const target = e.target.closest("a[href^='tel:']");
                if (target && typeof gtag === "function") {
                  gtag('event','conversion',{
                    send_to: '${GOOGLE_ADS_ID}/8e1CCIhb-PsbEJvP-8VC'
                  });
                }
              });
            `,
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}

            {/* LocalBusiness JSON-LD */}
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(localBusinessJsonLd),
              }}
            />
          </main>

          <Footer />
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}