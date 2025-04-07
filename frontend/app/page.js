"use client"
import React from 'react'
import Discover from './subpages/Discover'
import HomeAbout from './subpages/HomeAbout'


export default function page() {
  return (
    <div className='flex flex-col gap-14'>
      <HomeAbout />
      <Discover />
    </div>
  )
}
