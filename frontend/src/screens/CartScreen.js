import React ,{useEffect,useState } from 'react'
import { Link, useParams } from 'wouter'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';

import { Row,Col,ListGroup,Image,Button,Card } from 'react-bootstrap'
import  Errormsg  from '../components/Errormsg'
import { addToCart,removeFromCart} from '../actions/cartAction'
function CartScreen() {
    const{id}=useParams();   //this useparams will hook only the id not the querystring(?qty=2)
    // const {id}=useParams;
    const Location= useLocation(); 
   
    const qty =Location.search ? (Location.search.split('=')[1]) :1  //location is used to seach value from the url ,the spilt is used to split qty=2 to [qty,2], the [1] is used to choose second array to take
    // console.log('qty:',qty)
    const dispatch=useDispatch()  
    const Cart = useSelector(state=>state.Cart)
    const{ cartItems } = Cart
    console.log('data:',cartItems)
    const navigator=useNavigate()
    
    useEffect(()=> {
        if(id){
            dispatch(addToCart(id,qty))
        }

    },[dispatch,id,qty])

    const removeFromCartHandler=(id)=>{
      dispatch(removeFromCart(id))
   }

    const checkoutHandler=()=>{
      navigator('/login?redirect=shipping')

    }
   
  
  return (
    <div>
      <Row>
        <Col md={8} className='shift-right'>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 
          ?(
            <Errormsg variant='info'>
              Your cart is empty  <Link to='/home'>  Go Back  </Link>
            </Errormsg>
          )
          :(
            <ListGroup variant='flush'>
              {cartItems.map(item=>(
                <ListGroup.Item key={item.product} style={{ width:'70%' }}>
                  <Row>
                    <Col md={3}>
                        <Image src={item.image} alt={item.name} fluid/>
                    </Col>
                    <Col md={2}>
                      <Link to={`/product/${item.product}`} style={{ textDecoration: 'none'  , color: 'white'}}>
                      {item.name}</Link>
                    </Col>
                    <Col md={2}>
                      ${item.price}
                    </Col>
                    <Col md={1}>
                      
                      <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value))) }         
                      >
                          {
                              
                            [...Array(item.countInStock).keys()].map((x)=>(
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                          }
                          
                      </Form.Control>
                    
                    </Col>
                    <Col md={1}>
                      <Button 
                        type='button' 
                        variant='outline-success'

                        onClick={()=>removeFromCartHandler(item.product)}
                        >
                            <i className='fas fa-trash'></i>

                      </Button>
                      </Col>
   {/* //_________________________________________________________// */}
{/*                     
                    <Col md={1}>
                    
                          
                    
                      <Button 
                        type='button' 
                        variant='outline-success'
                        onClick={()=>handleAddQty(item.product)}
                        >  
                        <i className='fas fa-add'></i>
                      </Button>
                      </Col>    
                      <div className='form-control text-center'>{quantity}</div>
                      <Col md={1}>
                      <Button 
                        type='button' 
                        variant='outline-success'
                        onClick={handledeleteQty}
                        >  
                         
                        <i className='fas fa-subtract'></i>
                      </Button>
                      </Col> */}

{/* //_________________________________________________________// */}
                  </Row>
                </ListGroup.Item>
              )) }

            </ListGroup>
          )}   

        </Col>
        <Col md={4} className='p-3'style={{width:'23%'}}> 
          <Card>
            <ListGroup varient='flush' className='font' >
                <ListGroup.Item >
                  <h2>SUBTOTAL : ({cartItems.reduce((acc, item) =>acc + Number(item.qty),0)}) ITEMS </h2>
                  <h3>${cartItems.reduce((acc, item) =>acc + item.qty * item.price , 0 ).toFixed(2)}</h3>
                </ListGroup.Item>
                <ListGroup.Item className='center-content'>
                  <Button
                    type='button'
                    variant='outline-success'
                    d={cartItems.lenth === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>

            </ListGroup>
          </Card>  
        </Col>
      </Row>
    </div>
  )
}

export default CartScreen
 