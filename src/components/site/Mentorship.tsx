import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Linkedin, ArrowUpRight, ArrowRight } from "lucide-react";

const speaker = {
  name: "Chibuike (C.) Mba",
  role: "Founder & CEO",
  company: "Flowk",
  sessionTopic: "Building AI Products People Actually Use",
  bio: "Chibuike is the founder of Flowk, an AI-powered customer support platform helping businesses automate conversations while maintaining human oversight. Through this session, he'll share lessons from building AI products, scaling technology teams, and creating solutions that solve real business problems.",
  time: "14:00 UTC // Tech Stage A",
  image: "/speaker.png",
  linkedin: "https://www.linkedin.com/in/chibex/",
  product: {
    name: "Flowk",
    url: "https://flowk.kemonai.com"
  }
};

export function Mentorship() {
  return (
    <section id="mentorship" className="relative py-8 overflow-hidden bg-brand-blue">



      {/* FOREGROUND LAYOUT CONTAINER (z-10 ensures absolute visibility over pattern) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

        {/* Header Section */}


        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT COLUMN: Clean Image Card Showcase */}
          <div className=" relative overflow-hidden rounded-3xl order-2 lg:order-1 ">
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[480px]">

              {/* AnimatePresence for clean cross-fade action */}
              <AnimatePresence mode="wait">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
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

                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >

                  <div className="max-w-3xl mb-6">
                    <Reveal delay={0.05}>

                      <h3 className="text-4xl sm:text-3xl tracking-tighter leading-none font-medium">
                        How Flowk Is Using AI To Transform <br /> Customer Support Across Africa
                      </h3>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
                        Gain insights from founders, AI engineers, CTOs, and technology leaders building real products across Africa. Learn from their experiences, ask questions, and understand what it takes to build impactful technology in today's AI-driven world.
                      </p>
                    </Reveal>
                  </div>


                  <p className="mt-4 text-sm sm:text-base  leading-relaxed max-w-xl">
                    {speaker.bio}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="#cta"
                      className="inline-flex items-center gap-2 rounded-full cta-primary-button text-xs tracking-wider text-white font-medium px-6 py-3 transition cursor-pointer group"
                    >
                      <span>Join The Bootcamp</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform group-hover:text-white" />
                    </a>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors underline underline-offset-4"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>Meet the Speaker</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>


          </div>

        </div>
      </div>
    </section>

  );
}