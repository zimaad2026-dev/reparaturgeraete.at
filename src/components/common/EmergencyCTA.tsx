import Link from "next/link";

type EmergencyCTAProps = {
  compact?: boolean;
};

export default function EmergencyCTA({ compact }: EmergencyCTAProps) {
  if (compact) {
    return (
      <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-4 text-white shadow-md">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
              Notdienst für Haushaltsgeräte
            </p>
            <p className="mt-1 text-sm font-semibold">
              Schnelle Hilfe bei Ausfällen – auch abends & am Wochenende.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm md:items-end">
            <a
              href="tel:+430000000000"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-50"
            >
              <span>Jetzt Notdienst anrufen</span>
              <span className="text-xs font-medium text-blue-500">
                +43 0 000 000000
              </span>
            </a>
            <Link
              href="/notdienst"
              className="text-xs text-blue-100 underline-offset-2 hover:underline"
            >
              Mehr Informationen zum Notdienst
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 to-blue-500 px-6 py-8 text-white shadow-lg sm:px-8 md:px-10 md:py-10">
      <div className="absolute inset-y-0 right-0 opacity-20">
        <div className="h-full w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
            Notdienst 24/7
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Kühlschrank ausgefallen oder Waschmaschine ausgelaufen?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
            Unser Notdienst ist bei dringenden Ausfällen schnell bei Ihnen vor
            Ort – in Wien und vielen Regionen Österreichs. Direkte Durchwahl
            ohne Callcenter, transparente Notdienst-Zuschläge.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href="tel:+430000000000"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-50"
          >
            <span>Jetzt Notdienst anrufen</span>
            <span className="text-xs font-medium text-blue-500">
              +43 0 000 000000
            </span>
          </a>
          <Link
            href="/notdienst"
            className="text-xs font-medium text-blue-100 underline-offset-2 hover:underline"
          >
            Details zu Anfahrt, Zeiten & Kosten
          </Link>
        </div>
      </div>
    </section>
  );
}

