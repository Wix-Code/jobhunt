"use client"

import React, { useState } from 'react'
import Location from '../subpages/Location'

const page = () => {
  const [bookDetails, setBookDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
    address: "",
  })

  const handSubmit = async () => {

  }
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
          <form action="" method="post">
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>First Name</label>
                <input onChange={handSubmit} name='fname' type="text" placeholder='Enter your first name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white'>Last Name</label>
                <input type="text" onChange={handSubmit} name='lname' placeholder='Enter your last name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>Email</label>
                <input onChange={handSubmit} name='email' type="email" placeholder='Enter your email' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>PhoneNo</label>
                <input onChange={handSubmit} name='phoneNo' type="text" placeholder='Enter your phoneNo' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>Address</label>
                <input type="text" onChange={handSubmit} name='address' placeholder='Enter your address' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
              </div>
            </div>
          </form>
        </div>
        <div className='w-[40%] max-sm:mb-5 max-sm:w-full mt-5'>
          <div className='bg-[#000] p-6 flex flex-col gap-5'>
            <h1 className='text-white text-[32px] max-sm:text-[24px] font-[800]'>Your Order</h1>
            <img src="https://omenmahotels.com/wp-content/plugins/woo-paystack/assets/images/paystack-wc.png" alt="" />
            <button type="submit" className='bg-[#ffffff] w-full hover:bg-[#b99d75] hover:hover:bg-[#b99d75] cursor-pointer text-wgray-300 max-sm:hover:text-white hover:text-white py-4'>Pay Now</button>
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