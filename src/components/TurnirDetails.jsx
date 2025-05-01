import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaTrophy, FaUsers } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const TurnirDetails = () => {
	const { id } = useParams()
	const { language } = useLanguage()
	const navigate = useNavigate()
	const [tournament, setTournament] = useState(null)
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		// Bu yerda API dan turnir ma'lumotlarini olish kerak
		// Hozircha mock data ishlatamiz
		const mockTournament = {
			id: id,
			title: {
				uz: "FIFA World Cup 2024",
				ru: "Чемпионат мира по футболу 2024",
				en: "FIFA World Cup 2024"
			},
			date: "2024-06-01",
			location: {
				uz: "Toshkent, O'zbekiston",
				ru: "Ташкент, Узбекистан",
				en: "Tashkent, Uzbekistan"
			},
			prize: "100,000,000 UZS",
			participants: 32,
			description: {
				uz: "Bu turnir dunyoning eng yaxshi futbolchilarini birlashtiradi...",
				ru: "Этот турнир объединяет лучших футболистов мира...",
				en: "This tournament brings together the best football players in the world..."
			}
		}

		setTournament(mockTournament)
		setLoading(false)
	}, [id])

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<motion.button
					onClick={() => navigate(-1)}
					className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<FaArrowLeft className="mr-2" />
					{language === 'uz' ? 'Orqaga' : language === 'ru' ? 'Назад' : 'Back'}
				</motion.button>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="bg-white rounded-lg shadow-lg overflow-hidden"
				>
					<div className="p-6">
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							{tournament.title[language]}
						</h1>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
							<div className="flex items-center text-gray-600">
								<FaCalendar className="mr-2 text-blue-500" />
								<span>{tournament.date}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<FaMapMarkerAlt className="mr-2 text-blue-500" />
								<span>{tournament.location[language]}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<FaTrophy className="mr-2 text-blue-500" />
								<span>{tournament.prize}</span>
							</div>
							<div className="flex items-center text-gray-600">
								<FaUsers className="mr-2 text-blue-500" />
								<span>{tournament.participants} {language === 'uz' ? 'qatnashuvchi' : language === 'ru' ? 'участников' : 'participants'}</span>
							</div>
						</div>

						<div className="prose max-w-none">
							<p className="text-gray-700">
								{tournament.description[language]}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default TurnirDetails 