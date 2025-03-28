import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '../utils/dummyData'
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div>
      <div className='max-w-[1200px] m-auto flex items-center justify-between'>
        <div className=''>
          <Image src="https://www.jobberman.com/static-assets/img/ng/landscape.svg" width={200} height={200} alt='Job hunt'/>
        </div>
        <div className='flex items-center justify-between gap-5'>
          {
            NavLinks.map((link) => {
              return (
                <div key={link.href}>
                  <Link href={link.href}>
                    <p className='text-[15px] text-gray-600 capitalize'>{link.label}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className='flex items-center justify-between flex-row gap-3'>
          <p className='text-[15px] text-gray-600'>Login</p>
          <p className='text-[15px] text-gray-600'>Register</p>
          <div className='flex items-center justify-between flex-row'>
            <input type="text" placeholder='Search' />
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}
