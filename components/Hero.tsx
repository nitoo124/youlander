"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-purple-950/20 overflow-hidden">

      {/* Premium animated gradient orbs - Reduced intensity with more purple */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main ambient glow - center - softer purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        
        {/* Top right accent glow - purple dominant */}
        <div className="absolute top-[-15%] right-[-10%] w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000" />
        
        {/* Bottom left cool glow - indigo purple */}
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/12 rounded-full blur-[120px] opacity-35 animate-pulse delay-700" />
        
        {/* Additional purple blur shadows */}
        <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] opacity-30" />
        <div className="absolute bottom-[25%] right-[15%] w-[350px] h-[350px] bg-fuchsia-500/8 rounded-full blur-[90px] opacity-25" />
        <div className="absolute top-[60%] left-[5%] w-[250px] h-[250px] bg-violet-500/8 rounded-full blur-[70px] opacity-20" />
        <div className="absolute top-[10%] right-[20%] w-[200px] h-[200px] bg-purple-400/8 rounded-full blur-[60px] opacity-25" />
        <div className="absolute bottom-[40%] right-[30%] w-[280px] h-[280px] bg-indigo-500/8 rounded-full blur-[75px] opacity-20" />
        
        {/* Subtle grid pattern for tech feel */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02]" />
      </div>

      {/* Very subtle noise texture for premium feel */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.01] pointer-events-none" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          {/* Premium status badge - updated colors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/30 shadow-lg shadow-purple-500/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[11px] font-medium tracking-wide text-gray-300 uppercase">
              Available For Work
            </span>
            <Sparkles className="w-3 h-3 text-purple-400/70" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Lancez Votre Site
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Web Dans L'univers
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Digital Dès 299€
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Un site moderne, rapide et parfaitement connecté au monde digital. 
            Design premium, performance optimisée et conversion garantie.
          </motion.p>

          {/* CTA Buttons - updated gradient colors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
          >
            <Button className="group relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-6 rounded-xl text-base font-semibold shadow-2xl shadow-purple-600/30 transition-all duration-300 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Créer mon site
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Button>
            
            <Button variant="outline" className="border-purple-500/30 bg-white/5 backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-500/50 text-gray-300 px-8 py-6 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Voir nos réalisations
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 pt-6 border-t border-purple-500/20"
          >
            {[
              { label: "Clients satisfaits", value: "+250" },
              { label: "Projets livrés", value: "+320" },
              { label: "Taux conversion", value: "98%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-purple-400/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT FORM - Premium card with purple theme */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-md"
        >
          <div className="relative group">
            {/* Animated border gradient on hover - purple theme */}
            <div className="absolute -inset-[0.5px] bg-gradient-to-r from-purple-500/40 via-violet-500/40 to-purple-500/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
            
            {/* Card content */}
            <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-500/5 transition-all duration-500 group-hover:border-purple-500/30">
              
              {/* Card header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white">Obtenez un devis</h3>
                <p className="text-xs text-gray-400 mt-1">Remplissez le formulaire, on vous rappelle</p>
                <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-3" />
              </div>

              <div className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Nom complet</label>
                    <input 
                      type="text"
                      placeholder="Jean Dupont"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Email</label>
                    <input 
                      type="email"
                      placeholder="hello@exemple.com"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Téléphone</label>
                  <input 
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>

                {/* Selects - updated colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre de pages</label>
                    <select className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer">
                      <option className="bg-[#0A0A0F]">1 page</option>
                      <option className="bg-[#0A0A0F]">2 pages</option>
                      <option className="bg-[#0A0A0F]">3-5 pages</option>
                      <option className="bg-[#0A0A0F]">6-10 pages</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Pack SEO</label>
                    <select className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer">
                      <option className="bg-[#0A0A0F]">Oui (+150€)</option>
                      <option className="bg-[#0A0A0F]">Non</option>
                    </select>
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-300 uppercase tracking-wider">Votre activité</label>
                  <textarea
                    placeholder="Décrivez brièvement votre projet..."
                    rows={3}
                    className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                  />
                </div>

                {/* Form CTA - updated gradient */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white py-3 rounded-xl text-sm font-semibold shadow-lg shadow-purple-600/25 transition-all duration-300">
                    Envoyer la demande
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Small disclaimer */}
                <p className="text-[10px] text-gray-500 text-center mt-4">
                  Réponse sous 24h. Sans engagement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}