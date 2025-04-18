import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaMedal, FaTrophy, FaUser, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jamoa1 from '../assets/jamoa1.png'
import orqaFon1 from '../assets/orqafon1.png'
import turnirImage from '../assets/turnir-img1.png'
import backgroundImage from '../assets/turnirlar-img-bg.png'
import statisticImage from '../assets/turnirlar-statistic-bg-img.png'
import Footer from '../components/Footer'
import player1Image from '../assets/oyinchi1.png'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'

const Turnirlar = () => {
	const { language } = useLanguage()
	const [activeGame, setActiveGame] = useState('PUBGM')
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 9
	const [stats, setStats] = useState({
		tournaments: 0,
		teams: 0,
		players: 0,
		awards: 0
	})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchStats = async () => {
			try {
				setLoading(true)
				setError(null)
				const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/statistics`)
				setStats(response.data)
			} catch (err) {
				console.error('Error fetching statistics:', err)
				setError('Failed to load statistics')
				// Fallback data in case of error
				setStats({
					tournaments: 150,
					teams: 320,
					players: 1500,
					awards: 450
				})
			} finally {
				setLoading(false)
			}
		}

		fetchStats()
	}, []) // Empty dependency array means this runs once on mount

	const games = ['PUBGM', 'CS2', 'MLBB', 'DOTA 2', 'YANA']

	const tournaments = [
		{
			id: 1,
			title: "Danger e-sports tournament S1",
			game: "PUBGM",
			date: "31.03.2025",
			time: "00:00",
			prize: "100$",
			teamSize: "256",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 2,
			title: "CS2 Pro League Season 2",
			game: "CS2",
			date: "15.04.2025",
			time: "18:00",
			prize: "250$",
			teamSize: "128",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 3,
			title: "MLBB Championship Cup",
			game: "MLBB",
			date: "01.05.2025",
			time: "20:00",
			prize: "150$",
			teamSize: "64",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 4,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 5,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 6,
			title: "Valorant Clash",
			game: "VALORANT",
			date: "25.05.2025",
			time: "17:00",
			prize: "200$",
			teamSize: "128",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 7,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 8,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 9,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 10,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 11,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 12,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 13,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 14,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 15,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 16,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 17,
			title: "Dota 2 Masters Tournament",
			game: "DOTA 2",
			date: "10.05.2025",
			time: "19:00",
			prize: "300$",
			teamSize: "32",
			status: "ACTIVE",
			image: turnirImage
		},
		{
			id: 18,
			title: "Ultimate Gaming Championship",
			game: "PUBGM",
			date: "20.05.2025",
			time: "21:00",
			prize: "500$",
			teamSize: "512",
			status: "NON ACTIVE",
			image: turnirImage
		},
		{
			id: 19,
			title: "Valorant Clash",
			game: "VALORANT",
			date: "25.05.2025",
			time: "17:00",
			prize: "200$",
			teamSize: "128",
			status: "ACTIVE",
			image: turnirImage
		}
	]

	const getHeroText = () => {
		switch (language) {
			case 'uz':
				return "HAR BIR O'Q – IMKONIYAT, HAR BIR HARAKAT – NATIJA!"
			case 'ru':
				return "КАЖДЫЙ ВЫСТРЕЛ – ВОЗМОЖНОСТЬ, КАЖДОЕ ДЕЙСТВИЕ – РЕЗУЛЬТАТ!"
			case 'en':
				return "EVERY SHOT IS AN OPPORTUNITY, EVERY ACTION IS A RESULT!"
			default:
				return "HAR BIR O'Q – IMKONIYAT, HAR BIR HARAKAT – NATIJA!"
		}
	}

	const getButtonText = () => {
		switch (language) {
			case 'uz':
				return "HOZIROQ BOSHLANG"
			case 'ru':
				return "НАЧАТЬ СЕЙЧАС"
			case 'en':
				return "START NOW"
			default:
				return "HOZIROQ BOSHLANG"
		}
	}

	const getStatsText = () => {
		switch (language) {
			case 'uz':
				return {
					tournaments: "Turnirlar",
					teams: "Jamoalar",
					players: "O'yinchilar",
					awards: "Mukofotlar"
				}
			case 'ru':
				return {
					tournaments: "Турниры",
					teams: "Команды",
					players: "Игроки",
					awards: "Награды"
				}
			case 'en':
				return {
					tournaments: "Tournaments",
					teams: "Teams",
					players: "Players",
					awards: "Awards"
				}
			default:
				return {
					tournaments: "Turnirlar",
					teams: "Jamoalar",
					players: "O'yinchilar",
					awards: "Mukofotlar"
				}
		}
	}

	const getHeaderText = () => {
		switch (language) {
			case 'uz':
				return "TURNIRLAR"
			case 'ru':
				return "ТУРНИРЫ"
			case 'en':
				return "TOURNAMENTS"
			default:
				return "TURNIRLAR"
		}
	}

	const getGameText = () => {
		switch (language) {
			case 'uz':
				return "O'YIN:"
			case 'ru':
				return "ИГРА:"
			case 'en':
				return "GAME:"
			default:
				return "O'YIN:"
		}
	}

	const getDateText = () => {
		switch (language) {
			case 'uz':
				return "SANA:"
			case 'ru':
				return "ДАТА:"
			case 'en':
				return "DATE:"
			default:
				return "SANA:"
		}
	}

	const getPrizeText = () => {
		switch (language) {
			case 'uz':
				return "SOVRIN:"
			case 'ru':
				return "ПРИЗ:"
			case 'en':
				return "PRIZE:"
			default:
				return "SOVRIN:"
		}
	}

	const getTeamsText = () => {
		switch (language) {
			case 'uz':
				return "JAMOALAR:"
			case 'ru':
				return "КОМАНДЫ:"
			case 'en':
				return "TEAMS:"
			default:
				return "JAMOALAR:"
		}
	}

	const getStatusText = () => {
		switch (language) {
			case 'uz':
				return "HOLAT:"
			case 'ru':
				return "СТАТУС:"
			case 'en':
				return "STATUS:"
			default:
				return "HOLAT:"
		}
	}

	// Pagination calculations
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = tournaments.slice(indexOfFirstItem, indexOfLastItem)
	const totalPages = Math.ceil(tournaments.length / itemsPerPage)

	// Generate page numbers array with dots
	const getPageNumbers = () => {
		const pageNumbers = []
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i)
			}
		} else {
			if (currentPage <= 3) {
				for (let i = 1; i <= 3; i++) {
					pageNumbers.push(i)
				}
				pageNumbers.push('...')
				pageNumbers.push(totalPages - 1)
				pageNumbers.push(totalPages)
			} else if (currentPage >= totalPages - 2) {
				pageNumbers.push(1)
				pageNumbers.push(2)
				pageNumbers.push('...')
				for (let i = totalPages - 2; i <= totalPages; i++) {
					pageNumbers.push(i)
				}
			} else {
				pageNumbers.push(1)
				pageNumbers.push('...')
				pageNumbers.push(currentPage - 1)
				pageNumbers.push(currentPage)
				pageNumbers.push(currentPage + 1)
				pageNumbers.push('...')
				pageNumbers.push(totalPages)
			}
		}
		return pageNumbers
	}

	const handlePageChange = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber)
			// Scroll to top of tournaments section
			const tournamentsSection = document.getElementById('tournaments-section')
			if (tournamentsSection) {
				tournamentsSection.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-[#0D0D0D]">
				{/* Hero Section */}
				<div className="relative min-h-[calc(100vh-90px)] flex items-center">
					{/* Background Image with Overlay */}
					<div
						className="absolute inset-0 z-0"
						style={{
							backgroundImage: `url(${backgroundImage})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<div className="absolute inset-0 bg-black/50"></div>
					</div>

					{/* Content */}
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<div className="max-w-[1200px] py-8 sm:py-12 md:py-16">
							<h1 className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold mb-4 sm:mb-6 md:mb-8 italic tracking-wider leading-[130%]">
								{getHeroText()}
							</h1>

							<Link
								to={`/${language}/tournaments`}
								className="inline-block bg-[#FF9600] hover:bg-[#FF9600]/90 text-white font-kanit text-base sm:text-lg md:text-2xl lg:text-[32px] px-4 sm:px-6 py-2 sm:py-3 rounded-[12px] transition-all duration-300 transform hover:scale-105 italic"
							>
								{getButtonText()}
							</Link>
						</div>
					</div>
				</div>

				{/* Statistics Section */}
				<div
					className="w-full bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(9, 9, 9, 0.7), rgba(183, 97, 0, 0.6)), url(${statisticImage})`,
					}}
				>
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-white text-center">
							{/* Turnirlar */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
							>
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().tournaments}
								</span>
								<div className="flex items-center gap-2">
									<FaTrophy className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.2 }}
										className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
									>
										{loading ? (
											<span className="inline-block w-8 h-8 border-t-2 border-white rounded-full animate-spin"></span>
										) : (
											stats.tournaments
										)}
									</motion.span>
								</div>
							</motion.div>

							{/* Jamoalar */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
							>
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().teams}
								</span>
								<div className="flex items-center gap-2">
									<FaUsers className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.3 }}
										className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
									>
										{loading ? (
											<span className="inline-block w-8 h-8 border-t-2 border-white rounded-full animate-spin"></span>
										) : (
											stats.teams
										)}
									</motion.span>
								</div>
							</motion.div>

							{/* O'yinchilar */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
							>
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().players}
								</span>
								<div className="flex items-center gap-2">
									<FaUser className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.4 }}
										className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
									>
										{loading ? (
											<span className="inline-block w-8 h-8 border-t-2 border-white rounded-full animate-spin"></span>
										) : (
											stats.players
										)}
									</motion.span>
								</div>
							</motion.div>

							{/* Mukofotlar */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300"
							>
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().awards}
								</span>
								<div className="flex items-center gap-2">
									<FaMedal className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, delay: 0.5 }}
										className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
									>
										{loading ? (
											<span className="inline-block w-8 h-8 border-t-2 border-white rounded-full animate-spin"></span>
										) : (
											stats.awards
										)}
									</motion.span>
								</div>
							</motion.div>
						</div>

						{error && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-center mt-4 text-red-500"
							>
								{error}
							</motion.div>
						)}
					</div>
				</div>

				{/* Tournaments Section */}
				<div
					id="tournaments-section"
					className="bg-[#0D0D0D] min-h-screen bg-cover bg-center bg-no-repeat relative py-10"
					style={{
						backgroundImage: `url(${orqaFon1})`,
					}}
				>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


						{/* Tournaments Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
							{currentItems.map((tournament, index) => (
								<motion.div
									key={tournament.id}
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="border border-[#FF9600] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,150,0,0.3)] transition-all duration-300"
									style={{
										background: 'transparent',
										border: '1px solid transparent',
										backgroundImage: 'linear-gradient(#0D0D0D, #0D0D0D), linear-gradient(to right, #FFFFFF, #666666, #000000, #FFFFFF)',
										backgroundOrigin: 'border-box',
										backgroundClip: 'padding-box, border-box',
									}}
								>
									<div className="relative">
										<img
											src={tournament.image}
											alt={tournament.title}
											className="w-full h-[200px] object-cover"
										/>
									</div>
									<div className="p-4">
										<div className="flex justify-between items-center mb-2">
											<span className="text-white text-sm">{getGameText()} {tournament.game}</span>
											<span className="text-white text-sm">{getDateText()} {tournament.date} | {tournament.time}</span>
										</div>
										<h3 className="text-[#FF9600] font-bold text-lg mb-2">{tournament.title}</h3>
										<div className="flex justify-between items-center mb-2">
											<span className="text-white text-sm">{getPrizeText()} {tournament.prize}</span>
											<span className="text-white text-sm">
												{getStatusText()}
												<span className={
													tournament.status === 'ACTIVE'
														? 'text-green-500'
														: 'text-red-500'
												}>
													{tournament.status}
												</span>
											</span>
										</div>
										<Link
											to={`/${language}/tournaments/${tournament.id}`}
											className="block text-center mt-4 px-4 py-2 border-1 text-white hover:bg-[#FF9600]/90 transition-colors"
										>
											RO'YXATDAN O'TISH
										</Link>
									</div>
								</motion.div>
							))}
						</div>

						{/* Pagination Controls */}
						<div className="flex justify-center items-center gap-2 mb-25">
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								className={`w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'text-gray-500' : 'text-white hover:text-[#FF9600]'} transition-colors`}
							>
								&lt;
							</button>
							{getPageNumbers().map((number, index) => (
								number === '...' ? (
									<span key={`dots-${index}`} className="text-white">...</span>
								) : (
									<button
										key={number}
										onClick={() => handlePageChange(number)}
										className={`w-8 h-8 flex items-center justify-center ${currentPage === number
											? 'text-[#FF9600] bg-[#FF9600]/10'
											: 'text-white hover:text-[#FF9600]'
											} transition-colors`}
									>
										{number}
									</button>
								)
							))}
							<button
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
								className={`w-8 h-8 flex items-center justify-center ${currentPage === totalPages ? 'text-gray-500' : 'text-white hover:text-[#FF9600]'} transition-colors`}
							>
								&gt;
							</button>
						</div>

						{/* Top Players and Teams Section */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-25">
							{/* TOP O'YINCHILAR */}
							<div className="">
								<h2 className="text-white text-3xl font-bold mb-8 flex items-center gap-4">
									<div className="h-[2px] flex-1 bg-[#FF9600]"></div>
									TOP O'YINCHILAR
									<div className="h-[2px] flex-1 bg-[#FF9600]"></div>
								</h2>
								<div className="w-full max-w-[600px] rounded-2xl mx-auto">
									<motion.div
										className="rounded-2xl overflow-hidden"
										initial={{ x: window.innerWidth > 768 ? 300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: window.innerWidth > 768 ? -300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
										transition={{ duration: 0.5 }}
									>
										<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6">
											{/* Player Stats */}
											<div className="w-full sm:w-1/2 space-y-3 order-2 sm:order-1">
												<div className="flex items-center gap-2 mb-4">
													<img
														src="https://flagicons.lipis.dev/flags/4x3/ua.svg"
														alt="Ukraine"
														className="w-6 h-4"
													/>
													<span className="text-white text-xl sm:text-2xl font-bold">S1mple</span>
												</div>
												<div className="space-y-3">
													<div className="flex items-center gap-2">
														<div className="bg-[#FF9600] p-2 rounded">
															<FaTrophy className="text-white text-lg sm:text-xl" />
														</div>
														<div className="text-white">
															<div className="text-sm sm:text-base opacity-70">REYTING</div>
															<div className="font-bold text-base sm:text-lg">50</div>
														</div>
													</div>
													<div className="flex items-center gap-2">
														<div className="bg-[#FF9600] p-2 rounded">
															<FaUsers className="text-white text-lg sm:text-xl" />
														</div>
														<div className="text-white">
															<div className="text-sm sm:text-base opacity-70">JAMOA</div>
															<div className="font-bold text-base sm:text-lg">Natus Vincere</div>
														</div>
													</div>
													<div className="flex items-center gap-2">
														<div className="bg-[#FF9600] p-2 rounded">
															<FaMedal className="text-white text-lg sm:text-xl" />
														</div>
														<div className="text-white">
															<div className="text-sm sm:text-base opacity-70">MATCHES</div>
															<div className="font-bold text-base sm:text-lg">150</div>
														</div>
													</div>
													<div className="flex items-center gap-2">
														<div className="bg-[#FF9600] p-2 rounded">
															<FaTrophy className="text-white text-lg sm:text-xl" />
														</div>
														<div className="text-white">
															<div className="text-sm sm:text-base opacity-70">G'ALABA</div>
															<div className="font-bold text-base sm:text-lg">100</div>
														</div>
													</div>
													<div className="flex items-center gap-2">
														<div className="bg-[#FF9600] p-2 rounded">
															<FaUser className="text-white text-lg sm:text-xl" />
														</div>
														<div className="text-white">
															<div className="text-sm sm:text-base opacity-70">MAG'LUBIYAT</div>
															<div className="font-bold text-base sm:text-lg">50</div>
														</div>
													</div>
												</div>
											</div>
											{/* Player Image */}
											<div className="w-full sm:w-1/2 order-1 sm:order-2">
												<img
													src={player1Image}
													alt="S1mple"
													className="w-full h-[300px] sm:h-[350px] object-cover rounded-xl"
												/>
											</div>
										</div>
									</motion.div>
								</div>
							</div>

							{/* TOP JAMOALAR */}
							<div className="">
								<h2 className="text-white text-3xl font-bold mb-8 flex items-center gap-4 ">
									<div className="h-[2px] flex-1 bg-[#FF9600]"></div>
									TOP JAMOALAR
									<div className="h-[2px] flex-1 bg-[#FF9600]"></div>
								</h2>
								<div className="flex justify-center w-full max-w-[600px] h-[357px] rounded-2xl p-6 mx-auto bg-[#0D0D0D] border-1 border-white"
								style={{
									background: 'transparent',
									border: '1px solid transparent',
									backgroundImage: 'linear-gradient(#0D0D0D, #0D0D0D), linear-gradient(to right, #FFFFFF, #666666, #000000, #FFFFFF)',
									backgroundOrigin: 'border-box',
									backgroundClip: 'padding-box, border-box',
								}}>
									<div className="flex items-center gap-6 h-full">
										{/* Team Logo */}
										<div className="w-[175px] h-[175px] rounded-xl overflow-hidden flex items-center justify-center">
											<img
												src={jamoa1}
												alt="Natus Vincere"
												className="w-full h-full object-cover"
											/>
										</div>
										{/* Team Info */}
										<div className="flex flex-col gap-3">
											<h3 className="text-3xl font-bold text-white border-b border-[#FF9600] pb-2">
												Natus Vincere
											</h3>
											<div className="flex flex-col gap-2">
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-2">
													<span className="text-lg text-gray-400">G'alaba:</span>
													<span className="text-lg text-white">25</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-2">
													<span className="text-lg text-gray-400">Mag'lubiyat:</span>
													<span className="text-lg text-white">25</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-2">
													<span className="text-lg text-gray-400">Jami o'tdirishlar:</span>
													<span className="text-lg text-white">25</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-2">
													<span className="text-lg text-gray-400">Jami o'yin:</span>
													<span className="text-lg text-white">25</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Turnirlar 