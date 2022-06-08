import React from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../fake-api';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist } from '../../../store/actions';
import { CgHeart } from 'react-icons/cg';
import { formattedPrice } from '@twks/ecomm/util-formatters';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state:any)=>state?.favourites);
  let isFavourite = false;
  const findProduct = wishlistProducts.find((wishlistProduct:any) => wishlistProduct.id === product?.id);
  if(findProduct){
      isFavourite = true;
  }
  const handleClick = () => {
    console.log('handleClick is clicked with ',productId);
    dispatch(addToCart(product));
  }
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  }
  const handleRemoveFromWishlist = (productId:any) => {
    dispatch(removeFromWishlist(productId));
  }
  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden sm:col-span-4 lg:col-span-6">
          <img src={product?.image} alt={product?.name} className="object-center object-cover border p-5"/>
        </div>
        <div className="sm:col-span-8 lg:col-span-6">
          <h2 className="text-2xl font-bold text-teal-600 sm:pr-12">{product?.name}</h2>
          <hr className='my-3'/>
          <section aria-labelledby="information-heading" className="mt-2">
            <h3 className='text-gray-800'>{product?.description}</h3>
            <p className="text-xl text-gray-600 mb-3">{product?.size}</p>
            <p className="text-2xl font-bold text-red-700">₹{formattedPrice(product?.price)}</p>
            {
              isFavourite ? <button type="button" onClick={()=>handleRemoveFromWishlist(product?.id)} className="mt-10 bg-red-700 text-white float-left mr-10 outline-double rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-red-800 focus:ring-2 focus:ring-offset-2 focus:bg-red-800">
                Remove From Wishlist <FaHeart className='mx-2'/>
              </button> : <button type="button" onClick={handleAddToWishlist} className="mt-10 text-red-700 float-left mr-10 outline-double rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-offset-2 focus:bg-red-800 focus:text-white">
                Add To Wishlist <CgHeart className='mx-2'/>
              </button>
            }
            
            <button type="button" onClick={handleClick} className="mt-10 bg-green-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-700">
              Add to Cart <FaShoppingCart className='mx-2'/>
            </button>
          </section>
        </div>
      </div>
  )
}
