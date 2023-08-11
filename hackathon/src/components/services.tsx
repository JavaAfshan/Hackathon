import React from 'react'
import { Button } from '../components/ui/button'
import { AiFillShopping } from 'react-icons/ai'
import Image from 'next/image'
const Services = () => {
    return (
        <div><section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
                        Services
                    </h1>
                    <div className="flex justify-center">
                        <section className="text-gray-600 body-font mt-4 ">
                            <div className="container px-5  mx-auto ">
                                <div className=" mx-auto flex xl:flex-row flex-col">
                                    <div className="card w-96 bg-base-100 xl:mr-5 mb-5 shadow-xl image-full hover:scale-105 transition duration-500 ">
                                        <Image src={require('../../public/pictures/money.png')} alt="Shoes" />
                                        <div className="card-body">
                                            <h2 className="card-title text-myWhite scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Money <span className='text-myOrange'>Gurantee!</span></h2>
                                            <p className='text-myWhite leading-7 [&:not(:first-child)]:mt-6'>We offer a hassle-free money-back guarantee within a specified period if you're not satisfied with your purchase or if the items are damaged/not as described.</p>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 xl:mr-5 mb-5 shadow-xl image-full hover:scale-105 transition duration-500">
                                        <Image src={require('../../public/pictures/delivery.png')} alt="Shoes" />
                                        <div className="card-body">
                                            <h2 className="card-title text-myWhite scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Free  <span className='text-myOrange'>Delivery!</span></h2>
                                            <p className='text-myWhite leading-7 [&:not(:first-child)]:mt-6'>Enjoy free shipping on all orders with fast and reliable service, including tracking information and easy returns.</p>
                                        </div>
                                    </div>
                                    <div className="card w-96 bg-base-100 xl:mr-5 mb-5 shadow-xl image-full hover:scale-105 transition duration-500">
                                        <Image src={require('../../public/pictures/hours.png')} alt="Shoes" />
                                        <div className="card-body">
                                            <h2 className="card-title text-myWhite scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Customer  <span className='text-myOrange'>Services!</span></h2>
                                            <p className='text-myWhite leading-7 [&:not(:first-child)]:mt-6'>Our dedicated customer support team is available 24/7 via phone, email, and live chat to assist you with product information, order status, returns, and any other inquiries you may have.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>




                <Button className='flex mx-auto mt-16 py-2 px-8 outline outline-offset-2 outline-1 outline-myOrange text-myBlackHead group hover:rounded-3xl duration-300 hover:outline-myBlackHead hover:text-myBlackHead bg-myOrange '>
                    <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> Explore Our Collection
                </Button>

            </div>
        </section>
        </div>
    )
}

export default Services