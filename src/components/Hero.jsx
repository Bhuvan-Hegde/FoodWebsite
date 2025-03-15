import React from 'react';
import Navbar from './Navbar.jsx';
import BgImg from './images/bgImg.png';
import mainImg from './images/flying.png'
import { IoIosArrowRoundUp } from "react-icons/io";

function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center text-center overflow-hidden" style={{ backgroundImage: `url(${BgImg})` }}>
      {/* Navbar */}
      <div className=" top-0 w-full z-50">
        {/* <Navbar /> */}
      </div>

      {/* Hero Text */}
      <p className="text-[9rem] w-[100px] leading-none font-[Anton] text-white pt-[30px] lg:pt-[100px] lg:text-[7.5rem] pl-45">
        SUPER DELICIOUS BURGERS
      </p>

      {/* Hero Image */}
      <div className='absolute top-20 right-40 rotate-[355deg]'><img className='w-150' src={mainImg} alt="" />
      </div>
  

   
      <span className="hidden w-[50px] h-[50px] bg-red-500  rounded-[50%] absolute bottom-50 left-63 z-[10] lg:flex items-center justify-center text-white text-[30px] rotate-[45deg]"><IoIosArrowRoundUp /></span>
      <div className="hidden  absolute w-[190px] h-lg bottom-30 left-44 z-[10] lg:flex items-center justify-center text-white text-[10px] ">   
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio exercitationem ut ab numquam! Accusamus perferendis officiis consequatur ad officia!
        </p>
        </div>

    </div>
  );
}

export default Hero;
