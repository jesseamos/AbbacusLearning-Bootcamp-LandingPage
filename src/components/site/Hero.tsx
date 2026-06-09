import React from "react";
import { motion } from "motion/react";
import { Play, Sparkles, Users, Wrench, GraduationCap } from "lucide-react";

const badges = [
  { icon: GraduationCap, label: "Beginner Friendly" },
  { icon: Users, label: "Live Mentorship" },
  { icon: Sparkles, label: "Community Learning" },
  { icon: Wrench, label: "Project-Based" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain bg-center pointer-events-none"
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
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]"
          >
            Go Beyond Using AI.{" "}
            <span className="text-brand-blue">Learn How It Works.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            A beginner-friendly AI bootcamp helping young Africans understand Artificial
            Intelligence, build practical projects, and prepare for future opportunities in tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-full cta-primary-button  text-white font-medium px-6 py-3 shadow-glow hover:brightness-110 transition cursor-pointer"
            >
              Join Free Intro AI Class
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 font-medium hover:bg-secondary transition cursor-pointer"
            >
              <Play className="h-4 w-4" /> View Profile
            </a>
          </motion.div>

          {/* <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1.5 text-xs text-muted-foreground shadow-soft"
              >
                <b.icon className="h-3.5 w-3.5 text-brand-purple" />
                {b.label}
              </li>
            ))}
          </motion.ul> */}
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