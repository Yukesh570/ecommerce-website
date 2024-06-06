import React,{useState} from 'react'

import { Form ,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import { saveShippingAddress } from '../actions/cartAction'
import FormContainer from '../components/FormContainer'
function PaymentScreen() {
     
    const Cart=useSelector(state=>state.Cart)
    const{shippingAddress}=Cart
    const dispatch= useDispatch()
    const navigator=useNavigate()
    const[paymentMethod, setPaymentMethod]=useState('Esewa')
    if (!shippingAddress.addesss){
      navigator('/shipping')
    }
    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch()
      navigator('/placeorder')
    }
  return (
    <FormContainer>
      
    </FormContainer>
  )
}

export default PaymentScreen
