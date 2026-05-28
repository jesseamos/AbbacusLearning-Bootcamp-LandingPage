import { Reveal } from "./Reveal";

const testimonials = [
  { name: "Chioma E.", role: "Lagos · Cohort 3", quote: "I went from being scared of code to deploying my first ML model in 6 weeks. Wild." },
  { name: "Brian O.", role: "Nairobi · Cohort 2", quote: "The community alone is worth it. I found my first remote role through a mentor here." },
  { name: "Fatima D.", role: "Accra · Cohort 3", quote: "Finally a program that treats beginners like future builders, not students." },
  { name: "Samuel K.", role: "Kampala · Cohort 1", quote: "Demo Day pushed me harder than school ever did — in the best way possible." },
  { name: "Tariro M.", role: "Harare · Cohort 3", quote: "I built a portfolio I'm proud to send to any company in the world." },
  { name: "Yusuf B.", role: "Abuja · Cohort 2", quote: "The mentorship is unreal. Real builders, no fluff." },
];

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-purple">Loved by learners</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Stories from <span className="text-gradient-brand">our cohorts.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-5 w-max animate-marquee">
          {loop.map((t, i) => (
            <div key={i} className="w-[340px] shrink-0 gradient-border p-6 shadow-soft">
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
