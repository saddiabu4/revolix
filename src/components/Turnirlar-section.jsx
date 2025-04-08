import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import orqaFon from '../assets/orqafon1.png'
import turnirRasm from '../assets/turnir.png'

const data = [
	{
		image: null,
		game: 'PUBGM',
		date: '31.03.2025 | 00:00',
		name: 'Danger e-sports tournament S1',
		prize: 100,
	},
	{
		image: null,
		game: 'DOTA 2',
		date: '25.02.2025 | 18:00',
		name: 'Dota Warriors Cup',
		prize: 200,
	},
	{
		image: null,
		game: 'CS2',
		date: '20.01.2025 | 20:00',
		name: 'Counter Global Clash',
		prize: 150,
	},
	{
		image: null,
		game: 'MLBB',
		date: '05.04.2025 | 17:30',
		name: 'Mobile Blitz S2',
		prize: 300,
	},
	{
		image: null,
		game: 'PUBGM',
		date: '10.06.2025 | 21:00',
		name: 'Danger Pro League',
		prize: 250,
	},
	{
		image: null,
		game: 'CS2',
		date: '12.07.2025 | 15:00',
		name: 'CS2 Arena Fight',
		prize: 180,
	},
]

const Turnirlar = props => {
	const [startIndex, setStartIndex] = useState(0)
	const itemsPerSlide = 3

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext()
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	const handleNext = () => {
		setStartIndex(prev => (prev + itemsPerSlide) % data.length)
	}

	const handlePrev = () => {
		setStartIndex(prev => (prev - itemsPerSlide + data.length) % data.length)
	}

	const visibleItems = data.slice(startIndex, startIndex + itemsPerSlide)
	const isWrapping =
		visibleItems.length < itemsPerSlide
			? [...visibleItems, ...data.slice(0, itemsPerSlide - visibleItems.length)]
			: visibleItems

	return (
		<div
			className='w-full h-1/3 bg-cover bg-center bg-no-repeat text-white '
			style={{
				backgroundImage: `url(${orqaFon})`,
			}}
		>
			{/* Turnirlar chizigi */}
			<section className='flex justify-center items-center px-2'>
				<div className='container mx-auto flex flex-col items-center h-full mt-20'>
					<div className='text-white w-full'>
						{/* TURNIRLAR - chap yuqori */}
						<div className='flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start'>
							{/* Chap chiziq */}
							<motion.div
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 2.3, ease: 'easeOut' }}
							>
								<div className='w-10 sm:w-20 md:w-24 h-1 bg-[#ff9600]' />
							</motion.div>

							{/* Sarlavha */}
							<motion.div
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 2, ease: 'easeOut' }}
							>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold italic'>
									TURNIRLAR
								</h2>
							</motion.div>

							{/* Keyingi chiziqlar */}
							<div className='flex items-center gap-2.5 ml-2 flex-wrap'>
								{[
									{
										key: 0,
										w: '2xl:w-[717px] xl:w-[517px] lg:w-[370px] md:w-[170px] max-sm:w-10 sm:w-[170px]',
									},
									{
										key: 1,
										w: '2xl:w-[150px] xl:w-[100px] md:w-[50px] sm:w-[30px]',
									},
									{
										key: 2,
										w: '2xl:w-[100px] xl:w-[80px] md:w-[30px] sm:w-[20px]',
									},
									{
										key: 3,
										w: '2xl:w-[50px] xl:w-[20px] md:w-[15px] sm:w-[10px]',
									},
									{ key: 4, w: 'xl:w-[10px] md:w-[5px] sm:w-[5px]' },
								].map(({ key, w }, i) => (
									<motion.div
										key={key}
										initial={{ x: 300, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 2 - i * 0.3, ease: 'easeOut' }}
									>
										<div className={`h-1 bg-[#ff9600] ${w}`} />
									</motion.div>
								))}
							</div>
						</div>

						{/* Filter tugmalari */}
						<div className='w-full container flex justify-center sm:justify-end mt-6 px-2 sm:px-4 overflow-hidden'>
							<div className='flex flex-wrap gap-3 justify-center sm:justify-end max-w-full'>
								{['PUBGM', 'CS2', 'MLBB', 'DOTA 2', 'YANA'].map(
									(game, index) => (
										<motion.button
											key={index}
											className='px-4 py-1 border rounded-2xl font-medium transition hover:bg-amber-500 text-sm whitespace-nowrap'
											initial={{ x: 40, opacity: 0 }} // ilgari 100 edi
											whileInView={{ x: 0, opacity: 1 }}
											viewport={{ once: true }} // animatsiyani faqat bir marta qil
											transition={{ duration: 1, delay: 0.2 * index }}
										>
											{game}
										</motion.button>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Turnirlar kartalari */}
			<section className='section-2'>
				<div className='container mx-auto px-4'>
					{/* Tugmalar */}
					<div className='flex justify-end gap-4 mb-4 mt-5'>
						<button
							onClick={handlePrev}
							className='px-5 py-2 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition'
						>
							Oldingisi
						</button>
						<button
							onClick={handleNext}
							className='px-5 py-2 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition'
						>
							Keyingisi
						</button>
					</div>

					{/* Turnir kartalari */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500'>
						{isWrapping.map((item, index) => (
							<div key={index} className='card'>
								<div className='max-w-sm rounded-xl overflow-hidden text-white p-4 mx-auto'>
									<div className='w-full h-48 bg-gray-800 rounded-lg overflow-hidden'>
										<img
											src={item.image || turnirRasm}
											alt='Tournament Banner'
											className='w-full h-full object-cover'
										/>
									</div>

									<div className='mt-4 space-y-2'>
										<div className='flex justify-between text-sm text-gray-400'>
											<p>
												O‘YIN:{' '}
												<span className='text-white font-medium'>
													{item.game}
												</span>
											</p>
											<p>
												SANA:{' '}
												<span className='text-white font-medium'>
													{item.date}
												</span>
											</p>
										</div>
										<p className='text-amber-500 font-normal text-2xl'>
											{item.name}
										</p>
										<p className='text-sm text-gray-300'>
											SOVRIN:{' '}
											<span className='text-white font-medium'>
												${item.prize}
											</span>
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Barchasi tugmasi */}
			<section className='w-full flex justify-center items-center mt-10 py-10'>
				<div className='p-[2px] rounded-2xl border '>
					<button className='px-6 py-2 text-3xl font-medium rounded-2xl text-white hover:scale-105 transition duration-300'>
						BARCHASI
					</button>
				</div>
			</section>

			<section className='flex justify-center items-center px-4'>
				<div className='container mx-auto flex flex-col items-center h-full mt-20 w-full'>
					<div className='text-white w-full'>
						{/* CHIZIQLAR VA SARLAVHA */}
						<div className='flex flex-wrap items-center justify-center sm:justify-start gap-4'>
							{/* CHAPDAGI CHIZIQLAR */}
							<div className='flex items-center gap-2.5 flex-wrap'>
								{[
									'xl:w-[5px] md:w-[5px] sm:w-[5px]',
									'2xl:w-[30px] xl:w-[20px] md:w-[15px] sm:w-[10px]',
									'2xl:w-[80px] xl:w-[80px] md:w-[30px] sm:w-[20px]',
									'2xl:w-[100px] xl:w-[100px] md:w-[50px] sm:w-[30px]',
									'2xl:w-[710px] xl:w-[517px] lg:w-[370px] md:w-[100px] max-sm:w-5 sm:w-[50px]',
								].map((widthClass, i) => (
									<motion.div
										key={i}
										initial={{ x: 300, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.8 + i * 0.3, ease: 'easeOut' }}
									>
										<div className={`h-1 bg-[#ff9600] ${widthClass}`} />
									</motion.div>
								))}
							</div>

							{/* SARLAVHA */}
							<motion.div
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 2, ease: 'easeOut' }}
							>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold italic whitespace-nowrap'>
									TOP JAMOALAR
								</h2>
							</motion.div>

							{/* O‘NGDA CHIZIQ */}
							<motion.div
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 2.3, ease: 'easeOut' }}
							>
								<div className='w-10 sm:w-20 max-sm:w-2.5 md:w-24 h-1 bg-[#ff9600]' />
							</motion.div>
						</div>

						{/* FILTER TUGMALARI */}
						<div className='w-full flex justify-center sm:justify-start mt-6 px-2 sm:px-4 overflow-hidden'>
							<div className='flex flex-wrap gap-3 justify-center sm:justify-start max-w-full'>
								{['PUBGM', 'CS2', 'MLBB', 'DOTA 2', 'YANA'].map(
									(game, index) => (
										<motion.button
											key={index}
											className='px-4 py-1 text-sm md:text-base border border-white/30 rounded-2xl font-medium transition hover:bg-amber-500 hover:text-black whitespace-nowrap'
											initial={{ x: -40, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 1, delay: 0.2 * index }}
										>
											{game}
										</motion.button>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Turnirlar
