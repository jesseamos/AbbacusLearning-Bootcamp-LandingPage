import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const months = [
  {
    tag: "Month 1",
    title: "Foundations",
    items: ["Understanding AI", "Python Basics", "Data Fundamentals"],
  },
  {
    tag: "Month 2",
    title: "Building",
    items: ["Intro to Machine Learning", "AI Projects", "Real-world Applications"],
  },
  {
    tag: "Final Week",
    title: "Launch Week",
    items: ["Team Competition", "Demo Day", "Project Showcase", "Certificates"],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-purple">How it works</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              A clear path from <span className="text-gradient-brand">beginner to builder.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/40 via-brand-blue/40 to-transparent hidden md:block" />
          <div className="space-y-12">
            {months.map((m, i) => (
              <Reveal key={m.tag} delay={i * 0.05}>
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "" : ""}`}>
                  <div className={`${i % 2 ? "md:order-2 md:text-left" : "md:text-right"}`}>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      {m.tag}
                    </span>
                    <h3 className="mt-2 text-3xl font-extrabold">{m.title}</h3>
                  </div>
                  <div className={`mt-4 md:mt-0 ${i % 2 ? "md:order-1" : ""}`}>
                    <div className="relative gradient-border p-6 shadow-soft">
                      <motion.span
                        className="absolute -left-2 md:left-auto md:-right-2 top-6 md:top-1/2 md:-translate-y-1/2 hidden md:block"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                      >
                        <span className="grid place-items-center h-5 w-5 rounded-full bg-gradient-brand shadow-glow ring-4 ring-background" />
                      </motion.span>
                      <ul className="space-y-2">
                        {m.items.map((it) => (
                          <li key={it} className="flex items-center gap-3 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                            <span className="font-medium">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
