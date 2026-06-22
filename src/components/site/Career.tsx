import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

import { ArrowRight, FileText, Linkedin, Github, Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { JoinFreeButton } from "../ui/cta-button";



export function Career() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="community" className="relative py-28 bg-white">
        <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />
      <div className="absolute bg-white" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
     <div>

          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
          <span className="text-brand-blue font-bold">Built for Fast Employment,</span><br />
              <span className="">Not Just Education.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 mb-3 text-lg text-muted-foreground max-w-lg leading-relaxed">
       Landing a job in AI demands a resume that reads like a senior engineer's. In our targeted <span className="text-brand-blue font-bold">Resume Clinic</span> , we audit your portfolio, optimize your LinkedIn for tech recruiters, and give you the exact layout that passes automated screeners and secures interview callbacks.
            </p>
          </Reveal>
        < JoinFreeButton/>

        </div>

        <div className="gradient-border relative overflow-hidden  rounded-3xl">
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-linear-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">

            {/* Profile Image Asset Container */}
            <img
              src="resume-clinic.jpg" // Replace with your image location path
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
           
      </div>
    </section>
  );
}