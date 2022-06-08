import { ActionTypes } from "../constants/index"

const initialState={
    products:[],
    cart:[],
    favourites: []
}

export const reducers = (state = initialState , action) => {
    switch(action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: calculateCart(state, action.payload)
            }
            
        case ActionTypes.REMOVE_FROM_CART:
            const cartIndex = state.cart.findIndex(item=>item.id === action.productId);
            state.cart.splice(cartIndex, 1);
            return {
                ...state, 
                cart: [...state.cart]
            }
    
        case ActionTypes.ADD_TO_WISHLIST:
            return {
                ...state,
                favourites: [...state.favourites, {...action.payload }]
            }
            
        case ActionTypes.REMOVE_FROM_WISHLIST:
            const index = state.favourites.findIndex(item=>item.id === action.productId);
            state.favourites.splice(index, 1);
            return {
                ...state, 
                favourites: [...state.favourites]
            }
           
    }
}

const calculateCart = (state, payload) => {
    console.log('state', state.cart);
    if(state.cart.length){
        const findProduct = state.cart.find(cartItem=> cartItem.id === payload.id);
        // console.log(index);
        if(findProduct){
            findProduct.quantity = findProduct.quantity +1;
            return [...state.cart];
        }
        else {
            return [...state.cart, {...payload, quantity:1}];
        }
    }
    else {
        return [...state.cart, {...payload, quantity:1}];
    }
}
export default reducers;