import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import footerBg from '../assets/footer.png'
import footerLogo from '../assets/Logo.png'
import Reklama1 from '../assets/reklama1.png'
import Reklama2 from '../assets/reklama2.png'
import Reklama3 from '../assets/reklama3.png'

const Footer = () => {
  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBg})`
      }}
    >
      <div className='absolute top-[-50px] left-0 w-full h-50 bg-[#120B00]'></div>
      <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className="py-2"
          >
            <div className="flex items-center gap-8 mt-50">
              <img src={Reklama1} alt="Logo" className="h-20" />
              <img src={Reklama2} alt="Logo" className="h-20" />
              <img src={Reklama3} alt="Logo" className="h-20" />
              <img src={Reklama2} alt="Logo" className="h-20" />
              <img src={Reklama1} alt="Logo" className="h-20" />
              <img src={Reklama2} alt="Logo" className="h-20" />
              <img src={Reklama3} alt="Logo" className="h-20" />
              <img src={Reklama2} alt="Logo" className="h-20" />
            </div>
          </Marquee>
      <div className="relative z-10">
        {/* Marquee Line */}
        <div className="w-full max-w-[1440px] mx-auto py-10 overflow-hidden border-b-2 border-white">
          
        </div>

        {/* Footer Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Social Links */}
            <div className="md:col-span-1">
              <div className="flex flex-col gap-6">
                <Link to="/" className="inline-block">
                  <img src={footerLogo} alt="Revolix" className="h-12" />
                  <p className="text-white text-sm mt-2">ВЫСШАЯ ЛИГА КИБЕРСПОРТА В ОДНОМ МЕСТЕ</p>
                </Link>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#FF9600] transition-all duration-300"
                  >
                    <FaInstagram className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#FF9600] transition-all duration-300"
                  >
                    <FaTelegram className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#FF9600] transition-all duration-300"
                  >
                    <FaYoutube className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu Columns */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {/* BOSH SAHIFA */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg uppercase">BOSH SAHIFA</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">BIZ HAQIMIZDA</Link>
                </div>
              </div>

              {/* TURNIRLAR */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg uppercase">TURNIRLAR</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/games/pubgm" className="text-gray-400 hover:text-white transition-colors text-sm">PUBGM</Link>
                  <Link to="/games/dota2" className="text-gray-400 hover:text-white transition-colors text-sm">DOTA 2</Link>
                  <Link to="/games/cs2" className="text-gray-400 hover:text-white transition-colors text-sm">CS 2</Link>
                  <Link to="/games/mlbb" className="text-gray-400 hover:text-white transition-colors text-sm">MLBB</Link>
                  <Link to="/games/dota1" className="text-gray-400 hover:text-white transition-colors text-sm">DOTA 1</Link>
                  <Link to="/games/valorant" className="text-gray-400 hover:text-white transition-colors text-sm">VALORANT</Link>
                  <Link to="/games/freefire" className="text-gray-400 hover:text-white transition-colors text-sm">FREE FIRE</Link>
                </div>
              </div>

              {/* MAQOLALAR */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg uppercase">MAQOLALAR</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/articles/maslahatlar" className="text-gray-400 hover:text-white transition-colors text-sm">MASLAHATLAR</Link>
                  <Link to="/articles/interviews" className="text-gray-400 hover:text-white transition-colors text-sm">INTERVYULAR</Link>
                  <Link to="/articles/tournament-rules" className="text-gray-400 hover:text-white transition-colors text-sm">TURNIR SHARTLARI</Link>
                </div>
              </div>

              {/* YANGILIKLAR */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg uppercase">YANGILIKLAR</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/news/current" className="text-gray-400 hover:text-white transition-colors text-sm">SAYTDAGI O'ZGARISHLAR</Link>
                  <Link to="/news/esports" className="text-gray-400 hover:text-white transition-colors text-sm">ESPORTS YANGILIKLARI</Link>
                  <Link to="/news/game" className="text-gray-400 hover:text-white transition-colors text-sm">O'YIN YANGILANISHLARI</Link>
                </div>
              </div>

              {/* REYTING */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg uppercase">REYTING</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/rating/teams" className="text-gray-400 hover:text-white transition-colors text-sm">TOP JAMOALAR</Link>
                  <Link to="/rating/players" className="text-gray-400 hover:text-white transition-colors text-sm">TOP O'YINCHILAR</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center">
              COPYRIGHT © 2025 REVOLIX | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 