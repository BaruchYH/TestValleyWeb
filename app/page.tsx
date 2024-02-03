import React from 'react'
import ImageSlider from '@/components/ImageSlider'
import Features from '@/components/Features'

const page = () => {
  return (
    <div className='h-[1000px] bg-white'>
      <ImageSlider/>
      <div className='px-40'>
        <Features/>
      </div>
    </div>
  )
}

export default page