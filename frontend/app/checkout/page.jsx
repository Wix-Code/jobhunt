import React from 'react'

const page = () => {
  return (
    <div className=' bg-[#151719]'>
      <div className='flex max-sm:flex-col gap-20 flex-row max-w-[1100px] m-auto max-sm:px-5 bg-[#151719]'>
        <div className='flex flex-col max-sm:mt-5 max-sm:w-full max-sm:p-0  p-6 w-[60%]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }}>
        <h1 className='text-white mb-5 text-[32px] max-sm:text-[24px] font-[800]'>Billing Details</h1>
          <form action="" method="post">
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>First Name</label>
                <input type="text" placeholder='Enter your first name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white'>Last Name</label>
                <input type="text" placeholder='Enter your last name' required className='border-[1px] text-white  border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>Email</label>
                <input type="email" placeholder='Enter your email' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>PhoneNo</label>
                <input type="email" placeholder='Enter your phoneNo' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="fname" className='text-white font-medium'>Address</label>
                <input type="text" placeholder='Enter your address' required className='border-[1px] text-white border-gray-600 p-4 outline-hidden w-full ' />
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
    </div>
  )
}

export default page