import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import Transactions from './Transactions'
const Overview = () => {
  return (
    <div className='w-[1152px] h-[1354px] pb-5'>
      {/* overview section  */}
      <div className='flex flex-col gap-4 h-[178px] w-[1152px]'>
        {/* overview header  */}
        <div className='flex justify-between w-[1152px] items-center'>
          <p className='text-[#4D4D4D] text-xl font-medium leading-7'>Overview</p>
          <div className='w-[137px] h-9 flex gap-2 justify-evenly items-center border rounded bg-white'>
              <p className='text-[#4D4D4D] text-[16px] leading-6 font-normal'>Last Month</p>
            <div>
            <FaChevronDown className='w-4 h-4'/>
          </div>
          </div>
        </div>
        {/* two boxes  */}
        <div className='w-[1152px] h-[118px] flex justify-between gap-5'>
          {/* first box  */}
          <div className='w-[556px] h-[118px] flex justify-center items-center gap-6 bg-white rounded-md'>
            <div className='w-[526px] h-[78px] flex flex-col gap-4'>
              <p className='text-[#4D4D4D] text-[16px] leading-6 font-normal'>Online Orders</p>
              <p className='text-[#1A181E] text-[32px] leading-[38px] font-medium'>231</p>
            </div>
          </div>
          {/* second box  */}
          <div className='w-[556px] h-[118px] flex justify-center items-center gap-6 bg-white rounded-md'>
            <div className='w-[526px] h-[78px] flex flex-col gap-4'>
              <p className='text-[#4D4D4D] text-[16px] leading-6 font-normal'>Amount received</p>
              <p className='text-[#1A181E] text-[32px] leading-[38px] font-medium'>₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </div>
      {/* Transactions section  */}

      <Transactions />
    </div>
  )
}

export default Overview