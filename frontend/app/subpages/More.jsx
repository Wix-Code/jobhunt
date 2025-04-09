import React from 'react'

const More = () => {
  return (
    <div className='bg-[#151719] mt-4'>
      <div className='flex flex-col items-center max-w-[1100px] m-auto'>
        <div className='flex overflow-hidden max-sm:flex-col max-sm:mx-5'>
          <div className='flex-1'>
            <img className='w-full object-cover h-[400px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/3pexels-keeshas-kitchen-13915043-780x520.jpg.webp" alt="" />
          </div>
          <div className='bg-[#000] flex-1'>
            <div className='flex flex-col justify-between m-20 gap-4  max-sm:m-5'>
              <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>I bu onye oriri</p>
              <h1 className='text-[#FFFFFF]'>Restaurant & Bars</h1>
              <p className='text-[#cfcece] text-[17px]'>Have you tried the famous Omenma Nigerian Jollof Rice? What of Ofe Owerri, Ofe Egusi or Ofe Akwu? Maybe, you prefer an English breakfast of Chips and Fish with cup of tea? Our intercontinental chef got your culinary needs covered.</p>
              <button>Discover more</button>
           </div>
          </div>
        </div>
        <div className='flex overflow-hidde max-sm:flex-col max-sm:mx-5'>
          <div className='bg-[#000] flex-1'>
            <div className='flex flex-col justify-between m-20 max-sm:m-5 gap-8'>
              <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>I bu onye oriri</p>
              <h1 className='text-[#FFFFFF]'>Restaurant & Bars</h1>
              <p className='text-[#cfcece] text-[17px]'>Have you tried the famous Omenma Nigerian Jollof Rice? What of Ofe Owerri, Ofe Egusi or Ofe Akwu? Maybe, you prefer an English breakfast of Chips and Fish with cup of tea? Our intercontinental chef got your culinary needs covered.</p>
           </div>
          </div>
          <div className='flex-1'><img className='w-full object-cover h-[400px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/3pexels-keeshas-kitchen-13915043-780x520.jpg.webp" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default More