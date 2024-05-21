import React ,{useEffect} from 'react'
import { Link, useParams } from 'wouter'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col,ListGroup,Image,Form,Button,Card, Row } from 'react-bootstrap'
import  Errormsg  from '../components/Errormsg'
import { addToCart } from '../actions/cartAction'
function CartScreen() {
    const{id}=useParams();   //this useparams will hook only the id not the querystring(?qty=2)
    // const {id}=useParams;
    const Location= useLocation(); 

    const qty =Location.search ? (Location.search.split('=')[1]) :1  //locatoin is used to seach value from the url ,the spilt is used to split qty=2 to [qty,2], the [1] is used to choose second array to take
    // console.log('qty:',qty)
    const dispatch=useDispatch()  
    const Cart = useSelector(state=>state.Cart)
    const{ cartItems } = Cart
    console.log('data:',cartItems)
    useEffect(()=> {
        if(id){
            dispatch(addToCart(id,qty))
        }

    },[dispatch,id,qty])
  
  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 
          ?(
            <Errormsg variant='info'>
              Your cart is empty  <Link to='/home'>  Go Back  </Link>
            </Errormsg>
          )
          :(
            <ListGroup variant='flush'>

            </ListGroup>
          )}

        </Col>
        <Col md={8}> 
        </Col>
      </Row>
    </div>
  )
}

export default CartScreen
 