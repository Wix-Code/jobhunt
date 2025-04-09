import React from 'react'
import { data } from '../utils/dummyData'

const Rooms = () => {
  return (
    <div className='max-w-[1100px] m-auto flex flex-col gap-3'>
      <p className='text-[#b99d75] uppercase mt-4 text-[12px] font-[600] text-center'>Extraordinary Accommodations</p>
      <p className='text-[#FFFFFF] text-center capitalize text-[44px] font-[600]  max-sm:text-[24px]'>Choose Your Apartment Type</p>
      <div className='grid grid-cols-3 gap-12 max-sm:grid max-sm:grid-cols-1 max-sm:mx-10'>
        {
          data.slice(0,3).map((room) => {
            return (
              <div key={room.id} className='flex flex-col relative'>
                <div className='overflow-hidden'>
                  <img
                    className="w-full h-[450px] object-cover cursor-pointer transition-transform duration-300 ease hover:scale-[1.06]"
                    src={room.img}
                    alt=""
                  />
                </div>
                <div className='absolute bottom-8 left-[-16px]'>
                <p className='px-10 py-4 bg-[#000] text-[#FFFFFF] text-[18px] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#b99d75]'>
                  {room.name}
                </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Rooms