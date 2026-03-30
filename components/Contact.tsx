"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section  id="contact" className="relative bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-purple-950/20 text-white py-20 px-4 md:px-10 overflow-hidden">

      {/* Purple blur shadows for background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-[100px] opacity-40" />
        
        {/* Bottom purple glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/12 rounded-full blur-[100px] opacity-30" />
        
        {/* Left purple accent */}
        <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[80px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-1/2 right-[-10%] w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px]" />
        
        {/* Center ambient purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
        
        {/* Additional purple orbs */}
        <div className="absolute bottom-[10%] left-[20%] w-[180px] h-[180px] bg-fuchsia-500/8 rounded-full blur-[70px]" />
        <div className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-purple-400/8 rounded-full blur-[60px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <span className="inline-block px-3 py-1 text-[11px] rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
          ● Vos Infos
        </span>

        <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
          Complétez vos <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">informations</span> pour <br />
          lancer votre site
        </h2>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-purple-500/5"
      >

        {/* glow behind form */}
        <div className="absolute -inset-1 bg-purple-600/10 blur-2xl opacity-20 rounded-2xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Nom */}
          <div>
            <label className="text-sm text-gray-300">Nom complet</label>
            <input
              type="text"
              placeholder="Entrez votre nom complet"
              className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Entrez votre adresse email"
              className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50 outline-none transition-all"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="text-sm text-gray-300">Téléphone</label>
            <input
              type="tel"
              placeholder="Entrez votre numéro"
              className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50 outline-none transition-all"
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-sm text-gray-300">Type de site</label>
            <select className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white focus:ring-1 focus:ring-purple-500 outline-none">
              <option className="bg-[#0A0A0F]">Site 1 page – 299 €</option>
              <option className="bg-[#0A0A0F]">Site 2 pages – 399 €</option>
            </select>
          </div>

          {/* SEO */}
          <div>
            <label className="text-sm text-gray-300">SEO (300 €/mois)</label>
            <select className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white focus:ring-1 focus:ring-purple-500 outline-none">
              <option className="bg-[#0A0A0F]">Oui</option>
              <option className="bg-[#0A0A0F]">Non</option>
            </select>
          </div>

          {/* Activité */}
          <div>
            <label className="text-sm text-gray-300">Activité / secteur</label>
            <input
              type="text"
              placeholder="Indiquez votre activité"
              className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-purple-500/20 text-white placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500/50 outline-none transition-all"
            />
          </div>

        </div>

        {/* Button */}
        <Button className="mt-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-6 py-3 rounded-lg text-white font-medium shadow-lg shadow-purple-600/30 hover:scale-105 transition-all duration-300">
          Créer mon site maintenant
        </Button>

      </motion.div>
    </section>
  );
}