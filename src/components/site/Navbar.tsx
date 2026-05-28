import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Community", href: "#community" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-6 rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-white/40 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-3 group">

          <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-lg bg-gradient-brand">
            <img 
              src="/assets/images/abbacus-logo.jpeg" 
              alt="AbbacusLearning Logo"
              width={28}      // Matches the h-7 (28px) parent box
              height={28}     // Matches the w-7 (28px) parent box
              className="h-full w-full object-contain" 
            />
          </span>
          <span className="font-bold tracking-tight text-neutral-900 dark:text-white">
            AbbacusLearning
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="ml-auto inline-flex items-center rounded-full cta-primary-button  text-white text-sm font-medium px-4 py-2 shadow-glow hover:brightness-110 transition"
        >
          Join Free Intro AI Class
        </a>
      </nav>
    </motion.header>
  );
}
