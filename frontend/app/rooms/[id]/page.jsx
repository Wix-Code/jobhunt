"use client"
import Location from '@/app/subpages/Location';
import React, { useContext, useState } from 'react'
import { FaToiletPaper, FaTv, FaWifi } from 'react-icons/fa6';
import { IoBedOutline } from "react-icons/io5";
import { TbAirConditioning } from 'react-icons/tb';
import { CiLight } from "react-icons/ci";
import { GrPrevious, GrNext } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import Slider from 'react-slick';
import { useParams } from 'next/navigation';
import { useFetchHotelRoomById } from '@/app/utils/dataQuery';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { storeContext, useStore } from '@/app/context/StoreProvider';
import { toast } from 'react-toastify';

const details = () => {
  const [open, setOpen] = useState("");
  const [button, setButton] = useState(0)
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const { userId } = useStore()
  const params = useParams()
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1) 
  format(new Date(2014, 1, 11), "yyyy-MM-dd");
  const id = params?.id;
  const roomId = typeof id === 'string' ? id : '';
  const { data, isLoading, error } = useFetchHotelRoomById(roomId)

  console.log("userId", userId)

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const getDaysDifference = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 1);
  };

  const days = getDaysDifference(state[0].startDate, state[0].endDate);

  const breakfastCost = breakfastIncluded ? (adults + children) * data?.breakfastPrice * days : 0;
  const totalPrice = (data?.price * rooms * days) + breakfastCost;


  //const totalPrice = data?.price * rooms;
  console.log(data, "ROOM")
  console.log(id, "ID")

  const submitReservation = async () => {

    if (!userId) {
      toast.error("User is not logged in");
      return;
    }
    const checkIn = state[0].startDate
    const checkOut = state[0].endDate
    if (new Date(checkOut) <= new Date(checkIn)) {
      return toast.error("Check-out date must be after check-in date.");
    }
    const roomId = id
    try {
      const response = await fetch(`http://localhost:8800/api/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId,
          userId,
          rooms,
          adults,
          children,
          checkOut,
          checkIn
        })
      })
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Booking failed. Please try again.");
      }
      if (data.success) {
        toast.success(data.message || "Room booked successfully!");
        localStorage.setItem("booking", JSON.stringify(data.booking))
        window.location.replace("/checkout");
      } else {
        toast.error(data.message || "Booking failed");
      }   
    } catch (error) {
      console.log(error)
      toast.error(error.message || "Something went wrong during booking.");
    }
  }

  //CAROUSAL FUNCTION
  const goTo = (direction) => {
    let nextIndex;
    if (direction === "next") {
      nextIndex = (button + 1) % data?.img.length;
    } else if (direction === "prev") {
      nextIndex = (button - 1 + data?.img.length) % data?.img.length;
    }
    setButton(nextIndex);
  };

  if (isLoading) return <p>Loading...</p>
  
  return (
    <div className='bg-[#000]'>
      <div className='relative mb-10'>
        <div className=' w-full'>
          <img src={data?.img[button]} className='w-full h-[600px] max-sm:h-[400px] object-cover' alt="" />
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
              <CiLight className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>24/7 Light</p>
            </div>
            <div className='flex items-center gap-3'>
              <TbAirConditioning className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Air Conditioner</p>
            </div>
            <div className='flex items-center gap-3'>
              <LuShoppingCart className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>In-hotel Supermaket</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoBedOutline className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Room Services</p>
            </div>
            <div className='flex items-center gap-3'>
              <MdOutlineLocalLaundryService className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Laundry Services</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaTv className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Cable TV</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaWifi className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Free Wifi & Internet</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaToiletPaper className='text-[45px] text-[#cfcece]' />
              <p className='text-[18px]'>Towels/Toiletries</p>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='bg-[#151719] p-10 flex flex-col gap-5'>
            <div className='flex justify-between items-center text-[#FFFFFF]'>
              <p className='text-[24px] font-bold uppercase'>Reserve:</p>
              <p>From {data?.price} /night</p>
            </div>
            <div onClick={() => setOpen(open === "calender" ? "" : "calender")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Check In</p>               
              <p>{state[0].startDate ? format(state[0].startDate, 'yyyy-MM-dd') : ''}</p>
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
            <div onClick={() => setOpen(open === "calender" ? "" : "calender")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Check Out</p>               
              <p>{state[0].endDate ? format(state[0].endDate, 'yyyy-MM-dd') : ''}</p>
            </div>
            <div onClick={() => setOpen(open === "room" ? "" : "room")} className='relative flex justify-between p-3 cursor-pointer border-[1px] border-[rgb(185,157,117)] text-white'>
              <p>Rooms</p>               
              <p>{rooms}</p>
              {
                open === "room" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                  }} className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Room</p>
                    <div className='flex items-center gap-3'>
                      <button className='cursor-pointer' disabled={rooms === 1} onClick={() => setRooms (prev => prev - 1)}>-</button>
                      <p>{rooms}</p>
                      <button className='cursor-pointer' onClick={() => setRooms (prev => prev + 1)}>+</button>
                    </div>
                  </div>
                )
              }
            </div>
            <div className='flex gap-3'>
              <div onClick={() => setOpen(open === "adullts" ? "" : "adults")} className='cursor-pointer relative flex justify-between p-3 border-[1px] border-[rgb(185,157,117)] text-white w-full'>
                <p>Adults</p>               
                <p>{adults}</p>
                {
                  open === "adults" && (<div onClick={(e) => {
                    e.stopPropagation();
                  }} className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                    <p>Adults</p>
                    <div className='flex items-center gap-3'>
                      <button className='cursor-pointer' disabled={adults === 1} onClick={()=>setAdults(prev => prev - 1)}>-</button>
                      <p>{adults}</p>
                      <button className='cursor-pointer' onClick={()=>setAdults(prev => prev + 1)}>+</button>
                    </div>
                  </div>)
                }
              </div>
              <div onClick={() => setOpen(open === "children" ? "" : "children")}  className='relative cursor-pointer flex justify-between p-3 border-[1px] border-[rgb(185,157,117)] text-white w-full'>
                <p>Children</p>               
                <p>{children}</p>
                {
                  open === "children" && (
                    <div onClick={(e) => {
                      e.stopPropagation();
                    }} className='absolute left-0 bottom-[-50px] bg-white text-black p-3 w-full flex justify-between items-center z-20'>
                     <p>Children</p>
                      <div className='flex items-center gap-3'>
                        <button className='cursor-pointer' disabled={child === 0} onClick={()=>setChildren(prev => prev - 1)}>-</button>
                        <p>{children}</p>
                        <button className='cursor-pointer' onClick={()=>setChild(prev => prev + 1)}>+</button>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className='flex justify-between items-center text-[#FFFFFF]'>
              <div className='flex items-center gap-2'>
                <input checked={breakfastIncluded} onChange={(e) => setBreakfastIncluded(e.target.checked)} className='cursor-pointer border-0 outline-hidden p-[28px]' type="checkbox" name="" id="" />
                <p className='text-[16px]'>Breakfast</p>
              </div>
              <p className='text-[20px] font-bold'>₦{data?.breakfastPrice
              }</p>
            </div>
            <div className='flex justify-between items-center text-[#FFFFFF]'>
              <p className='text-[18px]'>Total</p>
              <p className='text-[20px] font-bold'>₦{totalPrice}</p>
            </div>
            <button onClick={submitReservation} className='bg-[#000] cursor-pointer hover:bg-[rgb(185,157,117)] py-3 text-[#FFFFFF] w-full'>Book now</button>
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