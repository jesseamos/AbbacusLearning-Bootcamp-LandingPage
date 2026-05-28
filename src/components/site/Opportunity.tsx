import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

// Updated data scheme accommodating distinct placeholders for the abstract vector graphics
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
  return (
    <section className="relative py-28 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-neutral-50">
              Your entry into the{" "}
              <span className="">future AI economy.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-4  items-start text-start">
          Step into a new era where AI is reshaping industries, creating global opportunities, and redefining the future of work. Learn the skills that matter, build real-world projects, and position yourself to thrive in the rapidly growing AI economy — no matter where you’re starting from.
          </p>
        </Reveal>
        </div>
    
      
       
      
        {/* Smooth Scrolling Horizontal Wrapper with Hide-Scrollbar */}
        <div
          className="mt-14 flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 px-2 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Webkit scrollbar hiding rule fallback */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                div::-webkit-scrollbar { display: none; }
              `,
            }}
          />

          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div
                className="group relative flex flex-col justify-between w-[320px] sm:w-[360px] h-[440px] flex-shrink-0 overflow-hidden border border-neutral-200/80 dark:border-zinc-800 rounded-[2rem] hover:shadow-sm transition-all duration-300 snap-start"
              >
                {/* Black & White Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale"
                  style={{
                    backgroundImage: `url(${c.imageUrl})`,
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  {/* Header Action Button */}
                  <div className="self-start">
                    <a
                      href={`#${c.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1 text-base font-medium text-white transition-colors group/link"
                    >
                      {c.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* Bottom Description Card */}
                  <div className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 mt-auto backdrop-blur-md flex items-start gap-3">
                    <div className="h-4 w-4 rounded-full bg-gradient-brand flex-shrink-0 mt-0.5" />

                    <p className="text-xs text-neutral-200 font-normal leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}