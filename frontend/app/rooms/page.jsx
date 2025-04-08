import React from 'react'
import { data } from '../utils/dummyData';
import { TbListDetails } from "react-icons/tb";
import Rooms from '../subpages/Rooms';

const FindPage = () => {
  return <div className='bg-[#151719]'>
    <div className='max-w-[1200px] m-auto flex flex-col gap-8'>
      <p className='text-[#b99d75] uppercase text-[12px] font-[600] text-center'>Welcome to Omenma Hotels</p>
      <h1 className='text-[#ffffff] text-[35px] font-[600] text-center'>Explore our refined accommodation options <br /> and find the perfect space for your stay.</h1>
      <p className='text-[#cfcece] text-[17px] text-center'>All rooms have a cozy, ultra clean bed and beddings, bathroom and shower, cable television,<br /> free WIFI and executive seat.</p>
      <div className='flex items-center justify-center gap-3'>
        <button className='uppercase text-[15px] text-[#FFFFFF] font-[600]'>Executive Rooms</button>
        <button className='uppercase text-[15px] text-[#FFFFFF] font-[600]'>Deluxe Rooms</button>
        <button className='uppercase text-[15px] text-[#FFFFFF] font-[600]'>standard Rooms</button>
        <button className='uppercase text-[15px] text-[#FFFFFF] font-[600]'>royal Rooms</button>
        <button className='uppercase text-[15px] text-[#FFFFFF] font-[600]'>Event center</button>
      </div>
      <div className=''>
        {
          data.map((rooms) => {
            return (
                <div key={rooms.id} className='flex items-center flex-row gap-20'>
                  <div className='flex-1'>
                  <img src={rooms.img} className='h-[500px] object-cover w-full' alt="" />
                  </div>
                <div className='flex-1 flex-col gap-10 flex'>
                  <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>Welcome to Wixad hotels</p>
                  <h1 className='text-[#ffffff] text-[40px] font-[600]'>{rooms.name}</h1>
                  <p className='text-[#cfcece] text-[17px]'>{rooms.desc}</p>
                  <div className='flex items-center gap-4'>
                    <TbListDetails className='text-[#b99d75] text-[30px]' />
                    <button className='text-[#b99d75] uppercase text-[12px] font-[600]'>Features of this room</button>
                  </div>
                  <div className='flex items-center gap-4'>
                    <TbListDetails className='text-[#b99d75] text-[30px]' />
                    <button className='text-[#b99d75] uppercase text-[12px] font-[600]'>Reserve This room</button>
                  </div>
                </div>
                </div>
              )
            }
          )
        }
      </div>
      <div className='grid grid-cols-3 gap-14'>
        {
          data.map((rooms) => {
            return (
              <div key={rooms.id} className='flex flex-col gap-4'>
                <img className='w-full object-cover h-[230px]' src={rooms.img} alt="" />
                <p className='text-[#cfcece] text-[15px] text-center'>{rooms.desc}</p>
                <button className='text-[#b99d75] text-[16px] cursor-pointer hover:underline'>Discover more</button>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='bg-[#000]'>
      <div className='max-w-[1200px] m-auto py-5'>
        <p className='text-[#b99d75] uppercase text-[12px] mx-10 font-[600]'>The Essential Omenma Amenities</p>
        <div className='flex flex-row gap-20 mx-10'>
          <p className='text-[#ffffff] flex-1 text-[28px]'>Business or pleasure? We have every amenity you may need to make your stay satisfying.</p>
          <p className='text-[#cfcece] text-[16px] flex-1'>From the moment you enter, you’ll be enveloped in an atmosphere of unparalleled comfort and style, with tastefully appointed furnishings and sumptuous fabrics, lavish bedroom sanctuary, complete with a king-sized bed draped in the finest linens, personalized concierge services, state-of-the-art technology, and unparalleled attention to detail.</p>
        </div>
      </div>
    </div>
  </div>;
};

export default FindPage;