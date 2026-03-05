import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function ServicesPage() {
  const services = [
    {
      title: "Spatial Risk & Suitability Analysis",
      description: "We design analytical frameworks to evaluate constraints, risk, and development suitability across complex environments.",
      bullets: ["Multi-criteria analysis", "Constraint & buffer modelling", "Risk heatmaps", "Scenario comparison"],
      image: "/Service_1.jpg"
    },
    {
      title: "Environmental & Exposure Modelling",
      description: "Advanced spatial modelling integrating environmental data, satellite analytics, and sociodemographic layers.",
      bullets: ["Air pollution (PM2.5) modelling", "Greenspace (EVI/NDVI) analysis", "Environmental-health linkages", "Spatial statistical integration"],
      image: "/Environmental_Modelling_1.webp"
    },
    {
      title: "Enterprise GIS & Data Systems",
      description: "Optimising spatial infrastructure for organisations requiring scalable, secure, and automated GIS environments.",
      bullets: ["ArcGIS Enterprise deployment", "Spatial database architecture", "FME automation workflows", "QA/QC & governance frameworks"],
      image: "/Data_System_1.webp"
    },
    {
      title: "Decision Intelligence & Visualisation",
      description: "Translating technical analysis into executive-ready outputs.",
      bullets: ["Dashboards", "Strategic reporting", "Executive map products", "Policy-ready visualisation"],
      image: "/Decision_3.jpg"
    }
  ];

  const methodology = [
    { step: "Problem Definition", desc: "Define decision context and risk variables" },
    { step: "Data Integration & Validation", desc: "Ensure data integrity and governance" },
    { step: "Spatial Modelling & Risk Assessment", desc: "Apply structured analytical frameworks" },
    { step: "Visualisation & Executive Reporting", desc: "Deliver decision-ready outputs" },
    { step: "Strategic Recommendations", desc: "Translate insight into action" }
  ];

  const capabilities = [
    "ArcGIS Pro & ArcGIS Enterprise",
    "Spatial databases (PostGIS / Oracle Spatial)",
    "FME automation workflows",
    "Remote sensing & raster analytics",
    "Python-based spatial modelling",
    "Cloud-enabled geospatial integration"
  ];

  return (
    <div className="mx-auto flex max-w-[1700px] flex-col gap-16 px-4 py-8 sm:gap-24 sm:px-6 sm:py-12 md:gap-32 md:px-10 md:py-20 bg-white">
      {/* Services Hero - White Theme */}
      <Reveal direction="up" width="100%">
        <section className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-white px-8 py-20 md:px-16 md:py-32 shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Enterprise_Services_1.webp"
              alt="Strategic Spatial Intelligence"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            <Reveal direction="left" delay={0.4}>
              <div className="space-y-4">
                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                  Our Services
                </p>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
                  Delivering <span className="text-gradient">Strategic</span> Spatial Intelligence
                </h1>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.6}>
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-800 font-bold max-w-2xl">
                At GeoDecision Analytics, we provide structured, defensible geospatial solutions designed to reduce uncertainty and strengthen decision-making.
              </p>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* Services Grid */}
      <section className="space-y-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <Reveal key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1} className="h-full">
              <div className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#16a34a]/20 hover:-translate-y-2">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-6 flex-grow flex flex-col">
                  <p className="text-slate-600 leading-relaxed text-base font-medium">{service.description}</p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold tracking-tight">
                          <span className="h-2 w-2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.4)] flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Structured Approach - Purified White */}
      <Reveal direction="up" width="100%">
        <section className="relative rounded-[3rem] border-2 border-slate-100 bg-white p-8 md:p-16 lg:p-24 overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">Our Structured Approach</h2>
              <p className="text-xl text-slate-700 font-bold leading-relaxed">We apply a disciplined methodology to ensure clarity, transparency, and defensibility across every project phase.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-5 relative">
              {/* Visual connector line */}
              <div className="absolute top-7 left-0 right-0 h-px bg-slate-200 hidden lg:block -z-10" />

              {methodology.map((item, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                  <div className="relative h-full space-y-6 group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 text-slate-900 font-black text-xl shadow-lg group-hover:bg-[#16a34a] group-hover:text-white group-hover:border-[#16a34a] transition-all mx-auto lg:mx-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-3 text-center lg:text-left">
                      <h4 className="font-black text-slate-900 text-lg leading-tight transition-colors group-hover:text-[#16a34a]">{item.step}</h4>
                      <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-slate-100 text-center shadow-xl">
              <p className="text-[#16a34a] font-black tracking-widest uppercase text-xs italic">Reduced Uncertainty • Strengthened Decisions • Defensible Outcomes</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Platforms & Capability */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" width="100%">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                Tools & Engineering
              </p>
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl leading-tight">Platforms & Technical Capability</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                While we are sector-agnostic, our technical stack is deep and built on industry-leading platforms that ensure scalability and security.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                  <div className="flex items-center h-full gap-3 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm group hover:border-[#16a34a]/30 hover:shadow-md transition-all">
                    <div className="h-2 w-2 rounded-full bg-[#16a34a] group-hover:scale-150 transition-all" />
                    <p className="text-sm font-black text-slate-800 group-hover:text-slate-950 transition-colors">{cap}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" width="100%">
          <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl group">
            <Image
              src="/Plateform_1.webp"
              alt="Technical Capability"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/20">
              <p className="text-[10px] font-black text-[#16a34a] uppercase tracking-[0.3em] mb-2 leading-none">STRATEGIC ALIGNMENT</p>
              <p className="text-slate-900 text-lg font-black leading-tight mb-2">Operational Excellence</p>
              <p className="text-slate-600 text-sm font-bold leading-relaxed">Advanced geospatial platforms integrated with structured analytical methodologies.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Case Studies Placeholder */}
      <Reveal direction="up" width="100%">
        <section className="text-center py-20 border-y border-slate-100 space-y-12 group">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl italic opacity-5 shadow-sm select-none">Case Studies</h2>
            <p className="text-slate-400 font-black tracking-widest">PROPRIETARY ANALYSIS • DATA ADVISORY • TECHNICAL STRATEGY</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#16a34a] px-12 py-5 text-sm font-black text-white shadow-xl transition-all hover:bg-[#166534] hover:scale-105"
            >
              Request Full Capability Statement
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
