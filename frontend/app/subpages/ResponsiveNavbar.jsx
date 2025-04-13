import React from 'react'
import { NavLinks } from '../utils/dummyData'
import Link from 'next/link'

const ResponsiveNavbar = ({ setOpenNav }) => {
  return (
    <div className='text-white absolute w-full bg-white left-0 top-[80px]'>
      <div>
        {
          NavLinks.map((link) => {
            return (
              <div key={link.href} className='flex items-center justify-center py-5 border-b-[1px] border-[#b99d75] bg-[#151719]'>
                <Link href={link.href}>
                  <p onClick={() => setOpenNav(false)} className='text-[18px] text-white capitalize hover:text-[#b99d75]'>{link.label}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div>
        <div className='flex items-center justify-center py-5 border-b-[1px] border-[#b99d75] bg-[#151719]'>
          <Link href="/login"><p onClick={() => setOpenNav(false)}  className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Login</p></Link>
        </div>
        <div className='flex items-center justify-center py-5 border-b-[1px] border-[#b99d75] bg-[#151719]'>
          <Link href='/register'><p onClick={() => setOpenNav(false)}  className='text-[18px] text-white capitalize hover:text-[#b99d75] cursor-pointer'>Register</p></Link>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNavbar