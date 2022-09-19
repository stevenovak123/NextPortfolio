import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const SideNav = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-blue-600 ">
          <a
            className="flex items-center justify-between w-full text-black"
            href="https://www.linkedin.com/in/stevenovak123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-indigo-600 ">
          <a
            className="flex items-center justify-between w-full text-black"
            href="https://github.com/stevenovak123"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-green-600 ">
          <a
            className="flex items-center justify-between w-full text-black"
            href="mailto:stevenovak0802@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px]  duration-100 hover:bg-slate-600 ">
          <a
            className="flex items-center justify-between w-full text-black transition "
            title="Click to download"
            href="./SteveDsouzaCVIT.pdf"
            download
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
