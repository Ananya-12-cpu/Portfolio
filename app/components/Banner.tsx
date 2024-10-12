'use client'

import Image from 'next/image'
import React from 'react'

function PortfolioBanner() {
  return (
    <div>
    {/* <Image
      src="/images/New_Banner.png"
      width={1440}
      height={300}
      alt="Picture of the author"
    /> */}
     <div   className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl p-8">
  
    <div   className="flex flex-col justify-center">
      <h1   className="text-4xl md:text-6xl font-bold mb-3">
        Hey, I'm <span   className="text-indigo-500">Ananya</span>
      </h1>
      <p   className="mt-6 text-gray-400 text-sm max-w-lg">
        Crafting Engaging Digital Experiences. Transform your vision into reality with beautifully designed, high-performance websites. Whether it's a sleek portfolio, an e-commerce platform, or a business solution, I specialize in creating seamless digital experiences across all devices. Let's collaborate and build something amazing!
      </p>
       {/* Buttons Section */}
    <div className="mt-10 space-x-4">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600">
              Learn More
            </button>
            <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
              Contact Me
            </button>
          </div>
    </div>

   
    <div   className="flex justify-center items-center">
    <Image
      src="/images/user.png"
      width={1440}
      height={300}
      alt="Picture of the author"
    />
      {/* <img src="https://undraw.co/api/illustrations/66" alt="Web Development Illustration"   className="w-full h-auto"/> */}
    </div>
  </div>
  </div>
  )
}

export default PortfolioBanner