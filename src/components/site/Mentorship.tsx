import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Shield, Layers, Bot, Terminal, ArrowRight } from "lucide-react";

const speaker = {
  name: "Dr. Jean-Pierre Kemonia", // Example placeholder full name based on company
  role: "CEO & Chief AI Architect",
  company: "Kemonia",
  sessionTopic: "Architecting Hybrid AI Infrastructure for High-Throughput Conversational Engines",
  time: "14:00 UTC // Tech Stage A",
  bio: "Veteran software architect with over 15+ years of enterprise platform experience and 10+ years dedicated strictly to production-grade artificial intelligence and deep neural network integration.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", // High contrast professional editorial portrait
  product: {
    name: "Flowk",
    tagline: "Your AI Handles the Chat. Your Team Handles the Moments.",
    description: "Deploy AI support agents across WhatsApp, web, API, and voice — hosted, self-hosted, or hybrid. All managed through a high-performance collaborative support workspace."
  }
};

export function Mentorship() {

  return (
    <section id="career-clinic" className="relative py-8  bg-primary-purple overflow-hidden">

      {/* FIXED: Background layer isolated behind a z-0 index wrap */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Corner Decorative Flare */}
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
      </div>

      {/* FOREGROUND LAYOUT CONTAINER (z-10 ensures absolute visibility over pattern) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <Reveal delay={0.05}>

            <h2 className="text-4xl sm:text-6xl tracking-tighter leading-none font-medium text-white">
              Build. Compete. <br />
              <span className="text-white">
                Get spotlighted
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Compete for cash, mentorship, and the recognition you deserve. Whether you’re refining an existing project or kicking off something new, this is your platform to shine on a pan-African stage.
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


                  <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    {speaker.name}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-white leading-relaxed max-w-xl">
                    {speaker.bio}
                  </p>

                  {/* <div className="mt-6">
                    <a
                      className="inline-flex items-center gap-2 rounded-full cta-primary-button text-xs  tracking-wider text-white font-medium px-5 py-3  transition cursor-pointer group"
                    >
                      <span>Learn more about this track</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-white" />
                    </a>
                  </div> */}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
  // return (
  //   <section id="mentorship" className="relative py-28 bg-primary-purple text-white overflow-hidden">

  //     {/* Structural Isolated Background Layer */}
  //     <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  //       <div
  //         className="absolute inset-0 bg-no-repeat bg-cover opacity-10 bg-center"
  //         style={{
  //           backgroundImage: "url('pattern_bg.png')",
  //         }}
  //       />
  //       <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
  //       <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
  //     </div>

  //     <div className="relative z-10 mx-auto max-w-7xl px-6">

  //       {/* Section Title Header */}
  //       <div className="max-w-3xl mb-20">
  //         <Reveal delay={0.05}>

  //           <h2 className="text-4xl sm:text-6xl font-medium tracking-tighter leading-none">
  //             Learn From <br />
  //             <span className="bg-clip-text">
  //               Industry Sovereigns.
  //             </span>
  //           </h2>
  //         </Reveal>
  //       </div>

  //       {/* Unified Main Split Workspace Section */}
  //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

  //         {/* LEFT: Master Speaker Profile Panel (5 Columns) */}
  //         <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-zinc-950/60 border border-zinc-900 backdrop-blur-md">
  //           <div>
  //             {/* Image Cluster Frame */}
  //             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 mb-8">
  //               <img
  //                 src={speaker.image}
  //                 alt={speaker.name}
  //                 className="w-full h-full object-cover object-center contrast-[1.05] brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
  //             </div>

  //             {/* Speaker Metadata Information */}
  //             <h3 className="text-3xl font-bold tracking-tight text-white mb-1">
  //               {speaker.name}
  //             </h3>
  //             <p className="text-sm font-mono text-zinc-400 mb-4">
  //               {speaker.role}
  //             </p>
  //             <p className="text-sm text-zinc-400 leading-relaxed">
  //               {speaker.bio}
  //             </p>
  //           </div>

  //           {/* Experience Counter Matrix Badges */}
  //           <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-zinc-900/80 font-mono">
  //             <div className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-900">
  //               <div className="text-xl font-bold text-white">15+ Yrs</div>
  //               <div className="text-[10px] text-zinc-500 uppercase tracking-tight">System Engineering</div>
  //             </div>
  //             <div className="p-3 rounded-xl bg-zinc-900/30 border border-zinc-900">
  //               <div className="text-xl font-bold text-purple-400">10+ Yrs</div>
  //               <div className="text-[10px] text-zinc-500 uppercase tracking-tight">AI Architecture</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* RIGHT: Flowk Session & Architecture Terminal Card (7 Columns) */}
  //         <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-2xl relative overflow-hidden">

  //           {/* Visual Micro Grid Utility Layer */}
  //           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

  //           <div className="relative z-10">
  //             {/* Window Controls Element Header */}
  //             <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-900">
  //               <div className="flex gap-1.5">
  //                 <span className="h-2 w-2 rounded-full bg-zinc-800" />
  //                 <span className="h-2 w-2 rounded-full bg-zinc-800" />
  //                 <span className="h-2 w-2 rounded-full bg-zinc-800" />
  //               </div>
  //               <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
  //                 <Terminal className="w-3 h-3" /> SESSION_MANIFEST // FLWK_01
  //               </div>
  //             </div>

  //             {/* Keynote Session Title block */}
  //             <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-2">
  //               {speaker.time}
  //             </span>
  //             <h4 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-8 leading-tight">
  //               "{speaker.sessionTopic}"
  //             </h4>

  //             {/* Product Spotlight Detail Box */}
  //             <div className="p-6 rounded-2xl bg-[#0d0d11] border border-zinc-900/80 relative group/prod">

  //               {/* Logo Identifier Anchor */}
  //               <div className="flex items-center justify-between mb-4">
  //                 <div className="flex items-center gap-2.5">
  //                   <div className="w-7 h-7 rounded-lg bg-white text-black font-black flex items-center justify-center text-sm tracking-tighter">
  //                     Fl
  //                   </div>
  //                   <div>
  //                     <div className="text-sm font-bold text-white tracking-tight">{speaker.product.name}</div>
  //                     <div className="text-[10px] text-zinc-500 font-mono">CONVERSATIONAL CORE ENGINE</div>
  //                   </div>
  //                 </div>

  //                 <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
  //                   STABLE DEPLOYMENT
  //                 </span>
  //               </div>

  //               {/* Tagline Highlight Block */}
  //               <div className="text-base font-semibold text-zinc-200 tracking-tight mb-2">
  //                 {speaker.product.tagline.split('. ')[0]}.<br />
  //                 <span className="text-zinc-500">{speaker.product.tagline.split('. ')[1]}</span>
  //               </div>

  //               <p className="text-xs text-zinc-400 leading-relaxed mb-4">
  //                 {speaker.product.description}
  //               </p>

  //               {/* Infrastructure Capabilities Matrix Grid */}
  //               <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-900 font-mono text-[10px] text-zinc-400">
  //                 <div className="flex items-center gap-1.5"><Bot className="w-3.5 h-3.5 text-zinc-500" /> Omni Agent</div>
  //                 <div className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-zinc-500" /> Hybrid Host</div>
  //                 <div className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-zinc-500" /> Safe Core</div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Action Triggers Footer */}
  //           <div className="relative z-10 mt-8 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
  //             <p className="text-xs text-zinc-500 max-w-xs font-mono">
  //               // Reserve your seat early to interact during the live-coded live stream session.
  //             </p>
  //             <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition text-xs font-mono uppercase tracking-wider font-bold group">
  //               <span>Add to Calendar</span>
  //               <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  //             </button>
  //           </div>

  //         </div>

  //       </div>
  //     </div>
  //   </section>
  // );
}