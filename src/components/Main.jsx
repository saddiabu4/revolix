import React, { useEffect, useState } from 'react'
import { FaTrophy, FaUsers, FaUser, FaMedal } from 'react-icons/fa'
import { motion } from 'framer-motion'

// images
import mainImage from '../assets/main.png'
import statisticImage from '../assets/statistic.png'

const Main = () => {
	const [stats, setStats] = useState({
		tournaments: 0,
		teams: 0,
		players: 0,
		awards: 0,
	})

	useEffect(() => {
		// Ma'lumotlarni backend'dan olish
		fetch('http://localhost:3000/api/stats')
			.then(res => res.json())
			.then(data => {
				setStats(data)
			})
			.catch(err => {
				console.error('Xatolik yuz berdi:', err)
			})
	}, [])

	return (
		<div>
			{/* main */}
			<section
				className='w-full h-screen bg-cover bg-center bg-no-repeat flex items-center'
				style={{ backgroundImage: `url(${mainImage})` }}
			>
				<div className='container mx-auto px-4'>
					{/* Main Text */}
					<motion.div
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className='text-white font-bold italic leading-[130%]
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] 
        max-w-full md:max-w-[700px] lg:max-w-[800px] xl:max-w-[977px]'
					>
						TURNIRLARGA QO’SHILING VA G‘ALABA QOZONING!
					</motion.div>

					{/* Button */}
					<motion.button
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
						className='mt-6 sm:mt-8 w-full sm:w-auto px-6 py-3 bg-amber-500 rounded-[12px]
        text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]
        font-semibold italic cursor-pointer hover:bg-[rgba(255,157,0,0.55)]'
					>
						HOZIROQ QO’SHILING!
					</motion.button>
				</div>
			</section>

			<section className='section-2'>
				<div
					className='w-full min-h-[208px] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center'
					style={{
						backgroundImage: `linear-gradient(to right, rgba(9, 9, 9, 0.7), rgba(183, 97, 0, 0.6)), url(${statisticImage})`,
					}}
				>
					<div className='container mx-auto px-4 py-8'>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center'>
							{/* Turnirlar */}
							<motion.div
								className='flex flex-col items-center gap-2'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<span className='text-lg sm:text-xl md:text-2xl font-medium'>
									Turnirlar
								</span>
								<div className='flex items-center gap-2'>
									<FaTrophy className='text-3xl sm:text-4xl' />
									<span className='text-3xl sm:text-4xl font-bold'>
										{stats.tournaments}
									</span>
								</div>
							</motion.div>

							{/* Jamoalar */}
							<motion.div
								className='flex flex-col items-center gap-2'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<span className='text-lg sm:text-xl md:text-2xl font-medium'>
									Jamoalar
								</span>
								<div className='flex items-center gap-2'>
									<FaUsers className='text-3xl sm:text-4xl' />
									<span className='text-3xl sm:text-4xl font-bold'>
										{stats.teams}
									</span>
								</div>
							</motion.div>

							{/* O'yinchilar */}
							<motion.div
								className='flex flex-col items-center gap-2'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<span className='text-lg sm:text-xl md:text-2xl font-medium'>
									O'yinchilar
								</span>
								<div className='flex items-center gap-2'>
									<FaUser className='text-3xl sm:text-4xl' />
									<span className='text-3xl sm:text-4xl font-bold'>
										{stats.players}
									</span>
								</div>
							</motion.div>

							{/* Mukofotlar */}
							<motion.div
								className='flex flex-col items-center gap-2'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<span className='text-lg sm:text-xl md:text-2xl font-medium'>
									Mukofotlar
								</span>
								<div className='flex items-center gap-2'>
									<FaMedal className='text-3xl sm:text-4xl' />
									<span className='text-3xl sm:text-4xl font-bold'>
										{stats.awards}
									</span>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
