import { Reveal } from "./Reveal";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Chioma E.",
    role: "Transitioned from Biochemistry",
    avatarText: "CE",
    location: "Lagos, Nigeria",
    quote: "I used to think AI was only for math geniuses. Before this program, I was just watching random YouTube videos and getting confused. Here, the mentor explained everything in plain English. I finally built a real model that can predict housing prices in Lagos using actual data. For the first time, I understand my own code!",
    tag: "Zero Coding Background"
  },
  {
    name: "Tunde O.",
    role: "Self-Taught Developer",
    avatarText: "TO",
    location: "Ibadan, Nigeria",
    quote: "I knew basic Python, but I didn't know how to use it for Machine Learning. The hands-on projects here forced me to actually think like an engineer instead of just copying code from tutorials. Building my first clean project and pushing it to GitHub gave me the confidence to start applying for data roles.",
    tag: "Practical Learning"
  },
  {
    name: "Fatima D.",
    role: "Recent Graduate",
    avatarText: "FD",
    location: "Kano, Nigeria",
    quote: "What I loved most was the structure. It's hard studying alone in Nigeria with light issues and network problems, but the community kept me accountable. We worked on messy, real-world data, not those perfectly clean examples you see online. I learned how to clean data and build models from scratch.",
    tag: "Great Structure"
  },
  {
    name: "Samuel K.",
    role: "Business Analyst",
    avatarText: "SK",
    location: "Enugu, Nigeria",
    quote: "I wanted to understand how tech companies use data to make decisions. The lessons were direct and focused on what actually matters in the real world. The mock interview sessions and portfolio reviews completely changed how I talk about my skills to employers.",
    tag: "Career Guidance"
  },
  {
    name: "Yusuf B.",
    role: "Tech Enthusiast",
    avatarText: "YB",
    location: "Abuja, Nigeria",
    quote: "The mentorship here is top-notch. Whenever I got stuck on a difficult concept like neural networks, the step-by-step breakdown made it click. If you are tired of theoretical courses that don't teach you how to build real things, you should definitely join this bootcamp.",
    tag: "Top Mentorship"
  },
  {
    name: "Blessing I.",
    role: "Final Year Student",
    avatarText: "BI",
    location: "Port Harcourt, Nigeria",
    quote: "I used to be intimidated by Machine Learning, but this program broke the walls down. We didn't just look at slides; we wrote code every single week. I built a project that analyzes customer reviews for local businesses, and posting it on LinkedIn got me so much attention!",
    tag: "Built Real Projects"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-white text-black">

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal delay={0.05}>

            <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              Don't Just Take Our Word For It. <br />
              <span className="text-brand-blue">
                See What Our Students Say.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              Discover how everyday builders broke through the confusion, skipped the boring theory, and learned how to build real Machine Learning projects from scratch.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Responsive Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-brand-purple border border-brand-purple/10 hover:border-brand-purple/30 transition-all duration-300 group backdrop-blur-sm"
            >
              <div>
                {/* Card Top Row: Simple Tag and Rating */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                    {t.tag}
                  </span>
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Simplified Review Content */}
                <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom Identity Block (No Cohorts) */}
              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full text-white border bg-black border-zinc-700 grid place-items-center text-zinc-200 text-xs font-bold shrink-0">
                  {t.avatarText}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-white tracking-wide truncate">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  </div>
                  <div className="text-xs text-zinc-400 truncate mt-0.5">{t.role}</div>
                  <div className="text-[10px] mt-0.5 text-white font-medium">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}