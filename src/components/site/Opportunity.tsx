import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Real-World Projects",
    desc: "Build practical AI and data science projects that demonstrate your skills and strengthen your portfolio.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Industry Mentorship",
    desc: "Learn directly from founders, engineers, and technology leaders building products across Africa.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Career Growth",
    desc: "Receive guidance on resumes, LinkedIn optimization, portfolios, and professional positioning.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Community Learning",
    desc: "Collaborate with ambitious learners, participate in challenges, and grow alongside your peers.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Future-Ready Skills",
    desc: "Develop AI, Machine Learning, Python, and Data Science skills that remain relevant in the years ahead.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  }
];

export function Opportunity() {
  // Create an infinite data array loop setup
  const loop = [...cards, ...cards];

  return (
    <section className="relative pb-28  overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-neutral-50">
              Build Skills For The<br />
              <span className="text-gradient-brand"> AI Economy.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Artificial Intelligence is transforming industries around the world.
              Learn practical skills, build real projects, gain mentorship, and
              position yourself for opportunities in a rapidly changing global workforce.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Infinite Marquee Engine Row */}
      <div className="mt-14 relative w-full">
        {/* Soft edge masking layers for clean side visual fading blur */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-zinc-950 to-transparent z-10" />

        {/* CSS Scrolling Marquee Track Container */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2 px-4">
          {loop.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="group relative flex flex-col justify-between w-[300px] sm:w-[340px] h-[420px] flex-shrink-0 overflow-hidden border border-neutral-200/80 dark:border-zinc-800/80 rounded-[2rem] shadow-sm hover:border-brand-blue/30 dark:hover:border-white/20 transition-all duration-300 bg-zinc-900"
            >
              {/* Black & White Background Image Asset Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center  contrast-115 brightness-[0.45] group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url(${c.imageUrl})`,
                }}
              />

              {/* Functional Content Structural Layout */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6">

                {/* Title Segment Header with Action Indicators */}
                {/* <div className="self-start">
                  <a
                    href={`#${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-white transition-colors group/link"
                  >
                    {c.title}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 text-zinc-400 group-hover/link:text-white" />
                  </a>
                </div> */}

                {/* Frosted Information Footing Module */}
                <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 mt-auto backdrop-blur-md flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-brand flex-shrink-0 mt-1" />
                  <p className="text-xs text-zinc-200 font-normal leading-relaxed">
                    {c.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}