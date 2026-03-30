"use client";

import { motion } from "framer-motion";

export default function FeaturesMarquee() {
  const text = [
    "Livraison Rapide",
    "Tarifs Transparents",
    "Design Responsive",
    "SEO & Présence en Ligne",
    "Solutions Modernes & Futuristes",
    "Solutions Évolutives & Flexibles",
  ];

  return (
    <div className="relative w-full my-10 overflow-hidden bg-gradient-to-r from-purple-950/20 via-[#0A0A0F] to-purple-950/20 py-4 border-y border-purple-500/20">
      
      {/* Purple blur shadows for background sections */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-purple-600/20 rounded-full blur-[60px] opacity-50" />
        
        {/* Bottom purple glow */}
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-violet-600/15 rounded-full blur-[60px] opacity-40" />
        
        {/* Left purple accent */}
        <div className="absolute top-0 left-[-20%] w-[150px] h-full bg-purple-500/10 rounded-full blur-[50px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-0 right-[-20%] w-[150px] h-full bg-indigo-500/10 rounded-full blur-[50px]" />
        
        {/* Center ambient purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <motion.div
        className="relative z-10 flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...text, ...text].map((item, index) => (
          <span
            key={index}
            className="text-gray-300 text-sm sm:text-base font-medium tracking-wide"
          >
            {item} <span className="text-purple-400 mx-6">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}