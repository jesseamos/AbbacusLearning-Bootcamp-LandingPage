import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Community", href: "#community" },
  { label: "Speakers", href: "#mentorship" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 gap-2"
    >
      {/* PRIMARY CAPSULE HEADER */}
      <nav
        className={`w-full max-w-5xl flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300 ${scrolled || isOpen ? "glass shadow-soft" : "bg-white/40 backdrop-blur-sm"
          }`}
      >
        {/* LOGO AREA */}
        <a href="#top" className="flex items-center gap-2 pl-2 group">
          <span className="grid h-[20px] w-[20px] md:h-[40px] md:w-[40px] place-items-center overflow-hidden rounded-[10px] bg-gradient-brand">
            <img
              src="abbacus-logo.jpeg"
              alt="AbbacusLearning Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-bold tracking-tight text-neutral-900 dark:text-white text-sm sm:text-base">
            <img
              src="logo-text.png"
              alt="AbbacusLearning Logo"
              className="md:h-[25px] md:w-[120px] h-[20px] w-[80px] object-contain"
            />
          </span>
        </a>

        {/* DESKTOP LINKS (Hidden on mobile) */}
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

        {/* ACTIONS PANEL */}
        <div className="flex items-center gap-2">
          {/* Desktop Call To Action (Hidden on small viewports) */}
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-full cta-primary-button text-white text-xs sm:text-sm font-medium px-4 py-2 shadow-glow hover:brightness-110 transition"
          >
            Join Bootcamp
          </a>

          {/* RESPONSIVE BURGER TRIGGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full md:hidden text-neutral-900 dark:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE EXPANDED TRAY PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-sm rounded-3xl glass p-5 shadow-xl flex flex-col gap-4 md:hidden border border-white/10"
          >
            {/* Nav Links Stack */}
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setIsOpen(false)} // Auto-closes panel when target hash clicked
                    className="block px-4 py-2.5 rounded-xl  hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* In-Tray Mobile CTA Backup */}
            <div className="pt-2 border-t border-white/5 sm:hidden">
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center inline-flex items-center rounded-xl cta-primary-button text-white text-sm font-medium py-3 shadow-glow transition"
              >
                Join Bootcamp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}