import React from "react";
import { motion } from "motion/react";
import { Play, DollarSign, Briefcase, Wrench, GraduationCap, Globe } from "lucide-react";

const badges = [
  { icon: DollarSign, label: "Earn in Dollars" },
  { icon: GraduationCap, label: "No Degree Needed" },
  { icon: Briefcase, label: "Remote Jobs" },
  { icon: Globe, label: "Work from Nigeria" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />

      {/* Decorative Background Orbs */}
      {/* <div
        className="orb h-[420px] w-[420px] -top-32 -left-20 animate-float"
        style={{
          background: "linear-gradient(135deg, #6A0DAD 0%, #DC143C 100%)",
        }}
      />

      <div
        className="orb h-[460px] w-[460px] -top-20 right-[-120px] animate-float"
        style={{
          background: "linear-gradient(135deg, #FFCE21 0%, #DC143C 100%)",
          animationDelay: "2s",
        }}
      /> */}

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
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
          >
            Land Your First<br className="hidden sm:inline" />
            <span className="text-brand-blue">AI Job Faster</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Build job-ready AI skills through real-world team projects and career mentorship
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-full cta-primary-button text-white font-medium px-8 py-4 shadow-glow hover:brightness-110 transition cursor-pointer text-base"
            >
              Join Bootcamp
            </a>
          </motion.div>


        </div>

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

          {/* Styled Border Wrapper */}
          <div className="gradient-border relative overflow-hidden  rounded-3xl">
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-gradient-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">

              {/* Profile Image Asset Container */}
              <img
                src="profile-image.png" // Replace with your image location path
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