"use client"

import React, { useState } from 'react'
import Location from '../subpages/Location'
import { useStore } from '../context/StoreProvider'
import { toast } from 'react-toastify'

const page = () => {
  const [bookDetails, setBookDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
    address: "",
  })
  const { booking, userId, orderId } = useStore()
  
  const handleSubmit = async (e) => {
    const { name, value } = e.target
    setBookDetails({ ...bookDetails, [name]: value })
  }

  const makePayment = async () => {
    const totalPrice = booking?.totalPrice;
    const bookingId = booking?._id;
  
    if (!userId) {
      toast.error("User ID is required. Please log in.");
      return;
    }
    for (const [key, value] of Object.entries(bookDetails)) {
      if (!value.trim()) {
        toast.error(`${key} is required`);
        return;
      }
    }
    if (!totalPrice || !bookingId) {
      return toast.error("Missing total price or booking ID.");
    }
  
    try {
      const response = await fetch(`http://localhost:8800/api/book/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...bookDetails,
          bookingId,
          totalPrice,
        }),
      });
  
      const data = await response.json();
  
      if (data.success === true) {
        toast.success(data.message || "Details submitted successfully.");
        localStorage.setItem("order", (JSON.stringify(data.order)))

        const payment = await fetch(`http://localhost:8800/api/book/payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            orderId,
            email: bookDetails.email,
            amount: booking.totalPrice,
          }),
        })
        const pay = await payment.json();
        if (pay.success === true) {
          window.location.replace(pay.authorization_url);
        }
        console.log(pay, "Payment data")
      } else {
        toast.error(data.message || "Something went wrong.");
      }
  
      console.log(data, "Payment response data");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An error occurred while processing the payment.");
    }
  
    console.log("Payment Info:", { totalPrice, bookingId, userId, bookDetails, orderId });
  };
  

  console.log(booking)
  return (
    <div className=' bg-[#151719]'>
      <div className='flex justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://media.cntravellerme.com/photos/64a6c72751562a659243e175/16:9/w_2560%2Cc_limit/atlantis%2520theroyal-skypoolvilla-terrace-sunset-mr.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "70vh",
      color: "white"}}>
        <div className='max-sm:mx-5 max-sm:flex max-sm:flex-col max-sm:gap-3'>
            <p className='uppercase text-center text-[#ffffff] my-5 tracking-[2px] font-[600] text-[16px] max-sm:text-[14px]'>A stay infused with creativity and culture.</p> 
            <p className='text-white marcellus.className tracking-[1px] text-center capitalize font-[700] text-[70px] max-sm:text-[30px]'>Checkout</p> 
        </div>
      </div>
      <div className='flex max-sm:flex-col gap-20 flex-row max-w-[1100px] m-auto max-sm:px-5 bg-[#151719]'>
        <div className='flex flex-col max-sm:mt-5 max-sm:w-full max-sm:p-0  p-6 w-[60%]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
        <h1 className='text-white mb-5 text-[32px] max-sm:text-[24px] font-[800]'>Billing Details</h1>
          <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fname" className='text-white font-medium'>First Name</label>
              <input type="text" onChange={handleSubmit} name='fname'  value={bookDetails.fname}  placeholder='Enter your first name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fname" className='text-white'>Last Name</label>
              <input type="text" onChange={handleSubmit} name='lname'  value={bookDetails.lname} placeholder='Enter your last name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fname" className='text-white font-medium'>Email</label>
              <input onChange={handleSubmit} name='email' value={bookDetails.email} type="email" placeholder='Enter your email' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fname" className='text-white font-medium'>PhoneNo</label>
              <input onChange={handleSubmit} name='phoneNo'  value={bookDetails.phoneNo} type="text" placeholder='Enter your phoneNo' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="fname" className='text-white font-medium'>Address</label>
              <input type="text" onChange={handleSubmit} name='address'  value={bookDetails.address} placeholder='Enter your address' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
            </div>
          </div>
        </div>
        <div className='w-[40%] max-sm:mb-5 max-sm:w-full mt-5'>
          <div className='bg-[#000] p-6 flex flex-col gap-5'>
            <h1 className='text-white text-[32px] max-sm:text-[24px] font-[800]'>Your Order</h1>
            <img src="https://omenmahotels.com/wp-content/plugins/woo-paystack/assets/images/paystack-wc.png" alt="" />
            <button type="submit" onClick={makePayment} className='bg-[#ffffff] w-full hover:bg-[#b99d75] hover:hover:bg-[#b99d75] cursor-pointer text-wgray-300 max-sm:hover:text-white hover:text-white py-4'>Pay Now</button>
          </div>
        </div>
      </div>
      <div>
        <Location />
      </div>
    </div>
  )
}

export default page