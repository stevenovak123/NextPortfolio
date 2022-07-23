import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll/modules'
const Navbar = () => {
	const [toggleHamburger, setToggleHamburger] = useState(false)
	const handleHamburgerClick = () => {
		setToggleHamburger(!toggleHamburger)
	}
	return (
		<div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-GreyColor text-black'>
			<div>
				<Image
					src={logo}
					width={50}
					height={30}
					alt='logo'
					layout='responsive'
				/>
			</div>
			{/* //* Menu */}
			<ul className='hidden md:flex'>
				<li>
					<Link to='Hero' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='About' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='Skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='Work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to='Contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			<div onClick={handleHamburgerClick} className='md:hidden z-10'>
				{!toggleHamburger ? <FaBars /> : <FaTimes />}
			</div>
			<ul
				className={
					!toggleHamburger
						? 'hidden'
						: 'absolute z-50 top-0 left-0 w-full  h-screen bg-GreyColor flex flex-col justify-center  items-center'
				}
			>
				<li className='py-6 text-4xl'>
					<Link
						onClick={handleHamburgerClick}
						to='Hero'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link
						onClick={handleHamburgerClick}
						to='About'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link
						onClick={handleHamburgerClick}
						to='Skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link
						onClick={handleHamburgerClick}
						to='Work'
						smooth={true}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link
						onClick={handleHamburgerClick}
						to='Contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-blue-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://www.linkedin.com/in/stevenovak123/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-indigo-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://github.com/stevenovak123'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-green-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='mailto:stevenovak0802@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-slate-600 '>
						<a
							className='flex  justify-between items-center w-full text-black'
							href='https://docs.google.com/document/d/1r3dmDnmuXoZ9pvA31lzmM0_FLnvx9RQ3bFUKj6dfEpI/edit?usp=sharing/'
							target='_blank'
							rel='noopener noreferrer'
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
