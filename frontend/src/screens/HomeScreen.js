import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import { ListProducts } from '../actions/productActions'
import axios from 'axios'
import Spinner from '../components/Spinner'
import Errormsg from '../components/Errormsg'
function HomeScreen() {
  // const[products,setProducts]=useState([])
  const dispatch = useDispatch()
  const productList = useSelector(state=>state.productList)
  const {error,loading,products}=productList
  useEffect(()=>{
    dispatch(ListProducts())
    // async function fetchProducts(){
    //   const{data}=await axios.get('/api/products')
    //   setProducts(data)
    // } 
    // fetchProducts()
  },[dispatch]) 
 
  return ( 
      <div>
        <h1>Latest product</h1>
        {loading ? <Spinner/>
            :error ? <Errormsg >{error}</Errormsg>         
            :
            <Row>
            {products.map(product=>(                                //maps over an array called products returns a new array of React elements based on the logic provided inside the map function.


                <Col key={product._id} sm={12} md={8} lg={4} xl={3}>
                    <Product product={product}/>    
                </Col>
            ))}
          </Row>
            }
      
      </div>
  )
}

export default HomeScreen
