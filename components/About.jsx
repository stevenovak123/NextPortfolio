import React from 'react'

const About = () => {
	return (
		<div name='About' className='w-full h-screen bg-GreyColor text-black'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-black'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold '>
						<p>Hi. I am Steve, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am an under-graduate in Information technology (3 Year Degree
							course) from St.Xaviers College, Mumbai. I am passionate about
							building software that helps people.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
