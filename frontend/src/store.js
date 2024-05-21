import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import {thunk} from 'redux-thunk'
// import { composeWithDevTools } from "@redux-devtools/extension";
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    Cart:cartReducer,
})
const cartItemFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

       
const initialState ={
        
        Cart:{cartItems: cartItemFromStorage}
}
// const middleware=[thunk];
const store = configureStore({
    reducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
                            });



export default store      

// const rootReducer = combineReducers({
//     productList: productListReducer,
//   });
  
//   const middleware = [thunk];
  
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
    // devTools: process.env.NODE_ENV !== 'production',
//   });
  
//   export default store;