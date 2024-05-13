import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'wouter'

function Product({product}) {
  return (
    <Card className='my-3 p-5 rounded'>
        <Link to={`/product/${product._id}` }>
        <Card.Img src={product.image}/>
        </Link>
        <Card.Body >
        <Link to={`/product/${product._id}`}style={{ textDecoration: 'none'  , color: 'white'}}>
            <Card.Title as='div' >
               <strong> {product.name} </strong>
            </Card.Title>
        </Link>
            <Card.Text as='div'>
                <div>
                    <Rating value={product.rating} text={`${product.numReviews}review`} color={'#f8e825'}/> 
                </div>
            </Card.Text>

               <Card.Text as= 'h4'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
