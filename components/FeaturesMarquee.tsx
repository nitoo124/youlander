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

  // ✅ Detect mobile
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative w-full my-10 overflow-hidden bg-gradient-to-r from-purple-950/20 via-[#0A0A0F] to-purple-950/20 py-4 border-y border-purple-500/20">
      
      {/* 🔥 LIGHTER BLUR (important for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-purple-600/15 rounded-full blur-[40px]" />
        <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-violet-600/15 rounded-full blur-[40px]" />
      </div>

      <motion.div
        className="relative z-10 flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 20 : 25, // 🚀 mobile fast
          ease: "linear",
        }}
      >
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