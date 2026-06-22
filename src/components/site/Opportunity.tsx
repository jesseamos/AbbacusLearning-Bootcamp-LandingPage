import React, { useRef } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JoinFreeButton } from "../ui/cta-button";

const cards = [
  {
    title: "What is Machine Learning?",
    desc: "Simply put, it is teaching computers how to look at smart examples and solve problems on their own, without a human directing every single step.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Is it hard to learn?",
    desc: "Not at all! You do not need to be a math genius or have a university computer degree. If you can read and practice, you can build this skill.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Why Learn it in 2026?",
    desc: "Every major company in Nigeria and globally is looking for people who can handle AI software. It is currently one of the easiest ways to secure global tech roles.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Earn in Dollars from Home",
    desc: "Machine Learning skills open doors to remote tech jobs. You can sit comfortably right here in Nigeria and work for international companies.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Step-by-Step Guidance",
    desc: "We start completely from scratch. No pressure, no overwhelming tests. You will learn alongside friendly peers and mentors who want to see you succeed.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  }
];

export function Opportunity() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Creates a seamless clone for the desktop marquee engine
  const desktopLoop = [...cards, ...cards];

  // Mobile navigation button tap handlers
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Matches single mobile card width context
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight text-neutral-900 dark:text-neutral-50">
                Start Your AI Journey.<br />
                <span className="text-brand-blue font-bold">No Experience Needed.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                You don't need a tech background or complex math to build a career in AI. We break everything down into simple, practical steps so you can learn comfortably and unlock global job opportunities.
              </p>
            </Reveal>
         < JoinFreeButton/>
          </div>

          {/* Navigation Action Buttons - Visible strictly on Mobile UI layouts */}
          <div className="flex gap-3 md:hidden mt-2">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white shadow-sm active:bg-neutral-50 text-neutral-700"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white shadow-sm active:bg-neutral-50 text-neutral-700"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Track Row Viewports */}
      <div className="mt-14 relative w-full">
        {/* Soft edge masking layers for desktop preview frames */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 hidden md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 hidden md:block" />

        {/* 1. MOBILE CAROUSEL TRACK VIEW (Hidden on desktop, scrollable + button nav on mobile) */}
        <div 
          ref={scrollContainerRef}
          className="flex md:hidden gap-5 overflow-x-auto scrollbar-none px-6 snap-x snap-mandatory scroll-smooth pb-4"
        >
          {cards.map((c, i) => (
            <div
              key={`mobile-${c.title}-${i}`}
              className="snap-center group relative flex flex-col justify-between w-[290px] h-[380px] flex-shrink-0 overflow-hidden border border-neutral-200/80 rounded-[2rem] shadow-sm bg-zinc-900"
            >
              <div
                className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
                style={{ backgroundImage: `url(${c.imageUrl})` }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full p-5">
                <div className="text-base font-semibold text-white">{c.title}</div>
                <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 mt-auto backdrop-blur-md flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-brand flex-shrink-0 mt-1" />
                  <p className="text-xs text-zinc-200 font-normal leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. DESKTOP INFINITE SCROLLING MARQUEE TRACK (Hidden on mobile devices) */}
        <div className="hidden md:flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2 px-4">
          {desktopLoop.map((c, i) => (
            <div
              key={`desktop-${c.title}-${i}`}
              className="group relative flex flex-col justify-between w-[340px] h-[420px] flex-shrink-0 overflow-hidden border border-neutral-200/80 rounded-[2rem] shadow-sm hover:border-brand-blue/30 transition-all duration-300 bg-zinc-900"
            >
              <div
                className="absolute inset-0 bg-cover bg-center contrast-115 brightness-[0.45] group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url(${c.imageUrl})` }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full p-6">
                <div className="text-lg font-semibold text-white">{c.title}</div>
                <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 mt-auto backdrop-blur-md flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-brand flex-shrink-0 mt-1" />
                  <p className="text-xs text-zinc-200 font-normal leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}