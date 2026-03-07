"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const caseStudies = [
    {
        title: "Advancing Bushfire Risk Assessment using Remote Sensing and Elevation Data",
        description:
            "This bushfire risk assessment case study uses WorldView-2 multispectral imagery and a 5m DSM to analyze terrain, landcover types, and fire-prone areas in rural Australia. By integrating slope, aspect, and vegetation combustibility, a Fire Hazard Layer was generated and summarized by cadastral parcel, providing critical data for developers, planners, and local authorities.",
        tags: ["Infrastructure", "WorldView-2"],
        tagColor: "orange",
        image: "/Case_Study_1.jpg",
    },
    {
        title: "From Space to Silt: Mapping Changes in the Distribution of Mangroves within a Protected Area",
        description:
            "The purpose of this study was to map the distribution of two dominant mangrove species, Avicennia marina and Rhizophora stylosa, in a sensitive tidal environment, allowing a local industrial development to monitor any impact operations may have on the mangrove habitats.",
        tags: ["Environment", "Pléiades Neo"],
        tagColor: "green",
        image: "/Environ_1.jpg",
    },
    {
        title: "QLD Department of Transport and Main Roads",
        description:
            "The Department of Transport and Main Roads in Queensland (QTMR) needed a detailed digital elevation dataset for a 1km corridor along their transport network for various applications. Geoimage proposed supplying AW3D Level 2 elevation data, a high-resolution Digital Surface Model created from ALOS PRISM data, covering the required areas.",
        tags: ["Government", "ALOS 1 and 2"],
        tagColor: "blue",
        image: "/Case_Study_3.jpg",
    },
    {
        title: "Identifying Alteration Minerals using Satellite Data to Distinguish High-Potential Zones",
        description:
            "This case study highlights the successful use of WorldView-2 data and spectral processing for efficient mineral exploration, enabling the identification of alteration minerals, high-potential zones for valuable deposits, and cost-effective exploration in complex geological areas.",
        tags: ["Mining", "WorldView-2"],
        tagColor: "orange",
        image: "/Case_Study_4.jpg",
    },
    {
        title: "Use of AW3D within Mineral Exploration in Challenging Terrain",
        description:
            "Geoimage utilised the AW3D World 3D Digital Elevation Model (AW3D) to help First Quantum Minerals overcome obstacles in challenging terrain. This innovative solution improved exploration efficiency, saved time and costs, and highlighted the benefits of remote mining operations.",
        tags: ["Mining", "ALOS 1 and 2"],
        tagColor: "purple",
        image: "/Case_Study_5.jpg",
    },
    {
        title: "State-wide Digital Mosaic for NSW DPIE",
        description:
            "Geoimage provided high-resolution satellite imagery and mosaicking to the NSW DPIE, enabling informed decisions and action on environmental and planning matters for the entire state, supporting statutory obligations and sustainable growth.",
        tags: ["Government", "SPOT 6 and 7"],
        tagColor: "blue",
        image: "/Service_1.jpg",
    },
    {
        title: "Monitoring Southern Elephant Seal Colonies in Antarctica",
        description:
            "The Australian Antarctic Division (AAD) used very-high-resolution satellite imagery to monitor Southern Elephant Seal colonies in Antarctica, reducing risks and costs associated with on-site monitoring. The solution provided accurate data for analysis and eliminated the need for dedicated staff. Automation could be considered in the future.",
        tags: ["Environment", "WorldView-2"],
        tagColor: "green",
        image: "/Environ_2.jpg",
    },
    {
        title: "Flood Extent Mapping and Environmental Analysis for River Murray, South Australia",
        description:
            "DSP used Geoimage for high-resolution flood maps to assess damage, plan recovery, monitor floodwaters, prioritize efforts, allocate resources, ensure safety, and minimize costs. Collaboration showcased effective environmental recovery management.",
        tags: ["Government", "SPOT 6 and 7"],
        tagColor: "blue",
        image: "/Environ_3.jpg",
    },
    {
        title: "Albatross Conservation",
        description:
            "Grant Terp, botanist and his team, with support from the Humane Society International, monitored albatross nesting grounds for over 20 years. Facing extinction, they needed to count these birds on remote Kerguelen Islands. GeoImage provided high-resolution satellite imagery, enabling accurate population monitoring and aiding conservation efforts for this endangered species.",
        tags: ["Environment", "ALOS 1 and 2"],
        tagColor: "green",
        image: "/Environ_4.jpg",
    },
];

