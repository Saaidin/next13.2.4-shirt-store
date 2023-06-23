import Image from "next/image"
import Link from "next/link"
import img1 from "../public/img-shirts/alex-hddife-6wWiZlA2n0Q-unsplash.jpeg"
import img2 from "../public/img-shirts/uji-kanggo-gumilang-sMn0sxR8v2E-unsplash.jpeg"
import img3 from "../public/img-shirts/andreea-chidu-FPV2_FbNHoE-unsplash.jpeg"

const Categories = () => {
  return (
    <div className="container mx-auto">
      <div className="h-full w-full flex flex-col justify-center mt-10">
        {/* title */}
        <h2 className="mb-8 text-3xl text-[#333] text-center">Categories</h2>
        <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* category */}
          <Link
            href="/category/New%20Arrivals"
            className="h-[325px] w-[325px] relative"
          >
            <Image src={img1} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
              New Arrivals
            </span>
          </Link>
          {/* category */}
          <Link
            href="/category/Best%20Sellers"
            className="h-[325px] w-[325px] relative"
          >
            <Image src={img2} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
              Best Sellers
            </span>
          </Link>
          {/* category */}
          <Link
            href="/category/Top%20Rated"
            className="h-[325px] w-[325px] relative"
          >
            <Image src={img3} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">
              Top Rated
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
/*
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../public/assets/woman2.jpg'
import img2 from '../public/assets/headphones.jpg'
import img3 from '../public/assets/mancap.jpg'

const Categories = () => {
  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-10/12'>
     //   title 
        <h2 className='mb-8 text-3xl text-[#333]'>Categories</h2>
        <div className='h-full w-full flex items-center justify-between'>
          //category 
          <Link href='/category/sunglasses' className="h-[325px] w-[325px] relative">
            <Image src={img1} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">Sunglasses</span>
          </Link>
          //category 
          <Link href='/category/headphones' className="h-[325px] w-[325px] relative">
            <Image src={img2} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">Headphones</span>
          </Link>
          //category 
          <Link href='/category/hat' className="h-[325px] w-[325px] relative" >
            <Image src={img3} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-orange-500 px-6 py-2 text-white">Hat and Caps</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
*/
