import React from 'react'

const Contact = () => {
	return (
		<div
			name='Contact'
			className='lg:mt-18 sm:pb-36 sm:py-12 py-6 bg-GreyColor'
		>
			<div className='max-w-[1000px] px-4 mx-auto text-black'>
				<div className='pb-8 mb-2 border-t-2 border-gray-300 ' />
				<div className='flex flex-col justify-between lg:flex-row items-center'>
					<p>Built with Next.js, TailwindCSS</p>
					<div className='flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0'>
						<a
							href='https://twitter.com/stevenovak123'
							target='_blank'
							rel='noopener noreferrer'
						>
							Twitter
						</a>
						<a
							href='https://www.linkedin.com/in/stevenovak123/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						<a
							href='https://github.com/stevenovak123'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
