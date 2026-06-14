import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

import { ArrowRight, FileText, Linkedin, Github, Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  {
    icon: FileText,
    title: "Portfolio Development",
    desc: "Turn your learning into proof of work by building projects that demonstrate your skills and growth throughout the bootcamp.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Linkedin,
    title: "Professional Branding",
    desc: "Learn how to present your skills, experiences, and projects in a way that helps you stand out online and professionally.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Github,
    title: "Project Showcase",
    desc: "Build a portfolio of practical AI and data science projects that reflect what you've learned and what you can create.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Compass,
    title: "Career Navigation",
    desc: "Gain clarity on different paths in AI, Data Science, Software Engineering, startups, freelancing, and emerging technology.",
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&w=600&q=80"
  }
];

export function Career() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simple, clean automatic cross-fade every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = items[activeIndex];
  const Icon = currentItem.icon;

  return (
    <section id="career-clinic" className="relative py-28 bg-secondary/40 overflow-hidden">
      {/* FIXED: Added z-0 to keep the background securely underneath everything */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />

      {/* FIXED: Added relative z-10 so the heading stacks properly over the background */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight mb-6">
          Learn The Skills.
          <br />
          <span className="text-brand-blue">
            Navigate The Opportunities.
          </span>
        </h2>
        <p className="mb-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          We don't just teach you machine learning. We help you clean up your GitHub profile, optimize your LinkedIn to trigger global recruiter search alerts, and pass technical interviews.
        </p>
      </div>

      {/* FIXED: Added z-10 to the grid container as well */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT COLUMN: Clean Image Card Showcase */}
        <div className="gradient-border relative overflow-hidden rounded-3xl order-2 lg:order-1">
          <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-[#0e0a2e]">

            {/* AnimatePresence makes the image fading incredibly smooth */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover select-none contrast-115 brightness-95"
              />
            </AnimatePresence>

            {/* Mac-style Window Dot Accents */}
            <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>

            {/* Subtle bottom shading gradient */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Corner Decorative Flare */}
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: Copy and Controls */}
        <div className="order-1 lg:order-2">

          {/* Constraining the heights here prevents layout shift during text switches */}
          <div className="min-h-[260px] sm:min-h-[220px] md:min-h-[200px] flex flex-col justify-center mt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight flex items-center gap-3">
                  <span>{currentItem.title}</span>
                </h2>

                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {currentItem.desc}
                </p>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple, Minimal Navigation Indicators below content */}
          <div className="mt-12 flex gap-3 items-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i
                  ? "w-5 bg-gradient-brand"
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                aria-label={`Switch to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}