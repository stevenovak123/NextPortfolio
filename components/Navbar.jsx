import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-scroll/modules';
import { SideNav } from './SideNav';
const Navbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const handleHamburgerClick = () => {
    setToggleHamburger(!toggleHamburger);
  };
  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-GreyColor text-black">
      <div>
        <Image
          src={logo}
          width={50}
          height={30}
          alt="logo"
          layout="responsive"
        />
      </div>
      {/* //* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="Hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="OpenSource" smooth={true} duration={500}>
            OSS
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleHamburgerClick} className="z-10 md:hidden">
        {!toggleHamburger ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !toggleHamburger
            ? 'hidden'
            : 'absolute z-50 top-0 left-0 w-full  h-screen bg-GreyColor flex flex-col justify-center  items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="Hero"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="About"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="Skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="Work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="OpenSource"
            smooth={true}
            duration={500}
          >
            OSS
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={handleHamburgerClick}
            to="Contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <SideNav />
    </div>
  );
};

export default Navbar;
