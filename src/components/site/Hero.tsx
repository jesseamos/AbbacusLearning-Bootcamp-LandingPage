import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, DollarSign, Briefcase, Wrench, GraduationCap, Globe } from "lucide-react";
import { PaymentModal } from "./PaymentModal";
import { JoinFreeButton } from "../ui/cta-button";

const badges = [
  { icon: DollarSign, label: "Earn in Dollars" },
  { icon: GraduationCap, label: "No Degree Needed" },
  { icon: Briefcase, label: "Remote Jobs" },
  { icon: Globe, label: "Work from Nigeria" },
];

const wordsToType = ["Build.", "Certify.", "Mentor.", "Grow."];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentWord = wordsToType[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, 120);
    }

    if (!isDeleting && displayedText === currentWord) {
      // Pause at the end of the word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % wordsToType.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />

      {/* Optional grid overlay */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content Column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2]"
          >
            {/* Dynamic Animated Typing Text */}
            <span className="inline-block min-h-[1.2em] text-brand-blue font-bold">
              {displayedText}
              <span className="animate-pulse ml-0.5 font-light">|</span>
            </span>
            <br />
            <span className="">Kickstart your <span className="text-brand-blue font-bold">Machine Learning </span> journey in <span className="text-brand-blue font-bold">2026</span>.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Six months in, it's time to build the future. Earn your Machine Learning certification, 
            learn in a collaborative community, and get mentored by industry pros. AI is moving 
            fast—get on board today. Because <span className="text-brand-blue font-bold">your future counts.</span> 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center"
          >
         <JoinFreeButton/>
             <PaymentModal>
              <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white backdrop-blur-sm font-medium px-8 py-4 transition cursor-pointer text-base w-full sm:w-auto text-center"
            >
              Learn with the Community
            </a>
            </PaymentModal>
           
          </motion.div>
        </div>

        {/* Right Animated Image Column */}
   {/* Right Animated Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="showcase"
          className="relative w-full max-w-xl mx-auto"
        >
          {/* Ambient Glow behind the profile frame */}
          <div className="absolute -inset-4 bg-gradient-soft rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

          {/* Floating Discount Badge (Top Right) */}
     {/* Floating Circular Discount Badge (Top Right) */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 12 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.6 }}
            className="absolute -top-10 -right-6 z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-brand-red font-extrabold rounded-full shadow-xl border-2 border-white transform origin-center select-none text-center text-white p-2"
          >
            <span className="text-[10px] uppercase tracking-wider font-black opacity-80 leading-none">Limited</span>
            <span className="text-xl sm:text-2xl font-black tracking-tighter my-1 leading-none">20%<br />OFF</span>
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70 leading-none">Early Bird</span>
            
            {/* Subtle Badge Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-white/40 animate-pulse pointer-events-none" />
          </motion.div>

          {/* Styled Border Wrapper */}
          <div className="gradient-border relative overflow-hidden rounded-3xl">
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-gradient-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">
              {/* Profile Image Asset Container */}
              <img
                src="profile-image.png"
                alt="Instructor Profile Showcase"
                className="w-full h-full object-cover select-none"
              />

              {/* Mac-style Window Dot Accents */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>

              {/* Subtle Linear Vignette Shadow at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Decorative Corner Flare */}
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[#FFCE21]/20 blur-3xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}