import CartCard from '@/components/cartCard/page'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const Cart = () => {
    return (
        <div className='mt-[50px] mb-[100px]'>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {/* Items */}
                <div className='col-span-2'>
                    <CartCard 
                src='/pictures/bestSelling4.jpg' 
                title='Elegant Dress'
                size='MD'
                price={1234}
                /></div>
                {/* Summary  */}
                <div className='bg-myBlackHead/5 p-5 rounded-xl'>
                    {/* Heading  */}
                    <h2 className='scroll-m-20 text-lg font-semibold uppercase tracking-tight text-myBlackHead'>
                        Order Summary
                    </h2>
                    {/* divider  */}
                    <div className='divider mt-0 mb-1'></div>
                    {/* pricing  */}
                    <div className='ext-sm font-medium tracking-tighter text-myBlackPara'>
                        {/* Product Pricing  */}
                        <div className='flex item-center justify-between capitalize'>
                            <h2>Sub Total</h2>
                            <h2>$1400</h2>
                        </div>
                        {/* Delivery Charges  */}
                        <div className='flex item-center justify-between capitalize'>
                            <h2>Delivery Charges</h2>
                            <h2>TBD</h2>
                        </div>
                        {/* Service Charges  */}
                        <div className='flex item-center justify-between capitalize'>
                            <h2>Sales Tax</h2>
                            <h2>TBD</h2>
                        </div>
                    </div>
                    {/* divider  */}
                    <div className='divider mt-0 mb-1'></div>
                    {/* Estimate Total  */}
                    <div className='flex item-center justify-between uppercase font-semibold tracking-tighter text-myBlackHead text-sm'>
                        <h2>Estimate Total</h2>
                        <h2>$1400</h2>
                    </div>
                    {/* divider  */}
                    <div className='divider mt-0 mb-1'></div>
                    {/* checkout button  */}
                    <div className='flex justify-center w-full'>
                        <Button className=' pl-10 pr-10 text-myWhite bg-myBlackHead rounded-xl group hover:rounded-3xl duration-300 hover:outline-myOrange hover:text-myBlackHead '>
                            <BsFillCartFill className="mr-1 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " />  Checkout 
                        </Button>
                    </div>
                      {/* divider  */}
                      <div className='divider mt-0 mb-1'></div>
                      {/* note  */}
                      <div className='tracking-tighter text-myBlackHead text-xs text-semibold text-center w-[97%] italic'>
                        * Extra Fast Delivery with zero comission Sales text included.
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Cart