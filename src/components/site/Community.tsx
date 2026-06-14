import { Reveal } from "./Reveal";
import { motion } from "motion/react";

const chats = [
  { name: "Amaka", msg: "Just deployed my first ML model 🚀", color: "from-pink-400 to-fuchsia-500" },
  { name: "Kwame", msg: "Anyone free for pair-programming tonight?", color: "from-amber-400 to-orange-500" },
  { name: "Zola", msg: "Our team won the Innovation Challenge!", color: "from-sky-400 to-blue-600" },
  { name: "Tomi", msg: "Sharing my Python notes in #foundations", color: "from-violet-400 to-purple-600" },
];

const avatars = ["A", "K", "Z",];

export function Community() {
  return (
    <section id="community" className="relative py-28">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('pattern_bg.png')",
        }}
      />
      <div className="absolute bg-white" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>

          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              Don't Learn Alone.<br />
              <span className="text-brand-blue"> Grow With Builders.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              The fastest way to grow isn't learning alone. It's learning with people who challenge you, support you, and are building toward the same future.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex -space-x-3">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full bg-black grid place-items-center text-white text-sm font-bold ring-2 ring-background"
                >
                  {a}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full bg-brand-blue grid place-items-center text-white text-[8px] font-bold ring-2 ring-background">
                +1,200
              </div>
            </div>
          </Reveal>

        </div>

        <div className="gradient-border relative overflow-hidden  rounded-3xl">
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-gradient-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">

            {/* Profile Image Asset Container */}
            <img
              src="community.jpg" // Replace with your image location path
              alt="Instructor Profile Showcase"
              className="w-full h-full object-cover select-none"
            />

            {/* Mac-style Window Dot Accents */}
            <div className="absolute top-4 left-4 flex gap-1.5 z-10 pointer-events-none">
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>

            {/* Subtle Linear Vignette Shadow at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Decorative Corner Flare */}
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[#FFCE21]/20 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
