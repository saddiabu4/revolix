import React, { useState } from "react"
import {
	FaBullhorn,
	FaChevronLeft,
	FaCog,
	FaGamepad,
	FaInstagram,
	FaMedal,
	FaShoppingBag,
	FaSignOutAlt,
	FaStar,
	FaTelegram,
	FaTrophy,
	FaUsers,
	FaYoutube
} from "react-icons/fa"

// Login form component
const LoginForm = ({ setUser }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		setUser({ username })
	}
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
			>
				<h2 className="text-2xl font-bold mb-6 text-center">Kirish</h2>
				<div className="mb-4">
					<label className="block mb-1 text-gray-700">Foydalanuvchi nomi</label>
					<input
						type="text"
						className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						autoFocus
					/>
				</div>
				<div className="mb-6">
					<label className="block mb-1 text-gray-700">Parol</label>
					<input
						type="password"
						className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
				>
					Kirish
				</button>
			</form>
		</div>
	)
}

// User profile component
const UserProfile = ({ user, setUser }) => (
	<div className="bg-[#101114] min-h-screen flex">
		<Sidebar isOpen={true} setIsOpen={() => { }} />
		<div className="flex-1 flex flex-col">
			<Header setIsOpen={() => { }} />
			<main className="flex-1 p-4 sm:p-8">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto text-center">
						<h2 className="text-2xl font-bold mb-4">Xush kelibsiz, {user.username}!</h2>
						<p className="mb-6 text-gray-600">Siz tizimga muvaffaqiyatli kirdingiz.</p>
						<button
							onClick={() => setUser(null)}
							className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
						>
							Chiqish
						</button>
					</div>
				</div>
			</main>
		</div>
	</div>
)

// Sidebar Component
const Sidebar = ({ isOpen, setIsOpen }) => {
	const menu = [
		{ icon: <FaGamepad />, label: "O‘yinlar" },
		{ icon: <FaUsers />, label: "Jamoalar" },
		{ icon: <FaTrophy />, label: "Turnirlar" },
		{ icon: <FaMedal />, label: "Yutuqlar" },
		{ icon: <FaCog />, label: "Sozlamalar" },
		{
			icon: (
				<span className="relative flex items-center">
					<FaStar className="text-yellow-400" />
					<span className="absolute -right-2 -top-2 flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
					</span>
				</span>
			),
			label: "Hisobni to‘ldirish",
		},
		{ icon: <FaShoppingBag />, label: "Aksessuarlar" },
		{ icon: <FaBullhorn />, label: "Aksiya va E’lonlar" },
		{ icon: <FaSignOutAlt />, label: "Chiqish" },
	]

	return (
		<>
			{/* Overlay for mobile */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden transition-opacity ${isOpen ? "block" : "hidden"}`}
				onClick={() => setIsOpen(false)}
			/>
			<aside
				className={`fixed z-40 inset-y-0 left-0 bg-[#181A20] text-white w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-200 ease-in-out sm:relative sm:translate-x-0 sm:w-64 flex flex-col`}
				style={{ minHeight: "100vh" }}
			>
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
					<div className="flex items-center space-x-2">
						<span className="font-bold text-2xl">Revolix</span>
						<span className="text-xs text-gray-400">Esports Admin</span>
					</div>
					<button
						className="sm:hidden text-gray-400 hover:text-white"
						onClick={() => setIsOpen(false)}
					>
						<FaChevronLeft size={20} />
					</button>
				</div>
				<nav className="flex-1 px-2 py-4">
					<ul className="space-y-1">
						{menu.map((item, idx) => (
							<li key={idx}>
								<a
									href="#"
									className={`flex items-center px-4 py-2 rounded-lg hover:bg-[#23262F] transition-colors ${idx === 8 ? "mt-2" : ""
										}`}
								>
									<span className="text-xl mr-3">{item.icon}</span>
									<span>{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex justify-center space-x-4 pb-6 mt-auto">
					<a href="#" className="bg-[#23262F] p-2 rounded-full hover:bg-pink-600 transition-colors">
						<FaInstagram className="text-xl" />
					</a>
					<a href="#" className="bg-[#23262F] p-2 rounded-full hover:bg-blue-500 transition-colors">
						<FaTelegram className="text-xl" />
					</a>
					<a href="#" className="bg-[#23262F] p-2 rounded-full hover:bg-red-600 transition-colors">
						<FaYoutube className="text-xl" />
					</a>
				</div>
			</aside>
		</>
	)
}

// Header Component
const Header = ({ setIsOpen }) => (
	<header className="bg-transparent px-4 py-3 flex items-center sm:hidden">
		<button
			className="text-gray-400 hover:text-white"
			onClick={() => setIsOpen(true)}
		>
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
				<rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
				<rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
				<rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
			</svg>
		</button>
		<span className="ml-4 font-bold text-lg text-white">Profil</span>
	</header>
)

// Banner Component
const Banner = ({ color, title, subtitle, button, img }) => (
	<div
		className={`w-full rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-6 mb-6 ${color} relative overflow-hidden`}
		style={{ minHeight: 140 }}
	>
		<div className="flex-1">
			<h2 className="text-2xl font-bold mb-2">{title}</h2>
			<p className="mb-4">{subtitle}</p>
			<button className="px-5 py-2 rounded-lg font-semibold text-white shadow-md"
				style={{ background: "rgba(0,0,0,0.15)" }}>
				{button}
			</button>
		</div>
		<div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0">
			<img src={img} alt="banner" className="h-28 md:h-32 w-auto object-contain" />
		</div>
	</div>
)

// Main Profile Page
const Profil = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [user, setUser] = useState(null)

	if (!user) {
		return <LoginForm setUser={setUser} />
	}

	return (
		<UserProfile user={user} setUser={setUser} />
	)
}

export default Profil