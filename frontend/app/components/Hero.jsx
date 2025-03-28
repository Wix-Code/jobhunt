import React from 'react'

export const Hero = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-4  bg-blue-500 py-10'>
        <h2 className='text-center'>Explore and discover
          the right job for you!</h2>
        <div className='flex px-40 py-5 bg-blue-300'>
          <div className='flex-[1]'>
            <p>All function</p>
          </div>
          <div className='flex-[1]'>
            <p>All function</p>
          </div>
          <div className='flex-[1]'>
            <p>All function</p>
          </div>
          <div>
            <button>Find a job</button>
          </div>
        </div>
      </div>
    </div>
  )
}
