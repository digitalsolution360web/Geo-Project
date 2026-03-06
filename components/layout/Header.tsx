"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-[1700px] items-center gap-3 px-4 py-3 sm:gap-4 md:gap-8 md:px-8 lg:px-12">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex min-w-0 flex-shrink-0 items-center gap-4 group/logo"
        >
          <div className="relative flex items-center justify-center h-12 w-12 md:h-20 md:w-20 rounded-full bg-white overflow-hidden border-2 border-[#16a34a]/40 shadow-md transition-all duration-300 group-hover/logo:border-[#16a34a] group-hover/logo:shadow-lg">
            <Image
              src="/logo.jpg"
              alt="GeoDecision Analytics logo"
              width={160}
              height={160}
              className="h-full w-full object-cover transition-all duration-500 group-hover/logo:scale-110"
              priority
            />
          </div>
          <div className="min-w-[180px] max-w-[400px] leading-tight">
            <p className="text-[14px] font-black tracking-[0.2em] text-[#16a34a] sm:text-[18px] transition-colors group-hover/logo:text-[#15803d]">
              GeoDecision Analytics
            </p>
            <p className="hidden text-[13px] text-slate-900 font-black sm:block tracking-tight">
              Transforming Spatial Data into Confident Decisions
            </p>
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-3 md:justify-center md:gap-8">
          <nav className="hidden items-center gap-8 text-sm font-bold text-white md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative pb-1 text-sm font-black transition-all duration-300 ${isActive ? "text-[#16a34a]" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-[#16a34a] transition-all duration-300 ${isActive
                      ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(22,163,74,0.5)]"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-slate-900 transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-900 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-900 transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {/* <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] animate-pulse" />
            <span>+91-98765-43210</span>
          </a> */}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-6 py-2.5 text-sm font-black text-white shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] hover:-translate-y-0.5 hover:scale-105 cursor-pointer ring-1 ring-white/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white shadow-2xl md:hidden overflow-hidden">
          <nav className="mx-auto flex flex-col gap-2 px-4 py-6 text-sm font-bold text-slate-900">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all cursor-pointer ${isActive
                    ? "bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20"
                    : "hover:bg-slate-50"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.4)]" />
                  )}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 rounded-xl border border-slate-100 bg-slate-50 py-3.5 text-xs font-black text-slate-600 cursor-pointer"
              >
                <span>Call: +91-98765-43210</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] py-3.5 text-sm font-black text-white shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

