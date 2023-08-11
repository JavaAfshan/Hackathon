"use client";
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from './bestSellingCard'
const FeaturedProducts = () => {
    // data for randering 
    const BestSell = [
        {
            src: "/pictures/bestSelling14.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling13.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling12.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling11.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling10.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling9.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling7.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        },
        {
            src: "/pictures/bestSelling.jpg",
            alt: "Best Selling Shirt",
            title: "Decent Top ",
            description: "Elegant top for Girls",
            price: 20987,
            category:"tops",
            slug:"elegant-tops"
        }
    ]
     // Carousel Setting 
     var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              arrows:false
            }
          },

          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false
            }
          }
        ]
      };
  return (
    <div className='mb-[100px] mt-[100px]'>
         {/* Heading  */}
         <div className="text-center mb-5 ">
                <h1 className="sm:text-3xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
                    Featured Products
                </h1>
            </div>
        {/* Carousel  */}
        <Slider {...settings}>
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
        </Slider>
    </div>
  )
}

export default FeaturedProducts