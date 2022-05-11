import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
	return (
		<div className='w-full h-screen bg-GreyColor'>
			{/* //Todo:  Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p>Hello, My name is </p>
				<h1 className='text-4xl sm:text-7xl font-bold '>Steve Dsouza</h1>
				<h2 className='text-4xl sm:text-7xl font-bold'>I'm a Web Developer.</h2>
				<p className='py-4 max-w-[700px]'>
					I'm a fresher looking to help develop websites just like this one.
					Currently I'm focused on building responsive front-ends & learning
					Node.js
					<div>
						<button className='group border-2 border-black px-6 py-3 my-2 flex  items-center  hover:bg-black hover:text-white'>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3 ' />
							</span>
						</button>
					</div>
				</p>
			</div>
		</div>
	)
}

export default Hero
