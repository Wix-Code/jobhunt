"use client"
import React, { useState } from 'react'
import { data, icon } from '../utils/dummyData';
import { TbListDetails } from "react-icons/tb";
import Location from '../subpages/Location';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, DateRangePicker } from 'react-date-range';
import { addDays, format } from 'date-fns';
import { useStore } from '../context/StoreProvider';
import { useFetchHotelRooms } from '../utils/dataQuery';
import Link from 'next/link';

const FindPage = () => {
  const [menu, setMenu] = useState("Executive Room")
  format(new Date(2014, 1, 11), "yyyy-MM-dd");
  const [open, setOpen] = useState("")
  const { apiData } = useStore();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const { data: rooms, isLoading, error } = useFetchHotelRooms()
  console.log(rooms, "rooms rooms rooms")

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

  if(isLoading) return <p>Loading...</p>
  return <div className='bg-[#151719]'>
    <div className='flex justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://www.thegeorgelagos.com/assets/george-hotel/images/Studio-Suites.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      color: "white"}}>
      <div className='max-sm:mx-5 max-sm:flex max-sm:flex-col max-sm:gap-3'>
        <p className='text-white marcellus.className tracking-[1px] text-center capitalize font-[700] text-[70px] max-sm:text-[30px]'>Book Your Stay</p>
        <p className='uppercase text-center text-[#fcb900] my-10 tracking-[2px] font-[600] text-[16px] max-sm:text-[14px]'>A stay infused with creativity and culture.</p>
        <div className='flex max-sm:flex-col max-sm:w-full items-center w-[950px] border-[1px] border-[#fcb900]'>
          <div onClick={() => setOpen(open === "calender" ? "" : "calender")} className='flex flex-row w-full max-sm:flex-col'>
            <div className='flex flex-1 cursor-pointer relative justify-between px-4 py-3'>
              <p className='text-white text-[14px]'>Check In</p>
              <p className='text-white text-[14px]'>{state[0].startDate ? format(state[0].startDate, 'yyyy-MM-dd') : ''}</p>
              <div className='absolute bottom-[-225px] z-10 top-0 left-0'>
              {
                open === "calender" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                  }} className='absolute bg-white w-full left-0 bottom-[-135px]'>
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  />
                </div>
                )
              }
              </div>
            </div>
            <div className='flex border-l-[1px] max-sm:border-l-0 cursor-pointer max-sm:border-t-[1px] max-sm:border-[#fcb900] border-[#fcb900] flex-1 justify-between px-4 py-3'>
              <p className='text-white text-[14px]'>Check Out</p>
              <p className='text-white text-[14px]'>{state[0].endDate ? format(state[0].endDate, 'yyyy-MM-dd') : ''}</p>
            </div>
          </div>
          <div className='flex flex-row w-full max-sm:flex-col'>
            <div onClick={() => setOpen(open === "people" ? "" : "people")} className='flex border-l-[1px] max-sm:border-t-[1px] max-sm:border-[#fcb900] cursor-pointer border-[#fcb900] max-sm:border-l-0 flex-1 justify-between px-4 py-3 relative'>
              <p>Guest</p>
              <div className='flex items-center gap-2'>
                <p>Adults,0</p>
                <p>Child,0</p>
              </div>
              {
                open === "people" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                  }} className='absolute bg-white w-full left-0 bottom-[-135px]'>
                  <div className='flex justify-between text-black p-5 items-center'>
                    <p>Adults</p>
                    <div className='flex gap-3 items-center'>
                      <button className='cursor-pointer'>-</button>
                      <p>0</p>
                      <button className='cursor-pointer'>+</button>
                    </div>
                  </div>
                  <div className='flex justify-between text-black p-5 items-center'>
                    <p>Children</p>
                    <div className='flex gap-3 items-center'>
                      <button className='cursor-pointer'>-</button>
                      <p>0</p>
                      <button className='cursor-pointer'>+</button>
                    </div>
                  </div>
                </div>
                )
              }
            </div>
            <div className='flex border-l-[1px] border-[#fcb900] flex-1 justify-center items-center max-sm:border-t-[1px] max-sm:px-4 max-sm:py-3 max-sm:border-[#fcb900] max-sm:border-l-0'>
              <button className='cursor-pointer'>Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='max-w-[1200px] m-auto flex flex-col gap-8 max-sm:gap-4'>
      <p className='text-[#b99d75] mt-5 uppercase text-[12px] font-[600] max-sm:mx-10 text-center'>Welcome to Omenma Hotels</p>
      <h1 className='text-[#ffffff] text-[35px] font-[600] max-sm:text-[18px] text-center max-sm:mx-5'>Explore our refined accommodation options <br /> and find the perfect space for your stay.</h1>
      <p className='text-[#cfcece] max-sm:mx-5 max-sm:text-[15px] text-[17px] text-center'>All rooms have a cozy, ultra clean bed and beddings, bathroom and shower, cable television,<br /> free WIFI and executive seat.</p>
      <div className='flex items-center justify-center gap-3 max-sm:mx-5 max-sm:gap-2 max-sm:flex-wrap max-sm:text-[16px]'>
        <button onClick={() => setMenu("Executive Room")}  className={`uppercase max-sm:text-[13px] text-[15px] font-[600] cursor-pointer ${
          menu === "Executive Room" ? 'text-[#FFCC00]' : 'text-[#FFFFFF]'
        }`}>Executive Rooms</button>
        <button onClick={() => setMenu("Deluxe")}  className={`uppercase max-sm:text-[13px] text-[15px] font-[600] cursor-pointer ${
          menu === "Deluxe" ? 'text-[#FFCC00]' : 'text-[#FFFFFF]'
        }`}>Deluxe Rooms</button>
        <button onClick={() => setMenu("Standard Rooms")}  className={`uppercase max-sm:text-[13px] text-[15px] font-[600] cursor-pointer ${
          menu === "Standard Rooms" ? 'text-[#FFCC00]' : 'text-[#FFFFFF]'
        }`}>standard Rooms</button>
        <button onClick={() => setMenu("Royal")} className={`uppercase max-sm:text-[13px] text-[15px] font-[600] cursor-pointer ${
          menu === "Royal" ? 'text-[#FFCC00]' : 'text-[#FFFFFF]'
        }`}>royal Rooms</button>
        <button onClick={() => setMenu("Event")}  className={`uppercase max-sm:text-[13px] text-[15px] font-[600] cursor-pointer ${
          menu === "Event" ? 'text-[#FFCC00]' : 'text-[#FFFFFF]'
        }`}>Event center</button>
      </div>
      <div className=''>
        {
          rooms?.rooms?.filter((room) => room.name === menu).map((rooms) => {
            return (
                <div key={rooms._id} className='flex max-sm:flex max-sm:flex-col items-center flex-row gap-20 max-sm:mx-5 max-sm:gap-5'>
                  <div className='flex-1 max-sm:w-full'>
                    <img src={rooms.img[0]} className='h-[500px] max-sm:h-[300px] object-cover w-full' alt="" />
                  </div>
                <div className='flex-1 flex-col gap-10 flex max-sm:gap-3'>
                  <p className='text-[#b99d75] uppercase text-[12px] font-[600]'>Welcome to Wixad hotels</p>
                  <h1 className='text-[#ffffff] text-[40px] max-sm:text-[22px] font-[600]'>{rooms.name}</h1>
                  <p className='text-[#cfcece] max-sm:text-[15px] text-[17px]'>{rooms.desc}</p>
                  <div className='flex items-center gap-4'>
                    <TbListDetails className='text-[#b99d75] max-sm:text-[22px] text-[30px]' />
                    <button className='text-[#b99d75] uppercase text-[12px] font-[600]'>Features of this room</button>
                  </div>
                  <div className='flex items-center gap-4'>
                    <TbListDetails className='text-[#b99d75]  max-sm:text-[22px] text-[30px]' />
                    <Link href={`/rooms/${rooms._id}`}><button className='text-[#b99d75] uppercase text-[12px] cursor-pointer font-[600]'>Reserve This room</button></Link>
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
            rooms?.rooms?.map((rooms) => {
              return (
                <div key={rooms._id} className='flex flex-col gap-4 justify-center' style={{display: "flex", flexDirection: "column", gap: 20}}>
                  <img className='w-full object-cover h-[230px]' src={rooms.img[0]} alt="" />
                  <p className='text-[#cfcece] text-[15px] mt-3 text-center'>{rooms.desc.slice(0, 80)}...</p>
                  <div className='flex justify-center'>
                  <Link href={`/rooms/${rooms._id}`}><button className='text-[#b99d75] flex justify-center mt-2 text-[16px] cursor-pointer hover:underline'>Discover more</button></Link>
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
                  <p className='text-[#b99d75] text-[34px] max-sm:text-[24px]'>{icon.icon}</p>
                  <p className='text-[#ffffff] text-[22px] max-sm:text-[17px]'>{icon.name}</p>
                  <p className='text-[#cfcece] text-[14px] max-sm:text-[15px]'>{icon.desc}</p>
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