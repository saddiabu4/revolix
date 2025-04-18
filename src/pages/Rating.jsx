import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { FaUser, FaUsers } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'

const Rating = () => {
  const { language } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  useEffect(() => {
    if (!language) {
      navigate('/uz/rating')
    }
  }, [language, navigate])

  const getTopTeamsText = () => {
    switch (language) {
      case 'uz':
        return 'TOP JAMOALAR'
      case 'ru':
        return 'ТОП КОМАНДЫ'
      case 'en':
        return 'TOP TEAMS'
      default:
        return 'TOP JAMOALAR'
    }
  }

  const getTopPlayersText = () => {
    switch (language) {
      case 'uz':
        return 'TOP O\'YINCHILAR'
      case 'ru':
        return 'ТОП ИГРОКИ'
      case 'en':
        return 'TOP PLAYERS'
      default:
        return 'TOP O\'YINCHILAR'
    }
  }

  const teams = [
    { id: 1, name: 'Team Alpha', rating: 2500, wins: 15, losses: 3 },
    { id: 2, name: 'Team Beta', rating: 2400, wins: 14, losses: 4 },
    { id: 3, name: 'Team Gamma', rating: 2300, wins: 13, losses: 5 },
    { id: 4, name: 'Team Delta', rating: 2200, wins: 12, losses: 6 },
    { id: 5, name: 'Team Epsilon', rating: 2100, wins: 11, losses: 7 },
    { id: 6, name: 'Team Zeta', rating: 2000, wins: 10, losses: 8 },
  ]

  const players = [
    { id: 1, name: 'Player One', rating: 3000, wins: 20, losses: 5 },
    { id: 2, name: 'Player Two', rating: 2900, wins: 19, losses: 6 },
    { id: 3, name: 'Player Three', rating: 2800, wins: 18, losses: 7 },
    { id: 4, name: 'Player Four', rating: 2700, wins: 17, losses: 8 },
    { id: 5, name: 'Player Five', rating: 2600, wins: 16, losses: 9 },
    { id: 6, name: 'Player Six', rating: 2500, wins: 15, losses: 10 },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      <div className="container mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        {/* Top Teams Section */}
        <div className="mb-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "96px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="h-[5px] bg-[#FF9600]"
            ></motion.div>
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold italic"
            >
              {getTopTeamsText()}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <motion.div 
                key={team.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,150,0,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF9600] flex items-center justify-center">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{team.name}</h3>
                    <p className="text-[#FF9600] font-medium">#{index + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Rating</p>
                    <p className="text-[#FF9600] font-bold text-xl">{team.rating}</p>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Wins</p>
                    <p className="text-[#FF9600] font-bold text-xl">{team.wins}</p>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Losses</p>
                    <p className="text-[#FF9600] font-bold text-xl">{team.losses}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Players Section */}
        <div>
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "96px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="h-[5px] bg-[#FF9600]"
            ></motion.div>
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold italic"
            >
              {getTopPlayersText()}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, index) => (
              <motion.div 
                key={player.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,150,0,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF9600] flex items-center justify-center">
                    <FaUser className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{player.name}</h3>
                    <p className="text-[#FF9600] font-medium">#{index + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Rating</p>
                    <p className="text-[#FF9600] font-bold text-xl">{player.rating}</p>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Wins</p>
                    <p className="text-[#FF9600] font-bold text-xl">{player.wins}</p>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 rounded-lg text-center">
                    <p className="text-white/70 text-sm">Losses</p>
                    <p className="text-[#FF9600] font-bold text-xl">{player.losses}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating 