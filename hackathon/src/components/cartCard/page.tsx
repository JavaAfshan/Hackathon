import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import {FaPlus ,FaMinus, FaTrash} from 'react-icons/fa'

const CartCard = (
{
src,title,size,price,
}:
{
src:string;
title:string;
size:string;
price:number;
}
) => {
  return (
    <div className='p-6 flex '>
      {/* Image  */}
      <Image src={src} alt={title} width={80} height={110}
      className="w-[100px] h-[130px]" />
      {/* Some Information  */}
      <div className='flex px-5 justify-between items-center w-[550px]'>
     <div>
         {/* title  */}
         <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
          {title}
        </h2>
        {/* paragraph  */}
        <p className='mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1'>
         Size: &nbsp; <span> {size}</span>
        </p>
        {/* Quantity  */}
        <div className='flex mt-2 items-center'>
          <Button className='group bg-myBlackHead hover:bg-myWhite text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300'>
           <FaMinus  className='h-2 w-2 group-hover:text-myBlackHead' />
          </Button>
          <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80">1</div>
          <Button className='group bg-myBlackHead hover:bg-myWhite text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300'>
           <FaPlus  className='h-2 w-2 group-hover:text-myBlackHead' />
          </Button>
        </div>
        {/* Price and Delete  */}
        <div className='mt-5 lg:hidden flex flex-col gap-2'>
              <h3 className='text-sm font-semibold leading-1 line-clamp-1 text-myBlackHead'>
               Price: &nbsp; <span>{`$ ${price}`}</span>
              </h3>
              <FaTrash className='text-bold font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
      </div>
     </div>
      </div>
      {/* Price and Delete  */}
      <div className='hidden lg:flex flex-col items-end gap-5'>
              <h3 className='text-sm font-semibold leading-1 line-clamp-1 text-myBlackHead'>
               Price: &nbsp; <span>{`$ ${price}`}</span>
              </h3>
              <FaTrash className='text-bold font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>
      </div>
    </div>
  )
}

export default CartCard