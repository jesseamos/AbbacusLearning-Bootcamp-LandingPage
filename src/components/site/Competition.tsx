import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import {
  BadgeDollarSign,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    icon: BadgeDollarSign,
    title: "AI Innovation Challenge",
    description: "Put your skills to the test by solving real-world problems with AI alongside your team.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: GraduationCap,
    title: "Mentor Feedback",
    description: "Present your work and receive guidance from experienced founders, engineers, and technology leaders.",
    image: "https://images.unsplash.com/photo-1521791136368-1a46827d0af1?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Briefcase,
    title: "Project Showcase",
    description: "Demonstrate what you've built through presentations, demos, and community showcases.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Star,
    title: "Recognition & Opportunities",
    description: "Outstanding projects may receive recognition, mentorship opportunities, and increased visibility within our network.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  }
];

export function Competition() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = items[activeIndex];

  return (
    <section id="career-clinic" className="relative py-28 overflow-hidden bg-white">

      {/* FOREGROUND LAYOUT CONTAINER (z-10 ensures absolute visibility over pattern) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <Reveal delay={0.05}>

            <h2 className="text-4xl sm:text-6xl tracking-tighter leading-none font-medium">
              Build Something
              <br />
              <span className="text-gradient-brand">
                Worth Showing.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Recruiters don't care about certificates. They care about working code. You'll build team projects designed to prove you can solve real business problems, version control code on GitHub, and pitch to international companies.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT COLUMN: Clean Image Card Showcase */}
          <div className=" relative overflow-hidden rounded-3xl order-2 lg:order-1 ">
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[480px]">

              {/* AnimatePresence for clean cross-fade action */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={currentItem.image}
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover select-none contrast-[1.05] brightness-90  hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>

              {/* Mac-style Window Dot Accents */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>

              {/* Subtle bottom shading gradient */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0e0a2e] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT COLUMN: Copy and Controls */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">

            {/* Height safety zone to offset layout shift during text rotation */}
            <div className="min-h-[220px] sm:min-h-[180px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >


                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight">
                    {currentItem.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                    {currentItem.description}
                  </p>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Minimal Technical Indicators */}
            <div className="mt-10 flex gap-2.5 items-center">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i
                    ? "w-8 bg-gradient-brand bg-white"
                    : "w-1 bg-zinc-800 hover:bg-zinc-600"
                    }`}
                  aria-label={`Switch to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}