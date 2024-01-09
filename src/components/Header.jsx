import React from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiSpeakerphone } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className='min-w-[1216px] max-w-full h-16 px-8 py-3 border flex justify-between gap-4 text-center bg-[#FFFFFF]'>
      {/* payment  */}
      <div className='w-[360px] flex gap-4 items-center'>
        <div>
          <p className='text-[15px] font-normal leading-6 text-[#1A181E]'>Payments </p>
        </div>
        <div className='flex gap-2 text-[15px] font-normal leading-4 text-[#4D4D4D]'>
          <span><FaRegQuestionCircle /></span>
          <span>How it works</span>
        </div>
      </div>
      {/* search bar  */}
      <div className='flex w-[400px] h-10 px-[9px] py-4 items-center gap-2 bg-[#F2F2F2] rounded-md'>
        <div>
          {/* icon  */}
          <HiMiniMagnifyingGlass className='text-[#808080]'/>
        </div>
        <div>
          {/* text   */}
          <p className='text-[#808080]'>Search features, tutorials, etc.</p>
        </div>
      </div>
       {/* buttons */}

       <div className='flex w-[360px] justify-end h-10 gap-2'> 
        {/* first button */}
        <div className='h-10 w-10 bg-[#E6E6E6] flex justify-center items-center rounded-full'>
        <HiSpeakerphone className='w-5 h-5'/>
        </div>
        {/* second button */}
        <div className='h-10 w-10 bg-[#E6E6E6] flex justify-center items-center rounded-full'>
        <FaCaretDown className='w-5 h-5'/>
        </div>
       </div>
    </div>
  )
}

export default Nav