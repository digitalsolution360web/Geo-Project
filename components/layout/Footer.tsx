import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-slate-950 text-slate-400 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-[#16a34a]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white overflow-hidden border-2 border-[#16a34a]/40 shadow-lg flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="GeoDecision Analytics logo"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-[150px] max-w-[350px] leading-tight">
                <p className="text-[14px] font-black tracking-[0.1em] text-[#16a34a] sm:text-[16px]">
                  GeoDecision Analytics
                </p>
                <p className="text-[12px] text-white font-black tracking-tight">
                  Transforming Spatial Data into Confident Decisions
                </p>
              </div>
            </div>

            <p className="max-w-md text-base leading-relaxed text-slate-400 font-medium">
              We empower organisations to navigate complexity through advanced geospatial modelling,
              strategic spatial intelligence, and defensible evidence-based insights.
            </p>

            <div className="flex items-center gap-3">
              {[
                { name: "LinkedIn", href: "https://linkedin.com/company/geodecision-analytics", icon: "M6.09 5.5A2.09 2.09 0 1 1 2 5.5a2.09 2.09 0 0 1 4.09 0ZM2.32 8.32h3.53V21H2.32V8.32Zm6.34 0h3.38v1.72h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.26 2.37 4.26 5.45V21h-3.53v-5.8c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05V21H8.66V8.32Z" },
                { name: "Twitter", href: "https://twitter.com/geodecision_a", icon: "M18.25 3H21l-6.11 7.02L21.5 21h-4.5l-3.53-5.17L8.4 21H5.65l6.52-7.5L3.5 3h4.62l3.18 4.64L18.25 3Zm-1.58 15.25h1.25L7.4 4.68H6.05l10.62 13.57Z" },
                { name: "Instagram", href: "https://instagram.com/geodecision_analytics", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "Facebook", href: "https://facebook.com/geodecisionanalytics", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 transition-all hover:border-[#16a34a]/30 hover:text-[#16a34a] hover:bg-[#16a34a]/5 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:pl-4">
            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
              Navigation
            </p>
            <ul className="space-y-4">
              {[
                { name: "Main Dashboard", href: "/" },
                { name: "Our Services", href: "/services" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Technical Approach", href: "/about" },
                { name: "Contact Specialist", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-black text-slate-400 transition-colors hover:text-[#16a34a] flex items-center gap-2 group cursor-pointer">
                    <span className="h-1 w-1 rounded-full bg-white/10 group-hover:bg-[#16a34a] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:pl-8">
            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
              Reach Out
            </p>
            <div className="space-y-4">

              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Email</p>
                <a href="mailto:Info@geodecisionanalytics.com" className="text-sm font-bold text-white transition-colors hover:text-[#16a34a]">Info@geodecisionanalytics.com</a>
              </div>


              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">HQ</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Brisbane, Australia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/5 pt-10 space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              © {year} GeoDecision Analytics. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#16a34a] italic">
                Spatial Intel • Data Focused • Decision Driven
              </p>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center justify-center gap-2 border-t border-white/5 pt-5">
            <span className="text-[13.5px] text-slate-500 tracking-wide font-medium">Designed & Developed by</span>
            <a
              href="https://www.digitalsolution360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] font-bold text-cyan-400 transition-all duration-300 hover:text-cyan-300 hover:underline underline-offset-4"
            >
              Digitalsolution.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
