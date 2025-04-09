"use client"
import Location from '@/app/subpages/Location';
import React, { useState } from 'react'
import { FaToiletPaper, FaWifi } from 'react-icons/fa6';
import { IoBedOutline } from "react-icons/io5";
import { TbAirConditioning } from 'react-icons/tb';
import { GrPrevious, GrNext } from "react-icons/gr";
import Slider from 'react-slick';

const details = () => {
  const [open, setOpen] = useState("");
  const [button, setButton] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const img = [
    "https://www.image.direvhotel.com/14075/1711620359ClassicSuite.jpeg",
    "https://www.image.direvhotel.com/14075/1711620250ExecutiveRoomBedroom-min.jpg",
    "https://www.image.direvhotel.com/14075/1711620019ClassicStudio.jpeg",
    "https://www.image.direvhotel.com/14075/1711619929classic.jpg"
  ]
  const goTo = (direction) => {
    let nextIndex;
    if (direction === "next") {
      nextIndex = (button + 1) % img.length;
    } else if (direction === "prev") {
      nextIndex = (button - 1 + img.length) % img.length;
    }
    setButton(nextIndex);
  };
  return (
    <div className='bg-[#000]'>
      <div className='relative mb-10'>
        <div className=' w-full'>
          <img src={img[button]} className='w-full h-[600px] max-sm:h-[400px] object-cover' alt="" />
          <div className='flex items-center justify-between mx-20 absolute top-0 right-0 left-0 bottom-0 m-auto max-sm:mx-10'>
            <button onClick={() => goTo("prev")} className='text-black cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-white'><GrPrevious /></button>
            <button onClick={() => goTo("next")} className='text-black cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-white'><GrNext /></button>
          </div>
        </div>
      </div>
      <div className='flex max-w-[1100px] m-auto max-sm:flex-col max-sm:mx-5 max-sm:gap-3'>
        <div className='flex-2 text-[#FFFFFF] flex flex-col gap-4'>
          <p className='text-[30px] font-[600]'>Reserve Royal Rooms</p>
          <div className='flex items-center gap-4 max-sm:flex-wrap'>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[28px]' />
              <p className='text-[14px]'>4 Guests</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[28px]' />
              <p className='text-[14px]'>4 Guests</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[28px]' />
              <p className='text-[14px]'>4 Guests</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[28px]' />
              <p className='text-[14px]'>4 Guests</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[28px]' />
              <p className='text-[14px]'>4 Guests</p>
            </div>
          </div>
          <p className='text-[28px] mt-10'>Room Amenities</p>
          <div className='grid grid-cols-2 gap-5 max-sm:grid-cols-1'>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>24/7 Light</p>
            </div>
            <div className='flex items-center gap-3'>
              <TbAirConditioning className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Air Conditioner</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>In-hotel Supermaket</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Room Services</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Laundry Services</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Cable TV</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaWifi className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Free Wifi & Internet</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaToiletPaper className='text-[50px] text-[#cfcece]' />
              <p className='text-[18px]'>Towels/Toiletries</p>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='bg-[#151719] p-10 flex flex-col gap-5'>
            <div className='flex justify-between items-center text-[#FFFFFF]'>
              <p className='text-[24px] font-bold uppercase'>Reserve:</p>
              <p>From ₦55,000/night</p>
            </div>
            <div onClick={() => setOpen(open === "check" ? "" : "check")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Check In</p>               
              <p>2025/04/15</p>
              {
                open === "check" && (
                  <div className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Rooms</p>
                    <div className='flex items-center gap-3'>
                      <p>-</p>
                      <p>0</p>
                      <p>+</p>
                    </div>
                  </div>
                )
              }
            </div>
            <div onClick={() => setOpen(open === "check" ? "" : "check")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Check Out</p>               
              <p>2025/04/15</p>
              {
                open === "check" && (
                  <div className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Rooms</p>
                    <div className='flex items-center gap-3'>
                      <p>-</p>
                      <p>0</p>
                      <p>+</p>
                    </div>
                  </div>
                )
              }
            </div>
            <div onClick={() => setOpen(open === "room" ? "" : "room")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Rooms</p>               
              <p>0</p>
              {
                open === "room" && (
                  <div className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Rooms</p>
                    <div className='flex items-center gap-3'>
                      <p>-</p>
                      <p>0</p>
                      <p>+</p>
                    </div>
                  </div>
                )
              }
            </div>
            <div className='flex gap-3'>
              <div onClick={() => setOpen(open === "adullts" ? "" : "adults")} className='cursor-pointer relative flex justify-between p-3 border-[1px] border-[rgb(185,157,117)] text-white w-full'>
                <p>Adults</p>               
                <p>0</p>
                {
                  open === "adults" && (<div className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Adults</p>
                    <div className='flex items-center gap-3'>
                      <p>-</p>
                      <p>0</p>
                      <p>+</p>
                    </div>
                  </div>)
                }
              </div>
              <div onClick={() => setOpen(open === "children" ? "" : "children")}  className='relative cursor-pointer flex justify-between p-3 border-[1px] border-[rgb(185,157,117)] text-white w-full'>
                <p>Children</p>               
                <p>0</p>
                {
                  open === "children" && (
                    <div className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                     <p>Children</p>
                      <div className='flex items-center gap-3'>
                        <p>-</p>
                        <p>0</p>
                        <p>+</p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className='flex justify-between items-center text-[#FFFFFF]'>
              <p className='text-[18px]'>Total</p>
              <p className='text-[20px] font-bold'>₦110,000</p>
            </div>
            <button className='bg-[#000] py-3 text-[#FFFFFF] w-full'>Book now</button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Location />
      </div>
    </div>
  )
}

export default details