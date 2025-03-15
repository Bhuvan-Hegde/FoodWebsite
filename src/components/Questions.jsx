import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full h-[100vh] bg-gray-200 flex pt-50'>
        <div className='flex flex-col items-center pl-55'>
            <div className='font-[Inter] font-semibold text-[50px] '>Some Question?</div>
            <div className='border px-4 py-2 rounded-[30px] mt-10' >Contact Us</div>
        </div>

        {/* FAQ Container to keep positions relative */}
        <div className='absolute right-60 mt-20 space-y-6'>

            {/* Question 1 */}
            <div className='relative'>
                <div className='h-14 w-[400px] rounded-[7px] bg-gray-300 flex items-center justify-between px-5 cursor-pointer' 
                    onClick={() => toggleAnswer(1)}>
                    What is your return policy?
                    <button><IoIosArrowDown /></button>
                </div>
                {openIndex === 1 && (
                  <div className='mt-2 p-3 w-[400px] bg-gray-200 rounded-[7px]'>
                    You can return items within 30 days of purchase with a receipt.
                  </div>
                )}
            </div>

            {/* Question 2 */}
            <div className='relative'>
                <div className='h-14 w-[400px] rounded-[7px] bg-gray-300 flex items-center justify-between px-5 cursor-pointer' 
                    onClick={() => toggleAnswer(2)}>
                    How long does shipping take?
                    <button><IoIosArrowDown /></button>
                </div>
                {openIndex === 2 && (
                  <div className='mt-2 p-3 w-[400px] bg-gray-200 rounded-[7px]'>
                    Standard shipping takes 5-7 business days.
                  </div>
                )}
            </div>

            {/* Question 3 */}
            <div className='relative'>
                <div className='h-14 w-[400px] rounded-[7px] bg-gray-300 flex items-center justify-between px-5 cursor-pointer' 
                    onClick={() => toggleAnswer(3)}>
                    Do you offer international shipping?
                    <button><IoIosArrowDown /></button>
                </div>
                {openIndex === 3 && (
                  <div className='mt-2 p-3 w-[400px] bg-gray-200 rounded-[7px]'>
                    Yes, we ship to select international locations.
                  </div>
                )}
            </div>

            {/* Question 4 */}
            <div className='relative'>
                <div className='h-14 w-[400px] rounded-[7px] bg-gray-300 flex items-center justify-between px-5 cursor-pointer' 
                    onClick={() => toggleAnswer(4)}>
                    How can I track my order?
                    <button><IoIosArrowDown /></button>
                </div>
                {openIndex === 4 && (
                  <div className='mt-2 p-3 w-[400px] bg-gray-200 rounded-[7px]'>
                    You will receive a tracking link via email after your order is shipped.
                  </div>
                )}
            </div>

        </div>
    </div>
  );
}

export default Questions;
