import Link from "next/link";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-800">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700">
        Mehr erfahren
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 8H12M12 8L9 5M12 8L9 11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

