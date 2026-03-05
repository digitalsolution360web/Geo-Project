import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function AboutPage() {
  const leadershipAreas = [
    "Government and regulatory environments",
    "Infrastructure and utilities",
    "Environmental and public health modelling",
    "Enterprise GIS systems and spatial automation"
  ];

  const methodology = [
    "Problem Definition",
    "Data Integration & Validation",
    "Spatial Modelling & Risk Assessment",
    "Visualisation & Executive Reporting",
    "Strategic Recommendations"
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Full Width Stripe */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/About_Us_4.jpg"
            alt="About GeoDecision Analytics"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8">
          <div className="max-w-3xl space-y-8">
            <Reveal direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                  Who We Are
                </p>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
                  About <span className="text-gradient">GeoDecision</span> Analytics
                </h1>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.4}>
              <p className="text-xl leading-relaxed text-slate-800 font-bold max-w-2xl">
                GeoDecision Analytics is a spatial intelligence consultancy focused on transforming complex geospatial data into clear, defensible, decision-ready insight.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.6}>
              <p className="text-lg leading-relaxed text-slate-700 font-bold max-w-xl">
                We operate at the intersection of GIS, environmental modelling, and strategic planning — supporting organisations navigating regulatory, infrastructure, and environmental complexity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Principles Section - Full Width Stripe */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left" width="100%">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="h-1.5 w-20 bg-[#16a34a] rounded-full mb-6" />
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                    Precision. Insight. <span className="text-[#16a34a]">Confidence.</span>
                  </h2>
                </div>
                <div className="space-y-8">
                  <p className="text-slate-900 font-black text-xl border-l-4 border-[#16a34a] pl-6 py-4 bg-white rounded-r-2xl">
                    GeoDecision Analytics was founded on the principle that spatial data should enable confident, evidence-based decisions — not confusion.
                  </p>
                  <div className="space-y-6 text-lg leading-relaxed text-slate-700 font-bold">
                    <p>
                      We integrate geospatial analysis, environmental intelligence, and structured decision frameworks to deliver insights that are technically rigorous and strategically actionable.
                    </p>
                    <p>
                      Our work bridges the gap between advanced spatial modelling and real-world decisionmaking — ensuring outcomes are transparent, defensible, and aligned with organisational objectives.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" width="100%">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative h-[320px] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                    <Image src="/About_Us_3.jpg" alt="Principles 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-[200px] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                    <Image src="/Enterprice_2.jpg" alt="Context 1" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative h-[200px] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                    <Image src="/Service_6.jpg" alt="Context 2" fill className="object-cover" />
                  </div>
                  <div className="relative h-[320px] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                    <Image src="/Home_4.jpg" alt="Principles 2" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach - Full Width Stripe - Pure White */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden transition-colors">
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <Image src="/About_Us_2.jpg" alt="Approach Background" fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 relative z-10">
          <div className="relative space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">Our Approach</h2>
              <p className="text-xl text-slate-700 font-bold">At GeoDecision Analytics, we apply a structured methodology to ensure excellence:</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {methodology.map((step, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="flex flex-col h-full gap-6 p-8 bg-white border-2 border-slate-100 rounded-[2rem] group/item hover:border-[#16a34a]/30 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#16a34a] text-white text-xl font-black shadow-[0_0_20px_rgba(22,163,74,0.4)]">
                      {idx + 1}
                    </span>
                    <p className="text-xl font-black text-slate-900 leading-tight group-hover/item:text-[#16a34a] transition-colors">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="pt-12 flex items-center gap-6">
              <div className="h-0.5 flex-grow bg-slate-200" />
              <p className="text-lg font-black text-[#16a34a] bg-white px-8 py-3 rounded-full border-2 border-[#16a34a]/10 shadow-sm leading-tight text-center">
                Every engagement is guided by clarity, precision, and measurable impact.
              </p>
              <div className="h-0.5 flex-grow bg-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mission - Full Width Stripe */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <Reveal direction="left" width="100%">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">Leadership</h2>
                  <p className="text-xl text-slate-700 leading-relaxed font-bold">
                    GeoDecision Analytics is led by experienced spatial analysts and environmental researchers with cross-sector expertise in:
                  </p>
                </div>
                <div className="grid gap-4">
                  {leadershipAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-6 p-6 bg-white border-2 border-slate-100 rounded-[1.5rem] group hover:border-[#16a34a]/30 transition-all">
                      <div className="h-3 w-3 rounded-full bg-[#16a34a] shadow-[0_0_15px_rgba(22,163,74,0.4)]" />
                      <p className="text-lg font-black text-slate-900 group-hover:translate-x-2 transition-transform">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" width="100%">
              <div className="space-y-12 h-full flex flex-col justify-center">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-slate-100 shadow-2xl">
                  <Image src="/Leadership_1.webp" alt="Leadership Visualization" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Reveal direction="up" delay={0.2}>
                    <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 space-y-4 shadow-sm">
                      <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20 mb-3">Our Mission</p>
                      <p className="text-2xl font-black text-slate-900 leading-tight">To transform spatial complexity into confident decisions.</p>
                    </div>
                  </Reveal>
                  <Reveal direction="up" delay={0.4}>
                    <div className="p-8 rounded-[2rem] bg-white border-2 border-slate-100 space-y-4 shadow-sm">
                      <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20 mb-3">Our Vision</p>
                      <p className="text-lg text-slate-700 font-bold leading-relaxed">To become a trusted advisor in spatial intelligence for organisations globally.</p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Work - Full Width Stripe - Pure White */}
      <section className="py-20 bg-white border-t border-slate-100 transition-colors">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 text-center space-y-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">How We Work</h2>
            <p className="text-xl text-slate-700 font-bold leading-relaxed">
              We combine advanced geospatial platforms, structured analytical methodologies, and sector-specific expertise to deliver solutions aligned with your operational and strategic objectives.
            </p>
            <div className="flex justify-center pt-8">
              <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#16a34a]/40 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
