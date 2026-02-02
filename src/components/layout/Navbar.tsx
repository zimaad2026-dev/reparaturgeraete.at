"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/einsatzgebiete", label: "Gebiete" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/notdienst", label: "Notdienst" },
];

function classNames(...classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isEnglish = pathname.startsWith("/en");

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              GeräteProfi (Demo)
            </span>
            <span className="text-xs text-slate-500">
              Reparatur Österreich
            </span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Navigation öffnen"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menü</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 4H13.5M2.5 8H13.5M2.5 12H13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={classNames(
                  "text-sm font-medium tracking-tight transition-colors",
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 pl-4">
            <div className="flex items-center gap-1 text-sm font-medium" role="group" aria-label="Sprache wählen">
              <Link
                href="/"
                className={classNames(
                  "px-1.5 py-0.5 transition-colors",
                  !isEnglish ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                )}
              >
                DE
              </Link>
              <span className="text-slate-300 select-none" aria-hidden="true">|</span>
              <Link
                href="/en"
                className={classNames(
                  "px-1.5 py-0.5 transition-colors",
                  isEnglish ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                )}
              >
                EN
              </Link>
            </div>
            <Link
              href="#kontaktformular"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span>Schnellanfrage</span>
            </Link>
          </div>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={classNames(
                    "rounded-md px-2 py-2 text-sm font-medium",
                    active
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-1 border-t border-slate-100 pt-3 text-sm font-medium">
              <Link href="/" className={classNames("px-2 py-1.5 rounded", !isEnglish ? "text-blue-600 bg-blue-50" : "text-slate-500")} onClick={() => setOpen(false)}>DE</Link>
              <span className="text-slate-300">|</span>
              <Link href="/en" className={classNames("px-2 py-1.5 rounded", isEnglish ? "text-blue-600 bg-blue-50" : "text-slate-500")} onClick={() => setOpen(false)}>EN</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

