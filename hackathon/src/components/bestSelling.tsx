
import React from 'react'
import BestSellingCard from './bestSellingCard'
import Image from 'next/image'
const BestSelling = () => {
    const BestSell = [
        {
            src: "/pictures/bestSelling.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling4.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling3.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        }
    ]
    return (
        <div>
            {/* Heading  */}
            <div className="text-center mb-5 ">
                <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
                    Best Selling Products
                </h1>
            </div>
            {/* Best Selling Products  */}
            <div className='flex flex-wrap justify-center gap-5'>
                {
            BestSell.map((items,i)=>(
                           <BestSellingCard  
                           key={i} 
                           src={items.src}
                           alt={items.alt}
                           title={items.title}
                           description={items.description}
                           price={items.price}
                           category={items.category}
                           slug={items.slug}
                           />
                 ))
            }
            </div>
        </div>
    )
}

export default BestSelling