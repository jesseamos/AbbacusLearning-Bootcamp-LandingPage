import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
  const words = [
    "built by those who learn.",
    "created by those who take action.",
    "shaped by future builders.",
    "already happening."
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing out characters
        setCurrentText(fullWord.slice(0, currentText.length + 1));
        setTypingSpeed(70); // Crisp typing speed

        if (currentText === fullWord) {
          // Pause at the peak of the typed word
          setTypingSpeed(2500);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.slice(0, currentText.length - 1));
        setTypingSpeed(40); // Faster deletion

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300); // Small pause before writing the next phrase
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section id="cta" className="relative py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main Display Container with custom matching color gradients */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-zinc-950 via-[#0a0a0a] to-[#030303] p-10 sm:p-20 text-white text-center border border-white/10">

          {/* Layout Atmosphere Backdrops */}
          {/* <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:32px_32px] pointer-events-none" /> */}

          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Live Status Pill Tracker */}


            {/* Headline Block Featuring the Smart Typewriter Engine */}
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] text-white min-h-[140px] sm:min-h-[180px] lg:min-h-[140px]">
                The future is being <br className="sm:hidden" />
                <span className="text-gradient-brand inline-block relative">
                  {currentText}
                  {/* Authentic Blinking Cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                    className="absolute -right-1 sm:-right-2 top-0 bottom-0 w-[4px] bg-brand-blue rounded-full"
                  />
                </span>
              </h2>
            </Reveal>

            {/* Supporting Copy Context */}
            <Reveal delay={0.1}>
              <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Most people will only ever <span className="text-zinc-300 italic">use</span> modern software. A smaller group will learn how to <span className="text-white font-semibold">build</span> it. Which side will you choose?
              </p>
            </Reveal>

            {/* Refined Action Triggers */}
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="https://chat.whatsapp.com/G3aVPY9CmonGSdczV8QkW5"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue text-white font-medium px-8 py-4 hover:brightness-110 active:scale-98 transition shadow-lg group"
                >
                  Join Free Intro Class
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#community"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-white font-medium px-8 py-4 hover:bg-white/10 active:scale-98 transition"
                >
                  {/* <Users className="h-4 w-4 text-zinc-400" /> */}
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