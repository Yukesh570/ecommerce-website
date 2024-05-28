import React,{userState,userEffect, useState, useEffect} from 'react'
import { Link } from 'wouter'
import { Form ,Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import Errormsg from '../components/Errormsg'
import Spinner from '../components/Spinner'
import { login } from '../actions/userAction'
import FormContainer from '../components/FormContainer'
function LoginScreen() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch =useDispatch()
    const Location =useLocation()
  
    const redirect = Location.search ? (Location.search.split('=')[1]) :'/home '
    const userLogin =useSelector(state=>state.userLogin)
    const {error,loading,userInfo } = userLogin
    const navigate = useNavigate()

    useEffect(()=>{
        if (userInfo){
            console.log(userInfo)
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])

    const submitHandler =(e)=>{ 
        e.preventDefault()
        console.log(error)
        dispatch(login(email,password))
    }
  return (
    <FormContainer>     
        <h1>Sign In</h1>
        {error && <Errormsg varient='danger'>{ error }</Errormsg> }
        
        {loading && <Spinner/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label className='p-2'>
                Email Address
            </Form.Label>
            <Form.Control 
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label className='p-2'>
                Password
            </Form.Label>
            <Form.Control 
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Button type='submit' varient='primary' >Sign In</Button>
        </Form>
        <Row className='py-3'>
            <Col>
                New Customer? <Link 
                to={redirect ?`/register?redirect=${redirect}`:'/register'}>
                    Register
                
                </Link>
            </Col>

        </Row>
    </FormContainer>
  )
}

export default LoginScreen
