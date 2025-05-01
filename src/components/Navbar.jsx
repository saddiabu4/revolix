import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaCog, FaComments, FaInstagram, FaSignOutAlt, FaTelegram, FaTrophy, FaUser, FaUsers, FaYoutube } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoTitle from '../assets/logo-title.png'
import Logo from '../assets/Logo.png'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelect from './LanguageSelect'

const userDemo = {
	username: "esportsfan",
	avatar: "https://randomuser.me/api/portraits/men/32.jpg",
}

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [user, setUser] = useState(null)
	const [userDropdown, setUserDropdown] = useState(false)
	const userDropdownRef = useRef()
	const { t, changeLanguage, language } = useLanguage()
	const location = useLocation()
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('')

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = event => {
			if (activeDropdown && !event.target.closest('.dropdown-container')) {
				setActiveDropdown(null)
			}
			if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
				setUserDropdown(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [activeDropdown, userDropdown])

	// Load user from localStorage on page load
	useEffect(() => {
		const savedUser = localStorage.getItem("user")
		if (savedUser) {
			setUser(JSON.parse(savedUser))
		}
	}, [])

	// Save user to localStorage when it changes
	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user))
		}
	}, [user])

	// Handle logout
	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem("user")
		setUserDropdown(false)
	}

	useEffect(() => {
		// Set active section based on current path
		const path = location.pathname
		if (path.includes('/turnirlar') || path.includes('/tournaments')) {
			setActiveSection('turnirlar')
		} else if (path.includes('/profile')) {
			setActiveSection('profile')
		} else {
			setActiveSection('')
		}
	}, [location])

	const handleLanguageChange = newLang => {
		changeLanguage(newLang)
		const currentPath = window.location.pathname
		const newPath = currentPath.replace(`/${language}`, `/${newLang}`)
		navigate(newPath)
	}

	// Memoize navLinks to prevent unnecessary re-renders
	const navLinks = useMemo(
		() => [
			{
				name: t('home'),
				path: `/${language}`,
				key: 'home',
				dropdownItems: [],
			},
			{
				name: t('tournaments'),
				path: `/${language}/turnirlar`,
				key: 'tournaments',
				dropdownItems: [
					{
						name: 'PUBGM',
						path: `/${language}/tournaments/pubgm`,
						component: 'PubgmTournaments',
					},
					{
						name: 'DOTA 2',
						path: `/${language}/tournaments/dota2`,
						component: 'Dota2Tournaments',
					},
					{
						name: 'CS 2',
						path: `/${language}/tournaments/cs2`,
						component: 'Cs2Tournaments',
					},
					{
						name: 'MLBB',
						path: `/${language}/tournaments/mlbb`,
						component: 'MlbbTournaments',
					},
					{
						name: 'DOTA 1',
						path: `/${language}/tournaments/dota1`,
						component: 'Dota1Tournaments',
					},
					{
						name: 'VALORANT',
						path: `/${language}/tournaments/valorant`,
						component: 'ValorantTournaments',
					},
					{
						name: 'FREE FIRE',
						path: `/${language}/tournaments/freefire`,
						component: 'FreeFireTournaments',
					},
				],
			},
			{
				name: t('articles'),
				path: `/${language}/articles`,
				key: 'articles',
				dropdownItems: [
					{
						name: t('tips'),
						path: `/${language}/articles/tips`,
						component: 'Tips',
					},
					{
						name: t('interviews'),
						path: `/${language}/articles/interviews`,
						component: 'Interviews',
					},
					{
						name: t('tournamentReviews'),
						path: `/${language}/articles/tournament-reviews`,
						component: 'TournamentReviews',
					},
				],
			},
			{
				name: t('news'),
				path: `/${language}/news`,
				key: 'news',
				dropdownItems: [
					{
						name:
							language === 'uz'
								? "SAYTDAGI O'ZGARISHLARI"
								: language === 'ru'
									? 'ИЗМЕНЕНИЯ НА САЙТЕ'
									: language === 'en'
										? 'SITE UPDATES'
										: t('siteUpdates'),
						path: `/${language}/news/site-updates`,
						component: 'SiteUpdates',
					},
					{
						name: t('esportsNews'),
						path: `/${language}/news/esports`,
						component: 'EsportsNews',
					},
					{
						name: t('gameUpdates'),
						path: `/${language}/news/game-updates`,
						component: 'GameUpdates',
					},
				],
			},
			{
				name: t('rating'),
				path: `/${language}/rating`,
				key: 'rating',
				dropdownItems: [
					{
						name: t('topTeams'),
						path: `/${language}/rating/teams`,
						component: 'TopTeams',
					},
					{
						name: t('topPlayers'),
						path: `/${language}/rating/players`,
						component: 'TopPlayers',
					},
				],
			},
		],
		[t, language]
	)

	const toggleDropdown = key => {
		setActiveDropdown(prevKey => (prevKey === key ? null : key))
	}

	const getTournamentsText = () => {
		switch (language) {
			case 'uz':
				return 'TURNIRLAR'
			case 'ru':
				return 'ТУРНИРЫ'
			case 'en':
				return 'TOURNAMENTS'
			default:
				return 'TURNIRLAR'
		}
	}

	const getProfileText = () => {
		switch (language) {
			case 'uz':
				return 'PROFIL'
			case 'ru':
				return 'ПРОФИЛЬ'
			case 'en':
				return 'PROFILE'
			default:
				return 'PROFIL'
		}
	}

	const handleTournamentsClick = () => {
		navigate(`/${language}/turnirlar`)
		setIsOpen(false)
	}

	const handleProfileClick = () => {
		navigate(`/${language}/profile`)
		setIsOpen(false)
	}

	return (
		<nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[90px] font-kanit font-normal text-2xl bg-gray-900/95 backdrop-blur-sm shadow-lg'>
			<div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10'>
				<div className='flex items-center justify-between h-full'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<Link to={`/${language}`} className='flex items-center'>
							<img src={Logo} alt='Logo' className='h-12 w-auto' />
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden lg:block'>
						<ul className='flex gap-6'>
							{navLinks.map(link => (
								<li
									key={link.key}
									className='relative group dropdown-container'
								>
									{link.dropdownItems.length > 0 ? (
										<div
											className='text-white text-2xl group-hover:text-[#ff9600] transition-colors duration-200 cursor-pointer'
											onMouseEnter={() => setActiveDropdown(link.key)}
											onMouseLeave={() => setActiveDropdown(null)}
											onClick={() => toggleDropdown(link.key)}
										>
											{link.name}
										</div>
									) : (
										<Link
											to={link.path}
											className='text-white text-2xl group-hover:text-[#ff9600] transition-colors duration-200'
										>
											{link.name}
										</Link>
									)}
									{link.dropdownItems.length > 0 && (
										<ul
											className={`absolute left-0 mt-5 w-[301px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 transition-all duration-300 ${activeDropdown === link.key
												? 'opacity-100 visible'
												: 'opacity-0 invisible'
												} p-4 before:content-[''] before:absolute before:top-[-20px] before:left-0 before:w-full before:h-[20px]`}
											onMouseEnter={() => setActiveDropdown(link.key)}
											onMouseLeave={() => setActiveDropdown(null)}
										>
											{link.dropdownItems.map((item, index) => (
												<li
													key={index}
													className='relative group/item hover-bosib'
												>
													<Link
														to={item.path}
														className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-2xl'
													>
														<img
															src={logoTitle}
															alt='Icon'
															className='w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 hover-bos'
														/>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Right side buttons */}
					<div className='hidden md:flex items-center space-x-4'>
						<LanguageSelect onChange={handleLanguageChange} value={language} />
						{!user ? (
							<>
								<Link
									to={`/${language}/signup`}
									className='bg-[#ff9600] text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-[#ff9600]/90 transition-colors duration-200'
									onClick={() => setUser(userDemo)}
								>
									{t('createAccount')}
								</Link>
								<Link
									to={`/${language}/login`}
									className='bg-gray-700 text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-gray-600 transition-colors duration-200'
									onClick={() => setUser(userDemo)}
								>
									{t('login')}
								</Link>
							</>
						) : (
							<div className="relative" ref={userDropdownRef}>
								<button
									className="flex items-center focus:outline-none"
									onClick={() => setUserDropdown((d) => !d)}
								>
									<img
										src={user.avatar}
										alt="avatar"
										className="w-9 h-9 rounded-full border-2 border-[#ff9600]"
									/>
									<svg
										className={`w-4 h-4 ml-1 transition-transform text-white ${userDropdown ? "rotate-180" : ""}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</button>
								{/* User Dropdown menu */}
								{userDropdown && (
									<div className="absolute right-0 mt-2 w-64 bg-[#0D0D0DC7] rounded-xl shadow-lg border border-white z-50 p-2">
										<div className="flex flex-col divide-y divide-white/20">
											<Link
												to={`/${language}/profile`}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base"
											>
												<FaUser />
												Profilim
											</Link>
											<Link
												to={`/${language}/my-teams`}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base"
											>
												<FaUsers />
												Mening jamoalarim
											</Link>
											<Link
												to={`/${language}/my-tournaments`}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base"
											>
												<FaTrophy />
												Mening turnirlarim
											</Link>
											<Link
												to={`/${language}/messages`}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base"
											>
												<FaComments />
												Xabarlar
											</Link>
											<Link
												to={`/${language}/settings`}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base"
											>
												<FaCog />
												Sozlamalar
											</Link>
											<button
												onClick={handleLogout}
												className="flex items-center gap-3 px-4 py-2 text-white hover:text-[#ff9600] transition text-base w-full text-left"
											>
												<FaSignOutAlt className="text-red-400" />
												Saytdan chiqish
											</button>
										</div>
										<div className="flex justify-center gap-6 mt-4 pb-2">
											<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9600] text-2xl"><FaInstagram /></a>
											<a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9600] text-2xl"><FaTelegram /></a>
											<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff9600] text-2xl"><FaYoutube /></a>
										</div>
									</div>
								)}
							</div>
						)}
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center'>
						<LanguageSelect onChange={handleLanguageChange} value={language} />
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='ml-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ff9600] focus:outline-none'
						>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
					} overflow-hidden`}
			>
				<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm'>
					{navLinks.map(link => (
						<div key={link.key} className='dropdown-container'>
							{link.dropdownItems.length > 0 ? (
								<div
									className='text-white text-2xl group-hover:text-[#ff9600] transition-colors duration-200 cursor-pointer flex items-center justify-between'
									onClick={() => toggleDropdown(link.key)}
								>
									{link.name}
									<svg
										className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.key ? 'rotate-180' : ''
											}`}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</div>
							) : (
								<Link
									to={link.path}
									className='text-white text-2xl group-hover:text-[#ff9600] transition-colors duration-200'
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							)}
							{link.dropdownItems.length > 0 && (
								<div
									className={`pl-4 space-y-1 transition-all duration-300 ${activeDropdown === link.key
										? 'max-h-[500px] opacity-100'
										: 'max-h-0 opacity-0'
										} overflow-hidden`}
								>
									{link.dropdownItems.map((item, index) => (
										<Link
											key={index}
											to={item.path}
											className='text-white hover:text-[#ff9600] px-3 py-2 rounded-md text-xl font-kanit font-normal transition-colors duration-200 flex items-center gap-2'
											onClick={() => {
												setIsMobileMenuOpen(false)
												setActiveDropdown(null)
											}}
										>
											<img src={logoTitle} alt='Icon' className='w-5 h-5' />
											{item.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
					<div className='pt-4 space-y-2'>
						<Link
							to={`/${language}/signup`}
							className='w-full bg-[#ff9600] text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-[#ff9600]/90 transition-colors duration-200 block text-center'
							onClick={() => {
								setIsMobileMenuOpen(false)
								setActiveDropdown(null)
							}}
						>
							{t('createAccount')}
						</Link>
						<Link
							to={`/${language}/login`}
							className='w-full bg-gray-700 text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-gray-600 transition-colors duration-200 block text-center'
							onClick={() => {
								setIsMobileMenuOpen(false)
								setActiveDropdown(null)
							}}
						>
							{t('login')}
						</Link>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='md:hidden bg-[#0D0D0D] border-t border-gray-800'
					>
						<div className='px-4 py-3 space-y-3'>
							<button
								onClick={handleTournamentsClick}
								className={`block w-full text-left text-white hover:text-[#FF9600] transition-colors duration-300 font-medium ${activeSection === 'turnirlar' ? 'text-[#FF9600]' : ''
									}`}
							>
								{getTournamentsText()}
							</button>
							<button
								onClick={handleProfileClick}
								className={`block w-full text-left text-white hover:text-[#FF9600] transition-colors duration-300 font-medium ${activeSection === 'profile' ? 'text-[#FF9600]' : ''
									}`}
							>
								{getProfileText()}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
