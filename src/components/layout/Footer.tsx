import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services/waschmaschinen-reparatur", label: "Waschmaschine" },
    { href: "/services/geschirrspueler-reparatur", label: "Geschirrspüler" },
    { href: "/services/kuehlschrank-reparatur", label: "Kühlschrank" },
    { href: "/services/backofen-reparatur", label: "Backofen" },
    { href: "/services/trockner-reparatur", label: "Trockner" },
  ],
  company: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/einsatzgebiete", label: "Gebiete" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/notdienst", label: "Notdienst" },
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
            <div className="flex items-center gap-2">
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-900">
                  GeräteProfi (Demo)
                </span>
                <span className="text-xs text-slate-500">
                  Reparatur in Österreich
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Schnelle, faire und transparente Reparaturen von Waschmaschinen,
              Geschirrspülern, Kühlschränken, Backöfen und Trocknern – direkt
              bei Ihnen vor Ort.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>
                Tel.:{" "}
                <a
                  href="tel:+430000000000"
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  +43 0 000 000000
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:demo@example.com"
                  className="font-medium text-blue-700 hover:text-blue-800"
                >
                  demo@example.com
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
                    className="hover:text-blue-700 hover:underline"
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
                    className="hover:text-blue-700 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-700 hover:underline"
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

