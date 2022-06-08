import React from 'react'
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Header() {
    const cartProducts = useSelector((state:any) => state?.cart);
    const wishlistProducts = useSelector((state:any) => state?.favourites);
  return (
    <div className='bg-dark bg-blue-900 text-white grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 justify-between'>
      <div className='sm:col-span-2 lg:col-span-2 px-5'>
        <img src="../assets/logo.jpeg" className='h-16' alt='Logo'/>
      </div>
      <nav role="navigation" className='sm:col-span-2 lg:col-span-8'>
        <ul className="flex py-5">
          <li className='px-5'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-5'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> 
      <div className='sm:col-span-2 lg:col-span-2 py-5 px-5 flex gap-6 justify-end'>
        <Link to="/wishlist" className='relative'>
          <FaHeart className='text-2xl'/>
              {wishlistProducts?.length ? 
              <span className='bg-red-600 text-white h-6 w-6 text-center absolute left-4 bottom-4 rounded-full'>
                  {wishlistProducts.length}
              </span>
             : ''}
        </Link>
        <Link to="/cart" className='relative'>
          <FaShoppingCart className='text-2xl'/>
              {cartProducts?.length ? 
              <span className='bg-red-600 text-white h-6 w-6 text-center absolute left-4 bottom-4 rounded-full'>
                  {cartProducts.length}
              </span>
             : ''}
        </Link>
        </div> 
    </div>  
  )
}
