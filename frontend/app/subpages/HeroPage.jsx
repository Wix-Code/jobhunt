import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, DateRangePicker } from 'react-date-range';
import { addDays, format } from 'date-fns';


const HeroPage = () => {
  format(new Date(2014, 1, 11), "yyyy-MM-dd");
  const [open, setOpen] = useState("")
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='flex justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://www.thegeorgelagos.com/assets/george-hotel/images/Studio-Suites.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      color: "white"}}>
      <div>
        <p className='uppercase text-center text-[#fcb900] tracking-[2px] font-[600] text-[16px]'>Welcome to WIXAD Hotels, a luxury apartment hotels in Imo State.</p>
        <p className='text-white marcellus.className tracking-[1px] text-center capitalize font-[700] text-[70px]'>Peace, Comfort & <br /> Luxury</p>
        <div className='flex max-sm:flex-col max-sm:w-full items-center w-[950px] border-[1px] border-[#fcb900]'>
          <div onClick={() => setOpen(open === "calender" ? "" : "calender")} className='flex flex-row w-full'>
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
            <div className='flex border-l-[1px] cursor-pointer border-[#fcb900] flex-1 justify-between px-4 py-3'>
              <p className='text-white text-[14px]'>Check Out</p>
              <p className='text-white text-[14px]'>{state[0].endDate ? format(state[0].endDate, 'yyyy-MM-dd') : ''}</p>
            </div>
          </div>
          <div className='flex flex-row w-full'>
            <div onClick={() => setOpen(open === "people" ? "" : "people")} className='flex border-l-[1px] cursor-pointer border-[#fcb900] flex-1 justify-between px-4 py-3 relative'>
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
            <div className='flex border-l-[1px] border-[#fcb900] flex-1 justify-center items-center'>
              <button className='cursor-pointer'>Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage