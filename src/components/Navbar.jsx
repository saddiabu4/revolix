import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoTitle from '../assets/logo-title.png'
import Logo from '../assets/Logo.png'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelect from './LanguageSelect'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const { t, changeLanguage, language } = useLanguage()
	const location = useLocation()
	const navigate = useNavigate()

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (activeDropdown && !event.target.closest('.dropdown-container')) {
				setActiveDropdown(null)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [activeDropdown])

	const handleLanguageChange = (lang) => {
		changeLanguage(lang)
		
		// Get the current path without the language prefix
		const pathSegments = location.pathname.split('/').filter(Boolean)
		const hasLanguagePrefix = ['uz', 'ru', 'en'].includes(pathSegments[0])
		
		let newPath
		if (hasLanguagePrefix) {
			// Replace the language prefix
			newPath = `/${lang}/${pathSegments.slice(1).join('/')}`
		} else if (location.pathname === '/' || location.pathname === '') {
			// If we're at the root, just add the language prefix
			newPath = `/${lang}`
		} else {
			// Add the language prefix to the current path
			newPath = `/${lang}${location.pathname}`
		}
		
		// Navigate to the new path
		navigate(newPath)
	}

	// Memoize navLinks to prevent unnecessary re-renders
	const navLinks = useMemo(() => [
		{ 
			name: t('home'), 
			path: `/${language}`, 
			key: 'home',
			dropdownItems: []
		},
		{ 
			name: t('tournaments'), 
			path: `/${language}/tournaments`, 
			key: 'tournaments',
			dropdownItems: [
				{ name: 'PUBGM', path: `/${language}/tournaments/pubgm` },
				{ name: 'DOTA 2', path: `/${language}/tournaments/dota2` },
				{ name: 'CS 2', path: `/${language}/tournaments/cs2` },
				{ name: 'MLBB', path: `/${language}/tournaments/mlbb` },
				{ name: 'DOTA 1', path: `/${language}/tournaments/dota1` },
				{ name: 'VALORANT', path: `/${language}/tournaments/valorant` },
				{ name: 'FREE FIRE', path: `/${language}/tournaments/freefire` }
			]
		},
		{ 
			name: t('articles'), 
			path: `/${language}/articles`, 
			key: 'articles',
			dropdownItems: [
				{ name: t('tips'), path: `/${language}/articles/tips` },
				{ name: t('interviews'), path: `/${language}/articles/interviews` },
				{ name: t('tournamentReviews'), path: `/${language}/articles/tournament-reviews` }
			]
		},
		{ 
			name: t('news'), 
			path: `/${language}/news`, 
			key: 'news',
			dropdownItems: [
				{ name: language === 'uz' ? 'SAYTDAGI O\'ZGARISHLARI' : (language === 'ru' ? 'ИЗМЕНЕНИЯ НА САЙТЕ' : (language === 'en' ? 'SITE UPDATES' : t('siteUpdates'))), path: `/${language}/news/site-updates` },
				{ name: t('esportsNews'), path: `/${language}/news/esports` },
				{ name: t('gameUpdates'), path: `/${language}/news/game-updates` }
			]
		},
		{ 
			name: t('rating'), 
			path: `/${language}/rating`, 
			key: 'rating',
			dropdownItems: [
				{ name: t('topTeams'), path: `/${language}/rating/teams` },
				{ name: t('topPlayers'), path: `/${language}/rating/players` }
			]
		}
	], [t, language])

	const toggleDropdown = (key) => {
		setActiveDropdown(activeDropdown === key ? null : key)
	}

	return (
		<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[90px] font-kanit font-normal text-2xl bg-gray-900/95 backdrop-blur-sm shadow-lg">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
				<div className="flex items-center justify-between h-full">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to={`/${language}`} className="flex items-center">
							<img src={Logo} alt="Logo" className="h-12 w-auto" />
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:block">
						<ul className="flex gap-6">
							{navLinks.map((link) => (
								<li key={link.key} className="relative group dropdown-container">
									<Link
										to={link.path}
										className="text-white text-2xl group-hover:text-[#ff9600] transition-colors duration-200"
										onMouseEnter={() => setActiveDropdown(link.key)}
										onMouseLeave={() => setActiveDropdown(null)}
									>
										{link.name}
									</Link>
									{link.dropdownItems.length > 0 && (
										<ul 
											className={`absolute left-0 mt-5 w-[301px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 transition-all duration-300 ${
												activeDropdown === link.key 
													? 'opacity-100 visible' 
													: 'opacity-0 invisible'
											} p-4 before:content-[''] before:absolute before:top-[-20px] before:left-0 before:w-full before:h-[20px]`}
											onMouseEnter={() => setActiveDropdown(link.key)}
											onMouseLeave={() => setActiveDropdown(null)}
										>
											{link.dropdownItems.map((item, index) => (
												<li key={index} className="relative group/item hover-bosib">
													<Link
														to={item.path}
														className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-2xl"
													>
														<img
															src={logoTitle}
															alt="Icon"
															className="w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 hover-bos"
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
					<div className="hidden md:flex items-center space-x-4">
						<LanguageSelect onChange={handleLanguageChange} value={language} />
						<button className="bg-[#ff9600] text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-[#ff9600]/90 transition-colors duration-200">
							{t('createAccount')}
						</button>
						<button className="bg-gray-700 text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-gray-600 transition-colors duration-200">
							{t('login')}
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<LanguageSelect onChange={handleLanguageChange} value={language} />
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ff9600] focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`md:hidden transition-all duration-300 ease-in-out ${
				isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
			} overflow-hidden`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
					{navLinks.map((link) => (
						<div key={link.key} className="dropdown-container">
							{link.dropdownItems.length > 0 ? (
								<button
									onClick={() => toggleDropdown(link.key)}
									className={`w-full text-left text-white hover:text-[#ff9600] block px-3 py-2 rounded-md text-2xl font-kanit font-normal transition-colors duration-200 flex items-center justify-between ${
										activeDropdown === link.key ? 'text-[#ff9600]' : ''
									}`}
								>
									{link.name}
									<svg
										className={`w-5 h-5 transition-transform duration-200 ${
											activeDropdown === link.key ? 'rotate-180' : ''
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
							) : (
								<Link
									to={link.path}
									className="text-white hover:text-[#ff9600] block px-3 py-2 rounded-md text-2xl font-kanit font-normal transition-colors duration-200"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							)}
							{link.dropdownItems.length > 0 && (
								<div className={`pl-4 space-y-1 transition-all duration-300 ${
									activeDropdown === link.key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
								} overflow-hidden`}>
									{link.dropdownItems.map((item, index) => (
										<Link
											key={index}
											to={item.path}
											className="text-white hover:text-[#ff9600] block px-3 py-2 rounded-md text-xl font-kanit font-normal transition-colors duration-200 flex items-center gap-2"
											onClick={() => {
												setIsMobileMenuOpen(false)
												setActiveDropdown(null)
											}}
										>
											<img
												src={logoTitle}
												alt="Icon"
												className="w-5 h-5"
											/>
											{item.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
					<div className="pt-4 space-y-2">
						<button className="w-full bg-[#ff9600] text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-[#ff9600]/90 transition-colors duration-200">
							{t('createAccount')}
						</button>
						<button className="w-full bg-gray-700 text-white px-4 py-2 rounded-md text-base font-kanit font-normal hover:bg-gray-600 transition-colors duration-200">
							{t('login')}
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
