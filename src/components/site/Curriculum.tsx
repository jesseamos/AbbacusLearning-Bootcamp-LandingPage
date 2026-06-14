import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const months = [
  {
    tag: "Month 1",
    title: "Data Ingestion & Production Python",
    description: "Stop writing messy notebooks. Learn to ingest, validate, and process scale-ready data using the exact workflows global engineering teams demand.",
    items: [
      "Write clean, optimized, production-grade Python scripts architecture",
      "Build resilient, automated web scraping pipelines that don't break",
      "Ingest and clean unpredictable, real-world Nigerian market datasets"
    ],
  },
  {
    tag: "Month 2",
    title: "End-to-End Core ML Engineering",
    description: "Move past basic model training. Take raw data, train high-performance models, and turn them into scalable web infrastructure.",
    items: [
      "Train battle-tested predictive models for Regression & Classification",
      "Wrap trained models into high-performance, secure production APIs (FastAPI)",
      "Deploy live APIs to cloud infrastructure (Render, Hugging Face, AWS)"
    ],
  },
  {
    tag: "Month 3 & Demo Day",
    title: "MLOps, Monitoring & Global Showcase",
    description: "This is where you separate yourself from 95% of data applicants. Master deployment lifecycle management and pitch live to international companies.",
    items: [
      "Build real-time interactive model dashboards with Streamlit",
      "Architect CI/CD automation with model versioning & drift monitoring",
      "Pitch your capstone live to remote tech recruiters during Demo Day"
    ],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-28 overflow-hidden bg-[#DC143C]">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px]  blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              A clear path from <br />
              <span className="">
                beginner to builder.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-white text-base sm:text-lg">
              A rigorous, project-driven curriculum designed to turn you into a self-sufficient Machine Learning Engineer in 12 weeks.
            </p>
          </Reveal>
        </div>

        {/* Timeline Content */}
        <div className="relative mt-20">
          {/* Centered Timeline Axis Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-white" />

          <div className="space-y-16 md:space-y-24">
            {months.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={m.tag} delay={i * 0.05}>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start pl-10 md:pl-0">

                    {/* Animated Timeline Center Dot */}
                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="grid place-items-center h-5 w-5 rounded-full to-brand-blue ring-4 bg-black "
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                      </motion.div>
                    </div>

                    {/* Text Title Block */}
                    <div className={`space-y-2 ${isEven ? "md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"}`}>
                      <span className="inline-block text-xs font-medium tracking-widest text-black">
                        {m.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        {m.title}
                      </h3>
                      <p className="text-sm text-white max-w-md mt-2 md:ml-auto md:mr-0 inline-block">
                        {m.description}
                      </p>
                    </div>

                    {/* Content Card Block */}
                    <div className={`${isEven ? "md:text-left md:pl-12" : "md:order-1 md:text-right md:pr-12"}`}>
                      <div className="relative group rounded-2xl bg-black p-6 md:p-8 transition-all duration-300 backdrop-blur-sm">
                        {/* Interactive glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <ul className="space-y-4 relative z-10">
                          {m.items.map((it, idx) => (
                            <li key={idx} className={`flex items-start gap-3 text-sm text-gray-300 ${isEven ? "justify-start" : "md:justify-end"}`}>
                              {isEven && (
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
                              )}
                              <span className="font-medium text-left leading-relaxed">{it}</span>
                              {!isEven && (
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(59,130,246,0.8)] hidden md:inline-block" />
                              )}
                              {!isEven && (
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(59,130,246,0.8)] inline-block md:hidden order-first" />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Micro-CTA Push to build momentum */}
        {/* <div className="mt-20 text-center">
          <Reveal delay={0.2}>
            <p className="text-sm text-gray-400">
              Ready to claim your spot? Space is strictly limited to ensure high-quality mentorship.
            </p>
            <a
              href="#pricing"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-brand-purple to-brand-blue px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all duration-200"
            >
              Secure Your Seat Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </Reveal>
        </div> */}

      </div>
    </section>
  );
}