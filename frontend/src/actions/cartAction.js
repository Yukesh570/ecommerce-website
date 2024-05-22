import axios from 'axios'
import { CART_ADD_ITEM ,CART_REMOVE_ITEM} from '../constants/cart_Constants'

export const addToCart =(id,qty)=>async(dispatch,getState)=>{
    const{data}= await axios.get(`/api/product/${id}`)


    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product: data._id,
            name:data.name,
            image:data.image,
            price:data.price,  
            countInStock:data.countInStock,  
            qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().Cart.cartItems))  //(key value pair) cartitem is key second one is value

}    



export const removeFromCart = (id)=>(dispatch,getState)=>{
        dispatch({
            type:CART_REMOVE_ITEM,
            payload:id,
        })
        localStorage.setItem('cartItems',JSON.stringify(getState().Cart.cartItems))
}   