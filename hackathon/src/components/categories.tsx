import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
    return (
        <div className='container px-5 py-24 mx-auto'>
            {/* Heading  */}
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
                    Our Categories
                </h1>
            </div>
            {/* categories start from here  */}
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
                {/* categories 1 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={"/tops"}>
                        <Image src={'/pictures/overcoat.jpg'} alt='tops' width={350} height={350}
                            className="rounded-xl duration-500 group-hover:scale-125" />
                        <div className='hidden lg:block absolute bottom-[-24] group-hover:bottom-1 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Tops</h1>
                            <p className=" text-myWhite leading-7 [&:not(:first-child)]:mt-6">
                                Where Comfort Meets Chic! Elevate your style with our trendy shirts, designed to make a bold statement in any setting.
                            </p>
                        </div>
                        <div className='block lg:hidden absolute bottom-1 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Tops</h1>
                        </div>
                    </Link>
                </div>

                {/* categories 2 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={"/pants"}>
                        <Image src={'/pictures/pants.jpg'} alt='pants' width={350} height={350}
                            className="hidden lg:block rounded-xl duration-500 group-hover:scale-125" />
                        <div className='absolute bottom-[-24] group-hover:bottom-1 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Pants</h1>
                            <p className=" text-myWhite leading-7 [&:not(:first-child)]:mt-6">
                            Step into Confidence - Modern Clothes' Pants: Fashion-forward, comfortable, and ready to conquer the world with you!
                            </p>
                        </div>
                        <div className='block lg:hidden absolute bottom-2 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Pants</h1>
                        </div>
                    </Link>
                </div>


                {/* categories 3 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={"/accessories"}>
                        <Image src={'/pictures/accessories.jpg'} alt='accessories' width={350} height={350}
                            className="rounded-xl duration-500 group-hover:scale-125" />
                        <div className='hidden lg:block absolute bottom-[-24] group-hover:bottom-1 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Accessories</h1>
                            <p className=" text-myWhite leading-7 [&:not(:first-child)]:mt-6">
                            Accessorize Your Dreams - Modern Clothes: Unleash your inner fashionista with our exquisite collection of accessories that complete every look.
                            </p>
                        </div>
                        <div className='block lg:hidden absolute bottom-2 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Accessories</h1>
                        </div>
                    </Link>
                </div>


                {/* categories 4 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={"/shoes"}>
                        <Image src={'/pictures/shoes.jpg'} alt='shoes' width={350} height={350}
                            className="rounded-xl duration-500 group-hover:scale-125" />
                        <div className='hidden lg:block absolute bottom-[-24] group-hover:bottom-1 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Shoes</h1>
                            <p className=" text-myWhite leading-7 [&:not(:first-child)]:mt-6">
                            Walk the Walk in Style - Modern Clothes' Shoes: From casual kicks to elegant heels, step into fashion-forward footwear that sets you apart.
                            </p>
                        </div>
                        <div className='block lg:hidden absolute bottom-2 duration-500 bg-myBlackHead opacity-70 w-full text-center'>
                            <h1 className='uppercase text-myWhite scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl '>Shoes</h1>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Categories