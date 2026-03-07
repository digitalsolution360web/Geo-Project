"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function HomeSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/home1111.webp",
        "/Case_Study_1.jpg",
        "/Case_Study_2.jpg",
        "/Case_Study_3.jpg",
        "/Case_Study_4.jpg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative w-full h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden bg-slate-900 group">
            {/* Background Images */}
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`GeoDecision Case Study ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Darker Overlay to make text/UI readable */}
                    <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 w-full">
                    <div className="max-w-3xl space-y-6 sm:space-y-8">
                        <Reveal direction="left" delay={0.2}>
                            <div className="space-y-3">
                                <p className="inline-block text-[10px] font-black tracking-[0.4em] text-white bg-[#16a34a] px-4 py-1.5 rounded-full shadow-lg border border-[#16a34a]/50">
                                    GeoDecision Analytics
                                </p>
                                <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1] sm:leading-[1.1] lg:leading-[1.05]">
                                    Transforming Spatial Data into{" "}
                                    <span className="text-[#16a34a] drop-shadow-md">Confident Decisions.</span>
                                </h1>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.4}>
                            <p className="text-lg sm:text-xl md:text-2xl leading-snug text-slate-200 font-bold max-w-2xl">
                                Reducing uncertainty through structured geospatial analysis and defensible strategic insights.
                            </p>
                        </Reveal>

                        <Reveal direction="left" delay={0.6}>
                            <div className="flex flex-wrap gap-5 pt-2">
                                <Link
                                    href="/services"
                                    className="rounded-full bg-[#16a34a] px-10 py-3 text-sm font-black text-white transition-all hover:bg-[#15803d] hover:shadow-[0_0_25px_rgba(22,163,74,0.4)] hover:scale-105 cursor-pointer"
                                >
                                    Explore services
                                </Link>
                                <button className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-10 py-3 text-sm font-black text-white transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105 cursor-pointer">
                                    Request a Quote
                                </button>
                            </div>
                        </Reveal>

                        {/* Stats grid section removed - was empty/commented */}
                    </div>
                </div>
            </div>

            {/* Navigation Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "w-8 bg-[#16a34a]"
                            : "w-2 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Optional Next/Prev Buttons that appear on group hover */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-[#16a34a] border border-white/20 hidden md:block"
                aria-label="Previous slide"
            >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-[#16a34a] border border-white/20 hidden md:block"
                aria-label="Next slide"
            >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </section>
    );
}
