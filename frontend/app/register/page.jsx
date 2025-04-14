"use client"
import React from 'react'

const page = () => {
  const [userData, setUserData] = React.useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()
    console.log(userData)
    try {
      const response = await fetch("http://localhost:8800/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      const data = await response.json()
      console.log(data, "APi")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen max-sm:px-10 bg-[#151719]'>
      <div className='flex flex-col w-[500px] max-sm:w-full max-sm:mx-10 p-6 bg-white' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
        <form action="" method="post">
          <div className='flex flex-col gap-5 w-full'>
            <input onChange={handleChange} name='username' type="text" placeholder='Username' required className='border-[1px] border-[#b99d75] bg-white p-3 outline-hidden w-full rounded-md' />
            <input onChange={handleChange} name='email' type="email" placeholder='Email' required className='border-[1px] border-[#b99d75] outline-hidden p-3 rounded-md' />
            <input onChange={handleChange} name='password' type="password" placeholder='Password' required className='border-[1px] border-[#b99d75] p-3 outline-hidden rounded-md' />
            <button onClick={handleSubmit} type="submit" className='bg-[#b99d75] text-white py-3 rounded-md'>Register</button>
            <div className='flex justify-center items-center gap-3'>
              <button className='cursor-pointer'><img className='w-[50px]' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></button>
            </div>
          </div>
          <p className='text-center mt-5'>Already have an account? <a href="/login" className='text-[#b99d75]'>Login</a></p>

        </form>
      </div>
    </div>
  )
}

export default page