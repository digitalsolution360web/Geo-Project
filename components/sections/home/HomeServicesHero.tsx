import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function HomeServicesHero() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#16a34a]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content Column */}
          <div className="space-y-10 order-2 lg:order-1">
            <Reveal direction="left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                    Spatial Intelligence for Growth
                  </p>
                  <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                    GeoDecision <span className="text-[#16a34a]">Analytics</span>
                  </h2>
                </div>

                <p className="max-w-xl text-xl font-bold leading-relaxed text-slate-600">
                  GeoDecision Analytics provides world-class geospatial technology (GIS) for
                  mission-critical decision‑making. We transform multi-dimensional location data into
                  clear, actionable intelligence.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-lg bg-[#16a34a]/10 flex items-center justify-center border border-[#16a34a]/20">
                      <span className="text-[#16a34a] text-xs font-black">01</span>
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-sm">Scalable Solutions</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-bold ml-9">Enterprise-grade architecture designed to evolve with your complex data needs.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-lg bg-[#16a34a]/10 flex items-center justify-center border border-[#16a34a]/20">
                      <span className="text-[#16a34a] text-xs font-black">02</span>
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-sm">Precision Mapping</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-bold ml-9">Uncompromising accuracy in every spatial model, ensuring defensible results.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link
                  href="/services"
                  className="rounded-full bg-[#16a34a] px-10 py-4 text-sm font-black text-white transition-all hover:bg-[#166534] hover:shadow-[0_0_25px_rgba(22,163,74,0.4)] hover:scale-105 cursor-pointer shadow-lg shadow-[#16a34a]/10"
                >
                  Explore solutions
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-black text-slate-900 underline decoration-[#16a34a]/30 underline-offset-8 transition-all hover:decoration-[#16a34a] hover:text-[#16a34a]"
                >
                  See how GIS powers decisions →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Column */}
          <div className="relative order-1 lg:order-2">
            <Reveal direction="right">
              <div className="relative group">
                {/* Floating decorative elements */}
                <div className="absolute -inset-6 rounded-[3rem] bg-[#16a34a]/10 blur-3xl -z-10 animate-pulse" />
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full" />

                <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5] lg:aspect-[4/5]">
                  <Image
                    src="/Home_11.webp"
                    alt="GeoDecision Analytics GIS mapping technology"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Glassmorphic Mission Box */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-8 bg-[#16a34a] rounded-full" />
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Our Commitment</p>
                      </div>
                      <p className="text-white text-lg font-bold leading-tight italic">
                        "Turn raw spatial data into dashboards, reports, and guidance that leadership can act on with confidence."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech UI Detail */}
                <div className="absolute -bottom-6 -right-6 p-5 bg-[#16a34a] rounded-3xl shadow-xl shadow-[#16a34a]/20 text-white z-20">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


