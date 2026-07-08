import React, { useState, useEffect } from "react";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CountdownBanner() {
  // Target: July 15, 2026 00:00:00 UTC+1 (West Africa Standard Time / Nigeria)
  const targetDate = new Date("2026-07-15T00:00:00+01:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 inset-x-0 z-50 bg-brand-red text-white py-3 px-4 border-b border-brand-red/40 backdrop-blur-md shadow-2xl text-xs sm:text-sm font-medium overflow-hidden"
    >
      {/* High-urgency ambient background alert pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-transparent to-brand-red/10 animate-pulse pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center">

        {/* Timer Section */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-flex h-2 w-2 rounded-full bg-brand-red shadow-[0_0_8px_#ff0000]" 
          />
          <span className="tracking-wide font-semibold text-gray-200 flex items-center gap-1 text-base md:text-lg">
            Cohort Applications Close In:
          </span>
          
          {/* Popping Timer Blocks */}
          <div className="flex gap-1 font-mono font-bold bg-black/60 border border-neutral-800 px-2.5 py-1 rounded text-brand-yellow min-w-[110px] shadow-inner text-base md:text-lg">
            <AnimatePresence mode="popLayout">
              <motion.span key={timeLeft.days} initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 4, opacity: 0 }} transition={{ duration: 0.15 }}>
                {String(timeLeft.days).padStart(2, "0")}d
              </motion.span>
              <span className="animate-pulse">:</span>
              <motion.span key={timeLeft.hours} initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 4, opacity: 0 }} transition={{ duration: 0.15 }}>
                {String(timeLeft.hours).padStart(2, "0")}h
              </motion.span>
              <span className="animate-pulse">:</span>
              <motion.span key={timeLeft.minutes} initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 4, opacity: 0 }} transition={{ duration: 0.15 }}>
                {String(timeLeft.minutes).padStart(2, "0")}m
              </motion.span>
              <span className="animate-pulse">:</span>
              <motion.span key={timeLeft.seconds} initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 4, opacity: 0 }} transition={{ duration: 0.15 }}>
                {String(timeLeft.seconds).padStart(2, "0")}s
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Hyper-Urgent Heartbeat CTA Link */}
        <motion.a
          href="https://chat.whatsapp.com/G3aVPY9CmonGSdczV8QkW5"
          animate={{ 
            scale: [1, 1.06, 1, 1.06, 1],
            textShadow: [
              "0 0 0px rgba(255,206,33,0)",
              "0 0 12px rgba(255,206,33,0.6)",
              "0 0 0px rgba(255,206,33,0)",
              "0 0 12px rgba(255,206,33,0.6)",
              "0 0 0px rgba(255,206,33,0)"
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.8, 
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 1] 
          }}
          className="relative inline-flex items-center gap-2  font-black uppercase tracking-wider group bg-brand-red/10 border border-brand-yellow/30 px-4 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors"
        >
          {/* Infinite Shimmer Overlay Effect across the button */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
          
          <AlertTriangle className="h-3.5 w-3.5 text-brand-yellow group-hover:text-white animate-bounce" />
          <span>Join the Free Class Now!!!</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
        </motion.a>

      </div>
    </motion.div>
  );
}