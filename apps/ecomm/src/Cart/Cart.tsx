import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg'
import { formattedPrice } from '@twks/ecomm/util-formatters';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../store/actions';

export default function Cart() {
  let totalAmount = 0;
  const dispatch = useDispatch();
  const products = useSelector((state:any) => state?.cart);
  const handleDelete = (productId:any) => {
    dispatch(removeFromCart(productId));
  }
  return (
    <section>
      <h1 className='text-2xl text-blue-900 mb-2'>Shopping Cart</h1>
      <hr className='my-5'/>
      <div className='w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8'>
          <div className='aspect-w-2 aspect-h-3 rounded-lg overflow-hidden sm:col-span-12 md:col-span-8 lg:col-span-8'>
          { 
            products?.length ? products.map((product:any)=> {
              totalAmount = totalAmount + (product.price * product.quantity);
                return (
                  <div className='flex border-b last:border-b-transparent py-3 flex-initial w-full'>
                    <Link to={`/detail/${product.id}`}>
                      <img src={product?.image} alt={product?.name} className='h-60 w-60 overflow-hidden object-cover rounded'/>
                    </Link>
                    <div className="flex gap-3 justify-between w-full pl-5">
                      <div>
                        <h2 className='text-gray-800 text-2xl'>{product?.name}</h2>
                        <h3 className='text-gray-600'>{product?.description} | {product?.size}</h3>
                        <h4 className='text-2xl bg-pink-700 text-white px-5 py-2 mt-5 border-r-8 w-fit'>₹{formattedPrice(product?.price)}</h4>
                        <span className='flex mt-20'><FaCheck className='text-green-600 mr-2 mt-1'/> <span>In Stock</span></span>
                      </div>
                      <div>
                        <input type="number" className='form-input border border-gray-300 w-16 py-1 px-2 rounded' value={product?.quantity} max="10"/>
                      </div>
                      <span className='text-red-800 text-xl font-bold cursor-pointer' onClick={()=> handleDelete(product?.id)}>
                        <CgClose/>
                      </span>
                    </div>
                  </div>
                )
              }) : <span className='text-2xl text-red-800'>No items added to cart</span>
          }
          </div>
          {
            products?.length ? 
            <div className='bg-gray-100 border border-gray-200 p-10 sm:col-span-12 md:col-span-4 lg:col-span-4 h-max rounded'>
              <h3 className='text-2xl text-green-700 mb-4'>Order Summary</h3>
              <div className="flex justify-between border-b-2 pb-1 mb-1">
                <span>Subtotal</span>
                <span>₹{formattedPrice(totalAmount)}</span>
              </div>
              <div className="flex justify-between border-b-2 pb-1 mb-1">
                <span>Shipping Estimate</span>
                <span>₹99.00</span>
              </div>
              <div className="flex justify-between border-b-2 pb-1 mb-1">
                <span>Tax Estimate</span>
                <span>₹18.00</span>
              </div>
              <div className="flex justify-between p-1 mb-1 text-xl bg-amber-200">
                <span>Order Total</span>
                <span className='font-bold'>₹{formattedPrice(totalAmount + 117)}</span>
              </div>
              <input type="button" className="bg-green-700 text-white rounded w-full h-10 mt-2" value="Proceed to Checkout"/>
            </div> : ''
          }
      </div>
    </section>
  )
}
