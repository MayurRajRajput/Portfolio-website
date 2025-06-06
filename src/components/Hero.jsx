import React from 'react';
import Lottie from 'lottie-react';
import devAnimation from '../assets/developer.json';
import { Link } from 'react-scroll';

const Hero = ({ islightmode }) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-center pt-20 gap-2 xl:gap-28 items-center transition-colors ease-linear duration-700 min-h-screen ${islightmode ? "text-black bg-gray-200" : 'text-white bg-black'}`}>

      {/* Left Section */}
      <div className={`flex flex-col justify-center gap-10 ${!islightmode ? "text-gray-300" : "text-gray-500"}`}>
        <div>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold transition-colors ease-linear duration-700'>
            Hi, I'm
            <span className='text-2xl sm:text-4xl md:text-6xl ml-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x'>
              Mayur Raj
            </span>
          </h2>
        </div>

        <div className='text-gray-500 w-[250px] sm:w-[370px] md:w-[486px]'>
          <h2 className='text-md sm:text-lg md:text-2xl'>Full Stack Developer & Python Enthusiast</h2>
          <p className='text-xs sm:text-md md:text-lg mt-4'>I build scalable, high-performance web apps with a focus on clean design, modern tech, and seamless user experiences.</p>
        </div>

        <div className='flex gap-2 items-center sm:gap-5'>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <button className='border px-4 sm:px-6 py-3 transition-colors ease-linear duration-700 rounded-md bg-blue-700 text-gray-200 border-none font-semibold'>
              Get In touch
            </button>
          </Link>

          <a href="/MayurRaj_Resume.pdf" download>
            <button className="relative inline-block px-4 sm:px-6 py-3 rounded text-white font-semibold group">
              <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x group-hover:animate-gradient-x z-0"></span>
              <span className={`absolute inset-0 m-[4px] rounded-md transition-colors ease-linear duration-700 z-10 ${islightmode ? "bg-gray-200" : "bg-black"}`}></span>
              <span className="relative z-20 flex items-center gap-2">
                <span className={`font-semibold transition-colors ease-linear duration-700 text-lg ${!islightmode ? "text-gray-300" : "text-gray-500"}`}>
                  Resume
                </span>
                <span className="animate-bounce">📩</span>
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Right Section (Animation) */}
      <div className="flex justify-center items-center">
        <Lottie animationData={devAnimation} loop={true} className="sm:w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]" />
      </div>
    </div>
  );
}

export default Hero;
