import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "Reparatur Österreich",
  description:
    "Haushaltsgeräte reparieren in Österreich – Waschmaschine, Geschirrspüler, Kühlschrank, Backofen, Trockner. Schnell, transparent, erfahrene Techniker.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell kommt ein Techniker zu mir nach Hause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel können wir Termine innerhalb von 24 Stunden anbieten. In Notfällen – etwa bei Kühlgeräten – versuchen wir, noch am selben Tag zu kommen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel kostet eine Geräte-Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir arbeiten mit transparenten Pauschalen für Anfahrt und Diagnose. Vor jeder Reparatur erhalten Sie einen verbindlichen Kostenvoranschlag, den Sie in Ruhe entscheiden können.",
      },
    },
    {
      "@type": "Question",
      name: "Reparieren Sie Geräte aller Marken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unsere Techniker sind auf alle gängigen Marken spezialisiert – von AEG, Bosch, Miele, Siemens und Bauknecht bis hin zu vielen weiteren Herstellern.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Garantie auf die Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, auf die von uns verbauten Ersatzteile und die ausgeführten Arbeiten erhalten Sie eine Gewährleistung. Details erläutert Ihnen Ihr Techniker vor Ort.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // FAQ schema for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-slate-50">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-12 text-center md:px-8 md:pb-20 md:pt-16">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              Haushaltsgeräte defekt?{" "}
              <span className="text-blue-700">
                Wir reparieren schnell & zuverlässig.
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Unsere Techniker kommen zu Ihnen – transparente Preise, ehrliche Beratung.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+430000000000"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                +43 0 000 000000
              </a>
              <Link
                href="#kontaktformular"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
              >
                Online Anfrage
              </Link>
            </div>
            <dl className="mt-10 grid gap-5 text-sm text-slate-600 sm:grid-cols-3 sm:justify-items-center">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">✓</span>
                <div className="min-w-0 text-left">
                  <dt className="font-semibold text-slate-900">Schneller Service</dt>
                  <dd className="mt-0.5">Termine meist innerhalb von 24h</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">€</span>
                <div className="min-w-0 text-left">
                  <dt className="font-semibold text-slate-900">Transparente Preise</dt>
                  <dd className="mt-0.5">Fixpreis für Anfahrt & Diagnose</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">★</span>
                <div className="min-w-0 text-left">
                  <dt className="font-semibold text-slate-900">Erfahrene Techniker</dt>
                  <dd className="mt-0.5">Markenübergreifende Expertise</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>

        {/* Contact form */}
        <section
          id="kontaktformular"
          className="mx-auto -mt-4 max-w-5xl px-4 pb-8 md:-mt-8 md:px-8 lg:px-10"
        >
          <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm">
            <div className="border-b border-slate-100 px-6 pb-5 pt-7 sm:px-9">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Schnellanfrage – wir rufen Sie zurück!
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Hinterlassen Sie uns Ihre Kontaktdaten und eine kurze
                Problembeschreibung. Unser Service-Team meldet sich so rasch wie
                möglich telefonisch bei Ihnen.
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Quick inquiry – we&apos;ll call you back and discuss the best
                repair option for your appliance.
              </p>
            </div>
            <form className="space-y-7 px-6 py-7 sm:px-9 sm:py-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Vorname *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Max"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Nachname *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Mustermann"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Telefonnummer *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+43 ..."
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    E-Mail-Adresse *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="location"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Standort / PLZ *
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Wien, 1010"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="appliance"
                    className="text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Gerätetyp *
                  </label>
                  <select
                    id="appliance"
                    name="appliance"
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte wählen...
                    </option>
                    <option>Waschmaschine</option>
                    <option>Geschirrspüler</option>
                    <option>Kühlschrank / Gefrierschrank</option>
                    <option>Backofen / Herd</option>
                    <option>Trockner</option>
                    <option>Anderes Gerät</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wide text-slate-600"
                >
                  Problembeschreibung *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Beschreiben Sie kurz das Problem mit Ihrem Gerät..."
                  className="block w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
                <p className="text-xs text-slate-500">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß
                  unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Services grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Unsere Reparaturservices für Haushaltsgeräte
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Spezialisierte Kundendienst-Techniker für alle gängigen
                Hausgeräte – markenübergreifend geschult, mit originalen oder
                qualitativ gleichwertigen Ersatzteilen.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Alle Services im Überblick
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<span className="text-lg">🧺</span>}
              title="Waschmaschinen Reparatur"
              description="Wenn die Waschmaschine nicht mehr abpumpt, laute Geräusche macht oder Fehlercodes anzeigt, finden wir die Ursache und beheben den Defekt."
              href="/services/waschmaschinen-reparatur"
            />
            <ServiceCard
              icon={<span className="text-lg">🍽️</span>}
              title="Geschirrspüler Reparatur"
              description="Reinigt schlecht, bleibt stehen oder läuft über? Wir sorgen wieder für strahlend sauberes Geschirr ohne Wasserlachen in der Küche."
              href="/services/geschirrspueler-reparatur"
            />
            <ServiceCard
              icon={<span className="text-lg">❄️</span>}
              title="Kühlschrank Reparatur"
              description="Bei Temperaturproblemen, starker Eisbildung oder lauten Kompressoren handeln wir schnell – damit Ihre Lebensmittel frisch bleiben."
              href="/services/kuehlschrank-reparatur"
            />
            <ServiceCard
              icon={<span className="text-lg">🔥</span>}
              title="Backofen Reparatur"
              description="Ihr Backofen heizt nicht mehr richtig, brennt an einer Seite an oder zeigt Fehlercodes? Wir kalibrieren, reparieren und tauschen defekte Bauteile."
              href="/services/backofen-reparatur"
            />
            <ServiceCard
              icon={<span className="text-lg">🌬️</span>}
              title="Trockner Reparatur"
              description="Der Trockner wird nicht mehr warm, bricht Programme ab oder braucht ewig? Unsere Techniker prüfen Heizung, Sensorik und Luftwege."
              href="/services/trockner-reparatur"
            />
            <ServiceCard
              icon={<span className="text-lg">🏠</span>}
              title="Weitere Haushaltsgeräte"
              description="Sie haben ein anderes Gerät? Fragen Sie uns – oft können wir auch Herde, Kombi-Geräte oder spezielle Markenmodelle reparieren."
              href="/services"
            />
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-y border-slate-200 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Warum GeräteProfi Kundendienst?
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Wir kombinieren die Vorteile eines regionalen Kundendienstes
                  mit professionellen Strukturen: kurze Wege, direkte
                  Ansprechpartner und klare Abläufe – von der Terminvereinbarung
                  bis zur fertigen Reparatur.
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Persönlicher Ansprechpartner
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Keine anonymen Hotlines – Sie sprechen direkt mit unserem
                      Service-Team in Österreich, das Ihre Situation versteht.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Klare Preisstruktur
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Fixe Kosten für Anfahrt & Diagnose, erst danach entscheiden
                      Sie, ob repariert werden soll. Keine versteckten Gebühren.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Qualifizierte Techniker
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Regelmäßige Schulungen, moderne Messgeräte und Zugriff auf
                      Herstellerinformationen sorgen für präzise Diagnosen.
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <dt className="text-sm font-semibold text-slate-900">
                      Nachhaltige Lösung
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">
                      Eine Reparatur verlängert die Lebensdauer Ihres Geräts und
                      schont Ressourcen – oft wirtschaftlicher als ein Neukauf.
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Process steps */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  So läuft Ihre Reparatur ab
                </h3>
                <ol className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Anruf</p>
                      <p className="mt-1">
                        Sie rufen uns an oder senden eine Online-Anfrage mit
                        einer kurzen Fehlerbeschreibung und Fotos, wenn möglich.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Diagnose vor Ort
                      </p>
                      <p className="mt-1">
                        Ein Techniker kommt zum vereinbarten Termin zu Ihnen,
                        prüft das Gerät und erstellt einen Kostenvoranschlag.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Reparatur</p>
                      <p className="mt-1">
                        Nach Ihrer Freigabe führen wir die Reparatur sofort durch
                        – falls nötig mit hochwertigen Ersatzteilen.
                      </p>
                    </div>
                  </li>
                </ol>
                <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
                  <p>
                    Für dringende Fälle steht Ihnen unser{" "}
                    <Link
                      href="/notdienst"
                      className="font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Notdienst
                    </Link>{" "}
                    zur Verfügung – insbesondere bei Kühlgeräten und
                    Wasserschäden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <EmergencyCTA />
        </section>

        {/* Service areas */}
        <section className="border-y border-slate-200 bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Einsatzgebiete in Österreich
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Unsere Techniker sind in vielen Regionen Österreichs für Sie
                  unterwegs. Durch regionale Teams halten wir Anfahrtswege kurz
                  und Reaktionszeiten gering.
                </p>
              </div>
              <Link
                href="/einsatzgebiete"
                className="mt-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Alle Einsatzgebiete anzeigen
              </Link>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 lg:grid-cols-4">
              {[
                "Wien & Umgebung",
                "Graz & Umgebung",
                "Linz & Oberösterreich",
                "Salzburg Stadt & Land",
                "Innsbruck & Tirol",
                "St. Pölten & Niederösterreich",
                "Klagenfurt & Kärnten",
                "Villach & Umgebung",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Häufige Fragen zur Geräte-Reparatur
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Hier finden Sie Antworten auf die häufigsten Fragen rund um
                Ablauf, Kosten und Garantie. Weitere Details klären wir gerne im
                persönlichen Gespräch.
              </p>
              <div className="mt-6 space-y-4">
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Wie schnell bekomme ich einen Termin?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    In Ballungsräumen wie Wien, Graz oder Linz sind Termine
                    meist innerhalb von 24 Stunden möglich. In ländlichen
                    Regionen planen wir so, dass wir mehrere Einsätze bündeln –
                    dadurch bleiben die Anfahrtskosten fair.
                  </p>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Was passiert, wenn sich die Reparatur nicht lohnt?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Sollte die Reparatur im Vergleich zu einem Neugerät nicht
                    wirtschaftlich sein, erklären wir Ihnen transparent die
                    Gründe. Sie zahlen in diesem Fall nur Anfahrt und Diagnose –
                    keine versteckten Zusatzkosten.
                  </p>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-slate-900">
                    <span>Welche Zahlungsarten akzeptieren Sie?</span>
                    <span className="text-slate-400 group-open:hidden">+</span>
                    <span className="hidden text-slate-400 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Sie können bequem per Bankomatkarte, Kreditkarte oder in Bar
                    direkt beim Techniker bezahlen. Für gewerbliche Kunden sind
                    nach Vereinbarung auch Sammelrechnungen möglich.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Noch Fragen offen?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Unser Service-Team hilft Ihnen gerne weiter und berät Sie, ob
                eine Reparatur in Ihrem Fall sinnvoll ist.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
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
                <p>
                  Oder nutzen Sie unser{" "}
                  <Link
                    href="/kontakt"
                    className="font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Kontaktformular
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

