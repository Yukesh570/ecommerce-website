import React,{useState} from 'react'

import { Form ,Button,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartAction'
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
      console.log('payment')
      dispatch(savePaymentMethod(paymentMethod))
      navigator('/placeorder')
    }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>   
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Esewa'
              id='Esewa'
              name='paymentMethod'
              checked
              onChange={(e)=>setPaymentMethod(e.target.value)}
            >
             
            </Form.Check>
          </Col>

        </Form.Group>
        <Button 
        type='submit' 
        variant='outline-success'
        >
          Continue
        </Button>
        </Form> 

      </FormContainer>

   
  )
}

export default PaymentScreen
