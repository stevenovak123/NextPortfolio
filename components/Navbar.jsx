import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
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
			{/* //Todo: Hamburger */}
			<div onClick={handleHamburgerClick} className='md:hidden z-10'>
				{!toggleHamburger ? <FaBars /> : <FaTimes />}
			</div>
			{/* //Todo: Mobile menu */}
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
			{/* //Todo: Social Icon */}
			<div className='hidden'></div>
		</div>
	)
}

export default Navbar
