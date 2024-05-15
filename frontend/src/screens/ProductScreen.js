import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'wouter'
import Form from 'react-bootstrap/Form';
import Rating from '../components/Rating'
import { ListProductDetails } from '../actions/productActions'
import { useDispatch,useSelector  } from 'react-redux'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Spinner from '../components/Spinner'
import Errormsg from '../components/Errormsg'

function ProductScreen({}) {
    const{id}=useParams();  
    const dispatch=useDispatch()
    const productDetails =useSelector(state=>state.productDetails)
    const {error,loading,product}=productDetails

    // product._id is a parameter and userparams takes the parameter and put it to id
    // const product =products.find((p)=>p._id===id) //products is an array
    // const[product,setProduct]=useState([])
    useEffect(()=>{
        dispatch(ListProductDetails(id))
        // async function fetchProduct(){
        //     const{data}=await axios.get(`/api/product/${id}/`) 
        //     setProduct(data)
        // } 
        // fetchProduct()
    },[dispatch,id])

  return (
    <div>
        <Link to='/home'> 
            
        <Button variant="outline-success">Go Back</Button>
        </Link>
        {loading ? <Spinner/>
            :error ? <Errormsg >{error}</Errormsg>  
            :
            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}> 
                <ListGroup  variant='flush'>
                    <ListGroup.Item >
                        <h5>{product.name}</h5>
                    </ListGroup.Item>
                     
                    <ListGroup.Item >
                        <Rating value={product.rating} text={`${product.numReview}review`} color={'#f8e825'}/>
                    </ListGroup.Item>
                    
                    <ListGroup.Item >
                    <strong>Price:</strong> ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item >
                       <strong> Description:</strong> {product.description}
                    </ListGroup.Item>
                    

                </ListGroup> 
            </Col>
            <Col md={3 }>
                <Card  style={{ width:'80%' }}>
                    <ListGroup variant='flush' >
                        <ListGroup.Item>
                        <Row>
                           
                                <Col>Price:</Col>
                                <Col>
                                <strong>
                                ${product.price}
                                </strong>
                                </Col>
                            
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                           
                                <Col>Item Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ?'In Stock' : 'Out of Stock'}
                                </Col>
                            
                        </Row>
                        </ListGroup.Item>
                    
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        }
        
        
          
           
          
    </div>
  )
}

export default ProductScreen
