import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function GisCapabilities() {
    const capabilities = [
        {
            title: "Data Ingestion & Management",
            description:
                "Seamless integration of multi-source spatial datasets with quality assurance and validation. We handle complex data pipelines to ensure your foundations are rock-solid.",
            points: [
                "Multi-format Support (Shapefiles, GeoJSON, KML)",
                "Automated ETL Pipelines & Workflows",
                "Spatial Database Infrastructure (PostGIS, SQL)",
                "Quality Assurance & Data Validation"
            ],
            image: "/Data_1.webp",
            tag: "Spatial Data",
        },
        {
            title: "Spatial Modeling & Analysis",
            description:
                "Advanced geospatial algorithms for pattern recognition, forecasting, and optimization. Move beyond mapping to deep spatial intelligence.",
            points: [
                "Predictive Terrain & Site Analysis",
                "Advanced Network Routing & Logistics",
                "Hydrological & Environmental Modeling",
                "Machine Learning Spatial Integration"
            ],
            image: "/Spatial_Modeling_1.webp",
            tag: "Analytics",
        },
        {
            title: "Interactive Map Services",
            description:
                "Web-based mapping interfaces with real-time updates, filtering, and deep analytics. Delivering information through intuitive visual tools.",
            points: [
                "Real-time IoT & Asset Tracking",
                "Dynamic Layer Filtering & Querying",
                "Cross-platform Web & Mobile Access",
                "Custom Dashboard Integration"
            ],
            image: "/Interective_Map_Services_1.webp",
            tag: "Visualization",
        },
        {
            title: "Geostatistical Insights",
            description:
                "Transforming raw spatial data into comprehensive visual reports and statistical insights. We help you find the 'where' in your data.",
            points: [
                "Demographic Trend & Market Analysis",
                "Heatmaps & Hotspot Detection",
                "Automated PDF & Web Reporting",
                "Spatial Correlation & Regression"
            ],
            image: "/Data_System_1.webp",
            tag: "Reporting",
        },
        {
            title: "Custom GIS App Development",
            description:
                "Tailor-made geospatial applications designed to solve specific business challenges. Built for scalability, precision, and ease of use.",
            points: [
                "Cloud-native Serverless Architectures",
                "API-First Integration Strategy",
                "User-Centric UI/UX Design",
                "Enterprise GIS System Integration"
            ],
            image: "/Enterprise_Services_1.webp",
            tag: "Development",
        },
    ];

    return (
        <section className="relative overflow-hidden py-12 sm:py-20 md:py-28 bg-[#0f172a]">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#16a34a]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#16a34a]/5 blur-[120px] rounded-full" />

            <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 relative space-y-20 lg:space-y-32">
                {/* Header Section */}
                <Reveal direction="left" width="100%">
                    <div className="max-w-4xl space-y-8">
                        <div className="space-y-4">
                            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-white bg-[#16a34a] px-4 py-1.5 rounded-full border border-[#16a34a]/20">
                                Technology Stack
                            </p>
                            <h2 className="text-3xl font-black tracking-tight text-white leading-[1.1] sm:text-4xl lg:text-5xl">
                                Advanced <span className="text-[#16a34a]">GIS & Spatial</span>{" "}
                                Solutions for the Digital Age
                            </h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            <p className="text-lg leading-relaxed text-slate-300 font-bold">
                                We leverage industry-leading GIS platforms, spatial databases, and
                                APIs to deliver robust geospatial solutions. Our technology stack
                                is built for scalability, precision, and real-time decision
                                support across diverse industries.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-400 font-bold border-l-2 border-[#16a34a]/30 pl-6">
                                From large-scale data ingestion to complex spatial modeling and interactive map
                                services, our platform integrates all the tools you need to turn
                                location data into actionable intelligence and strategic value.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Capabilities Layers */}
                <div className="space-y-24 sm:space-y-40">
                    {capabilities.map((cap, index) => (
                        <div
                            key={index}
                            className={`group relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20`}
                        >
                            {/* Content Side */}
                            <div
                                className={`min-w-0 lg:col-span-6 space-y-8 ${index % 2 === 1 ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"
                                    }`}
                            >
                                <Reveal direction={index % 2 === 1 ? "right" : "left"} width="100%">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <span className="rounded-full bg-[#16a34a]/20 px-4 py-1.5 text-[11px] font-black text-[#4ade80] uppercase tracking-[0.4em] border border-[#16a34a]/30">
                                                {cap.tag}
                                            </span>
                                            <h3 className="text-3xl font-black text-white transition-colors group-hover:text-[#16a34a] sm:text-4xl">
                                                {cap.title}
                                            </h3>
                                        </div>

                                        <p className="text-xl leading-relaxed text-slate-300 font-medium group-hover:text-slate-200 transition-colors">
                                            {cap.description}
                                        </p>

                                        {/* Dynamic feature list */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {cap.points.map((point, pIdx) => (
                                                <div key={pIdx} className="flex items-start gap-3">
                                                    <div className="mt-1.5 shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#16a34a]/20 border border-[#16a34a]/30">
                                                        <svg className="h-2.5 w-2.5 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-300 transition-colors">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-4">
                                            <Link
                                                href="/contact"
                                                className="group/btn inline-flex items-center gap-3 rounded-full bg-[#16a34a] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-[#15803d] hover:shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:scale-105 cursor-pointer"
                                            >
                                                Contact Specialist
                                                <svg
                                                    className="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Image Side */}
                            <div
                                className={`relative min-w-0 lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                                    }`}
                            >
                                <Reveal direction={index % 2 === 1 ? "left" : "right"} width="100%">
                                    <div className="relative group/img">
                                        {/* Background glow for cards */}
                                        <div className="absolute -inset-10 rounded-[60px] bg-[#16a34a]/5 blur-[100px] -z-10 group-hover:bg-[#16a34a]/15 transition-all duration-700 opacity-60" />

                                        {/* Floating decorative elements */}
                                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#16a34a]/10 blur-2xl rounded-full animate-pulse" />
                                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#16a34a]/5 blur-2xl rounded-full animate-pulse delay-700" />

                                        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-700 lg:group-hover:-translate-y-4 lg:group-hover:rotate-1">
                                            <div className="aspect-[4/3] relative">
                                                <Image
                                                    src={cap.image}
                                                    alt={cap.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-60" />
                                            </div>

                                            {/* Corner styling */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent" />
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

