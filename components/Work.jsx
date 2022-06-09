import React from 'react'
const Work = () => {
	return (
		<div
			name='Work'
			className='w-full md:h-screen text-black bg-GreyColor pt-10'
		>
			<div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4  border-black'>
						Work
					</p>
					<p className='py-6'>Check out some of my recent work</p>
				</div>

				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-5'>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: 'url(./AcmeStore.jpg)' }}
						className='shadow-lg shadow-[#b8b5ad] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Ecommerce Application with Tailwind CSS, Firebase & Stripe
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://acmestore.vercel.app/ '
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/VandanRogheliya/ACME-e-comm-Nextjs'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: 'url(./LandingTemplate.jpg)' }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Html & Tailwind CSS template
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://stevenovak123.github.io/TailwindTemplate/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/stevenovak123/TailwindTemplate'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: 'url(./StarbucksTemplate.jpg)' }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Html & CSS template
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://stevenovak123.github.io/html-practice/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/stevenovak123/html-practice'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: 'url(./crypto.png)' }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Crypto tracker with React,Tailwind CSS & Firebase
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://crypto-tracker-c6c70.web.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/stevenovak123/cryptoapiReact'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
