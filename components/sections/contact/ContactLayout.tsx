import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactLayout() {
  return (
    <section className="relative space-y-12  sm:space-y-20">
      {/* Background Atmosphere - Restore for depth */}
      <div className="absolute -top-40 -left-40 h-[600px]  w-[600px] rounded-full bg-slate-50/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[600px]  w-[600px] rounded-full bg-blue-50/20 blur-[120px] pointer-events-none" />

      {/* Header Section */}
      <Reveal direction="up" width="100%">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-slate-100 bg-white p-8 sm:p-12 md:p-16">
          <div className="absolute top-0  right-0 h-full w-1/3 bg-gradient-to-l  from-[#16a34a]/5 to-transparent pointer-events-none" />

          <div className="relative z-10  flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl  space-y-6">
              <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                Get In Touch
              </p>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-[1.1]">
                Let&apos;s talk about your <span className="text-gradient">geospatial project.</span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-700 md:text-2xl font-bold">
               Share a bit about your project, location, timeline and decision support. We typically respond within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-[2rem] border border-slate-100 bg-white transition-all hover:shadow-lg lg:max-w-sm">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
                <p className="text-xs font-black text-[#16a34a] uppercase tracking-widest">Active Support</p>
              </div>
              <p className="text-sm font-black text-slate-900">Project types we support:</p>
              <p className="text-sm text-slate-500 leading-relaxed italic font-medium">
                &quot;Site selection, risk mapping, infrastructure planning, utilities, and high-fidelity environmental modelling.&quot;
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        {/* Left: Form */}
        <Reveal direction="left" delay={0.4} className="h-full">
          <div className="h-full rounded-[2.5rem] border border-slate-100 bg-white p-8 sm:p-12 ">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-6">
              Tell us about your project
            </h2>

            <ContactForm />
          </div>
        </Reveal>

        {/* Right: Sidebar */}
        <div className="space-y-6">
          <Reveal direction="right" delay={0.6} className="h-full">
            <aside className="h-full space-y-8 rounded-[2.5rem] border border-slate-100 bg-white p-8 sm:p-10 ">
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20 shadow-inner">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                    Our Location
                  </p>
                  <p className="text-xl font-black text-slate-900">Brisbane, Australia</p>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-50">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 border border-slate-100 transition-all group-hover:border-[#16a34a]/30 group-hover:text-[#16a34a] group-hover:bg-white shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 leading-none mb-1">Email</p>
                      <a href="mailto:Info@geodecisionanalytics.com" className="text-base font-black text-slate-900 hover:text-[#16a34a] transition-colors">Info@geodecisionanalytics.com</a>
                    </div>
                  </div>


                </div>
              </div>

              <div className="rounded-[2rem] bg-white border-2 border-slate-100 p-6 space-y-4 shadow-sm">
                <p className="text-[10px] font-black text-[#16a34a] uppercase tracking-[0.3em]">Map Collaboration</p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  We run remote review sessions around <span className="text-[#16a34a] font-black">live web maps</span> for real-time scenario exploration.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
