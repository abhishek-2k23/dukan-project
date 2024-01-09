import React from "react"
import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { BiSortAlt2 } from "react-icons/bi"
import { GoDownload } from "react-icons/go"
import { IoMdArrowDropdown } from "react-icons/io"
import { CiCircleInfo } from "react-icons/ci"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Transactions = () => {

  //dummy data
  const arr = new Array(19);
  const data = {id:'#281209',date : '7 July, 2023',amount : '₹1,278.23', fee: '₹22'};
  arr.fill(data);

  return (
    <div className="w-[1152px] h-[1144px] flex flex-col gap-5">
      {/* heading section  */}
      <div>
        <h1 className="text-xl font-medium leading-7 text-[#1A181E]">
          {" "}
          Transactions | This Month
        </h1>
      </div>

      {/* Table and Page section  */}
      <div className="h-[1096px] w-[1152px] flex flex-col items-center gap-4 bg-white drop-shadow">
        {/* Table Section  */}
      <div className=" pt-3 pr-3 pb-2 pl-3  rounded-lg">
        {/* table top  */}
        <div className="h-10 w-[1128px] flex justify-between">
          {/* search bar  */}
          <div className="w-[248px] border flex items-center gap-3 h-10 py-[10px] px-4 rounded-md">
            <div>
              <HiMiniMagnifyingGlass className="w-3 h-3" />
            </div>
            <p className="text-[14px] font-normal leading-5 text-[#999999]">
              Search by order ID...
            </p>
          </div>
          <div className="w-[127px] h-9 rounded flex gap-3 text-[#4D4D4D]">
            {/* sort  */}
            <div className="w-[79px] flex justify-evenly items-center h-9 border rounded">
              <p>Sort</p>
              <BiSortAlt2 />
            </div>
            {/* download */}
            <div className="border w-9 h-9 rounded flex justify-center items-center">
              <GoDownload />
            </div>
          </div>
        </div>

        {/* Table view  */}
        <div className="flex flex-col mt-3 w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block w-full py-2 px-4 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden rounded">
                <table className="w-full ">
                  <thead className="bg-[#F2F2F2] h-9 px-4">
                    <tr>
                      <th scope="col" className="w-[246px] h-5 text-start pl-4">
                        <span className="font-normal text-sm ">Order ID</span>
                      </th>
                      <th scope="col" className="w-[246px] h-5 text-start">
                        <div className="flex gap-2 items-center">
                          <span className="font-normal text-sm">
                            Order date
                          </span>{" "}
                          <span>
                            <IoMdArrowDropdown />
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="w-[246px] h-5 text-right">
                        <span className="font-normal text-sm">
                          Order Amount
                        </span>
                      </th>
                      <th scope="col" className="w-[246px] h-5 text-right pr-2">
                        <span className="font-normal text-sm flex gap-1 justify-end items-center">
                          Transaction fees
                          <span>
                            <CiCircleInfo />
                          </span>{" "}
                        </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="my-2">
                    {
                      arr.map((data) => (<tr className="">
                      <td className="w-[246px] h-12 text-start pl-4 border-b" >
                        <span className="font-normal text-[14px] text-[#146EB4]">
                          {data?.id}
                        </span>
                      </td>
                      
                      <td className="w-[246px] h-12 text-start border-b">
                        <span className="font-normal text-[14px] text-[#1A181E]">
                          {data?.date}
                        </span>
                      </td>

                      <td className="w-[246px] h-12 text-right border-b">
                        <span className="font-normal text-[14px] text-[#1A181E]">
                         {data?.amount}
                        </span>
                      </td>
                      <td className="w-[246px] h-12 text-right pr-2 border-b">
                        <span className="font-normal text-[14px] text-[#1A181E]">
                          {data?.fee}
                        </span>
                      </td>

                    </tr>))
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>

      
        </div>
        {/* Table view end  */}
      </div>

      {/* pages section  */}
      <div className="w-[610px] h-8 flex justify-between items-center">
        {/* previous button  */}
        <div className="w-[100px] h-8 border border-[#D9D9D9] rounded px-3 py-[6px] pl-[6px] flex gap-[6px] items-center justify-evenly text-[#4D4D4D]">
            <span><FaChevronLeft className="w-[6px] h-[10.5px] "/></span>
            <span className="text-[14px] leading-5 font-medium">Previous</span>
        </div>
        {/* pages count  */}
        <div>
          <ul className="flex gap-1 items-center font-normal text-[14px] leading-5 text-[#4D4D4D]">
            <li className="w-7 h-5 text-center">1</li>
            <li className="w-7 h-5 text-center">...</li>
            <li className="w-4 h-5 text-center bg-[#146EB4] text-[12px] text-white rounded-sm">10</li>
            <li className="w-7 h-5 text-center">11</li>
            <li className="w-7 h-5 text-center">12</li>
            <li className="w-7 h-5 text-center">13</li>
            <li className="w-7 h-5 text-center">14</li>
            <li className="w-7 h-5 text-center">15</li>
            <li className="w-7 h-5 text-center">16</li>
            <li className="w-7 h-5 text-center">17</li>
          </ul>
        </div>
        {/* next button  */}
        
        <div className="w-[100px] h-8 border border-[#D9D9D9] rounded pl-3 py-[6px] pr-[6px] flex gap-[6px] items-center justify-evenly text-[#4D4D4D]">
            <span className="text-[14px] leading-5 font-medium">Next</span>
            <span><FaChevronRight className="w-[6px] h-[10.5px] "/></span>
        </div>
      </div>
      </div>
      

     
    </div>
  )
}

export default Transactions
