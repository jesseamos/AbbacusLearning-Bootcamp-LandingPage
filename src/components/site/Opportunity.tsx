import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Remote Opportunities",
    desc: "Tap into a borderless job market and work with global teams from anywhere in Africa.",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "AI Startups",
    desc: "Join — or launch — the next wave of African startups building with intelligent systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Global Workforce",
    desc: "Compete and collaborate with peers across continents, on equal footing.",
    imageUrl:
      "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Future Skills",
    desc: "Master the foundational skills that will define the next decade of technology.",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Portfolio Projects",
    desc: "Graduate with real, shippable projects that prove what you can build.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
  },
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
              Your entry into the{" "}
              <span className="text-gradient-brand">future AI economy.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Step into a new era where AI is reshaping industries, creating global opportunities, and redefining the future of work. Learn the skills that matter, build real-world projects, and position yourself to thrive.
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