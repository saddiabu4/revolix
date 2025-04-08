import React, { useState } from 'react'

import logoImg from '../assets/logo-title.png'
import myImage from '../assets/Logo.png'
import menuImg from '../assets/menu.png'
import Imagelan from '../assets/til.png'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isTournamentOpen, setIsTournamentOpen] = useState(false)
	const [isArticlesOpen, setIsArticlesOpen] = useState(false)
	const [isNewsOpen, setIsNewsOpen] = useState(false)
	const [isRatingOpen, setIsRatingOpen] = useState(false)

	const closeAll = () => {
		setIsTournamentOpen(false)
		setIsArticlesOpen(false)
		setIsNewsOpen(false)
		setIsRatingOpen(false)
	}

	return (
		<nav className='fixed top-0 left-0 w-full bg-gray-800 text-white py-4 font-normal z-50'>
			<div className='container max-w-[1580px] w-full mx-auto px-5'>
				<header className='flex justify-between items-center'>
					<a href='#' className='flex items-center'>
						<img
							src={myImage}
							alt='Logo'
							className='w-[140px] md:w-[168px] h-[40px] md:h-[50px]'
						/>
					</a>

					<ul className='hidden lg:flex gap-6'>
						{/* Bosh sahifa bo'limi */}
						<li className='relative group'>
							<a
								href='javascript:void(0);'
								className='text-white text-xl group-hover:text-[#ff9600]'
							>
								Bosh sahifa
							</a>
						</li>

						{/* Turnirlar bo'limi */}
						<li className='relative group'>
							<a
								href='javascript:void(0);'
								className='text-white text-xl group-hover:text-[#ff9600]'
							>
								Turnirlar
							</a>
							<ul className='absolute left-0 mt-1 hidden group-hover:block w-[301px] h-[366px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 p-4'>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										PUBGM
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										DOTA 2
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										CS 2
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										MLBB
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										DOTA 1
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										VALORANT
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										FREE FIRE
									</a>
								</li>
							</ul>
						</li>

						{/* Maqolalar bo'limi */}
						<li className='relative group'>
							<a
								href='javascript:void(0);'
								className='text-white text-xl group-hover:text-[#ff9600]'
							>
								Maqolalar
							</a>
							<ul className='absolute left-0 mt-1 hidden group-hover:block w-[280px] h-[190px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 p-4'>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										MASLAHATLAR
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										INTERVYULAR
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										TURNIR SHARHLARI
									</a>
								</li>
							</ul>
						</li>

						{/* Yangiliklar bo'limi */}
						<li className='relative group'>
							<a
								href='javascript:void(0);'
								className='text-white text-xl group-hover:text-[#ff9600]'
							>
								Yangiliklar
							</a>
							<ul className='absolute left-0 mt-1 hidden group-hover:block w-[380px] h-[200px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 p-4'>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										SAYTDAGI O’ZGARISHLARI
									</a>
								</li>

								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										ESPORTS YANGILIKLARI
									</a>
								</li>

								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										O’YIN YANGILANISHLARI
									</a>
								</li>
							</ul>
						</li>

						{/* Reyting bo'limi */}
						<li className='relative group'>
							<a
								href='javascript:void(0);'
								className='text-white text-xl group-hover:text-[#ff9600]'
							>
								Reyting
							</a>
							<ul className='absolute left-0 mt-1 hidden group-hover:block w-[280px] h-[150px] bg-[#0D0D0DC7] rounded-[18px] border-2 border-white shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 p-4'>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										TOP JAMOALAR
									</a>
								</li>
								<li className='relative group hover-bosib'>
									<a
										href='#'
										className='flex items-center gap-2 px-4 py-2 text-white hover:text-[#ff9600] transition-colors duration-200 rounded-lg font-kanit font-normal text-xl'
									>
										<img
											src={logoImg}
											alt='Icon'
											className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover-bos'
										/>
										TOP O’YINCHILAR
									</a>
								</li>
							</ul>
						</li>
					</ul>

					{/* Right-side buttons for Desktop */}
					<div className='hidden lg:flex items-center gap-6'>
						<a href='#'>
							<img
								src={Imagelan}
								alt=''
								className='w-[40px] h-[40px] rounded-sm'
							/>
						</a>
						<a
							href='#'
							className='text-white text-xl bg-amber-500 py-2 px-6 rounded-md'
						>
							Hisob yaratish
						</a>
						<a
							href='#'
							className='text-white text-xl bg-gray-600 py-2 px-6 rounded-lg'
						>
							Kirish
						</a>
					</div>

					{/* Mobile vs Tablet menu button */}
					<button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
						<img src={menuImg} alt='Menu' className='w-7 h-7' />
						<img
							src={Imagelan}
							alt=''
							className='w-[30px] h-[30px] absolute top-5.5 right-15 rounded-sm'
						/>
					</button>
				</header>

				{/* Mobile vs Tablet menu */}
				{isOpen && (
					<div className='lg:hidden bg-gray-900 p-5 absolute top-[60px] left-0 w-full flex flex-col items-center space-y-4'>
						<ul className='font-normal text-base font-kanit flex flex-col items-center gap-4'>
							<li>
								<a href='#' className='mr-10 text-white text-lg'>
									Bosh sahifa
								</a>
							</li>
							{/* Mobile uchun bosilganida chiqadigan sahifalar */}
							<div className='space-y-2'>
								{/* Turnirlar */}
								<ul className='font-normal text-base font-kanit bg-gray-900 text-white rounded-md w-40 shadow-lg'>
									<li>
										<button
											onClick={() => {
												closeAll()
												setIsTournamentOpen(!isTournamentOpen)
											}}
											className='block w-full text-left px-4 py-2 bg-gray-900'
										>
											Turnirlar {isTournamentOpen ? '▲' : '▼'}
										</button>
										{isTournamentOpen && (
											<ul className='font-normal text-base font-kanit bg-gray-700 text-white rounded-md'>
												{['PUBGM', 'DOTA 2', 'CS 2', 'MLBB', 'DOTA 1', 'VALORANT', 'FREE FIRE'].map(sport => (
													<li key={sport}>
														<a
															href={`/${sport}`}
															className='block px-4 py-2 border-2 border-[#ff9600] rounded-b-lg bg-gray-600'
														>
															{sport.charAt(0).toUpperCase() + sport.slice(1)}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								</ul>

								{/* Maqolalar */}
								<ul className='font-normal text-base font-kanit bg-gray-900 text-white rounded-md w-40 shadow-lg'>
									<li>
										<button
											onClick={() => {
												closeAll()
												setIsArticlesOpen(!isArticlesOpen)
											}}
											className='block w-full text-left px-4 py-2 bg-gray-900'
										>
											Maqolalar {isArticlesOpen ? '▲' : '▼'}
										</button>
										{isArticlesOpen && (
											<ul className='font-normal text-base font-kanit bg-gray-700 text-white rounded-md'>
												{['MASLAHATLAR', 'INTERVYULAR', 'TURNIR SHARHLARI'].map(cat => (
													<li key={cat}>
														<a
															href={`/${cat}`}
															className='block px-4 py-2 bg-gray-600 border-2 border-[#ff9600] rounded-b-lg'
														>
															{cat.charAt(0).toUpperCase() + cat.slice(1)}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								</ul>

								{/* Yangiliklar */}
								<ul className='font-normal text-base font-kanit bg-gray-900 text-white rounded-md w-40 shadow-lg'>
									<li>
										<button
											onClick={() => {
												closeAll()
												setIsNewsOpen(!isNewsOpen)
											}}
											className='block w-full text-left px-4 py-2 bg-gray-900'
										>
											Yangiliklar {isNewsOpen ? '▲' : '▼'}
										</button>
										{isNewsOpen && (
											<ul className='bg-gray-700 text-white rounded-md'>
												{['SAYTDAGI O’ZGARISHLARI', 'ESPORTS YANGILIKLARI', 'O’YIN YANGILANISHLARI'].map(item => (
													<li key={item}>
														<a
															href={`/${item}`}
															className='block px-4 py-2 bg-gray-600 border-2 border-[#ff9600] rounded-b-lg'
														>
															{item.charAt(0).toUpperCase() + item.slice(1)}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								</ul>

								{/* Reyting */}
								<ul className='font-normal text-base font-kanit bg-gray-900 text-white rounded-md w-40 shadow-lg'>
									<li>
										<button
											onClick={() => {
												closeAll()
												setIsRatingOpen(!isRatingOpen)
											}}
											className='block w-full text-left px-4 py-2 bg-gray-900'
										>
											Reyting {isRatingOpen ? '▲' : '▼'}
										</button>
										{isRatingOpen && (
											<ul className='bg-gray-700 text-white rounded-md'>
												{['TOP JAMOALAR', 'TOP O’YINCHILAR'].map(item => (
													<li key={item}>
														<a
															href={`/${item}`}
															className='block px-4 py-2 bg-gray-600 border-2 border-[#ff9600] rounded-b-lg'
														>
															{item.charAt(0).toUpperCase() + item.slice(1)}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								</ul>
							</div>
						</ul>
						<div className='margin-top-4 flex items-center gap-4'>
							<a
								href='#'
								className='text-white text-lg bg-[#ff9600] py-2 px-4 rounded-md'
							>
								Hisob yaratish
							</a>
							<a
								href='#'
								className='text-white text-lg bg-gray-600 py-2 px-4 rounded-lg'
							>
								Kirish
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
