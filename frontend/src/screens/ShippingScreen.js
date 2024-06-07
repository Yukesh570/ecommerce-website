import React,{useState} from 'react'

import { Form ,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import { saveShippingAddress } from '../actions/cartAction'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'

function ShippingScreen() {
    const navigator=useNavigate()
    const dispatch=useDispatch()

    const Cart=useSelector(state=>state.Cart)
    const{shippingAddress}=Cart
    const[address,setAddress]=useState(shippingAddress.address)
    const[city,setCity]=useState(shippingAddress.city)
    const[postalCode,setPostalCode]=useState(shippingAddress.postalCode)
    const[country,setCountry]=useState(shippingAddress.country)
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({ address,city,postalCode,country }))
        navigator('/payment')   

    } 
  return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1>Shipping Address</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
            <Form.Label classaddress='p-2'>
                Address
            </Form.Label>
            <Form.Control 
                required
                type='address'
                placeholder='Enter address'
                value={address  ? address : ''}
                onChange={(e)=>setAddress(e.target.value)}
                >

            </Form.Control>
            </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label classcity='p-2'>
                city
            </Form.Label>
            <Form.Control 
                required
                type='city'
                placeholder='Enter city'
                value={city ? city : ''}
                onChange={(e)=>setCity(e.target.value)}
                >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
            <Form.Label classpostalCode='p-2'>
                postalCode
            </Form.Label>
            <Form.Control 
                required
                type='postalCode'
                placeholder='Enter postalCode'
                value={postalCode ? postalCode : ''}
                onChange={(e)=>setPostalCode(e.target.value)}
                >

            </Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label classcountry='p-2'>
                country
            </Form.Label>
            <Form.Control 
                required
                type='country'
                placeholder='Enter country'
                value={country ? country : ''}
                onChange={(e)=>setCountry(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
            <Button type='submit' variant='outline-success'> Continue</Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen
