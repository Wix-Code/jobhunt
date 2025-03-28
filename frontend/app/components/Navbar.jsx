import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '../utils/dummyData'
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className='shadow-[rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px] sticky top-0 bg-white'>
      <div className='max-w-[1300px] m-auto flex items-center justify-between h-[80px]'>
        <div className=''>
          <Image src="https://www.jobberman.com/static-assets/img/ng/landscape.svg" width={200} height={200} alt='Job hunt'/>
        </div>
        <div className='flex items-center justify-between gap-5'>
          {
            NavLinks.map((link) => {
              return (
                <div key={link.href}>
                  <Link href={link.href}>
                    <p className='text-[15px] text-gray-600 capitalize hover:text-blue-600'>{link.label}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center justify-between flex-row gap-3'>
          <p className='text-[15px] text-gray-600 hover:text-blue-600 cursor-pointer'>Login</p>
          <p className='text-[15px] text-gray-600 hover:text-blue-600 cursor-pointer'>Register</p>
          <div className='flex items-center justify-between flex-row border-gray-200 border-[1px] py-1 px-2 rounded-[30px]'>
            <input className='outline-hidden w-[200px] text-[15px] text-gray-600 capitalize' type="text" placeholder='Search' />
            <FiSearch className='text-[15px] text-gray-600 capitalize cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}
