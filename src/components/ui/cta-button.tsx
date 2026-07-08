import { motion } from "motion/react";
import React from "react";


export function JoinFreeButton() {
  return (
    <div className="relative w-full sm:w-auto inline-block group isolation-auto">
      {/* Ambient Pulsing Glow - Uses scale/opacity to prevent mobile layout shifts */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-[#25D366] blur-xl pointer-events-none"
      />

      <motion.a
        href="https://chat.whatsapp.com/G3aVPY9CmonGSdczV8QkW5"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.fbq?.("track", "JoinFreeButton")}
        
        // Urgency Zoom Repeat: Snappy double-pulse, then brief pause
        animate={{ 
          scale: [1, 1.06, 1, 1.06, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, // Total loop duration
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.45, 1] // Heartbeat-style double pulse, then pauses until second 2
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white font-extrabold uppercase tracking-wider px-10 py-4 transition-colors cursor-pointer text-base w-full sm:w-auto text-center select-none shadow-[0_10px_30px_rgba(37,211,102,0.4)] border border-white/20 will-change-transform"
      >
        {/* Hardware-accelerated shimmer effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        
        <span className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] text-white">
          Secure Your Free Spot
        </span>
      </motion.a>
    </div>
  );
}