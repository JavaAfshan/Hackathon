import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className=''>
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">New <span className='text-myOrange'>Arrivals</span></h1>
            <p className="mb-5 scroll-m-20 text-lg  tracking-tight text-myWhite">Elevate Your Style: Discover Modern Clothes for the Trendsetters. Shop Now and Stand Out! Be a trendsetter with our modern clothes collection.</p>
            <Button className='outline outline-offset-2 outline-1 outline-myWhite text-myBlackHead group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myOrange bg-white '>
              <AiOutlineShoppingCart className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> INDULGE YOURSELF
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero