import { useEffect, useState, useCallback } from "react";
import { Reveal } from "./Reveal";
import { 
  BadgeDollarSign, 
  GraduationCap, 
  Briefcase, 
  Star,
  ArrowRight
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const rewards = [
  { 
    icon: BadgeDollarSign, 
    title: "Capital Infusion", 
    category: "Financial Support",
    description: "Fuel your project with non-dilutive funding. Winners walk away with a share of the cash pool to scale their prototypes into real products.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    icon: GraduationCap, 
    title: "Elite Mentorship", 
    category: "Strategic Growth",
    description: "Get 1-on-1 guidance from seasoned technical founders and industry experts to refine your architecture, business strategy, and pitch.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    icon: Briefcase, 
    title: "Pipeline Access", 
    category: "Career Acceleration",
    description: "Fast-track your career with direct interview loops and placement pipelines at top-tier AI startups and established tech enterprises.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    icon: Star, 
    title: "Global Spotlight", 
    category: "Brand Visibility",
    description: "Gain global visibility. Featured demos will be showcased to thousands of developers, VC scouts, and tech leaders via our newsletter and demo day recap.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" 
  },
];

export function Competition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 3000; // 5 seconds per slide

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % rewards.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, DURATION);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <span className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-4 block font-medium">
                Competition Rewards
              </span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-500 ">
                Build. Compete. <br />
                <span className="text-white">Get spotlighted.</span>
              </h2>
            </Reveal>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex gap-3">
            {rewards.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="group relative h-1 w-12 md:w-16 bg-neutral-800 rounded-full overflow-hidden transition-all"
              >
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: isPaused ? "100%" : "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                    className="absolute inset-0 bg-primary-blue"
                  />
                )}
                <div className={`absolute inset-0 bg-primary-blue transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Content Area */}
        <div 
          className="relative h-[600px] md:h-[500px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
            >
              {/* Text Side */}
              <div className="md:col-span-6 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="p-3 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20">
                    {(() => {
                      const Icon = rewards[activeIndex].icon;
                      return <Icon className="w-6 h-6 text-brand-yellow" />;
                    })()}
                  </div> */}
                  <span className="text-neutral-400 font-medium tracking-wide uppercase text-xs">
                    {rewards[activeIndex].category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {rewards[activeIndex].title}
                </h3>
                
                <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
                  {rewards[activeIndex].description}
                </p>

                <button className="flex items-center gap-2 text-white font-semibold group border-b border-white/10 pb-2 hover:text-primary-blue transition-colors">
                  Learn more about this reward
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image Side */}
              <div className="md:col-span-6 order-1 md:order-2 relative group">
                {/* Image Frame UI */}
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-3xl border border-white/10">
                  {/* Grayscale Image */}
                  <img 
                    src={rewards[activeIndex].image} 
                    alt={rewards[activeIndex].title}
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-[10s] ease-linear group-hover:scale-110"
                  />
                  
                  {/* High-end Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Aesthetic Floating Badge */}
                {/* <div className="absolute -bottom-4 -right-4 bg-neutral-900 border border-white/10 p-4 rounded-2xl hidden md:block shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-tighter">
                      Verified Prize // 00{activeIndex + 1}
                    </span>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}