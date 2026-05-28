import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const mentors = [
  { 
    name: "Ada Okonkwo", 
    role: "AI Founder", 
    company: "Lumen AI", 
    bio: "Building NLP tools for African languages, paving the way for next-gen linguistic model architectures.", 
    initials: "AO",
    image: "/assets/images/profile-image.png" ,
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
  { 
    name: "Tunde Akin", 
    role: "CTO", 
    company: "Stackr", 
    bio: "Scaled distributed engineering teams from 5 to 80 engineers while implementing robust, real-time banking pipelines globally.", 
    initials: "TA",
    image: "/assets/images/profile-image.png" ,
    gridClass: "lg:col-span-2 lg:row-span-2 min-h-[420px] md:min-h-full"
  },
  { 
    name: "Lerato Mbeki", 
    role: "Startup Operator", 
    company: "Kova", 
    bio: "Helped scale and launch 3 YC-backed startups across sub-Saharan markets focusing on unit economics.", 
    initials: "LM",
    image: "/assets/images/profile-image.png" ,
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
];

export function Mentorship() {
  return (
    <section id="mentorship" className="relative py-28  overflow-hidden">
      {/* Subtle background glow matrices */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-brand/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl sm:text-6xl tracking-tighter leading-none font-medium">
              Learn From <br />
              <span className="bg-clip-text">
                Builders Across Africa.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-4  items-start text-start">Learn directly from founders, engineers, and AI professionals building impactful products and companies across Africa. Gain practical insights, real-world experience, and the mindset needed to thrive in the future AI economy.</p>
          </Reveal>
        </div>

        {/* Asymmetric Bento Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06} className={m.gridClass}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-8 flex flex-col justify-between transition-all duration-500 hover:border-brand-purple/40 hover:shadow-glow">
                
                {/* Background Framed Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={m.image} 
                    alt={m.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-115 brightness-[0.4] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.3]"
                  />
                  {/* Smooth Vignette Masking */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 to-transparent" />
                </div>

                {/* Giant Ambient Monogram Floating in BG */}
                <div className="absolute top-4 right-6 text-9xl font-black text-white/[0.02] select-none tracking-tighter pointer-events-none font-mono group-hover:text-brand-purple/[0.04] transition-colors duration-500">
                  {m.initials}
                </div>

                {/* Card Top Action & Tagline */}
                <div className="relative z-10 flex justify-between items-start w-full">
                  {/* <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-zinc-300">
                    {m.company} // 0{i + 1}
                  </span> */}
                  <div className="h-8 w-8 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-sm grid place-items-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Card Bottom Meta Data */}
                <div className="relative z-10 mt-24">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium text-white tracking-tight transition-colors duration-300">
                      {m.name}
                    </h3>
                    <p className="text-sm font-medium text-primary-blue mt-0.5">
                      {m.role}
                    </p>
                  </div>
                  
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-md">
                    {m.bio}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}