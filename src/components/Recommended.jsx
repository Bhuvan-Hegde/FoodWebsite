import React from 'react'
import ColaImg from './images/cola.png'
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";

function recommended() {
  return (
    <div className='w-full h-screen flex flex-col align-center pt-[80px] bg-[#FFFEFE] text-center'>
        <div>
        <h1 className='text-[1.8rem]  font-[Inter] leading-8 font-medium'>Recommended Food <br /> And Beverage For Every Mood</h1>
      
      <h1 className='text-[0.7rem]  font-[Inter] leading-8 font-medium mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut!</h1>
        </div>
        <div className="flex justify-center mt-5 bg-[#FAFBFB] w-[185px] py-1 rounded-full gap-2 mx-auto">
            <button className="px-4 py-2 rounded-full text-black bg-transparent focus:bg-white focus:border focus:border-white">
                Beverage
            </button>
            <button className="px-4 py-2 rounded-full text-black bg-transparent focus:bg-white focus:border focus:border-white">
                Food
            </button>
        </div>

        {/* food containers */}
        <div className='flex md:flex-wrap gap-4 mt-5 lg:px-30 self-center items-center justify-center text-left'>
           
            <div className='w-[310px] bg-[#FAFBFB] rounded-lg'><img src={ColaImg} alt="" /> 
            <div>
            <div className='flex m-[25px] w-80% h-12 align-center justify-around bg-white border border-gray-300 font-[Inter] font-semibold gap-10 relative'>
                <div className='flex flex-col justify-center align-center'>
                    <div>DRINK 1</div>
                    <div className='text-[11px] text-[gray]'>$10.99</div>
                </div>
                <div className='w-[1px] h-12 bg-gray-300 absolute right-[90px]'></div>
                <div  className='flex flex-col justify-center align-center'>
                <FaBasketShopping />

                </div>
            </div>
            </div>
            </div>


            <div className='w-[310px] bg-[#FAFBFB] rounded-lg'><img src={ColaImg} alt="" /> 
            <div>
            <div className='flex m-[25px] w-80% h-12 align-center justify-around bg-white border border-gray-300 font-[Inter] font-semibold gap-10 relative'>
                <div className='flex flex-col justify-center align-center'>
                    <div>DRINK 1</div>
                    <div className='text-[11px] text-[gray]'>$10.99</div>
                </div>
                <div className='w-[1px] h-12 bg-gray-300 absolute right-[90px]'></div>
                <div  className='flex flex-col justify-center align-center'>
                <FaBasketShopping />

                </div>
            </div>
            </div>
            </div>


            <div className='w-[310px] bg-[#FAFBFB] rounded-lg'><img src={ColaImg} alt="" /> 
            <div>
            <div className='flex m-[25px] w-80% h-12 align-center justify-around bg-white border border-gray-300 font-[Inter] font-semibold gap-10 relative'>
                <div className='flex flex-col justify-center align-center'>
                    <div>DRINK 1</div>
                    <div className='text-[11px] text-[gray]'>$10.99</div>
                </div>
                <div className='w-[1px] h-12 bg-gray-300 absolute right-[90px]'></div>
                <div  className='flex flex-col justify-center align-center'>
                <FaBasketShopping />

                </div>
            </div>
            </div>
            </div>
          
            
           
        </div>
        <div className='hidden justify-center mt-5 gap-160 lg:flex text-[30px]'>
            <IoIosArrowRoundBack className='bg-gray-100 rounded-[50%]'/>
            <IoIosArrowRoundForward className='bg-gray-100 rounded-[50%]' />
        </div>

    </div>
  )
}

export default recommended
