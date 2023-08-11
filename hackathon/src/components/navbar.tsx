import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxHamburgerMenu} from 'react-icons/rx';
import { NavigationMenuDemo } from './navlinks';
import {BsFillCartFill} from 'react-icons/bs'

const navbar = () => {
  return (
   <div className=''>
    <div className="navbar bg-myWhite">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="p-0 text-2xl lg:hidden">
      <RxHamburgerMenu/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <Link href={'#'}>Women</Link>
          <ul className="p-2">
            <li><Link href={'/tops'}>Tops</Link></li>
            <li><Link href={'/pants'}>Pants</Link></li>
            <li><Link href={'/accessories'}>Accessories</Link></li>
            <li><Link href={'/shoes'}>Shoes</Link></li>
          </ul>
        </li>
        <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div >
    <div className='hidden lg:block'>
    <Image alt="logo" src={'/pictures/Logo.png'} width={300} height={100}/>
    </div>
  </div>
  <div className="navbar-center">
  <div className='block lg:hidden'>
    <Image alt="logo" src={'/pictures/Logo.png'} width={300} height={100}/>
    </div>
    <div className='hidden lg:flex'>
    <NavigationMenuDemo/>
    </div>
  </div>
  <div className='navbar-end'>
    <Link href={'/cart'}>
      <label className="pr-5  cursor-pointer group ">
        <div className="indicator">
          <BsFillCartFill className="h-7 w-7 group-hover:text-myOrange duration 300  " />
          <span className="badge badge-sm indicator-item font-semibold group bg-myOrange  text-myBlackPara group-hover:text-white group-hover:bg-black">8</span>
        </div>
      </label>
      </Link>
  </div> 
</div>
   </div>
  )
}

export default navbar