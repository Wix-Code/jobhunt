import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '../utils/dummyData'
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-black max-sm:hidden'  style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
      <div className='max-w-[1100px] m-auto flex items-center justify-between h-[100px]'>
        <div className=''>
          <Link href="/"><h1 className='text-white text-[32px] font-[800]'>WIXAD HOTELS</h1></Link>
        </div>
        <div className='flex items-center justify-between gap-5'>
          {
            NavLinks.map((link) => {
              return (
                <div key={link.href}>
                  <Link href={link.href}>
                    <p className='text-[18px] text-white capitalize hover:text-[#b99d75]'>{link.label}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center justify-between flex-row gap-3'>
          <p className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Login</p>
          <p className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Register</p>
        </div>
      </div>
    </div>
  )
}
