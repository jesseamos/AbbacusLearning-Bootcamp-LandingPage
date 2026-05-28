import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-brand-purple">About AbbacusLearning</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            AbbacusLearning is a tech education platform helping individuals with zero prior
            tech knowledge understand technology through accessible, engaging, and
            community-driven learning experiences.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 inline-flex flex-col items-center gap-2 glass rounded-3xl px-8 py-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Our mission</span>
            <p className="text-xl font-bold text-gradient-brand">
              To empower young Africans with future-ready technology skills.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
