import { motion } from 'framer-motion'
import React from 'react'
import { FaHome, FaUser } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Profile = () => {
    const { language } = useLanguage()
    const navigate = useNavigate()
    const location = useLocation()

    // Ensure we're on the correct route
    React.useEffect(() => {
        const path = location.pathname
        if (!path.includes('/profile')) {
            navigate(`/${language}/profile`)
        }
    }, [language, navigate, location])

    const getProfileText = () => {
        switch(language) {
            case 'uz':
                return "PROFIL"
            case 'ru':
                return "ПРОФИЛЬ"
            case 'en':
                return "PROFILE"
            default:
                return "PROFIL"
        }
    }

    const getHomeText = () => {
        switch(language) {
            case 'uz':
                return "BOSH SAHIFA"
            case 'ru':
                return "ГЛАВНАЯ"
            case 'en':
                return "HOME"
            default:
                return "BOSH SAHIFA"
        }
    }

    return (
        <div className="min-h-screen bg-[#0D0D0D]">
            {/* Header */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4"
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
                            {getProfileText()}
                        </motion.h2>
                    </motion.div>

                    <div className="flex gap-4">
                        <Link 
                            to={`/${language}`}
                            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                        >
                            <FaHome className="text-xl" />
                            {getHomeText()}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Profile Content */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1A1A1A] rounded-2xl overflow-hidden p-8"
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#FF9600] flex items-center justify-center mb-6">
                            <FaUser className="text-white text-5xl" />
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-4">Foydalanuvchi Profili</h3>
                        <p className="text-white/70 text-center mb-8">
                            Bu yerda foydalanuvchi profili ma'lumotlari ko'rsatiladi.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                            <div className="bg-[#0D0D0D] p-4 rounded-lg">
                                <h4 className="text-[#FF9600] font-bold mb-2">Shaxsiy Ma'lumotlar</h4>
                                <p className="text-white">Ism: Foydalanuvchi</p>
                                <p className="text-white">Email: user@example.com</p>
                                <p className="text-white">Telefon: +998 90 123 45 67</p>
                            </div>
                            <div className="bg-[#0D0D0D] p-4 rounded-lg">
                                <h4 className="text-[#FF9600] font-bold mb-2">O'yin Ma'lumotlari</h4>
                                <p className="text-white">Jami Turnirlar: 5</p>
                                <p className="text-white">G'alabalar: 3</p>
                                <p className="text-white">Reyting: 1250</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Profile 