import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from './ui/button'

const Promotion = () => {
    return (
        <div><section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
                        Our Promotions
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="hero min-h-[50vh] custom-img bg-fixed bg-center bg-no-repeat rounded-xl" >
                            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myWhite">GET UPTO <span className='text-myOrange'>60%</span> OFF</h1>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-myWhite">Flash Sale, get upto 60% off on the season Variant </p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="hero min-h-[50vh] custom-img1 bg-fixed bg-center bg-no-repeat rounded-xl" >
                            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-myWhite">GET UPTO <span className='text-myOrange'>30%</span> OFF</h1>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6 text-myWhite">Flash Sale, get upto 60% off on the new Collection </p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Promotion