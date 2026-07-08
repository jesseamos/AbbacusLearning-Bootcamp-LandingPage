import React from "react";
import { motion } from "motion/react";

export function JoinFreeButton() {
  return (
    <div className="relative w-full sm:w-auto inline-block group">
      {/* Intense underlying radioactive radar ring element */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-xl animate-ping pointer-events-none" />

      <motion.a
        href="https://chat.whatsapp.com/G3aVPY9CmonGSdczV8QkW5"
        target="_blank"
        rel="noopener noreferrer"
        // High-frequency "Screaming" alarm jitter + glow spike sequence
        animate={{ 
          scale: [1, 1.08, 1.04, 1.08, 1],
          rotate: [0, -2, 2, -1, 1, 0],
          boxShadow: [
            "0 0 20px rgba(37, 211, 102, 0.5)",
            "0 0 45px rgba(37, 211, 102, 0.9)",
            "0 0 25px rgba(37, 211, 102, 0.6)",
            "0 0 45px rgba(37, 211, 102, 0.9)",
            "0 0 20px rgba(37, 211, 102, 0.5)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.2, 
          ease: "linear",
          times: [0, 0.05, 0.1, 0.15, 0.2] // Concentrates all movement upfront, then drops down to repeat
        }}
        whileHover={{ scale: 1.12, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white font-extrabold uppercase tracking-wider px-10 py-4 transition-colors cursor-pointer text-base w-full sm:w-auto text-center select-none shadow-2xl border border-white/20"
      >
        {/* Infinite High-Speed Light Beam Shimmer across button text */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        
        <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] text-white">
          Secure Your Free Spot
        </span>
      </motion.a>
    </div>
  );
}