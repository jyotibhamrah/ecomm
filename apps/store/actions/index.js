import { ActionTypes } from '../constants/index'

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}
export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        productId
    }
}
export const addToWishlist = (product) => {
    return {
        type: ActionTypes.ADD_TO_WISHLIST,
        payload: product
    }
}
export const removeFromWishlist = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_WISHLIST,
        productId
    }
}