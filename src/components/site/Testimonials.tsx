import { Reveal } from "./Reveal";
import { Play } from "lucide-react";

const testimonials = [
  { 
    name: "Chioma E.", 
    role: "Lagos · Cohort 3", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    name: "Brian O.", 
    role: "Nairobi · Cohort 2", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    name: "Fatima D.", 
    role: "Accra · Cohort 3", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    name: "Samuel K.", 
    role: "Kampala · Cohort 1", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    name: "Tariro M.", 
    role: "Harare · Cohort 3", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    name: "Yusuf B.", 
    role: "Abuja · Cohort 2", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
];

export function Testimonials() {
  // Duplicating the array to ensure seamless infinite looping in the marquee
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight">
              Stories from <span className="text-gradient-brand">our cohorts.</span>
            </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto mb-4  items-center text-center">
              See how ambitious builders across Africa transformed curiosity into real projects, remote opportunities, and thriving engineering careers through hands-on learning and mentorship.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee Wrapper with your fade gradients */}
      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Infinite scrolling row container */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[320px] aspect-[9/16] shrink-0 gradient-border relative overflow-hidden rounded-3xl bg-zinc-950 group cursor-pointer"
            >
              {/* Vertical Video Embed */}
              <iframe
                src={t.videoUrl}
                title={`${t.name}'s story`}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

              {/* Mac-style Window Dot Accents for visual cohesion */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
                <span className="h-2 w-2 rounded-full bg-white/50" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>

              {/* Shading Vignette Layer for text read-back clarity */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

              {/* Premium Glassmorphic Minimal Play Button Accent */}
              {/* <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center text-white shadow-xl">
                  <Play className="h-4 w-4 fill-white ml-0.5" />
                </div>
              </div> */}

              {/* Cohort User Identity footer block */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-bold ring-2 ring-zinc-950/40">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white tracking-wide">{t.name}</div>
                  <div className="text-xs text-zinc-300/80 mt-0.5">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}