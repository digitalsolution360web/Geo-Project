"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const caseStudies = [
    {
        title: "Interactive Spatial Analytics and Decision-Support Dashboard",
        description:
            "This case study demonstrates the development of a spatial analytics dashboard designed to support data exploration and decision-making through interactive geospatial visualisation.",
        tags: [
            "Geospatial Dashboard",
            "Spatial Data Visualisation",
            "Decision Support Systems",
            "Infrastructure Analytics",
            "Environmental Monitoring",
            "GIS Data Integration",
            "Spatial Data Analytics",
            "Interactive Mapping",
        ],
        tagColor: "orange",
        image: "/Enterprise_1.png",
        hoverTitle: "Spatial Analytics Dashboard for Environmental & Infrastructure Data",
        content: {
            overview: "This case study demonstrates the development of a spatial analytics dashboard designed to support data exploration and decision-making through interactive geospatial visualisation. By integrating multiple datasets into a unified dashboard interface, spatial information can be explored dynamically, enabling stakeholders to quickly understand spatial patterns, trends, and relationships across regions.",
            context: "Organisations working with environmental, infrastructure, or socio-economic datasets often need tools that allow them to explore complex spatial information efficiently. Static maps and reports can limit the ability to interact with data and identify patterns. To address this challenge, a spatial dashboard was designed to integrate geospatial datasets, environmental indicators, and spatial metrics into an interactive visual interface that allows users to filter, visualise, and interpret spatial data in real time.",
            approach: "The dashboard integrates spatial datasets within a GIS-enabled analytical environment and provides interactive visualisation tools for exploring spatial patterns. Key components of the dashboard include map-based visualisation, statistical charts, and dynamic filtering tools that allow users to examine geographic patterns across different variables. The workflow involved preparing spatial datasets, standardising geographic layers, linking spatial attributes to analytical indicators, and designing visual outputs that support intuitive exploration of spatial information.",
            insights: "The spatial dashboard demonstrates how interactive geospatial visualisation can transform complex datasets into accessible decision-support tools. By enabling users to explore spatial relationships dynamically, dashboards can support data-driven planning, monitoring, and strategic decision-making across environmental management, infrastructure planning, and policy analysis contexts.",
        }
    },
    {
        title: "Environmental Exposure Modelling and Public Health Analytics",
        description:
            "Investigating the relationship between environmental conditions and population health through spatial data integration. Developed through multidisciplinary collaboration, this research-driven study supports evidence-based environmental epidemiology.",
        tags: [
            "Environmental Exposure Modelling",
            "Environmental Epidemiology",
            "Spatial Data Integration",
            "Air Pollution Analysis",
            "NDVI / EVI Analysis",
            "Spatial Statistics",
            "Public Health Analytics",
        ],
        tagColor: "green",
        image: "/Environmental_1.png",
        hoverTitle: "Environmental Health Exposure Modelling",
        content: {
            overview: "This case study reflects spatial analysis and environmental exposure modelling experience developed through academic research and collaboration with multidisciplinary public health and environmental science teams. The work demonstrates how geospatial methods can be used to investigate the relationship between environmental conditions and population health outcomes by integrating environmental datasets with demographic and health information.",
            context: "Understanding how environmental factors influence human health requires the integration of large-scale spatial datasets from multiple sources. In this analysis, environmental exposure modelling was conducted to examine the relationships between greenspace, air pollution, and health outcomes across large population datasets. The study combined satellite-derived environmental indicators, air pollution datasets, and demographic health survey data to generate spatial exposure metrics suitable for epidemiological analysis.",
            approach: "The spatial analysis involved integrating satellite-derived vegetation indices such as EVI and NDVI with population health datasets and processing air pollution exposure surfaces (e.g., PM₂.₅) to quantify environmental exposure patterns. Geospatial statistical modelling techniques were applied to investigate potential associations between environmental factors and health outcomes. The analysis also included the generation of spatial visualisations and analytical outputs to support scientific interpretation and research communication.",
            insights: "The environmental exposure modelling provided valuable insights into spatial patterns of environmental risk and their potential influence on population health. By integrating environmental datasets with demographic health information, the analysis contributed to a deeper understanding of environmental determinants of health and supported evidence-based research in environmental epidemiology. The results also demonstrated how spatial analysis can inform public health research, policy discussions, and environmental health planning.",
        }
    },
    {
        title: "Strategic Logistics Hub Selection through Spatial Optimisation",
        description:
            "Demonstrating the application of Centre-of-Gravity (CoG) modelling and geospatial analysis for strategic supply chain planning. This study illustrates how spatial intelligence identifies optimal distribution hub locations.",
        tags: [
            "Spatial Optimisation",
            "Location Analysis",
            "Centre of Gravity Modelling",
            "Supply Chain Analytics",
            "Logistics Planning",
        ],
        tagColor: "blue",
        image: "/Logistic_Case_Study_1.png",
        hoverTitle: "Logistics Hub Location Optimisation",
        content: {
            overview: "This case study demonstrates the application of spatial optimisation techniques for business location planning. Using geospatial analysis, the study illustrates how spatial data can support strategic decision-making in logistics, distribution planning, and infrastructure location selection. By analysing the geographic distribution of demand, spatial modelling can help identify locations that improve operational efficiency and reduce transportation costs.",
            context: "Businesses with widely distributed customer demand often face challenges in determining the most efficient location for distribution centres or logistics hubs. Poorly positioned facilities can lead to higher transportation costs, longer delivery times, and inefficient supply chain operations. To address this challenge, spatial data representing customer or demand locations, shipment volume or demand intensity, and regional geographic coordinates were integrated within a GIS environment. These datasets provided the spatial foundation for analysing demand distribution and identifying an optimal hub location.",
            approach: "A Centre-of-Gravity (CoG) spatial optimisation model was applied to determine the weighted mean location that minimises overall transportation distance across the demand network. The analysis involved preparing demand location datasets, assigning weights based on shipment volumes, and calculating weighted spatial coordinates. The resulting model was visualised within QGIS, enabling spatial representation of demand distribution and the identification of a strategically positioned logistics hub.",
            insights: "The spatial optimisation analysis demonstrated how geospatial modelling can support datadriven logistics and infrastructure planning. By identifying a location closer to the weighted demand centre, the analysis highlighted opportunities to reduce transportation distances and improve distribution efficiency. This approach provides organisations with a structured framework for site selection, supply chain optimisation, and strategic logistics planning using spatial intelligence.",
        }
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
                            Explore how GeoDecision Analytics specialists apply spatial intelligence to address complex environmental, infrastructure, and data-driven decision challenges
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

            {/* Professional Disclaimer Section */}
            <section className="bg-[#f8f9fa] border-y border-slate-100 py-14 overflow-hidden relative">
                {/* Decorative background element */}
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#0e3d5c]/5 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#e67e22]/5 blur-3xl" />

                <div className="mx-auto max-w-4xl px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#0e3d5c]/60"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                    </div>
                    <p
                        className="text-lg md:text-xl lg:text-[1.35rem] font-medium text-[#0e3d5c]/90 italic leading-relaxed tracking-tight"
                        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    >
                        &ldquo;Case studies are presented in a generalised form to illustrate analytical approaches while respecting organisational and research confidentiality requirements&rdquo;
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-12 rounded-full bg-[#e67e22]/30" />
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="mx-auto max-w-[1700px] px-8 py-16 md:px-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
                    {currentStudies.map((study, idx) => {
                        return (
                            <div
                                key={idx}
                                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Card Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Hover Title Overlay */}
                                    <div className="absolute inset-0 bg-[#0e3d5c]/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] translate-y-4 group-hover:translate-y-0">
                                        <h4 className="text-white text-center font-bold text-lg md:text-xl leading-tight drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
                                            {study.hoverTitle}
                                        </h4>
                                    </div>
                                </div>

                                {/* Card Content Shell */}
                                <div className="flex flex-col flex-1 p-6 md:p-8">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {study.tags.map((tag: any) => {
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
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0e3d5c] leading-tight mb-4 group-hover:text-[#16a34a] transition-colors duration-300">
                                        {study.title}
                                    </h3>

                                    {/* Summary Paragraph */}
                                    <p className="text-[14px] leading-relaxed text-slate-500 mb-8 pb-8 border-b border-slate-100">
                                        {study.description}
                                    </p>

                                    {/* FULL CONTENT (Always Visible) */}
                                    <div className="space-y-8 flex-1">
                                        <div className="space-y-3">
                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e67e22] bg-[#e67e22]/5 inline-block px-3 py-1 rounded">Project Overview</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                                {study.content.overview}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e67e22] bg-[#e67e22]/5 inline-block px-3 py-1 rounded">Project Context</h4>
                                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                                {study.content.context}
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0e3d5c] mb-4">Analytical Approach</h4>
                                            <p className="text-slate-700 leading-relaxed text-[15px] relative z-10">
                                                {study.content.approach}
                                            </p>
                                        </div>

                                        <div className="border-l-4 border-[#16a34a] pl-6 py-2">
                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#16a34a] mb-3 flex items-center gap-2">
                                                <span className="h-1 w-4 bg-[#16a34a] rounded-full" />
                                                Key Insights
                                            </h4>
                                            <p className="text-[#0e3d5c] font-medium leading-relaxed text-[16px] italic">
                                                &ldquo;{study.content.insights}&rdquo;
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Action */}
                                    <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <Link
                                            href="/contact"
                                            className="text-[13px] font-bold uppercase tracking-wider text-[#e67e22] hover:text-[#d35400] transition-all duration-300 flex items-center gap-2 group/link"
                                        >
                                            Consult on this Research
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                                    window.scrollTo({ top: 300, behavior: "smooth" });
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
