"use client";

import Image from "next/image";
import { FaGem, FaBolt, FaUsers, FaGlobe } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: FaGem,
    title: "Prix Justes",
    desc: "Des tarifs adaptés pour tous les budgets.",
  },
  {
    icon: FaBolt,
    title: "Livraison Rapide",
    desc: "Votre site livré en seulement 5 jours ouvrés.",
  },
  {
    icon: FaUsers,
    title: "Client Ciblé",
    desc: "Idéal pour artisans, commerçants, restaurants...",
  },
  {
    icon: FaGlobe,
    title: "Sites Évolutifs",
    desc: "Ajoutez des pages ou du SEO selon vos besoins.",
  },
];

export default function ChooseUs() {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="relative my-8 bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-purple-950/20 text-white py-20 px-6 overflow-hidden">
      
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
        
        {/* Left side image glow */}
        <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-[320px] md:w-[420px]">

            <Image
              src="/assets/ChooseUsSection.webp"
              alt="mockup"
              width={420}
              height={300}
              className="rounded-lg shadow-2xl shadow-purple-500/10"
            />

            <div className="absolute inset-0 bg-purple-500/20 blur-3xl -z-10"></div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          {/* Badge */}
          <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm border border-purple-500/30">
             ● Sites Évolutifs
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-10 leading-snug font-heading">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-heading">
              Youlander
            </span>{" "}
            pour réussir
          </h2>

          {/* FEATURES GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={i}
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-purple-500/5 transition"
                >
                  
                  {/* Icon Box */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600">
                    <Icon className="text-gray-100 text-lg" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}