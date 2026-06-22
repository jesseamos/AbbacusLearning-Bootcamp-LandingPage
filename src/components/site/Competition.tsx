import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import {
  BadgeDollarSign,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";
import { JoinFreeButton } from "../ui/cta-button";

const items = [
  {
    icon: BadgeDollarSign,
    title: "AI Innovation Challenge",
    description: "Put your skills to the test by solving real-world problems with AI alongside your team.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: GraduationCap,
    title: "Mentor Feedback",
    description: "Present your work and receive guidance from experienced founders, engineers, and technology leaders.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Briefcase,
    title: "Project Showcase",
    description: "Demonstrate what you've built through presentations, demos, and community showcases.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Star,
    title: "Recognition & Opportunities",
    description: "Outstanding projects may receive recognition, mentorship opportunities, and increased visibility within our network.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
  }
];

export function Competition() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = items[activeIndex];
  return (
    <section id="community" className="relative py-28 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
     

        <div className="gradient-border relative overflow-hidden  rounded-3xl">
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] bg-linear-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">

            {/* Profile Image Asset Container */}
            <img
              src="screaming.jpg" // Replace with your image location path
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
           <div>

          <Reveal delay={0.05}>
            <h2 className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            We’re Building Out Loud <br />
              <span className="text-brand-blue font-bold">Making Noise</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 mb-3 text-lg text-muted-foreground max-w-lg leading-relaxed">
             The tech world doesn’t just reward what you know; it rewards what you can show. We build our AI projects completely in public, creating massive buzz on  LinkedIn and Twitter. By the time you graduate, international recruiters will already know your name and your work.
            </p>
          </Reveal>
        < JoinFreeButton/>

        </div>
      </div>
    </section>
  );
}