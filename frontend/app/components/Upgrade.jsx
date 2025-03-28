import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Upgrade = () => {
  return (
    <div>
      <div className='max-w-[800px] m-auto flex gap-4 items-center'>
        <div><Image src="/pics/download.jpg" alt='A man' className="rounded-[8px] w-[600px] h-[350px] object-cover" width={200} height={200} /></div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[28px] font-medium text-gray-700'>Ready to level up your CV game?</h1>
          <p className='text-[19px] font-normal text-gray-600'>Collaborate with a professional cv writer to highlight your skills and achievements like never before.</p>
          <a className='bg-blue-800 py-3 px-6 text-white w-fit rounded-[8px] cursor-pointer'>Upgrade Now</a>
        </div>
      </div>
    </div>
  )
}