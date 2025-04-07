import React from 'react'

const Location = () => {
  return (
    <div className='max-w-[1200px] m-auto flex flex-row'>
      <div className='flex-1 relative h-[500px]'>
        <img className='w-full h-[500px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/pexels-chait-goli-7353487-1-1200x1500.jpg.webp" alt="" />
        <div className='absolute top-0 p-5 m-20 flex items-center justify-between flex-col left-0 right-0 bottom-0 bg-[#00000098]'>
          <p className='text-center text-[#FFFFFF] uppercase text-[14px]'>Our Location</p>
          <p className='text-center text-[32px] text-[#FFFFFF]'>Getting Here</p>
          <p className='text-center text-[#FFFFFF] text-[15px]'>Omenma Hotels <b />1 Omenma Avenue, Oparachi Mbaukwu, Ihitte Ezinihitte LGA,<br /> Mbaise, Imo State, Nigeria<br />
          Tel: +234 8102364983, +234 8163773774 <br />
            Email: info@omenmahotels.com</p>
          <button className='text-center text-[#FFFFFF] text-[14px] border-[#b99d75] border-[1px] py-3 px-8 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#b99d75]'>Get Directions</button>
        </div>
      </div>
      <div className='flex-1 relative h-[500px]'>
        <img className='w-full h-[500px]' src="https://omenmahotels.com/wp-content/uploads/2024/03/3pexels-keeshas-kitchen-13915043-780x520.jpg.webp" alt="" />
        <div className='absolute top-0 p-5 m-20 flex items-center justify-between flex-col left-0 right-0 bottom-0 bg-[#00000098]'>
          <p className='text-center text-[#FFFFFF] uppercase text-[14px]'>Spend Your Time With Us</p>
          <p className='text-center text-[32px] text-[#FFFFFF]'>Book a Room Today</p>
          <p className='text-center text-[#FFFFFF] text-[15px]'>Omenma Hotels <b />1 Omenma Avenue, Oparachi Mbaukwu, Ihitte Ezinihitte LGA,<br /> Mbaise, Imo State, Nigeria<br />
          Tel: +234 8102364983, +234 8163773774 <br />
            Email: info@omenmahotels.com</p>
          <button className='text-center text-[#FFFFFF] text-[14px] border-[#b99d75] border-[1px] py-3 px-8 cursor-pointer capitalize transition-all duration-200 ease-in-out hover:bg-[#b99d75]'>Reserve your room</button>
        </div>
      </div>
    </div>
  )
}

export default Location