import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signUpBg from '../../assets/sing-up.png' // Reuse the background image
import { useLanguage } from '../../context/LanguageContext'

const Login = () => {
	const { language, changeLanguage, t } = useLanguage()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '', // Changed from email to username based on image
		password: ''
	})
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleLanguageChange = (newLang) => {
		const currentPath = window.location.pathname
		const newPath = currentPath.replace(`/${language}`, `/${newLang}`)
		changeLanguage(newLang)
		navigate(newPath)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		setLoading(true)

		try {
			// TODO: Implement login logic here (using username/password)
			console.log('Submitting:', formData)
			// Assuming successful login for now
			navigate(`/${language}/profile`)
		} catch (err) {
			setError('Login failed') // Simplified error message
		} finally {
			setLoading(false)
		}
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
				<h2 className="text-3xl font-bold text-white mb-8 text-center">{t('login')}</h2>

				{error && (
					<div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded mb-4 text-center text-sm" role="alert">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="username" className="block text-white mb-2">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							required
							value={formData.username}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#FF9600] transition duration-200"
							placeholder={t('usernamePlaceholder')}
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
							required
							value={formData.password}
							onChange={handleChange}
							className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#FF9600] transition duration-200"
							placeholder={t('passwordPlaceholder')}
						/>
					</div>

					<div className="text-center">
						<div className="text-white">
							{t('noAccount')}{' '}
							<Link to={`/${language}/signup`} className="text-[#FF9600] hover:text-[#FF9600]/80">
								{t('createAccountLink')}
							</Link>
						</div>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-[#FF9600] text-white py-3 rounded-lg hover:bg-[#FF9600]/90 transition duration-200 font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
					>
						{loading ? (
							<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						) : null}
						{t('login')}
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

export default Login 