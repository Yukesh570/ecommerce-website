import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import {thunk} from 'redux-thunk'
// import { composeWithDevTools } from "@redux-devtools/extension";
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    Cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer, 
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
})
const cartItemFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null   //huge difference in null and [] when [] caused problem in useeffect
        
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {} // {} because it is object 
    
const PaymentMethodFromStorage = localStorage.getItem('paymentMethod') ?
JSON.parse(localStorage.getItem('paymentMethod')) : null

        
const initialState ={
        
        Cart:{
            cartItems: cartItemFromStorage,
            shippingAddress:shippingAddressFromStorage, 
            paymentMethod:PaymentMethodFromStorage,
        
        },
        userLogin:{userInfo: userInfoFromStorage}
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