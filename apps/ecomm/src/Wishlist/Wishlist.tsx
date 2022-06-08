import { formattedPrice } from '@twks/ecomm/util-formatters';
import { removeFromWishlist } from '../../../store/actions';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Wishlist() {
    const products = useSelector((state:any) => state?.favourites);
    const dispatch = useDispatch();
    const handleClick =(productId:any) => {
      dispatch(removeFromWishlist(productId));
    }
    return (
      <section>
        <h1 className='text-2xl text-blue-900 mb-2'>Wishlist Items</h1>
        <hr className='my-5'/>
        <div className='w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8'>
            
            {
              products?.map((product:any)=> {
                return (
                  <div className='aspect-w-2 aspect-h-3 rounded-lg overflow-hidden sm:col-span-12 md:col-span-6 lg:col-span-6'>
                    <div className='flex border p-3 flex-initial w-full'>
                      <Link to={`/detail/${product.id}`}>
                        <img src={product?.image} alt={product?.name} className='h-40 w-40 overflow-hidden object-cover rounded'/>
                      </Link>
                      <div className="flex gap-3 justify-between w-full pl-5">
                        <div>
                          <h2 className='text-gray-800 text-2xl'>{product?.name}</h2>
                          <h3 className='text-gray-600'>{product?.description} | {product?.size}</h3>
                          <h4 className='text-3xl text-pink-700 mt-3'>₹{formattedPrice(product?.price)}</h4>
                          <span className='flex mt-3'><FaCheck className='text-green-600 mr-2 mt-1'/> <span>In Stock</span></span>
                        </div>
                      </div>
                      <span className='bg-red-800 text-white text-center p-0.5 cursor-pointer h-5 w-7 rounded-full' onClick={()=>handleClick(product?.id)}>
                        <CgClose/>
                      </span>
                    </div>
                </div>
                )
              })
            }
        </div>
      </section>
    )
}
