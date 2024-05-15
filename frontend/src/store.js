import {combineReducers,applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import {thunk} from 'redux-thunk'
// import { composeWithDevTools } from "@redux-devtools/extension";
import { productListReducer,productDetailsReducer } from './reducers/productReducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,

})
// const initialState ={}
// const middleware=[thunk];
const store = configureStore({
    reducer,
    // initialState,
    devTools: process.env.NODE_ENV !== 'production',

    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
     // composeWithDevTools(applyMiddleware(...middleware))
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