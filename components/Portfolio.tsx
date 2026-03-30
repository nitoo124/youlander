"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/assets/project1.png",
    title: "A Portfolio Website",
    url: "https://luandadelorenzo.com/",
  },
  {
    img: "/assets/project2.png",
    title: "A Solar renovation Website",
    url: "https://renovartisan.fr/",
  },
  {
    img: "/assets/project3.webp",
    title: "Ambulance Service Website",
    url: "https://ambulancesprada.fr/",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative my-8 bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-purple-950/20 text-white py-16 px-4 md:px-10 overflow-hidden">
      
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
        <span className="inline-block px-3 py-1 text-[11px] rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-3">
          ● Portfolio
        </span>

        <h2 className="text-2xl md:text-4xl font-heading font-bold">
          Des projets <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">réels</span> & performants
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid gap-8 md:grid-cols-1">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative block rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/5 hover:border-purple-500/40 transition-all duration-300"
          >
            
            {/* Image */}
            <div className="relative h-[220px] md:h-[320px] w-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
              
              <span className="text-xs bg-gradient-to-r from-purple-600 to-violet-600 px-2 py-1 rounded w-fit mb-2">
                Real Project
              </span>

              <h3 className="text-base md:text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                Click anywhere to visit the website
              </p>

            </div>

          </motion.a>
        ))}
      </div>
    </section>
  );
}