"use client"

import React from 'react'

const Login = () => {
  const google = () => {
    window.open('http://localhost:8800/auth/google', '_self')
  }
  return (
    <div className='flex justify-center items-center'>
      <button onClick={google}  className='cursor-pointer'>Login</button>
    </div>
  )
}

export default Login