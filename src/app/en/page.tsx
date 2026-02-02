import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "Repair Austria",
  description:
    "Appliance repair in Austria – washing machines, dishwashers, fridges, ovens, dryers. Fast, transparent, experienced technicians.",
};

export default function HomeEn() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-12 text-center md:px-8 md:pb-20 md:pt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Appliance stopped working?{" "}
            <span className="text-blue-700">
              We repair it quickly and reliably.
            </span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Our technicians come to you – transparent pricing, honest advice.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+430000000000"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              +43 0 000 000000
            </a>
            <Link
              href="/#kontaktformular"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            >
              Online request
            </Link>
          </div>
          <dl className="mt-10 grid gap-5 text-sm text-slate-600 sm:grid-cols-3 sm:justify-items-center">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">✓</span>
              <div className="min-w-0 text-left">
                <dt className="font-semibold text-slate-900">Fast response</dt>
                <dd className="mt-0.5">Appointments usually within 24 hours</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">€</span>
              <div className="min-w-0 text-left">
                <dt className="font-semibold text-slate-900">Transparent pricing</dt>
                <dd className="mt-0.5">Fixed call-out & diagnosis fee</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">★</span>
              <div className="min-w-0 text-left">
                <dt className="font-semibold text-slate-900">Experienced technicians</dt>
                <dd className="mt-0.5">Multi-brand know‑how</dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* Contact form intro (English only, reuse German form from /) */}
      <section
        id="kontaktformular"
        className="mx-auto -mt-4 max-w-5xl px-4 pb-8 md:-mt-8 md:px-8 lg:px-10"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 px-6 py-7 shadow-lg backdrop-blur-sm sm:px-9 sm:py-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Quick inquiry – we&apos;ll call you back!
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use the short German form on our main page to request a callback.
            Our team also speaks English and can answer your questions about the
            repair.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/#kontaktformular"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Open callback form
            </Link>
            <a
              href="tel:+430000000000"
              className="text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              or call us directly: +43 0 000 000000
            </a>
          </div>
        </div>
      </section>

      {/* Services summary (English descriptions) */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Our appliance repair services
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Specialised technicians for all common household appliances –
              trained across many brands and working with genuine or
              equivalent‑quality spare parts.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all services (German)
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<span className="text-lg">🧺</span>}
            title="Washing machine repair"
            description="We fix draining issues, loud noises, error codes and more – so your laundry runs smoothly again."
            href="/services/waschmaschinen-reparatur"
          />
          <ServiceCard
            icon={<span className="text-lg">🍽️</span>}
            title="Dishwasher repair"
            description="Poor cleaning results, stopped programmes or leaking water – we diagnose and fix the cause on site."
            href="/services/geschirrspueler-reparatur"
          />
          <ServiceCard
            icon={<span className="text-lg">❄️</span>}
            title="Fridge repair"
            description="Temperature problems, heavy ice build‑up or unusual compressor noises – we react quickly to protect your food."
            href="/services/kuehlschrank-reparatur"
          />
          <ServiceCard
            icon={<span className="text-lg">🔥</span>}
            title="Oven repair"
            description="If your oven no longer heats properly or bakes unevenly, we calibrate, repair or replace defective components."
            href="/services/backofen-reparatur"
          />
          <ServiceCard
            icon={<span className="text-lg">🌬️</span>}
            title="Dryer repair"
            description="Dryer not heating, stopping mid‑cycle or taking too long? We check heating, sensors and air flow."
            href="/services/trockner-reparatur"
          />
          <ServiceCard
            icon={<span className="text-lg">🏠</span>}
            title="Other household appliances"
            description="You have a different appliance? Ask us – we can often help with ranges, combo units or special brand models."
            href="/services"
          />
        </div>
      </section>

      {/* Reuse existing German sections for process, areas & FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 lg:px-8">
        <EmergencyCTA />
      </section>
    </div>
  );
}

