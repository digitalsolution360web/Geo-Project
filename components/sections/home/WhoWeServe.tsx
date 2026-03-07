import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

export default function WhoWeServe() {
  const industries = [
    {
      title: "Government & Local Councils",
      description: "We deliver evidence-based spatial analysis to inform planning, regulatory oversight, infrastructure strategy, and sustainable community development.",
      image: "/Government_1.webp",
    },
    {
      title: "Infrastructure & Utilities",
      description: "We assist infrastructure providers in integrating spatial data into planning, optimisation, and risk mitigation strategies.",
      image: "/Infrastructure_1.webp",
    },
    {
      title: "Environmental & Climate Agencies",
      description: "We provide advanced geospatial modelling to support environmental monitoring, climate adaptation, and sustainability initiatives.",
      image: "/Environment_1.webp",
    },
    {
      title: "Mining & Energy Projects",
      description: "We help resource and energy organisations manage environmental risk, regulatory obligations, and site development decisions using defensible spatial intelligence.",
      image: "/Mining_1.webp",

    },
    {
      title: "Public Health & Research",
      description: "Private & Commercial Enterprises: We support organisations seeking to integrate spatial intelligence into strategic planning, site selection, environmental compliance, and investment decisions.",
image: "/Health_1.webp",
    },
    {
      title: "Private & Commercial Enterprises",
      description: "We support organisations seeking to integrate spatial intelligence into strategic planning, site selection, environmental compliance, and investment decisions.",
      image: "/Enterprice_2.jpg",

    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 md:py-32">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-12 md:px-8 relative z-10 space-y-12 sm:space-y-16">
        <Reveal direction="up" width="100%">
          <header className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-white bg-[#16a34a] px-4 py-1.5 rounded-full border border-[#16a34a]/20">
              Who We Serve
            </p>
            <div className="max-w-3xl space-y-6 mx-auto">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                Empowering Decision-Makers Through Spatial Intelligence Across Sectors
              </h2>
              <p className="text-lg text-slate-300 font-bold leading-relaxed max-w-2xl mx-auto">
                We leverage geospatial intelligence to solve complex spatial challenges, reducing risk and accelerating operational results for our partners.
              </p>
            </div>
          </header>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, idx) => (
            <Reveal
              key={idx}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.1}
              width="100%"
              className="h-full"
            >
              <div
                className="group flex flex-col h-full overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-800 transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-2xl hover:translate-y-[-4px] cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-black text-white group-hover:text-[#16a34a] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <p className="text-sm leading-relaxed text-slate-300 font-medium">
                    {item.description}
                  </p>

                  {/* Bullets section removed as no data exists and items noted not to include points */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

