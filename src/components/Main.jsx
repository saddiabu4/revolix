import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaGamepad, FaMedal, FaStar, FaTrophy, FaUser, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jamoa1 from '../assets/jamoa1.png'
import jamoa2 from '../assets/jamoa2.png'
import jamoa3 from '../assets/jamoa3.png'
import backgroundImage from '../assets/main.png'
import orqaFon1 from '../assets/orqafon1.png'
import player1Image from '../assets/oyinchi1.png'
import player2Image from '../assets/oyinchi2.png'
import player3Image from '../assets/oyinchi3.png'
import Reklama from '../assets/reklama-baner.png'
import statisticImage from '../assets/statistic.png'
import turnirImage from '../assets/turnir.png'
import { useLanguage } from '../context/LanguageContext'
import Footer from './Footer'
import Navbar from './Navbar'

const Main = () => {
	const { language, t } = useLanguage()
	const [stats, setStats] = useState({
		tournaments: 0,
		teams: 0,
		players: 0,
		awards: 0
	})

	const [activeTournamentGame, setActiveTournamentGame] = useState('PUBGM')
	const [activeTeamGame, setActiveTeamGame] = useState('PUBGM')

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
			status: "COMING SOON",
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
			status: "COMING SOON",
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
			status: "COMING SOON",
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
			status: "COMING SOON",
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
			status: "COMING SOON",
			image: turnirImage
		}
	]

	const topTeams = [
		{
			id: 1,
			name: "Natus Vincere",
			logo: jamoa1,
			stats: {
				wins: 25,
				matches: 20,
				totalGames: 21,
				totalWins: 6
			}
		},
		{
			id: 2,
			name: "Team Vitality",
			logo: jamoa2,
			stats: {
				wins: 25,
				matches: 20,
				totalGames: 21,
				totalWins: 6
			}
		},
		{
			id: 3,
			name: "G2 Esports",
			logo: jamoa3,
			stats: {
				wins: 25,
				matches: 20,
				totalGames: 21,
				totalWins: 6
			}
		},
		{
			id: 4,
			name: "FaZe Clan",
			logo: jamoa1,
			stats: {
				wins: 25,
				matches: 20,
				totalGames: 21,
				totalWins: 6
			}
		},
		{
			id: 5,
			name: "Cloud9",
			logo: jamoa2,
			stats: {
				wins: 25,
				matches: 20,
				totalGames: 21,
				totalWins: 6
			}
		}
	]

	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentTeamSlide, setCurrentTeamSlide] = useState(0)
	const [currentPlayerSlide, setCurrentPlayerSlide] = useState(0)

	const players = [
		{
			id: 1,
			name: "s1mple",
			flag: "🇺🇦",
			rating: 50,
			team: "Natus Vincere",
			matches: 150,
			defeats: 50,
			wins: 100,
			image: player1Image
		},
		{
			id: 2,
			name: "Niko",
			flag: "🇺🇦",
			rating: 50,
			team: "G2",
			matches: 150,
			defeats: 50,
			wins: 100,
			image: player2Image
		},
		{
			id: 3,
			name: "Fame",
			flag: "🇭🇷",
			rating: 50,
			team: "Virtus.pro",
			matches: 150,
			defeats: 50,
			wins: 100,
			image: player3Image
		},
		{
			id: 4,
			name: "ZywOo",
			flag: "🇫🇷",
			rating: 50,
			team: "Team Vitality",
			matches: 150,
			defeats: 50,
			wins: 100,
			image: player1Image
		},
		{
			id: 5,
			name: "m0NESY",
			flag: "🇷🇺",
			rating: 50,
			team: "G2",
			matches: 150,
			defeats: 50,
			wins: 100,
			image: player2Image
		}
	]

	useEffect(() => {
		// Backend dan ma'lumotlarni olish
		fetch('http://localhost:3000/api/stats')
			.then(res => res.json())
			.then(data => {
				setStats(data)
			})
			.catch(err => {
				console.error('Xatolik yuz berdi:', err)
			})

		const tournamentTimer = setInterval(() => {
			setCurrentSlide((prev) => {
				if (prev >= tournaments.length - 3) {
					return 0
				}
				return prev + 1
			})
		}, 3000)

		const teamTimer = setInterval(() => {
			setCurrentTeamSlide((prev) => {
				if (prev >= topTeams.length - 3) {
					return 0
				}
				return prev + 1
			})
		}, 3000)

		const playerTimer = setInterval(() => {
			setCurrentPlayerSlide((prev) => {
				if (prev >= players.length - 3) {
					return 0
				}
				return prev + 1
			})
		}, 3000)

		return () => {
			clearInterval(tournamentTimer)
			clearInterval(teamTimer)
			clearInterval(playerTimer)
		}
	}, [])

	const getHeroText = () => {
		switch (language) {
			case 'uz':
				return "TURNIRLARGA QO'SHILING VA G'ALABA QOZONING!"
			case 'ru':
				return "ПРИСОЕДИНЯЙТЕСЬ К ТУРНИРАМ И ПОБЕЖДАЙТЕ!"
			case 'en':
				return "JOIN TOURNAMENTS AND WIN!"
			default:
				return "TURNIRLARGA QO'SHILING VA G'ALABA QOZONING!"
		}
	}

	const getButtonText = () => {
		switch (language) {
			case 'uz':
				return "HOZIROQ QO'SHILING!"
			case 'ru':
				return "ПРИСОЕДИНИТЬСЯ СЕЙЧАС!"
			case 'en':
				return "JOIN NOW!"
			default:
				return "HOZIROQ QO'SHILING!"
		}
	}

	const getStatsText = () => {
		switch (language) {
			case 'uz':
				return {
					tournaments: 'Turnirlar',
					teams: 'Jamoalar',
					players: "O'yinchilar",
					awards: 'Mukofotlar'
				}
			case 'ru':
				return {
					tournaments: 'Турниры',
					teams: 'Команды',
					players: 'Игроки',
					awards: 'Награды'
				}
			case 'en':
				return {
					tournaments: 'Tournaments',
					teams: 'Teams',
					players: 'Players',
					awards: 'Awards'
				}
			default:
				return {
					tournaments: 'Turnirlar',
					teams: 'Jamoalar',
					players: "O'yinchilar",
					awards: 'Mukofotlar'
				}
		}
	}

	const getTournamentsText = () => {
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

	const getTopTeamsText = () => {
		switch (language) {
			case 'uz':
				return "TOP JAMOALAR"
			case 'ru':
				return "ТОП КОМАНДЫ"
			case 'en':
				return "TOP TEAMS"
			default:
				return "TOP JAMOALAR"
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

	const getWinsText = () => {
		switch (language) {
			case 'uz':
				return "G'alaba:"
			case 'ru':
				return "Победы:"
			case 'en':
				return "Wins:"
			default:
				return "G'alaba:"
		}
	}

	const getLossesText = () => {
		switch (language) {
			case 'uz':
				return "Mag'lubiyat:"
			case 'ru':
				return "Поражения:"
			case 'en':
				return "Losses:"
			default:
				return "Mag'lubiyat:"
		}
	}

	const getTotalKillsText = () => {
		switch (language) {
			case 'uz':
				return "Jami o'ldirishlar:"
			case 'ru':
				return "Всего убийств:"
			case 'en':
				return "Total Kills:"
			default:
				return "Jami o'ldirishlar:"
		}
	}

	const getTotalGamesText = () => {
		switch (language) {
			case 'uz':
				return "Jami o'yin:"
			case 'ru':
				return "Всего игр:"
			case 'en':
				return "Total Games:"
			default:
				return "Jami o'yin:"
		}
	}

	const getAllText = () => {
		switch (language) {
			case 'uz':
				return "BARCHASI"
			case 'ru':
				return "ВСЕ"
			case 'en':
				return "ALL"
			default:
				return "BARCHASI"
		}
	}

	const getTopPlayersText = () => {
		switch (language) {
			case 'uz':
				return "TOP O'YINCHILAR"
			case 'ru':
				return "ТОП ИГРОКИ"
			case 'en':
				return "TOP PLAYERS"
			default:
				return "TOP O'YINCHILAR"
		}
	}

	const getNewsText = () => {
		switch (language) {
			case 'uz':
				return "YANGILIKLAR"
			case 'ru':
				return "НОВОСТИ"
			case 'en':
				return "NEWS"
			default:
				return "YANGILIKLAR"
		}
	}

	const getRatingText = () => {
		switch (language) {
			case 'uz':
				return "REYTING"
			case 'ru':
				return "РЕЙТИНГ"
			case 'en':
				return "RATING"
			default:
				return "REYTING"
		}
	}

	const getTeamText = () => {
		switch (language) {
			case 'uz':
				return "JAMOA"
			case 'ru':
				return "КОМАНДА"
			case 'en':
				return "TEAM"
			default:
				return "JAMOA"
		}
	}

	const getMatchesText = () => {
		switch (language) {
			case 'uz':
				return "MATCHES"
			case 'ru':
				return "МАТЧИ"
			case 'en':
				return "MATCHES"
			default:
				return "MATCHES"
		}
	}

	const getDefeatsText = () => {
		switch (language) {
			case 'uz':
				return "MAG'LUBIYAT"
			case 'ru':
				return "ПОРАЖЕНИЯ"
			case 'en':
				return "DEFEATS"
			default:
				return "MAG'LUBIYAT"
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
							<div className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().tournaments}
								</span>
								<div className="flex items-center gap-2">
									<FaTrophy className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
										{stats.tournaments}
									</span>
								</div>
							</div>

							{/* Jamoalar */}
							<div className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().teams}
								</span>
								<div className="flex items-center gap-2">
									<FaUsers className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
										{stats.teams}
									</span>
								</div>
							</div>

							{/* O'yinchilar */}
							<div className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().players}
								</span>
								<div className="flex items-center gap-2">
									<FaUser className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
										{stats.players}
									</span>
								</div>
							</div>

							{/* Mukofotlar */}
							<div className="flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
									{getStatsText().awards}
								</span>
								<div className="flex items-center gap-2">
									<FaMedal className="text-2xl sm:text-3xl md:text-4xl text-white" />
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
										{stats.awards}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Tournaments Section */}
				<div
					className="bg-[#0D0D0D] min-h-[1400px] bg-cover bg-center bg-no-repeat relative py-10"
					style={{
						backgroundImage: `url(${orqaFon1})`,
					}}
				>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						{/* Tournaments Header */}
						<div className="flex flex-col mb-8">
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
									{getTournamentsText()}
								</motion.h2>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "717px" }}
									transition={{ duration: 0.5, delay: 0.6 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.3, delay: 0.8 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "50px" }}
									transition={{ duration: 0.2, delay: 1 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "25px" }}
									transition={{ duration: 0.2, delay: 1.2 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "13px" }}
									transition={{ duration: 0.2, delay: 1.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
							</motion.div>
							<motion.div
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 1.6 }}
								className="flex flex-wrap justify-center md:justify-end gap-4"
							>
								{games.map((game, index) => (
									<motion.button
										key={game}
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
										onClick={() => setActiveTournamentGame(game)}
										className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[100px] font-kanit text-xs sm:text-sm md:text-base lg:text-[12px] font-medium transition-all duration-500 border-2 transform hover:scale-105
											${activeTournamentGame === game
												? 'bg-[#FF9600] text-white border-[#FF9600] shadow-[0_0_20px_rgba(255,150,0,0.5)]'
												: 'bg-transparent text-white border-white hover:border-[#FF9600] hover:text-[#FF9600] hover:shadow-[0_0_20px_rgba(255,150,0,0.3)]'}`}
									>
										{game}
									</motion.button>
								))}
							</motion.div>
						</div>

						{/* Tournament Cards */}
						<div className="relative mb-16">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-hidden">
								{tournaments.slice(currentSlide, currentSlide + 3).map((tournament, index) => (
									<motion.div
										key={tournament.id}
										className="rounded-2xl overflow-hidden"
										initial={{ x: window.innerWidth > 768 ? 300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: window.innerWidth > 768 ? -300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
										transition={{ duration: 0.5 }}
									>
										<img
											src={tournament.image}
											alt={tournament.title}
											className="w-full h-[200px] sm:h-[250px] object-cover border-1 border-white"
										/>
										<div className="p-4 sm:p-6">
											<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3">
												<span className="text-white font-bold text-sm sm:text-base">{getGameText()} {tournament.game}</span>
												<span className="text-white font-bold text-sm sm:text-base">{getDateText()} {tournament.date} | {tournament.time}</span>
											</div>
											<h3 className="text-[#FF9600] font-bold text-lg sm:text-xl mb-3">{tournament.title}</h3>
											<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
												<span className="font-bold text-white text-base sm:text-lg">{getPrizeText()} ${tournament.prize}</span>
											</div>
										</div>
									</motion.div>
								))}
							</div>

							{/* Navigation Dots */}
							<div className="flex justify-center gap-2 mt-6">
								{Array.from({ length: tournaments.length - 2 }).map((_, index) => (
									<button
										key={index}
										className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#FF9600] w-4 sm:w-6' : 'bg-white/30'
											}`}
										onClick={() => setCurrentSlide(index)}
									/>
								))}
							</div>
						</div>

						{/* Tournaments View All Button */}
						<div className="text-center mb-16">
							<Link
								to={`/${language}/tournaments`}
								className="inline-block w-[250px] sm:w-[300px] h-[60px] sm:h-[73px] rounded-[80px] font-kanit text-2xl sm:text-3xl lg:text-[36px] font-medium text-white relative hover:scale-105 transition-transform duration-300"
								style={{
									background: 'transparent',
									border: '3px solid transparent',
									backgroundImage: 'linear-gradient(#0D0D0D, #0D0D0D), linear-gradient(to right, #FFFFFF, #666666, #000000, #FFFFFF)',
									backgroundOrigin: 'border-box',
									backgroundClip: 'padding-box, border-box',
								}}
							>
								<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									{getAllText()}
								</span>
							</Link>
						</div>

						{/* Top Teams Header */}
						<div className="flex flex-col mb-8">
							<motion.div
								initial={{ x: 1500, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								className="flex items-center gap-4 mb-8"
							>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "13px" }}
									transition={{ duration: 0.2, delay: 0.2 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "25px" }}
									transition={{ duration: 0.2, delay: 0.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "50px" }}
									transition={{ duration: 0.2, delay: 0.6 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.2, delay: 0.8 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "609px" }}
									transition={{ duration: 0.3, delay: 1.0 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.h2
									initial={{ x: -50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold italic"
								>
									{getTopTeamsText()}
								</motion.h2>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.2, delay: 1.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
							</motion.div>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 1.6 }}
								className="flex flex-wrap justify-center md:justify-start gap-4"
							>
								{games.map((game, index) => (
									<motion.button
										key={game}
										initial={{ x: -50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
										onClick={() => setActiveTeamGame(game)}
										className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[100px] font-kanit text-xs sm:text-sm md:text-base lg:text-[12px] font-medium transition-all duration-500 border-2 transform hover:scale-105
											${activeTeamGame === game
												? 'bg-[#FF9600] text-white border-[#FF9600] shadow-[0_0_20px_rgba(255,150,0,0.5)]'
												: 'bg-transparent text-white border-white hover:border-[#FF9600] hover:text-[#FF9600] hover:shadow-[0_0_20px_rgba(255,150,0,0.3)]'}`}
									>
										{game}
									</motion.button>
								))}
							</motion.div>
						</div>

						{/* Teams Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
							{topTeams.slice(currentTeamSlide, currentTeamSlide + 3).map((team) => (
								<motion.div
									key={team.id}
									className="w-full max-w-[437px] h-[257px] border-1 border-white rounded-2xl p-4 sm:p-6 mx-auto"
									initial={{ x: window.innerWidth > 768 ? -300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: window.innerWidth > 768 ? 300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
									transition={{ duration: 0.5 }}
								>
									<div className="flex items-center gap-4 sm:gap-6 h-full">
										{/* Team Image */}
										<div className="w-[120px] sm:w-[150px] md:w-[175px] h-[120px] sm:h-[150px] md:h-[175px] rounded-xl overflow-hidden bg-[#0D0D0D] flex items-center justify-center">
											<img
												src={team.logo}
												alt={team.name}
												className="w-full h-full object-cover"
											/>
										</div>
										{/* Team Info */}
										<div className="flex flex-col gap-2">
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white border-b border-[#FF9600] pb-1">{team.name}</h3>
											<div className="flex flex-col gap-1">
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
													<span className="text-sm sm:text-base text-gray-400">{getWinsText()}</span>
													<span className="text-sm sm:text-base text-white">{team.stats.wins}</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
													<span className="text-sm sm:text-base text-gray-400">{getLossesText()}</span>
													<span className="text-sm sm:text-base text-white">{team.stats.matches}</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
													<span className="text-sm sm:text-base text-gray-400">{getTotalKillsText()}</span>
													<span className="text-sm sm:text-base text-white">{team.stats.totalGames}</span>
												</div>
												<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
													<span className="text-sm sm:text-base text-gray-400">{getTotalGamesText()}</span>
													<span className="text-sm sm:text-base text-white">{team.stats.totalWins}</span>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Team Navigation Dots */}
						<div className="flex justify-center gap-2 mb-8">
							{Array.from({ length: topTeams.length - 2 }).map((_, index) => (
								<button
									key={index}
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${currentTeamSlide === index ? 'bg-[#FF9600] w-4 sm:w-6' : 'bg-white/30'
										}`}
									onClick={() => setCurrentTeamSlide(index)}
								/>
							))}
						</div>

					</div>
				</div>

				<div
					className="bg-[#0D0D0D] min-h-[1420px] bg-cover bg-center bg-no-repeat relative py-10"
					style={{
						backgroundImage: `url(${orqaFon1})`,
					}}
				>
					{/* Top Players Header */}
					<div className="absolute top-[-50px] left-0 flex justify-center items-center w-full h-50">
						<img src={Reklama} alt="" className='w-[1220px] h-full object-cover' />
					</div>
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-52">
						<div className="flex flex-col mb-8">
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
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "577px" }}
									transition={{ duration: 0.5, delay: 0.6 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.3, delay: 0.8 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "50px" }}
									transition={{ duration: 0.2, delay: 1 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "25px" }}
									transition={{ duration: 0.2, delay: 1.2 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "13px" }}
									transition={{ duration: 0.2, delay: 1.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
							</motion.div>
							<motion.div
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 1.6 }}
								className="flex flex-wrap justify-center md:justify-end gap-4"
							>
								{games.map((game, index) => (
									<motion.button
										key={game}
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
										onClick={() => setActiveTournamentGame(game)}
										className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[100px] font-kanit text-xs sm:text-sm md:text-base lg:text-[12px] font-medium transition-all duration-500 border-2 transform hover:scale-105
											${activeTournamentGame === game
												? 'bg-[#FF9600] text-white border-[#FF9600] shadow-[0_0_20px_rgba(255,150,0,0.5)]'
												: 'bg-transparent text-white border-white hover:border-[#FF9600] hover:text-[#FF9600] hover:shadow-[0_0_20px_rgba(255,150,0,0.3)]'}`}
									>
										{game}
									</motion.button>
								))}
							</motion.div>
						</div>

						{/* Players Grid */}
						<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 mb-8 justify-items-center">
							{players.slice(currentPlayerSlide, currentPlayerSlide + 3).map((player) => (
								<div key={player.id} className="rounded-2xl p-4 sm:p-6 w-full sm:w-[486px] min-h-[500px]">
									<div className="flex flex-col md:flex-row-reverse md:justify-center h-full">
										{/* Player Image */}
										<div className="relative w-[160px] sm:w-[200px] md:w-full h-[200px] sm:h-[250px] md:h-full rounded-lg overflow-hidden mx-auto md:mx-0 mb-4 sm:mb-6 md:mb-0">
											<img
												src={player.image}
												alt={player.name}
												className="w-full h-full object-cover object-center"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
										</div>

										{/* Stats */}
										<div className="flex flex-col gap-3 sm:gap-4 md:mr-6">
											{/* Player Name and Flag */}
											<div className="flex items-center gap-2">
												<span className="text-lg sm:text-xl md:text-2xl">{player.flag}</span>
												<span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{player.name}</span>
											</div>

											<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-3 sm:gap-4">
												{/* Rating */}
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="bg-[#FF9600] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg flex items-center justify-center">
														<FaStar className="text-white w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
													</div>
													<div>
														<span className="text-[#FF9600] text-[10px] sm:text-xs md:text-sm font-medium uppercase">{getRatingText()}</span>
														<p className="text-white font-bold text-sm sm:text-lg md:text-xl">{player.rating}</p>
													</div>
												</div>

												{/* Team */}
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="bg-[#FF9600] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg flex items-center justify-center">
														<FaUsers className="text-white w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
													</div>
													<div>
														<span className="text-[#FF9600] text-[10px] sm:text-xs md:text-sm font-medium uppercase">{getTeamText()}</span>
														<p className="text-white font-bold text-sm sm:text-lg md:text-xl">{player.team}</p>
													</div>
												</div>

												{/* Matches */}
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="bg-[#FF9600] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg flex items-center justify-center">
														<FaGamepad className="text-white w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
													</div>
													<div>
														<span className="text-[#FF9600] text-[10px] sm:text-xs md:text-sm font-medium uppercase">{getMatchesText()}</span>
														<p className="text-white font-bold text-sm sm:text-lg md:text-xl">{player.matches}</p>
													</div>
												</div>

												{/* Wins */}
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="bg-[#FF9600] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg flex items-center justify-center">
														<FaTrophy className="text-white w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
													</div>
													<div>
														<span className="text-[#FF9600] text-[10px] sm:text-xs md:text-sm font-medium uppercase">{getWinsText()}</span>
														<p className="text-white font-bold text-sm sm:text-lg md:text-xl">{player.wins}</p>
													</div>
												</div>

												{/* Defeats */}
												<div className="flex items-center gap-2 sm:gap-3">
													<div className="bg-[#FF9600] w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg flex items-center justify-center">
														<svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
															<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
														</svg>
													</div>
													<div>
														<span className="text-[#FF9600] text-[10px] sm:text-xs md:text-sm font-medium uppercase">{getDefeatsText()}</span>
														<p className="text-white font-bold text-sm sm:text-lg md:text-xl">{player.defeats}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Player Navigation Dots */}
						<div className="flex justify-center gap-2 mb-16">
							{Array.from({ length: players.length - 2 }).map((_, index) => (
								<button
									key={index}
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${currentPlayerSlide === index ? 'bg-[#FF9600] w-4 sm:w-6' : 'bg-white/30'
										}`}
									onClick={() => setCurrentPlayerSlide(index)}
								/>
							))}
						</div>

						{/* News Header */}
						<div className="flex flex-col mb-8">
							<motion.div
								initial={{ x: 1500, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								className="flex items-center gap-4 mb-8"
							>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "13px" }}
									transition={{ duration: 0.2, delay: 0.2 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "25px" }}
									transition={{ duration: 0.2, delay: 0.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "50px" }}
									transition={{ duration: 0.2, delay: 0.6 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.2, delay: 0.8 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "717px" }}
									transition={{ duration: 0.3, delay: 1.0 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
								<motion.h2
									initial={{ x: -50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold italic"
								>
									{getNewsText()}
								</motion.h2>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: "96px" }}
									transition={{ duration: 0.2, delay: 1.4 }}
									className="h-[5px] bg-[#FF9600] hidden md:block"
								></motion.div>
							</motion.div>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 1.6 }}
								className="flex flex-wrap justify-center md:justify-start gap-4"
							>
								{games.map((game, index) => (
									<motion.button
										key={game}
										initial={{ x: -50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
										onClick={() => setActiveTeamGame(game)}
										className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[100px] font-kanit text-xs sm:text-sm md:text-base lg:text-[12px] font-medium transition-all duration-500 border-2 transform hover:scale-105
											${activeTeamGame === game
												? 'bg-[#FF9600] text-white border-[#FF9600] shadow-[0_0_20px_rgba(255,150,0,0.5)]'
												: 'bg-transparent text-white border-white hover:border-[#FF9600] hover:text-[#FF9600] hover:shadow-[0_0_20px_rgba(255,150,0,0.3)]'}`}
									>
										{game}
									</motion.button>
								))}
							</motion.div>
						</div>

						{/* News Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-25 justify-items-center">
							{/* News Card 1 */}
							<div className="relative rounded-2xl overflow-hidden group cursor-pointer w-full max-w-[406px] h-[350px]">
								<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10"></div>
								<img
									src="https://placehold.co/406x350"
									alt="CS2 News"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<span className="text-white text-sm">{getGameText()} CS2</span>
										</div>
										<span className="text-white text-sm">{getDateText()} 01.04.2025 | 00:00</span>
									</div>
									<h3 className="text-white font-bold text-xl mb-2">CS2 da yangi personaj qo'shildi</h3>
									<p className="text-white/80 text-sm line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam lectus nisi, finibus dives vestibulum et. Aliquam quis dui.
									</p>
								</div>
							</div>

							{/* News Card 2 */}
							<div className="relative rounded-2xl overflow-hidden group cursor-pointer w-full max-w-[406px] h-[350px]">
								<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10"></div>
								<img
									src="https://placehold.co/406x350"
									alt="CS2 News"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<span className="text-white text-sm">{getGameText()} CS2</span>
										</div>
										<span className="text-white text-sm">{getDateText()} 01.04.2025 | 00:00</span>
									</div>
									<h3 className="text-white font-bold text-xl mb-2">CS2 da yangi personaj qo'shildi</h3>
									<p className="text-white/80 text-sm line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam lectus nisi, finibus dives vestibulum et. Aliquam quis dui.
									</p>
								</div>
							</div>

							{/* News Card 3 */}
							<div className="relative rounded-2xl overflow-hidden group cursor-pointer w-full max-w-[406px] h-[350px]">
								<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10"></div>
								<img
									src="https://placehold.co/406x350"
									alt="CS2 News"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<span className="text-white text-sm">{getGameText()} CS2</span>
										</div>
										<span className="text-white text-sm">{getDateText()} 01.04.2025 | 00:00</span>
									</div>
									<h3 className="text-white font-bold text-xl mb-2">CS2 da yangi personaj qo'shildi</h3>
									<p className="text-white/80 text-sm line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam lectus nisi, finibus dives vestibulum et. Aliquam quis dui.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Main