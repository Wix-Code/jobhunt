"use client"
import React from 'react'
import { Find } from './components/Find'
import { RightTalent } from './components/RightTalent'
import { Upgrade } from './components/Upgrade'
import { Hero } from './components/Hero'

export default function page() {
  return (
    <div className='flex flex-col gap-10'>
      <Hero />
      <Find />
      <Upgrade />
      <RightTalent />
    </div>
  )
}
