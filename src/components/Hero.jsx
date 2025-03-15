import React from 'react';
import Navbar from './Navbar.jsx';
import BgImg from './images/bgImg.png';
import girlImg from './images/girlImg.png';
import { IoIosArrowRoundUp } from "react-icons/io";

function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center text-center overflow-hidden" style={{ backgroundImage: `url(${BgImg})` }}>
      {/* Navbar */}
      <div className=" top-0 w-full z-50">
        {/* <Navbar /> */}
      </div>

      {/* Hero Text */}
      <p className="text-[10rem] leading-none font-[Anton] text-white pt-[40px] lg:pt-[100px] lg:text-[11rem]">
        ENJOY EVERY BITE
      </p>

      {/* Hero Image */}
      <div className="absolute bottom-0 w-full flex justify-center items-end h-full">
        <img src={girlImg} alt="A woman enjoying food" className="w-[700px] max-w-full object-contain z-10" />
      </div>

      {/* Red Circle (Might be a design element, you can use Tailwind for this) */}
      <span className="hidden w-[50px] h-[50px] bg-red-500  rounded-[50%] absolute bottom-50 left-63 z-[10] lg:flex items-center justify-center text-white text-[30px] rotate-[45deg]"><IoIosArrowRoundUp /></span>
      <div className="hidden  absolute w-[190px] h-lg bottom-30 left-44 z-[10] lg:flex items-center justify-center text-white text-[10px] ">   
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio exercitationem ut ab numquam! Accusamus perferendis officiis consequatur ad officia!
        </p>
        </div>

    </div>
  );
}

export default Hero;
