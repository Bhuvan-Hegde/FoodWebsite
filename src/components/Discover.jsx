import React from 'react'
import coffee from './images/coffee.png'
import { CiCoffeeCup } from "react-icons/ci";
import { LuMilk } from "react-icons/lu";
import { MdOutlineNoFood } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

function Discover() {
  return (
    <div style={{backgroundImage: `url(${coffee})`}} className='w-full h-screen bg-center bg-cover bg-no-repeat z-[-1] relative flex items-center justify-center'>
        <div className='w-110 h-150 bg-white absolute left-40 top-1/2 -translate-y-1/2 rounded-lg text-center'>

            <div className='font-[Inter] bg-black text-white w-[110px] text-center py-[6px] px-[4px] rounded-[30px] ml-7 my-5 text-sm'>No 1 Product</div>
            <div className='font-[Inter] font-bold text-[40px] w-100 leading-15 absolute top-16 left-1/2 -translate-x-1/2 '>Discover Our No 1 Product In Coffee</div>
            <div className='flex gap-6 self-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500'>
                <div className='w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg flex flex-col text-[20px] gap-2'><CiCoffeeCup className='text-[30px]'/>Coffee</div>
                <div className='w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg flex-col text-[20px] gap-2'><LuMilk className='text-[30px]'/>Milk</div>
            </div>
            <div className='flex gap-6 self-center absolute top-100 left-1/2 -translate-x-1/2  text-gray-500'>
                <div className='w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg flex-col gap-2 text-[20px]'><MdOutlineNoFood className='text-[30px]'/>Takeaway</div>
                <div className='w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg flex-col text-[20px] gap-2' ><IoMdPricetag className='text-[30px]'/>affordable</div>
            </div>

        </div>
      
    </div>
  )
}

export default Discover