const ITEMS_PER_PAGE = 9;

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
    orange: { bg: "bg-[#e67e22]/10", text: "text-[#e67e22]", border: "border-[#e67e22]/30" },
    green: { bg: "bg-[#27ae60]/10", text: "text-[#27ae60]", border: "border-[#27ae60]/30" },
    blue: { bg: "bg-[#2980b9]/10", text: "text-[#2980b9]", border: "border-[#2980b9]/30" },
    purple: { bg: "bg-[#8e44ad]/10", text: "text-[#8e44ad]", border: "border-[#8e44ad]/30" },
};

export default function CaseStudiesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentStudies = caseStudies.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-[1700px] grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24">
                        <h1
                            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.15] tracking-tight"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                        >
                            Case Studies
                        </h1>
                        <p className="mt-6 text-[15px] md:text-base leading-relaxed text-slate-600 max-w-xl">
                            Dive into our real-world examples that showcase the power and versatility
                            of satellite imagery and geospatial solutions. Explore how businesses,
                            researchers, and organisations leverage our services and solutions to gain
                            valuable insights, solve complex problems, and make informed decisions.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#0e3d5c] px-8 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#0a2e47] hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Subscribe to Our Mailing List
                            </Link>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="relative h-[300px] lg:h-auto min-h-[400px]">
                        <Image
                            src="/Home_5.jpg"
                            alt="Satellite view of Earth"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient overlay for smooth blend */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent w-1/4 hidden lg:block" />
                    </div>
                </div>
            </section>

            {/* Divider line */}
            <div className="mx-auto max-w-[1700px] px-8 md:px-16">
                <div className="h-px w-full bg-slate-200" />
            </div>

            {/* Case Studies Grid */}
            <section className="mx-auto max-w-[1700px] px-8 py-16 md:px-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {currentStudies.map((study, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1 p-6 md:p-7">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map((tag) => {
                                        const colors = tagColorMap[study.tagColor] || tagColorMap.orange;
                                        return (
                                            <span
                                                key={tag}
                                                className={`inline-block px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-[0.12em] ${colors.bg} ${colors.text} border ${colors.border}`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Title */}
                                <h3 className="text-[17px] font-bold text-[#0e3d5c] leading-snug mb-3 group-hover:text-[#16a34a] transition-colors duration-300">
                                    {study.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[13px] leading-relaxed text-slate-500 flex-1 mb-5">
                                    {study.description}
                                </p>

                                {/* Read More */}
                                <div className="mt-auto pt-2">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1.5 text-[13px] font-extrabold uppercase tracking-wider text-[#e67e22] hover:text-[#d35400] transition-all duration-300 group/link"
                                    >
                                        Read More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-16">
                        <span className="text-sm text-slate-500 mr-2">Page</span>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => {
                                    setCurrentPage(page);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${currentPage === page
                                        ? "bg-[#0e3d5c] text-white shadow-lg shadow-[#0e3d5c]/25"
                                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-[#0e3d5c] via-[#0a2e47] to-[#071e2f] relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#16a34a]/8 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#16a34a]/5 blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

                <div className="mx-auto max-w-[1700px] px-8 py-20 md:px-16 md:py-28 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2">
                            <span className="h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                                Let&apos;s Collaborate
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Have a Complex Spatial Challenge?
                        </h2>

                        <p className="text-lg text-white/60 font-medium max-w-xl mx-auto leading-relaxed">
                            Our team of specialists can help you translate raw spatial data into
                            defensible insights and strategic decisions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-10 py-4 text-sm font-bold text-white shadow-xl shadow-[#16a34a]/20 transition-all duration-300 hover:bg-[#15803d] hover:shadow-2xl hover:-translate-y-0.5"
                            >
                                Contact Our Specialists
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
