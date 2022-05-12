import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import TAILWIND from '../assets/tailwind.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Firebase from '../assets/firebase.png'
import Image from 'next/image'

const Skills = () => {
	return (
		<div name='Skills' className='bg-GreyColor text-black w-full h-screen '>
			<div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-black '>
						Skills
					</p>
					<p className='py-4'>These are the technologies I have worked with</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={HTML}
							className='w-20 mx-auto '
							height={125}
							width={140}
							alt='HTML icon'
							layout='responsive'
						/>
						<p>HTML</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={CSS}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='CSS icon'
							layout='responsive'
						/>
						<p>CSS</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={JS}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='JavaScript icon'
							layout='responsive'
						/>
						<p>JavaScript</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={REACT}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='React icon'
							layout='responsive'
						/>
						<p>React</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={TAILWIND}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='Tailwind icon'
							layout='responsive'
						/>
						<p>TailwindCSS</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={NODE}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='NODE icon'
							layout='responsive'
						/>
						<p>Node.js</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={Mongo}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='Mongo icon'
							layout='responsive'
						/>
						<p>MongoDB</p>
					</div>
					<div className='shadow-md shadow-[#b8b5ad] hover:scale-105  duration-500'>
						<Image
							src={Firebase}
							className='w-20 mx-auto'
							height={125}
							width={140}
							alt='Firebase icon'
							layout='responsive'
						/>
						<p>Firebase</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
