import { motion } from 'framer-motion'
import React from 'react'
import { FaHome, FaNewspaper } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Articles = () => {
    const { language } = useLanguage()
    const navigate = useNavigate()
    const location = useLocation()

    // Ensure we're on the correct route
    React.useEffect(() => {
        const path = location.pathname
        if (!path.includes('/articles')) {
            navigate(`/${language}/articles`)
        }
    }, [language, navigate, location])

    const getArticlesText = () => {
        switch(language) {
            case 'uz':
                return "MAQOLALAR"
            case 'ru':
                return "СТАТЬИ"
            case 'en':
                return "ARTICLES"
            default:
                return "MAQOLALAR"
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

    const articles = [
        {
            id: 1,
            title: "PUBGM o'yinida g'alaba qozonish strategiyalari",
            category: "tips",
            date: "15.05.2025",
            author: "Pro Gamer",
            image: "https://via.placeholder.com/300x200"
        },
        {
            id: 2,
            title: "CS2 jahon chempionati natijalari",
            category: "tournament-reviews",
            date: "10.05.2025",
            author: "Esports Reporter",
            image: "https://via.placeholder.com/300x200"
        },
        {
            id: 3,
            title: "MLBB professional o'yinchisi bilan intervyu",
            category: "interviews",
            date: "05.05.2025",
            author: "Game Journalist",
            image: "https://via.placeholder.com/300x200"
        },
        {
            id: 4,
            title: "DOTA 2 yangi yangilanishi haqida",
            category: "tips",
            date: "01.05.2025",
            author: "Game Analyst",
            image: "https://via.placeholder.com/300x200"
        },
        {
            id: 5,
            title: "VALORANT jamoasi bilan intervyu",
            category: "interviews",
            date: "25.04.2025",
            author: "Esports Reporter",
            image: "https://via.placeholder.com/300x200"
        },
        {
            id: 6,
            title: "FREE FIRE turniri natijalari",
            category: "tournament-reviews",
            date: "20.04.2025",
            author: "Game Journalist",
            image: "https://via.placeholder.com/300x200"
        }
    ]

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
                            {getArticlesText()}
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

            {/* Articles Grid */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {articles.map((article) => (
                        <motion.div 
                            key={article.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1A1A1A] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,150,0,0.3)] transition-all duration-300"
                        >
                            <div className="relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-[200px] object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-[#FF9600] text-white px-4 py-1 rounded-full text-sm">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                                    <FaNewspaper className="text-[#FF9600]" />
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.author}</span>
                                </div>
                                <h3 className="text-[#FF9600] font-bold text-xl mb-4">{article.title}</h3>
                                <Link 
                                    to={`/${language}/articles/${article.category}/${article.id}`}
                                    className="inline-block bg-[#FF9600] hover:bg-[#FF9600]/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                                >
                                    Batafsil
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles 