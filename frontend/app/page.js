"use client"
import React from 'react'
import Discover from './subpages/Discover'
import HomeAbout from './subpages/HomeAbout'
import More from './subpages/More'
import Rooms from './subpages/Rooms'
import Location from './subpages/Location'


export default function page() {
  return (
    <div className=' bg-[#151719]'>
      <HomeAbout />
      <Rooms />
      <More />
      <Discover />
      <Location />
    </div>
  )
}
