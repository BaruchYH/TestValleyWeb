'use client'
import React from 'react'
import ImageSlider from '@/components/ImageSlider'
import Features from '@/components/Features'
import MainData from '@/components/listdata/MainData'


const page = () => {
  return (
    <div className='h-auto bg-white'>
      <ImageSlider/>
      <div className='px-40'>
        <Features/>
        <div className='mt-10'>
        <MainData/>
      </div>
      </div>
      
    </div>
  )
}

export default page