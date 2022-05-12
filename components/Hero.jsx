import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll/modules'

const Hero = () => {
	return (
		<div name='Hero' className='w-full h-screen bg-GreyColor'>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p>Hello, My name is </p>
				<h1 className='text-4xl sm:text-7xl font-bold '>Steve Dsouza</h1>
				<h2 className='text-4xl sm:text-7xl font-bold'>
					I am a Web Developer.
				</h2>
				<p className='py-4 max-w-[700px]'>
					I am a fresher looking to help develop websites just like this one.
					Currently I am focused on building responsive front-ends & learning
					Node.js
				</p>
				<div>
					<button className='group border-2 border-black px-6 py-3 my-2 flex  items-center  hover:bg-black hover:text-white'>
						View Work
						<span className='group-hover:rotate-90 duration-300'>
							<Link to='Work' smooth={true} duration={500}>
								<HiArrowNarrowRight className='ml-3' />
							</Link>
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
