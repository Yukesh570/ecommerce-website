import React,{userState,userEffect, useState, useEffect} from 'react'
import { Link } from 'wouter'
import { Form ,Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import Errormsg from '../components/Errormsg'
import Spinner from '../components/Spinner'
import { register } from '../actions/userAction'
import FormContainer from '../components/FormContainer'

function RegisterScreen() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')
    const Location =useLocation()

    const redirect = Location.search ? (Location.search.split('=')[1]) :'/home '

    const [name,setname]=useState('')
    const dispatch =useDispatch()
    const userRegister =useSelector(state=>state.userRegister)
    const {error,loading,userInfo } = userRegister
    const navigate = useNavigate()

    useEffect(()=>{
        if (userInfo){
            console.log(userInfo)
            navigate(redirect)
        }
    },[navigate,userInfo,redirect])
    const submitHandler=(e)=>
        {   
            e.preventDefault()
            if(password!=confirmPassword){
                setMessage('Password do not match')
            }
            else{
                console.log('register')
                dispatch(register(name,email,password))
            }
            
        }
  return (
    <FormContainer>
       <h1>Register</h1>
       {message && <Errormsg varient='danger'>{ message }</Errormsg> }
       {error && <Errormsg varient='danger'>{ error }</Errormsg> }
       {loading && <Spinner/>}
       <Form onSubmit={submitHandler}>
       <Form.Group controlId='name'>
            <Form.Label className='p-2'>
                Name
            </Form.Label>
            <Form.Control 
                required
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e)=>setname(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
   
        <Form.Group controlId='email'>
            <Form.Label className='p-2'>
                Email Address
            </Form.Label>
            <Form.Control 
                required
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Form.Group controlId='passwordconfirm'>
            <Form.Label className='p-2'>
                Password
            </Form.Label>
            <Form.Control 
                required
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Form.Group controlId='Password'>
            <Form.Label className='p-2'>
            confirmPassword
            </Form.Label>
            <Form.Control 
                required
                type='Password'
                placeholder='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Button type='submit' varient='primary' >Register</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Already have an account?<Link
                
                to='/login'
                >
                Login
                </Link>
            </Col>

        </Row>

    </FormContainer>
  )
}

export default RegisterScreen
