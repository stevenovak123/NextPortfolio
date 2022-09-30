import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll/modules';

const Hero = () => {
  return (
    <div name="Hero" className="w-full h-screen bg-GreyColor">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hello, My name is </p>
        <h1 className="text-4xl font-bold sm:text-7xl ">Steve Dsouza</h1>
        <h2 className="text-4xl font-bold sm:text-7xl">
          I am a Software Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          I am a fresher looking to help develop websites & softwares that could
          help make your life easier .
        </p>
        <div>
          <Link to="Work" smooth={true} duration={500}>
            <button className="flex items-center px-6 py-3 my-2 border-2 border-black group hover:bg-black hover:text-white">
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
