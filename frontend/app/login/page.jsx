"use client"

import React from 'react'
import { useStore } from '../context/StoreProvider'

const Login = () => {
  const google = () => {
    window.open('http://localhost:8800/auth/google', '_self')
  }
  const { handleChange, handleSubmit, loading } = useStore()
  return (
    <div className='flex flex-col items-center justify-center h-screen max-sm:px-10 bg-[#151719]'>
      <div className='flex flex-col w-[500px] max-sm:w-full max-sm:mx-10 p-6 bg-white' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
        <form action="" method="post">
          <div className='flex flex-col gap-5 w-full'>
            <input type="email" onChange={handleChange} name='email' placeholder='Email' required className='border-[1px] border-[#b99d75] outline-hidden p-3 rounded-md' />
            <input type="text" placeholder='Password' onChange={handleChange} name='password' required className='border-[1px] border-[#b99d75] p-3 outline-hidden rounded-md' />
            <button onClick={handleSubmit} type="submit" className='bg-[#b99d75] flex justify-center items-center gap-1 text-white py-3 rounded-md'>{loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}</button>
            <div className='flex justify-center items-center gap-3'>
              <button onClick={google} className='cursor-pointer'><img className='w-[50px]' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></button>
            </div>
          </div>
          <p className='text-center mt-5'>Don't have an account? <a href="/register" className='text-[#b99d75]'>Register</a></p>

        </form>
      </div>
    </div>
  )
}

export default Login