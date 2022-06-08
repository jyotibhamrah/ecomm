import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../fake-api'
import Product from '../Product/Product'
import { setProducts } from '../../../store/actions'

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setProducts(getAllProducts()));
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-2 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-2">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              getAllProducts().map((product) => (
                <Product product={product}/>
              ))
            }
         </div>
        </div>
      </div>
    </div>
  )
}
