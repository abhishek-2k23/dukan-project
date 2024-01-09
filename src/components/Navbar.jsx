import React from 'react'
import { GoHome } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import logo from '../logo.png';


const Navbar = () => {
  return (
    <div className='w-[224px] min-h-screen max-h-full flex flex-col justify-between px-2 py-5 bg-[#1e2640] text-white'>
      {/* user and menu  */}
      <div className='w-[208px]'>
        {/* user info  */}
      <div className='flex justify-between items-center w-48 h-10 mb-5'>
        {/* logo  */}
        <div className='flex gap-3 items-center'>
          <div className='w-10 h-10 bg-white rounded'>
            <img src={logo} alt="logo" className='w-10 h-10 rounded'/>
          </div>
        {/* Name and store link  */}
          <div>
            <p className='-mb-1 font-[500]'>Nishyan</p>
            <p className='underline opacity-85'>visit store</p>
          </div>
        </div>
        {/* arrow  */}
          <div>
            <FaChevronDown />
          </div>
      </div>

      {/* menu  */}
      <div>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <GoHome />
          <p className='text-[14px] font-medium'>Home</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <LuClipboardList />
          <p className='text-[14px] font-medium'>Order</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <AiOutlineAppstore />
          <p className='text-[14px] font-medium'>Products</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <BsTruck />
          <p className='text-[14px] font-medium'>Delivery</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <AiOutlineSound />
          <p className='text-[14px] font-medium'>Marketing</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <IoStatsChart />
          <p className='text-[14px] font-medium'>Analytics</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md bg-[rgba(255,255,255,0.1)]' >
          <MdOutlinePayments />
          <p className='text-[14px] font-medium'>Payments</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <BsCursor className='-rotate-90'/>
          <p className='text-[14px] font-medium'>Tools</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <CiDiscount1 />
          <p className='text-[14px] font-medium'>Discounts</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <TbUsers />
          <p className='text-[14px] font-medium'>Audience</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <MdOutlineColorLens />
          <p className='text-[14px] font-medium'>Appearance</p>
          </li>
          <li className='flex gap-3  items-center h-9 px-2 py-4 text-[20px] rounded-md ' >
          <IoFlashOutline />
          <p className='text-[14px] font-medium'>Plugins</p>
          </li>
        </ul>
      </div>
      </div>

      {/* availabel credits  */}
      <div className=''>
      <div className='flex gap-3 bg-[#353C53] w-48 h-[54px] px-[6px] py-3 rounded-md'>
            <div className='w-9 h-9 bg-[rgba(255,255,255,0.1)] flex justify-center items-center rounded-sm'>
            <MdOutlineAccountBalanceWallet className='w-6 h-6 text-white opacity-100'/>
            </div>
            <div>
              <p className='leading-4 font-normal text-[13px]'>Available credits</p>
              <p className='text-lg font-medium'>222.10</p>
            </div>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar