import React from 'react'
import fries from './images/fries.png'

function Playful() {
  return (
    <div className='w-full h-screen flex flex-col align-center pt-[120px] bg-[#FFFEFE] text-center relative'>
      <div className='text-[11rem] leading-45 font-[Inter] font-extrabold'>
        <p className='mr-100'>PLAYFUL</p>
        <p className='ml-100'>FLAVOUR</p>
      </div>
      <div>
        <img src={fries} alt="fries" className='absolute w-100 top-5 right-50 rotate-[350deg] mix-blend-multiply'/>
      </div>
      <div className='w-80 h-100 bg-red-500 absolute left-40 top-1/2 -translate-y-1/6 rounded-[20px]'>
        <div className='w-8 h-8 bg-white rounded-[50%] m-3'></div>
            <div className='flex flex-col text-left absolute top-45 left-5 leading-27'>
                <div className='font-[Inter] text-white text-lg'>TOTAL SOLD</div>
                <div className='font-[Anton] text-white text-[120px]'>1,000+</div>
            </div>
      </div>
      <div className='w-130 text-center absolute right-20 top-135'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quidem quisquam a aliquam quam cumque vel voluptatem neque atque, saepe necessitatibus dicta vitae quis ullam hic explicabo autem, consectetur dolorem labore officia.
      </div>
        <a className='mt-49' href="/">
            <span className='py-2 px-4 rounded-[30px] border hover:bg-red-500 hover:text-white'>
                BOOK NOW
            </span>
        </a>
    </div>
  )
}

export default Playful
