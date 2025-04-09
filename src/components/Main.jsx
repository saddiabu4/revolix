import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaMedal, FaTrophy, FaUser, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import jamoa1 from '../assets/jamoa1.png'
import jamoa2 from '../assets/jamoa2.png'
import jamoa3 from '../assets/jamoa3.png'
import backgroundImage from '../assets/main.png'
import orqaFon1 from '../assets/orqafon1.png'
import statisticImage from '../assets/statistic.png'
import turnirImage from '../assets/turnir.png'
import { useLanguage } from '../context/LanguageContext'

const Main = () => {
	const { language } = useLanguage()
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
			name: "Natus Vincere",
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
			name: "Natus Vincere",
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
			id: 5,
			name: "Natus Vincere",
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
				// Agar oxirgi slide bo'lsa, boshiga qaytish
				if (prev >= tournaments.length - 3) {
					return 0;
				}
				return prev + 1;
			});
		}, 3000)

		const teamTimer = setInterval(() => {
			setCurrentTeamSlide((prev) => {
				// Agar oxirgi slide bo'lsa, boshiga qaytish
				if (prev >= topTeams.length - 3) {
					return 0;
				}
				return prev + 1;
			});
		}, 3000)

		return () => {
			clearInterval(tournamentTimer)
			clearInterval(teamTimer)
		}
	}, [])

	const getHeroText = () => {
		switch(language) {
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
		switch(language) {
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
		switch(language) {
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

	return (
		<>
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
				className="bg-[#0D0D0D] min-h-[1420px] bg-cover bg-center bg-no-repeat relative py-10"
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
								TURNIRLAR
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
									className="border-1 border-white rounded-2xl overflow-hidden"
									initial={{ x: window.innerWidth > 768 ? 300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: window.innerWidth > 768 ? -300 : 0, opacity: window.innerWidth > 768 ? 0 : 1 }}
									transition={{ duration: 0.5 }}
								>
									<img 
										src={tournament.image} 
										alt={tournament.title}
										className="w-full h-[200px] sm:h-[250px] object-cover"
									/>
									<div className="p-4 sm:p-6">
										<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3">
											<span className="text-[#FF9600] font-medium text-sm sm:text-base">O'YIN: {tournament.game}</span>
											<span className="text-white text-sm sm:text-base">SANA: {tournament.date} | {tournament.time}</span>
										</div>
										<h3 className="text-white font-bold text-lg sm:text-xl mb-3">{tournament.title}</h3>
										<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
											<span className="text-white text-base sm:text-lg">SOVRIN: ${tournament.prize}</span>
											<span className="text-[#FF9600] font-medium text-sm sm:text-base">JAMOALAR: {tournament.teamSize}</span>
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
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
										currentSlide === index ? 'bg-[#FF9600] w-4 sm:w-6' : 'bg-white/30'
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
								BARCHASI
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
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, delay: 1.2 }}
								className="text-white font-kanit text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold italic whitespace-nowrap"
							>
								TOP JAMOALAR
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
												<span className="text-sm sm:text-base text-gray-400">G'alaba:</span>
												<span className="text-sm sm:text-base text-white">{team.stats.wins}</span>
											</div>
											<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
												<span className="text-sm sm:text-base text-gray-400">Mag'lubiyat:</span>
												<span className="text-sm sm:text-base text-white">{team.stats.matches}</span>
											</div>
											<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
												<span className="text-sm sm:text-base text-gray-400">Jami o'ldirishlar:</span>
												<span className="text-sm sm:text-base text-white">{team.stats.totalGames}</span>
											</div>
											<div className="flex justify-between items-center border-b border-[#FF9600]/30 pb-1">
												<span className="text-sm sm:text-base text-gray-400">Jami o'yin:</span>
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
								className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
									currentTeamSlide === index ? 'bg-[#FF9600] w-4 sm:w-6' : 'bg-white/30'
								}`}
								onClick={() => setCurrentTeamSlide(index)}
							/>
						))}
					</div>

					
				</div>
			</div>
		</>
	)
}

export default Main
