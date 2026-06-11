import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Linkedin, ArrowUpRight, ArrowRight } from "lucide-react";

const speaker = {
  name: "Chibuike (C.) Mba",
  role: "Software/AI Engineer | Agentic AI | Gen AI | RAG | LLM Fine-tuning | AI Chatbot | AI Automation",
  company: "Kemonia",
  sessionTopic: "Build Your Own Personal AI Assistant",
  time: "14:00 UTC // Tech Stage A",
  bio: "Veteran software architect with over 15+ years of enterprise platform experience and 10+ years dedicated strictly to production-grade artificial intelligence and deep neural network integration.",
  image: "/speaker.png",
  linkedin: "https://linkedin.com/in/your-profile-placeholder",
  product: {
    name: "Flowk",
    url: "https://flowk.ai"
  }
};

export function Mentorship() {
  return (
    <section id="career-clinic" className="relative py-8 overflow-hidden bg-brand-blue">



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

                  <div className="max-w-3xl mb-16">
                    <Reveal delay={0.05}>

                      <h2 className="text-4xl sm:text-6xl tracking-tighter leading-none font-medium ">
                        Build. Compete. <br />
                        <span className="">
                          Get spotlighted
                        </span>
                      </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="mt-6 text-base sm:text-lg  max-w-2xl leading-relaxed">
                        {speaker.sessionTopic}
                      </p>
                    </Reveal>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight">
                    {speaker.name}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base  leading-relaxed max-w-xl">
                    {speaker.bio}
                  </p>

                  <div className="mt-6">
                    <a
                      className="inline-flex items-center gap-2 rounded-full cta-primary-button text-xs  tracking-wider text-white font-medium px-5 py-3  transition cursor-pointer group"
                    >   <Linkedin className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform  group-hover:text-white" />
                      <span>Meet the Mentors</span>

                    </a>
                    <a
                      className="inline-flex items-center gap-2 rounded-full cta-primary-button text-xs  tracking-wider text-white font-medium px-5 py-3  transition cursor-pointer group"
                    >
                      <span>Flowk</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform  group-hover:text-white" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>


          </div>

        </div>
      </div>
    </section>
    // <section
    //   id="mentorship"
    //   className="py-16 md:py-24 text-white flex items-center justify-center min-h-[70vh]"
    //   style={{ backgroundColor: "oklch(0.55 0.24 265)" }}
    // >

    //   <div className="mx-auto max-w-4xl px-6 w-full">

    //     {/* Compact Compound Container */}
    //     <div className="bg-black/15 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

    //       {/* LEFT: Frame-constrained Portrait (5 Columns) */}
    //       <div className="md:col-span-5 w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
    //         <img
    //           src={speaker.image}
    //           alt={speaker.name}
    //           className="w-full h-full object-cover object-center grayscale contrast-[1.02] brightness-95 hover:grayscale-0 transition-all duration-500"
    //         />
    //       </div>

    //       {/* RIGHT: Content Column (7 Columns) */}
    //       <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">

    //         {/* Header / Session Details */}
    //         <div>
    //           <div className="flex items-center gap-2 mb-2">
    //             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
    //             <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
    //               {speaker.time}
    //             </span>
    //           </div>

    //           <Reveal delay={0.05}>
    //             <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-white">
    //               "{speaker.sessionTopic}"
    //             </h3>
    //           </Reveal>
    //         </div>

    //         {/* Profile Block */}
    //         <div className="space-y-2">
    //           <div>
    //             <h4 className="text-base font-semibold text-white tracking-tight">{speaker.name}</h4>
    //             <p className="text-xs font-mono text-white/60">{speaker.role} @ {speaker.company}</p>
    //           </div>
    //           <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
    //             {speaker.bio}
    //           </p>
    //         </div>

    //         {/* Action Group */}
    //         <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/10 text-xs font-mono uppercase tracking-wider">
    //           <a
    //             href={speaker.linkedin}
    //             target="_blank"
    //             rel="noreferrer"
    //             className="flex items-center gap-1.5 text-white/70 hover:text-white transition group py-2"
    //           >
    //             <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100 transition" />
    //             <span>LinkedIn</span>
    //           </a>

    //           <a
    //             href={speaker.product.url}
    //             target="_blank"
    //             rel="noreferrer"
    //             className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 transition font-bold"
    //           >
    //             <span>Visit {speaker.product.name}</span>
    //             <ArrowUpRight className="w-3.5 h-3.5" />
    //           </a>
    //         </div>

    //       </div>

    //     </div>

    //   </div>
    // </section>
  );
}