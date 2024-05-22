import { CART_ADD_ITEM,CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item=action.payload
            const existItem=state.cartItems.find(x=>x.product === item.product)
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>
                        x.product === existItem.product 
                            ? item
                            : x                     //if item is aleady exist then return same(x) but if different then replace it with new item(item)
                    )
                }

            }else{
                return{
                    ...state,   //to original state(spread operator)=>spread operator is used to combine/collect different items/varaible into one single collection
                    cartItems:[...state.cartItems,item] //current state ko cartitem ma item add garxa

                     }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x=>x.product !== action.payload)
            }

        
        

            default:
                return state
    }
}