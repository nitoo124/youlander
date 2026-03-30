"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Propriétaire d’un salon de coiffure",
    image: "/assets/Sophie Martin.png",
    rating: 5,
    text: "Youlander a créé un site moderne et rapide pour mon salon. Grâce à leur équipe, j’ai gagné en visibilité et mes clients me trouvent facilement en ligne.",
  },
  {
    name: "Julien Morel",
    role: "Salon de coiffure à Lyon",
    image: "/assets/Julien Morel.png",
    rating: 5,
    text: "Grâce à Youlander, j’ai enfin un site moderne qui reflète mon image. Mes clients réservent en ligne et je reçois beaucoup plus de demandes.",
  },
  {
    name: "Sarah Leroy",
    role: "Gérante de restaurant",
    image: "/assets/Sarah Leroy.png",
    rating: 5,
    text: "Le site est rapide, beau et facile à gérer. Les clients trouvent le menu et réservent en quelques clics.",
  },
  {
    name: "Léa Fontaine",
    role: "Coach de vie",
    image: "/assets/Léa Fontaine.png",
    rating: 5,
    text: "Je n’avais aucune expérience, mais l’équipe m’a accompagnée pas à pas. Mon site attire maintenant de nouveaux clients chaque mois.",
  },
  {
    name: "Thomas Garnier",
    role: "Photographe professionnel",
    image: "/assets/avatar5.jpg",
    rating: 5,
    text: "Mon portfolio est superbe ! Le design met parfaitement mes photos en valeur. J’ai doublé mes demandes.",
  },
  {
    name: "Nicolas Bernard",
    role: "Consultant marketing",
    image: "/assets/avatar6.jpg",
    rating: 5,
    text: "Service rapide, équipe à l’écoute, sites performants. Une solution clé en main.",
  },
];

/* Stars */
function Stars({ count }: { count: number }) {
  return <div className="flex text-purple-400 text-sm">{"★★★★★".slice(0, count)}</div>;
}

/* Avatar fallback */
function AvatarWithFallback({ name, image }: { name: string; image: string }) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-600 to-violet-600 border border-purple-500/30 flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={name}
      width={50}
      height={50}
      className="rounded-full object-cover border border-purple-500/30"
      onError={() => setError(true)}
    />
  );
}

/* Animations */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative my-8 bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-[#1a0a2e] py-20 px-6 text-white overflow-hidden">
      
      {/* Purple blur shadows for background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/20 rounded-full blur-[100px] opacity-50" />
        
        {/* Bottom purple glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/15 rounded-full blur-[100px] opacity-40" />
        
        {/* Left purple accent */}
        <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] bg-purple-500/12 rounded-full blur-[80px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-1/2 right-[-10%] w-[250px] h-[250px] bg-indigo-500/12 rounded-full blur-[80px]" />
        
        {/* Center ambient purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/12 rounded-full blur-[100px]" />
        
        {/* Additional purple orbs */}
        <div className="absolute bottom-[10%] left-[20%] w-[180px] h-[180px] bg-fuchsia-500/10 rounded-full blur-[70px]" />
        <div className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-purple-400/10 rounded-full blur-[60px]" />
        
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-violet-900/10" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-12"
      >
        <span className="inline-block px-3 py-1 text-[11px] rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
           ● Avis Clients
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-100 font-heading">
          Ce que disent nos <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">clients</span>
        </h2>
      </motion.div>

      {/* Grid with stagger animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-500/5"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-4">
              <AvatarWithFallback name={t.name} image={t.image} />

              <div>
                <p className="text-white font-semibold font-heading">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Stars */}
            <Stars count={t.rating} />

            {/* Text */}
            <p className="text-gray-300 mt-4 leading-relaxed text-sm">
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}