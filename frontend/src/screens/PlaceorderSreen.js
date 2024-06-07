import React,{useState} from 'react'
import { Link } from 'wouter'
import { Form ,Button,Col,Row, ListGroup,Image,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartAction'
import Errormsg from '../components/Errormsg'
import Spinner from '../components/Spinner' 

function PlaceorderSreen() {
    const placeOrder=(e)=>{
        console.log('order')
    }
    const Cart=useSelector(state=>state.Cart)
    const{shippingAddress}=Cart
  return (
    <div>
        <CheckoutSteps step1 step2 step3 step4/>
        <Row>
            <Col md={8}>
                <ListGroup variant='flash'>
                    <ListGroup.Item variant='flash'>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Shipping :</strong>
                        {Cart.shippingAddress.address},
                        {Cart.shippingAddress.city},
                        {'       '}
                        {Cart.shippingAddress.postalCode},
                        {'       '}
                        {Cart.shippingAddress.country}  

                        
                    </p>
                </ListGroup.Item >

                <ListGroup.Item variant='flash'>

                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method : </strong>
                        {'    '}
                        {Cart.paymentMethod}
              
                        
                    </p>
                </ListGroup.Item>
               

                 {
                    <ListGroup.Item variant='flash'>

                    <h2>Order Item</h2>
                    {Cart.cartItems.length ===0 ? 
                    <Errormsg variant='info'>
                        Your have no Items 
                    </Errormsg>   :
                    (
                        <ListGroup variant='flush'>
                            {Cart.cartItems.map((item,index)=>(

                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`} style={{ textDecoration: 'none'  , color: 'white'}}>{item.name}</Link>
                                        </Col>

                                        <Col md={4}>
                                            {item.qty }qty  x  ${ item.price} = ${(item.qty * item.price).toFixed(2)}
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    )
                }
                  
                    </ListGroup.Item>
                }
            </ListGroup>
            </Col>


            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Item Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Item :</Col>
                                <Col>${Cart.itemsPrice}</Col>

                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping :</Col>
                                <Col>${Cart.shippingsPrice}</Col>

                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Tax :</Col>
                                <Col>${Cart.taxPrice}</Col>

                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Total :</Col>
                                <Col>${Cart.totalPrice}</Col>

                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button 
                            type='button'
                            variant='outline-success'
                            disabled={Cart.cartItem === 0}
                            onClick={placeOrder}
                            
                            >
                                Place Order
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>
                
            </Col>
            
               

        </Row>
    </div>
  )
}

export default PlaceorderSreen
