import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { 
  FileText, 
  Linkedin, 
  Github, 
  Compass, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const items = [
  { 
    id: "resume",
    icon: FileText, 
    title: "Resume Reviews", 
    desc: "Get direct, unfiltered feedback from active hiring managers. Learn how to bypass automated tracking systems (ATS) and structure your technical impact clearly.", 
    stat: "1:1 Live Sync",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    highlights: ["ATS Layout Optimization", "Technical Impact Phrasing", "Role-Specific Tailoring"]
  },
  { 
    id: "linkedin",
    icon: Linkedin, 
    title: "LinkedIn Optimization", 
    desc: "Position your personal brand for active recruiter inbound pipelines. We rework your copy architecture, headline indexing, and profile algorithms.", 
    stat: "+3.5x Inbound",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
    highlights: ["Keyword Algorithm Strategy", "Headline Narrative Design", "Featured Section Curation"]
  },
  { 
    id: "github",
    icon: Github, 
    title: "GitHub Architecture", 
    desc: "Transform your repositories into compelling engineering portfolios. Master clear documentation setups, clean branch histories, and structured code presentation.", 
    stat: "Production Ready",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    highlights: ["Pro README Markdowns", "Clean Commit Structuring", "Live Demo Hosting"]
  },
  { 
    id: "remote",
    icon: Compass, 
    title: "Remote Career Guidance", 
    desc: "Navigate global placement strategies from anywhere. Learn how to evaluate international payroll compliance, structure independent contracts, and interview with distributed cross-functional teams.", 
    stat: "Global Scale",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    highlights: ["Global Payroll Frameworks", "Asynchronous Communication", "Cross-Border Tax Logic"]
  },
];

export function Career() {
  const [activeTab, setActiveTab] = useState(0);

  // Slow automated cycle if user isn't clicking actively
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = items[activeTab];

  return (
    <section className="relative py-32 bg-[#030208] text-white overflow-hidden">
      {/* Background Ambience Layout */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[140px] rounded-full pointer-events-none transition-all duration-700" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Typography Intro */}
        <div className="max-w-3xl mb-20">
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight leading-none">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-400 to-purple-500">
                uncompromising opportunity.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Dashboard Architecture Layout Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SELECTOR CONTROLS: 5-span column stack */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeTab === index;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden backdrop-blur-sm ${
                    isSelected 
                      ? "bg-white/[0.04] border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)]" 
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]"
                  }`}
                >
                  {/* Active Slide Timeline Edge highlight indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-blue" />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      isSelected 
                        ? "bg-brand-blue text-black border-brand-blue" 
                        : "bg-white/5 text-zinc-400 border-white/5 group-hover:text-white"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold transition-colors ${isSelected ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500 block mt-0.5">
                        Module 0{index + 1}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`h-4 w-4 transition-all duration-300 ${
                    isSelected ? "text-brand-blue translate-x-0 opacity-100" : "text-zinc-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT SCREENING MONITOR DISPLAY: 7-span structural container */}
          <div className="lg:col-span-7">
            <div className="h-full w-full rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
              
              {/* Context Background Mesh Layer */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
              
              {/* Interactive Top Row Panel */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                    Live Session Matrix Profile
                  </span>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-md border backdrop-blur-sm ${currentItem.badgeColor}`}>
                  {currentItem.stat}
                </span>
              </div>

              {/* Dynamic Inner Panel Main Content Split */}
              <div className="grid md:grid-cols-2 gap-8 my-8 relative z-10 items-start">
                
                {/* Left Description Side */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-2xl font-extrabold tracking-tight text-white mb-4">
                      {currentItem.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {currentItem.desc}
                    </p>
                  </div>

                  {/* Highlights Bullet Array Setup */}
                  <div className="mt-6 space-y-2.5">
                    {currentItem.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Photographic Focus Side */}
                <div className="relative aspect-video md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors bg-zinc-900">
                  <img
                    key={currentItem.id}
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out animate-fade-in"
                  />
                  {/* Luxury Inner Image Shadow Vignette Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
                </div>

              </div>

              {/* Dashboard System Meta Footing footer */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 relative z-10 font-mono text-[10px] text-zinc-500">
                <span>VERIFICATION STATUS // SECURE_ACCESS_GRANTED</span>
                <span>SYSTEM_REF: CC-00{activeTab + 1}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}