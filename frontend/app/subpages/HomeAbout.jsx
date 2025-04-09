import React from 'react'

const HomeAbout = () => {
  return (
    <div className='bg-[#151719]'>
      <div className='flex items-center flex-row max-w-[1100px] m-auto max-sm:flex-col max-sm:mx-7 max-sm:gap-4'>
        <div className='flex-1 flex-col flex gap-4'>
          <p className='text-[#b99d75] mt-10 uppercase text-[14px] font-[600]'>Stay in the heart of Senerity</p>
          <h1 className='text-[#FFFFFF] text-[44px] font-semibold max-sm:text-[24px]'>Luxury furnished serviced rooms in Mbaise, Imo State</h1>
          <p className='text-[#cfcece] text-[16px]'>Located in Mbaise, (fondly referred to as Mba 5), Imo State, Omenma hotels provide a peaceful, private retreat in the heart of one of the world’s most iconic cities. Experience a sophisticated blend of professional services and home comforts. We proudly offers a full range of complimentary amenities and services that provide you with everything you need for an inspiring stay.</p>
          <button className='text-[#FFFFFF] border-[1px] w-fit border-[#b99d75] px-12 py-3 cursor-pointer'>About Us</button>
        </div>
        <div className='flex-1 max-sm:w-full'>
          <img className='h-[500px] w-full object-cover max-sm:h-[350px] max-sm:w-full' src="https://omenmahotels.com/wp-content/uploads/2024/03/Omenma-C-1-scaled-e1711200148404-600x687.jpg.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout