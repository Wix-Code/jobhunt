"use client"
import React from 'react'
import Discover from './subpages/Discover'
import HomeAbout from './subpages/HomeAbout'
import More from './subpages/More'


export default function page() {
  return (
    <div className='flex flex-col bg-[#151719]'>
      <HomeAbout />
      <More />
      <Discover />
    </div>
  )
}
