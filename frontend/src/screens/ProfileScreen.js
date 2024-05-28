import React,{useState, useEffect} from 'react'
import { Link } from 'wouter'
import { Form ,Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import Errormsg from '../components/Errormsg'
import Spinner from '../components/Spinner'
import { getUserDetails, updateUserProfile } from '../actions/userAction'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
function ProfileScreen( ) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')
    const Location =useLocation()


    const [name,setname]=useState('')
    const dispatch =useDispatch()
    const userDetails =useSelector(state=>state.userDetails)
    const {error,loading,user } = userDetails

    const userLogin =useSelector(state=>state.userLogin)
    const {userInfo } = userLogin //we can use this in getuserdetails we use getState to get userLogin
    
    const userUpdateProfile =useSelector(state=>state.userUpdateProfile)
    const {success } = userUpdateProfile
    
    const navigate = useNavigate()

    useEffect(()=>{
        if (!userInfo){ 
            console.log(userInfo)
            navigate('/login')
        }else{
            if(!user || !user.name || success    ){ 
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            }
            else{
                setname(user.name)
                setEmail(user.email)

            }
        }
    },[navigate,userInfo,dispatch,user,success])
    const submitHandler=(e)=>  
        {   
            e.preventDefault()
            if(password!=confirmPassword){
                setMessage('Password do not match')
            }
            else{
               dispatch(updateUserProfile({
                'id':user._id,
                'name':name,
                'email':email,
                'password':password
            
            }
            
            ))                 
            }
            
        }
  return ( 
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Errormsg varient='danger'>{ message }</Errormsg> }
       {error && <Errormsg varient='danger'>{ error }</Errormsg> }
       {loading && <Spinner/>}
       <Form onSubmit={submitHandler}>
       <Form.Group controlId='name'>
            <Form.Label className='p-2'>
                Name
            </Form.Label>
            <Form.Control 
                
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
                
                type='Password'
                placeholder='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                >

            </Form.Control>
        </Form.Group>
        <Button type='submit' varient='primary' >update</Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen
