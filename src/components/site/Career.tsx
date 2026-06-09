import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

import { ArrowRight, FileText, Linkedin, Github, Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  {
    icon: FileText,
    title: "Resume Reviews",
    desc: "Get honest, face-to-face feedback from active engineering managers and tech recruiters. Learn exactly how to rewrite your project impact metrics to make your experience stand out to top companies.",
    link: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    desc: "Stop applying to hundreds of jobs blindly. We help you rebuild your headline, profile architecture, and about sections to naturally attract recruiter inbounds and premium tech roles.",
    link: "#",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Github,
    title: "GitHub Architecture",
    desc: "Your code should sell itself. We guide you through creating clean repository layouts, writing professional README documentations, and structuring commit histories that prove you build production-ready code.",
    link: "#",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Compass,
    title: "Remote Career Guidance",
    desc: "Navigate the global remote landscape confidently. Learn how to look for international contracts, negotiate global compensation bands, and handle cross-border tax compliance rules effortlessly.",
    link: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
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
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">

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

            {/* Mac-style Window Dot Accents matching your community design */}
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
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight  flex items-center gap-3">
                  <span>{currentItem.title}</span>
                </h2>

                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {currentItem.desc}
                </p>

                <div className="mt-8">
                  <a
                    href={currentItem.link}
                    className="inline-flex items-center rounded-full cta-primary-button  text-white font-medium px-6 py-3 shadow-glow hover:brightness-110 transition cursor-pointer group"
                  >
                    Learn more about this track
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
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