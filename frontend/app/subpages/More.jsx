"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";

const More = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-[#151719] mt-4'>
      <div className='flex flex-col items-center max-w-[1100px] m-auto max-sm:gap-3 overflow-hidden'>
        <div data-aos="fade-up" className='flex overflow-hidden max-sm:flex-col max-sm:mx-7'>
          <div className='flex-1 h-[100%]'>
            <img className='w-full object-cover h-[500px] max-sm:h-[250px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/3pexels-keeshas-kitchen-13915043-780x520.jpg.webp" alt="" />
          </div>
          <div className='bg-[#000] flex-1'>
            <div className='flex flex-col justify-between m-20 gap-4  max-sm:m-5 max-sm:gap-1'>
              <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>I bu onye oriri</p>
              <h1 className='text-[#FFFFFF] text-[34px] max-sm:text-[22px]'>Restaurant & Bars</h1>
              <p className='text-[#cfcece] text-[17px]'>Have you tried the famous Omenma Nigerian Jollof Rice? What of Ofe Owerri, Ofe Egusi or Ofe Akwu? Maybe, you prefer an English breakfast of Chips and Fish with cup of tea? Our intercontinental chef got your culinary needs covered.</p>
              <button className='text-[#FFFFFF] border-[1px] w-fit border-[#b99d75] px-12 py-3 cursor-pointer'>Discover More</button>
           </div>
          </div>
        </div>
        <div data-aos="fade-up" className='flex max-sm:flex-col max-sm:mx-7'>
          <div className='bg-[#000] flex-1'>
            <div className='flex flex-col justify-between m-20 max-sm:m-5 gap-8 max-sm:gap-2'>
              <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>I bu onye oriri</p>
              <h1 className='text-[#FFFFFF] text-[34px] max-sm:text-[22px]'>Restaurant & Bars</h1>
              <p className='text-[#cfcece] text-[17px]'>Have you tried the famous Omenma Nigerian Jollof Rice? What of Ofe Owerri, Ofe Egusi or Ofe Akwu? Maybe, you prefer an English breakfast of Chips and Fish with cup of tea? Our intercontinental chef got your culinary needs covered.</p>
           </div>
          </div>
          <div className='flex-1 h-[100%]'><img className='w-full max-sm:h-[250px] object-cover h-[500px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/3pexels-keeshas-kitchen-13915043-780x520.jpg.webp" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default More