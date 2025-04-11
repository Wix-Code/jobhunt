"use client"

import React from 'react'
import { FaChevronUp } from 'react-icons/fa6'

const ScrollToTop = () => {
  const scrollUp = () => { 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='fixed bottom-5 right-5 z-50 cursor-pointer'>
      <button onClick={scrollUp} className='p-5 border-[1px] cursor-pointer max-sm:p-3 text-white border-[#b99d75]'><FaChevronUp /></button>
    </div>
  )
}

export default ScrollToTop