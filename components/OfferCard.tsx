"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Satellite Basic",
    price: "299 €",
    desc: "Un site vitrine simple et efficace pour lancer votre présence en ligne.",
    features: [
      "Site vitrine 1 page (présentation + contact)",
      "Nom de domaine inclus (1 an)",
      "Design responsive (mobile/tablette)",
      "Livraison en 7 jours ouvrés",
    ],
  },
  {
    title: "Double Orbit",
    price: "399 €",
    desc: "Un site plus complet pour présenter vos services ou produits.",
    features: [
      "Site vitrine 2 pages (Accueil + Services/Produits)",
      "Formulaire de contact inclus",
      "SEO basique inclus",
      "Nom de domaine inclus (1 an)",
    ],
  },
  {
    title: "HyperDrive SEO",
    price: "300 €/mois",
    desc: "Un pack de référencement pour propulser votre visibilité en ligne.",
    features: [
      "Création & optimisation de fiche Google Business",
      "Référencement local (Google Maps)",
      "Mise en place de l'identité digitale",
      "Optimisation & rapport mensuel",
    ],
  },
];

export default function OfferCard() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 px-4 md:px-10 bg-gradient-to-b from-[#05050A] via-[#0A0A0F] to-purple-950/20 overflow-hidden">
      
      {/* Purple blur shadows for background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-[100px] opacity-40" />
        
        {/* Bottom purple glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/12 rounded-full blur-[100px] opacity-30" />
        
        {/* Left purple accent */}
        <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] bg-purple-500/8 rounded-full blur-[80px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-1/2 right-[-10%] w-[250px] h-[250px] bg-indigo-500/8 rounded-full blur-[80px]" />
        
        {/* Center ambient purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/8 rounded-full blur-[100px]" />
        
        {/* Additional purple orbs */}
        <div className="absolute bottom-[10%] left-[20%] w-[180px] h-[180px] bg-fuchsia-500/6 rounded-full blur-[70px]" />
        <div className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-purple-400/6 rounded-full blur-[60px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <span className="inline-block px-3 py-1 text-[11px] rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
          ● Nos Offres
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-100">
          Nos offres pour <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">booster</span> votre présence digitale
        </h2>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >

        {offers.map((offer, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#0f172a]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 shadow-md shadow-purple-500/5 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
          >
            
            {/* Title + Price */}
            <div>
              <h3 className="text-xl font-semibold font-heading text-gray-50">
                {offer.title}
              </h3>
              <p className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-bold text-lg mt-1">
                {offer.price}
              </p>

              <p className="text-gray-400 text-sm mt-3">
                {offer.desc}
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-purple-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-gray-50 rounded-lg text-sm shadow-lg shadow-purple-600/25 transition-all duration-300">
                Créer mon site maintenant
              </Button>
            </motion.div>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}

