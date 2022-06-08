import { addToWishlist, removeFromWishlist } from '../../../store/actions';
import { CgHeart } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { formattedPrice } from '@twks/ecomm/util-formatters';

export default function Product(product:any) {
    const productDetails = product.product;
    const wishlistProducts = useSelector((state:any)=>state?.favourites);
    let isFavourite = false;
    const findProduct = wishlistProducts.find((wishlistProduct:any) => wishlistProduct.id === productDetails.id);
    if(findProduct){
        isFavourite = true;
    }
    
    const dispatch = useDispatch();
    const handleClick = ()=>{
        isFavourite ? dispatch(removeFromWishlist(productDetails.id)) :dispatch(addToWishlist(productDetails))
    }
  return (
    <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link to={`/detail/${productDetails.id}`}>
                    <img src={productDetails.image} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                </Link>
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    {productDetails.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500"> {productDetails.size}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">₹{formattedPrice(productDetails.price)}</p>
            <span onClick={handleClick} className="cursor-pointer">
                { isFavourite ? <FaHeart className='text-red-700'/> : <CgHeart/>}
            </span>
            </div>
        </div>
  )
}
