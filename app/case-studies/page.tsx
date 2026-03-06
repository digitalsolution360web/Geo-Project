"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            title: "Regional Spatial Suitability for Renewable Energy",
            client: "State Government Authority",
            description: "A comprehensive multi-criteria evaluation of land suitability for large-scale solar and wind developments, accounting for environmental constraints and grid proximity.",
            tags: ["Renewable Energy", "Suitability Modelling", "GIS"],
            image: "/Service_1.jpg",
        },
        {
            title: "Environmental Exposure & Health Outcomes Analysis",
            client: "National Health Research Institute",
            description: "Modelling the spatial relationship between urban green space density and respiratory health outcomes using satellite-derived EVI data and clinical records.",
            tags: ["Public Health", "Remote Sensing", "Analytics"],
            image: "/Service_2.jpg",
        },
        {
            title: "Enterprise GIS Migration & Optimization",
            client: "Utilities Infrastructure Group",
            description: "Relocating fragmented spatial data into a centralized ArcGIS Enterprise environment with automated FME quality control workflows.",
            tags: ["Infrastructure", "Data Systems", "Automation"],
            image: "/Service_5.jpg",
        },
        {
            title: "Strategic Flood Risk & Urban Resilience Framework",
            client: "Metropolitan Council",
            description: "Developing a strategic decision-support tool to prioritize urban drainage infrastructure investments based on advanced hydrological risk modelling.",
            tags: ["Risk Management", "Hydrology", "Decision Support"],
            image: "/Environ_1.jpg",
        }
    ];

    return (
        <div className="mx-auto flex max-w-[1700px] flex-col gap-16 px-4 py-8 sm:gap-24 sm:px-6 sm:py-12 md:gap-32 md:px-10 md:py-20 bg-white">
            {/* Hero Section */}
            <Reveal direction="up" width="100%">
                <section className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-slate-900 px-8 py-20 md:px-16 md:py-32 shadow-2xl">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Decision_3.jpg"
                            alt="Case Studies Hero"
                            fill
                            className="object-cover opacity-40 brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-4xl space-y-8">
                        <Reveal direction="left" delay={0.4}>
                            <div className="space-y-4">
                                <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#16a34a] bg-[#16a34a]/10 px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                                    Our Impact
                                </p>
                                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                                    Transforming Data into <span className="text-[#16a34a]">Success Stories</span>
                                </h1>
                            </div>
                        </Reveal>
                        <Reveal direction="left" delay={0.6}>
                            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 font-medium max-w-2xl">
                                Explore how GeoDecision Analytics has helped industry leaders navigate complex spatial challenges with precision and confidence.
                            </p>
                        </Reveal>
                    </div>
                </section>
            </Reveal>

            {/* Case Studies Grid */}
            <section className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Featured Projects</h2>
                        <div className="h-1.5 w-24 rounded-full bg-[#16a34a]" />
                    </div>
                    <p className="text-slate-500 font-bold max-w-md">
                        A selection of our most significant engagements across government, infrastructure, and environmental sectors.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {caseStudies.map((study, idx) => (
                        <Reveal key={idx} direction="up" delay={idx * 0.1}>
                            <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#16a34a]/20">
                                <div className="relative aspect-[16/9] w-full overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <p className="text-[#16a34a] font-black text-xs uppercase tracking-[0.2em]">{study.client}</p>
                                    <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-[#16a34a] transition-colors">{study.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{study.description}</p>
                                    <div className="pt-4">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-sm font-black text-[#16a34a] hover:gap-4 transition-all"
                                        >
                                            REQUEST FULL CAPABILITY STATEMENT
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <Reveal direction="up" width="100%">
                <section className="rounded-[3rem] bg-slate-50 border border-slate-100 p-12 md:p-20 text-center space-y-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 h-64 w-64 bg-[#16a34a]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 bg-[#16a34a]/5 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">Have a Complex Spatial Challenge?</h2>
                        <p className="text-lg text-slate-600 font-medium">
                            Our team of specialists can help you translate raw spatial data into defensive insights and strategic decisions.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-full bg-[#16a34a] px-10 py-5 text-sm font-black text-white shadow-xl transition-all hover:bg-[#166534] hover:scale-105"
                            >
                                Contact our Specialists
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full bg-white border border-slate-200 px-10 py-5 text-sm font-black text-slate-900 shadow-md transition-all hover:bg-slate-50"
                            >
                                View our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </Reveal>
        </div>
    );
}
