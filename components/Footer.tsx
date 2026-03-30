import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#05050A] via-[#0A0A0F] to-purple-950/20 text-gray-400 border-t border-purple-500/20 overflow-hidden">
      
      {/* Purple blur shadows for background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top purple glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-[100px] opacity-30" />
        
        {/* Bottom purple glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/10 rounded-full blur-[100px] opacity-20" />
        
        {/* Left purple accent */}
        <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] bg-purple-500/8 rounded-full blur-[80px]" />
        
        {/* Right purple accent */}
        <div className="absolute top-1/2 right-[-10%] w-[250px] h-[250px] bg-indigo-500/8 rounded-full blur-[80px]" />
        
        {/* Center ambient purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-purple-600/8 rounded-full blur-[100px]" />
        
        {/* Additional purple orbs */}
        <div className="absolute bottom-[10%] left-[20%] w-[150px] h-[150px] bg-fuchsia-500/6 rounded-full blur-[70px]" />
        <div className="absolute top-[15%] right-[15%] w-[180px] h-[180px] bg-purple-400/6 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        
        {/* Company */}
        <div>
          <h3 className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent text-lg font-semibold mb-4 font-heading">
            Youlander OÜ
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Votre partenaire de confiance pour des solutions web modernes et efficaces.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-gray-50 font-medium mb-4 font-heading">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-purple-400 cursor-pointer transition duration-300">
              Offres
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition duration-300">
              Pourquoi nous choisir
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition duration-300">
              Portfolio
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition duration-300">
              Témoignages
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gray-50 font-heading font-medium mb-4">Contact</h4>
          <div className="space-y-4 text-sm">
            
            <div className="flex items-center gap-3 group">
              <FiPhone className="text-purple-400 text-lg" />
              <span className="group-hover:text-purple-400 transition duration-300">
                +1 123 456 789
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <FiMail className="text-purple-400 text-lg" />
              <span className="group-hover:text-purple-400 transition duration-300">
                info@gmail.com
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-purple-500/20 text-center text-xs text-gray-500 py-6 px-6">
        © 2025 <span className="text-purple-400">Youlander OÜ</span> — Tous droits réservés.
      </div>
    </footer>
  );
}