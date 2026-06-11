import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { motion } from "motion/react";

// Custom light hook to handle the terminal typing cadence gracefully
function useTypewriter(text: string, speed = 40, delay = 600) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, speed, started]);

  return displayedText;
}

export function About() {
  // Breaking the mission text into an executing code syntax pattern
  const codeLine1 = "const belief = \"Talent is everywhere\";";
  const codeLine2 = "const goal = \"Opportunity should be too\";";

  const typedLine1 = useTypewriter(codeLine1, 35, 300);
  const typedLine2 = useTypewriter(codeLine2, 35, 2000); // starts right after line 1 finishes

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-soft opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
        <div className="mx-auto mb-6 grid h-[50px] w-[50px] md:h-[100px] md:w-[100px] lg:h-14 lg:w-14 place-items-center overflow-hidden rounded-[8px] bg-gradient-brand">
          <img
            src="abbacus-logo.jpeg"
            alt="AbbacusLearning Logo"
            width={100}
            height={100}
            className="h-full w-full object-contain"
          />
        </div>

        <Reveal delay={0.05}>
          <h2 className="mt-4 lg:text-3xl sm:text-2xl font-medium tracking-tight leading-relaxed max-w-3xl mx-auto text-white">
            We believe talent is everywhere.
            Opportunity should be too.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Abbacus was created to help ambitious Africans gain access to the knowledge, mentorship, community, and opportunities needed to thrive in the technology-driven future.
          </p>
        </Reveal>

        {/* Premium Code Sandbox Terminal Display */}
        <Reveal delay={0.2}>
          <div className="mt-14 max-w-xl mx-auto rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-md shadow-2xl text-left overflow-hidden">

            {/* Top Window Chrome Bar Accent */}
            <div className="bg-zinc-900/50 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">mission_statement.py</span>
              <div className="w-10" /> {/* Balancer */}
            </div>

            {/* Code Body with active Typing cursors */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed tracking-wide min-h-[110px] bg-black/20">

              {/* Line 1 */}
              <div className="flex items-center flex-wrap">
                <span className="text-zinc-600 select-none mr-4 w-4">1</span>
                {/* <span className="text-purple-400">const</span> */}
                <span className="text-blue-400 ml-1.5">mission</span>
                <span className="text-zinc-400 ml-1.5">=</span>
                <span className="text-emerald-400 ml-1.5">"{typedLine1.slice(16, -2)}"</span>
                <span className="text-zinc-400">;</span>
                {typedLine1.length > 0 && typedLine1.length < codeLine1.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block w-1.5 h-4 bg-brand-blue ml-0.5"
                  />
                )}
              </div>

              {/* Line 2 */}
              <div className="flex items-center flex-wrap mt-1.5">
                <span className="text-zinc-600 select-none mr-4 w-4">2</span>
                {/* <span className="text-purple-400">const</span> */}
                <span className="text-blue-400 ml-1.5">goal</span>
                <span className="text-zinc-400 ml-1.5">=</span>
                <span className="text-emerald-400 ml-1.5">"{typedLine2.slice(14, -2)}"</span>
                <span className="text-zinc-400">;</span>
                {/* Flashing terminal block cursor at the absolute end of execution */}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                  className={`inline-block w-1.5 h-4 bg-brand-blue ml-0.5 ${typedLine1.length === codeLine1.length ? "opacity-100" : "opacity-0"}`}
                />
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}