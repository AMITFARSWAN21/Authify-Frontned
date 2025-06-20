import React from 'react'
import bannerImage from '../assets/bannerImage.jpg'

export const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  )
}