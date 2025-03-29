import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

export const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className=''>
      <div className='flex flex-col gap-8  bg-blue-700 py-20 justify-center'>
        <h2 className='text-center text-white text-[50px] font-medium'>Explore and discover
          <br /> the right job for you!</h2>
        <div className='flex gap-3 px-40 py-5 bg-blue-300'>
          <div onClick={() => toggleDropdown("industry")} className='relative flex-[1] bg-white flex justify-between items-center cursor-pointer text-gray-600'>
            <p className='pl-2'>All function</p>
            <button className='pr-2'>{activeDropdown === "industry" ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            {
            activeDropdown === "industry" && (
                <div onClick={(e) => e.stopPropagation()} className='absolute top-13 w-full bg-white p-2 border-[1px] border-gray-200 flex flex-col gap-3'>
                  <div className='flex items-center gap-2 border-[1px] border-gray-300 p-1'>
                    <RiSearchLine />
                    <input type="text" placeholder='Search' className='w-full outline-hidden' />
                  </div>
                  <p className='text-[16px] text-gray-600'>Agriculture</p>
                  <p className='text-[16px] text-gray-600'>Agriculture</p>
                  <p className='text-[16px] text-gray-600'>Agriculture</p>
                  <p className='text-[16px] text-gray-600'>Agriculture</p>
              </div>
            )  
          }
          </div>
         
          <div onClick={() => toggleDropdown("location")} className="relative flex-[1] bg-white flex justify-between items-center cursor-pointer text-gray-600">
            <p className="pl-2">All function</p>
            <button className="pr-2">{activeDropdown === "location" ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            {activeDropdown === "location" && (
              <div onClick={(e) => e.stopPropagation()} className="absolute top-full w-full bg-white p-2 border border-gray-200 flex flex-col gap-3 z-10">
                <div className="flex items-center gap-2 border border-gray-300 p-1">
                  <RiSearchLine />
                  <input type="text" placeholder="Search" className="w-full outline-none" />
                </div>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
              </div>
            )}
          </div>
          <div onClick={() => toggleDropdown("experience")} className="relative flex-[1] bg-white flex justify-between items-center cursor-pointer text-gray-600">
            <p className="pl-2">All function</p>
            <button className="pr-2">{activeDropdown === "experience" ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            {activeDropdown === "experience" && (
              <div onClick={(e) => e.stopPropagation()} className="absolute top-full w-full bg-white p-2 border border-gray-200 flex flex-col gap-3 z-10">
                <div className="flex items-center gap-2 border border-gray-300 p-1">
                  <RiSearchLine />
                  <input type="text" placeholder="Search" className="w-full outline-none" />
                </div>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
                <p className="text-[16px] text-gray-600">Agriculture</p>
              </div>
            )}
          </div>
          <div className='flex-[1]'>
            <button className='w-full bg-blue-600 p-3 text-white cursor-pointer'>Find a job</button>
          </div>
        </div>
      </div>
    </div>
  )
}
