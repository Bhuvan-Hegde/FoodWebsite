import React from 'react'
import CreatBg from './images/burger.png'
import { FaBasketShopping } from 'react-icons/fa6'
import ColaImg from './images/cola.png'

function Creativity() {
  return (
    <div style={{backgroundImage: `url(${CreatBg})`}} className='w-full h-screen bg-center bg-no-repeat z-[-1] relative'>
      <div className='text-white w-100 text-6xl font-bold pt-20 ml-15'>
        WHERE CREATIVITIY MEETS FLAVOUR
      </div>
      <div className='text-white w-50 text-l font-semibold text-left absolute left-20 top-125'>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error delectus, architecto explicabo quas dolor illum dolores dicta dolorum expedita impedit.
      </div>

      <div>
        <div className='w-[330px] h-110 rounded-lg border border-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.15)] rotate-[355deg] mt-5'>
            
            <div>
            <div className='flex m-[25px] w-80% h-12 align-center justify-around bg-white border border-gray-300 font-[Inter] font-semibold gap-10 relative mt-90 '>
                <div className='flex flex-col justify-center align-center'>
                    <div>ITEM 1</div>
                    <div className='text-[11px] text-[gray]'>$10.99</div>
                </div>
                <div className='w-[1px] h-12 bg-gray-300 absolute right-[100px]'></div>
                <div  className='flex flex-col justify-center align-center'>
                <FaBasketShopping />

                </div>
            </div>
            </div>
            </div>


      </div>
    </div>
  )
}

export default Creativity
