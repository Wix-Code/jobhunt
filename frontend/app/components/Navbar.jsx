"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from '../utils/dummyData'
import { FiSearch } from "react-icons/fi";
import { FaBars } from 'react-icons/fa6';
import ResponsiveNavbar from '../subpages/ResponsiveNavbar';

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <div className='sticky top-0 z-50 bg-black'  style={{
      boxShadow: "box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
    }}>
      <div className='max-w-[1100px] relative m-auto flex items-center justify-between h-[100px]'>
        <div className='ml-5'>
          <Link href="/"><h1 className='text-white text-[32px] max-sm:text-[24px] font-[800]'>WIXAD HOTELS</h1></Link>
        </div>
        <div>
          {
            openNav ? (<ResponsiveNavbar setOpenNav={setOpenNav} />) : (
              <div className='flex items-center justify-between gap-5 max-sm:hidden'>
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
            )
          }
       </div>
        <div className='flex items-center justify-between flex-row gap-3 max-sm:hidden'>
          <Link href="/login"><p className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Login</p></Link>
          <Link href="/register"><p className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Register</p></Link>
        </div>
        <button onClick={() => setOpenNav(!openNav)} className='hidden max-sm:flex text-[20px] text-white mr-5'><FaBars /></button>
      </div>
    </div>
  )
}
