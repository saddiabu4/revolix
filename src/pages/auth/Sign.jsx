import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpBg from '../../assets/sing-up.png'
import { useLanguage } from '../../context/LanguageContext'

const Sign = () => {
	const { language, changeLanguage, t } = useLanguage()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleLanguageChange = (newLang) => {
		const currentPath = window.location.pathname
		const newPath = currentPath.replace(`/${language}`, `/${newLang}`)
		changeLanguage(newLang)
		navigate(newPath)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log(formData)
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
			{/* Background Image */}
			<img
				src={signUpBg}
				alt="Background"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50" />

			{/* Form Container */}
			<div className="w-[400px] bg-transparent backdrop-blur-sm rounded-2xl p-8 relative z-10 border border-white/20">
				<h2 className="text-3xl font-bold text-white mb-8">{t('createAccount')}</h2>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="username" className="block text-white mb-2">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#FF9600] transition duration-200"
							placeholder={t('usernamePlaceholder')}
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-white mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#FF9600] transition duration-200"
							placeholder={t('emailPlaceholder')}
						/>
					</div>

					<div>
						<label htmlFor="password" className="block text-white mb-2">
							Parol
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#FF9600] transition duration-200"
							placeholder={t('passwordPlaceholder')}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="text-white">
							{t('haveAccount')}{' '}
							<Link to={`/${language}/login`} className="text-[#FF9600] hover:text-[#FF9600]/80">
								{t('login')}
							</Link>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-[#FF9600] text-white py-3 rounded-lg hover:bg-[#FF9600]/90 transition duration-200 font-semibold"
					>
						{t('createAccount')}
					</button>
				</form>

				{/* Language Selector */}
				<div className="relative top-4 left-0">
					<select
						className="bg-[#1E293B]/50 text-white px-4 py-2 rounded-lg border border-white/30 focus:outline-none hover:bg-[#1E293B]/70 transition-colors"
						value={language}
						onChange={(e) => handleLanguageChange(e.target.value)}
					>
						<option value="uz">O'zbek</option>
						<option value="ru">Русский</option>
						<option value="en">English</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Sign 