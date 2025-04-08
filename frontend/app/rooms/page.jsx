"use client"
import React, { useState } from 'react'
import { data, icon } from '../utils/dummyData';
import { TbListDetails } from "react-icons/tb";
import Location from '../subpages/Location';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FindPage = () => {
  const [menu, setMenu] = useState("Executive")

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <div className='bg-[#151719]'>
    <div className='max-w-[1200px] m-auto flex flex-col gap-8 max-sm:gap-4'>
      <p className='text-[#b99d75] uppercase text-[12px] font-[600] max-sm:mx-10 text-center'>Welcome to Omenma Hotels</p>
      <h1 className='text-[#ffffff] text-[35px] font-[600] max-sm:text-[18px] text-center max-sm:mx-5'>Explore our refined accommodation options <br /> and find the perfect space for your stay.</h1>
      <p className='text-[#cfcece] max-sm:mx-5 max-sm:text-[15px] text-[17px] text-center'>All rooms have a cozy, ultra clean bed and beddings, bathroom and shower, cable television,<br /> free WIFI and executive seat.</p>
      <div className='flex items-center justify-center gap-3 max-sm:mx-5 max-sm:gap-2 max-sm:flex-wrap max-sm:text-[16px]'>
        <button onClick={() => setMenu("Executive")} className='uppercase text-[15px] cursor-pointer text-[#FFFFFF] max-sm:text-[13px] font-[600]'>Executive Rooms</button>
        <button onClick={() => setMenu("Deluxe")} className='uppercase max-sm:text-[13px] text-[15px] text-[#FFFFFF] font-[600] cursor-pointer'>Deluxe Rooms</button>
        <button onClick={() => setMenu("Standard")} className='uppercase max-sm:text-[13px] text-[15px] text-[#FFFFFF] cursor-pointer font-[600]'>standard Rooms</button>
        <button onClick={() => setMenu("Royal")} className='uppercase max-sm:text-[13px] text-[15px] text-[#FFFFFF] cursor-pointer font-[600]'>royal Rooms</button>
        <button onClick={() => setMenu("Event")} className='uppercase max-sm:text-[13px] text-[15px] text-[#FFFFFF] cursor-pointer font-[600]'>Event center</button>
      </div>
      <div className=''>
        {
          data.filter((room) => room.filter === menu).map((rooms) => {
            return (
                <div key={rooms.id} className='flex max-sm:flex max-sm:flex-col items-center flex-row gap-20 max-sm:mx-5 max-sm:gap-5'>
                  <div className='flex-1 max-sm:w-full'>
                  <img src={rooms.img} className='h-[500px] max-sm:h-[300px] object-cover w-full' alt="" />
                  </div>
                <div className='flex-1 flex-col gap-10 flex max-sm:gap-3'>
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
      <div className='custom-slider-wrapper my-5 relative max-sm:m-10'>
        <Slider {...settings}>
          {
            data.map((rooms) => {
              return (
                <div key={rooms.id} className='flex flex-col gap-4 justify-center' style={{display: "flex", flexDirection: "column", gap: 20}}>
                  <img className='w-full object-cover h-[230px]' src={rooms.img} alt="" />
                  <p className='text-[#cfcece] text-[15px] mt-3 text-center'>{rooms.desc}</p>
                  <div className='flex justify-center'>
                  <button className='text-[#b99d75] flex justify-center mt-2 text-[16px] cursor-pointer hover:underline'>Discover more</button>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
    <div className='bg-[#000]'>
      <div className='max-w-[1200px] m-auto py-10'>
        <p className='text-[#b99d75] uppercase text-[12px] mx-10 font-[600] max-sm:m-5'>The Essential Omenma Amenities</p>
        <div className='flex flex-row gap-20 mx-10 max-sm:gap-5  max-sm:flex max-sm:flex-col max-sm:m-5'>
          <p className='text-[#ffffff] flex-1 text-[28px] max-sm:text-[22px]'>Business or pleasure? We have every amenity you may need to make your stay satisfying.</p>
          <p className='text-[#cfcece] text-[16px] flex-1'>From the moment you enter, you’ll be enveloped in an atmosphere of unparalleled comfort and style, with tastefully appointed furnishings and sumptuous fabrics, lavish bedroom sanctuary, complete with a king-sized bed draped in the finest linens, personalized concierge services, state-of-the-art technology, and unparalleled attention to detail.</p>
        </div>
        <div className='grid grid-cols-4 gap-10 mt-3 max-sm:grid-cols-1 max-sm:m-5'>
          {
            icon.map((icon) => {
              return (
                <div key={icon.id} className='flex flex-col gap-2'>
                  <p className='text-[#b99d75] text-[34px] max-sm:text-[28px]'>{icon.icon}</p>
                  <p className='text-[#ffffff] text-[22px] max-sm:text-[18px]'>{icon.name}</p>
                  <p className='text-[#cfcece] text-[14px] max-sm:text-[16px]'>{icon.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    <div className='py-10'>
      <Location />
    </div>
  </div>;
};

export default FindPage;