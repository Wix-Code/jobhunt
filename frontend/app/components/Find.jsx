import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export const Find = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
      <div className='flex flex-col gap-3'>
        <p>Find the right job vacancies in Nigeria</p>
        <p>Experience-based filtering.</p>
        <p>Find jobs that suit your experience level</p>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2 flex-1 p-3' style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
            <p className='text-[18px] text-gray-700 font-medium'>Entry level</p>
            <p className='text-[15px] text-gray-500 font-medium'>1305 Jobs</p>
            <button className='flex items-center gap-1 text-blue-600'>Explore Jobs <FaArrowRightLong /></button>
          </div>
          <div className='flex flex-col gap-2 flex-1 p-3' style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
            <p className='text-[18px] text-gray-700 font-medium'>Entry level</p>
            <p className='text-[15px] text-gray-500 font-medium'>1305 Jobs</p>
            <button className='flex items-center gap-1 text-blue-600'>Explore Jobs <FaArrowRightLong /></button>
          </div>
          <div className='flex flex-col gap-2 flex-1 p-3' style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
            <p className='text-[18px] text-gray-700 font-medium'>Entry level</p>
            <p className='text-[15px] text-gray-500 font-medium'>1305 Jobs</p>
            <button className='flex items-center gap-1 text-blue-600'>Explore Jobs <FaArrowRightLong /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
