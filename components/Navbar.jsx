import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
	const [toggleHamburger, setToggleHamburger] = useState(false)
	const handleHamburgerClick = () => {
		setToggleHamburger(!toggleHamburger)
	}
	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-GreyColor text-black'>
			<div>
				<Image src={logo} width={50} height={30} alt='logo' />
			</div>
			{/* //* Menu */}
			<ul className='hidden md:flex'>
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>
			<div onClick={handleHamburgerClick} className='md:hidden z-10'>
				{!toggleHamburger ? <FaBars /> : <FaTimes />}
			</div>
			<ul
				className={
					!toggleHamburger
						? 'hidden'
						: 'absolute top-0 left-0 w-full  h-screen bg-GreyColor flex flex-col justify-center  items-center'
				}
			>
				<li className='py-6 text-4xl'>Home</li>
				<li className='py-6 text-4xl'>About</li>
				<li className='py-6 text-4xl'>Skills</li>
				<li className='py-6 text-4xl'>Work</li>
				<li className='py-6 text-4xl'>Contact</li>
			</ul>
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-blue-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://www.linkedin.com/in/stevenovak123/'
							target='_blank'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-indigo-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://github.com/stevenovak123'
							target='_blank'
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-green-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://www.linkedin.com/in/stevenovak123/'
							target='_blank'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-slate-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://www.linkedin.com/in/stevenovak123/'
							target='_blank'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
