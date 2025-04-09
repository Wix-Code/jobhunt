import React from 'react'

const HeroPage = () => {
  return (
    <div className='flex justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url("https://www.thegeorgelagos.com/assets/george-hotel/images/Studio-Suites.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      color: "white"}}>
      <div>
        <p className='uppercase text-[#fcb900] tracking-[2px] font-[600] text-[16px]'>Welcome to WIXAD Hotels, a luxury apartment hotels in Imo State.</p>
        <p className='text-white marcellus.className tracking-[1px] text-center capitalize font-[700] text-[70px]'>Peace, Comfort & <br /> Luxury</p>
      </div>
    </div>
  )
}

export default HeroPage