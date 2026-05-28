import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a0820] via-[#150a3e] to-[#06184a] p-12 sm:p-20 text-white text-center shadow-glow">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#6A0DAD]/50 blur-3xl animate-float" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#085AFF]/50 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#FFCE21]/10 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-[0.07]" />

          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                Free intro class · Limited seats
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                The future is being{" "}
                <span className="text-gradient-brand">shaped right now.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                Most people will only <em>use</em> AI. A smaller group will learn how to{" "}
                <strong>build</strong> with it. Which side will you be on?
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-gradient-brand text-white font-medium px-7 py-3.5 shadow-glow hover:brightness-110 transition"
                >
                  Join Free Intro AI Class
                </a>
                <a
                  href="#community"
                  className="inline-flex items-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/20 transition"
                >
                  Join The Community
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
