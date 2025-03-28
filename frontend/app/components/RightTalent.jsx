import Image from 'next/image'
import React from 'react'

export const RightTalent = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-auto p-5 flex justify-between bg-blue-800 rounded-[16px]">
        <div className='flex flex-col justify-between'>
          <h2 className='text-white'>FOR EMPLOYERS</h2>
          <p className='text-white font-bold text-[30px]'>
            Searching for the right talent?
          </p>
          <p className='text-[20px] text-gray-200'>
            We have over 3 million+ job-seekers across all levels, right for <br /> your organisation!
          </p>
          <button className='px-6 cursor-pointer capitalize py-2 rounded-[10px] bg-white text-blue-600 w-fit'>Learn more</button>
        </div>
        <Image src="/pics/download.jpg" alt='A man' className='rounded-[8px] object-cover' width={300} height={400} />
      </div>
    </div>
  )
}
