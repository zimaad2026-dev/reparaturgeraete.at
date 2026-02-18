import Link from "next/link";
import Image from "next/image";
import { SERVICE_EMAIL, SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

const footerLinks = {
  services: [
    { href: "/services/waschmaschinen-reparatur", label: "Waschmaschine" },
    { href: "/services/geschirrspueler-reparatur", label: "Geschirrspüler" },
    { href: "/services/kuehlschrank-reparatur", label: "Kühlschrank" },
    { href: "/services/backofen-reparatur", label: "Herd & Backofen" },
    { href: "/services/trockner-reparatur", label: "Trockner" },
    { href: "/services/altgeraete-entsorgen", label: "Altgeräte Entsorgen" },
  ],
  company: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/geratereparatur.png"
                alt="GeräteProfi"
                width={200}
                height={67}
                className="h-10 w-auto sm:h-12 md:h-14"
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, 14rem"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Schnelle, faire und transparente Hilfe für Waschmaschinen,
              Geschirrspüler, Kühlschränke, Backöfen und Trockner – direkt
              bei Ihnen vor Ort.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-700">Telefon:</span>{" "}
                <a
                  href={SERVICE_PHONE_HREF}
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  {SERVICE_PHONE}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-700">E-Mail:</span>{" "}
                <a
                  href={`mailto:${SERVICE_EMAIL}`}
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  {SERVICE_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Services
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Recht & Info
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GeräteProfi Kundendienst. Alle Rechte vorbehalten.</p>
          <p className="mt-1 md:mt-0">
            Österreichweiter Kundendienst für Haushaltsgeräte – schnell, fair,
            zuverlässig.
          </p>
        </div>
      </div>
    </footer>
  );
}


