import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '../utils/dummyData'
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'  style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
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
            <input className='outline-hidden w-[200px] text-[14px] text-gray-600 capitalize' type="text" placeholder='Search' />
            <FiSearch className='text-[15px] text-gray-600 capitalize cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}
