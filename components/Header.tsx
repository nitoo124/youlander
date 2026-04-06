"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AiOutlineMenuFold } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Link as ScrollLink } from "react-scroll"

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-[#05050A]/95 via-[#0A0A0F]/95 to-purple-950/95 backdrop-blur-md border-b border-purple-500/20 overflow-hidden">
      
      {/* Purple blur shadows for background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-purple-600/15 rounded-full blur-[60px] opacity-40" />
        
        {/* Left purple accent */}
        <div className="absolute top-0 left-[-10%] w-[150px] h-full bg-purple-500/8 rounded-full blur-[50px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-0 right-[-10%] w-[150px] h-full bg-indigo-500/8 rounded-full blur-[50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/youlanderLogo.png"
            alt="Youlander Logo"
            width={50}
            height={50}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              duration={1200}
              delay={50}
              offset={-80}
              activeClass="text-purple-400"
              className="hover:text-purple-400 transition text-gray-50 duration-300 cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={1200}
            delay={50}
            offset={-80}
            className="cursor-pointer"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-gray-50 rounded-xl px-5 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-600/25">
              Créer mon site maintenant
            </Button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose size={25} className="text-gray-50" />
            ) : (
              <AiOutlineMenuFold size={25} className="text-gray-50" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`md:hidden bg-gradient-to-r from-[#05050A] to-purple-950/95 border-t border-purple-500/20 px-6 space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.to}
            spy={true}
            smooth={true}
            duration={1200}
            delay={50}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="block text-sm hover:text-purple-400 sticky transition text-gray-50 duration-300 cursor-pointer"
            activeClass="text-purple-400"
          >
            {link.name}
          </ScrollLink>
        ))}

        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={1200}
          delay={50}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        >
          <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-gray-50 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-600/25">
            Créer mon site maintenant
          </Button>
        </ScrollLink>
      </div>
    </header>
  )
}

export default Header