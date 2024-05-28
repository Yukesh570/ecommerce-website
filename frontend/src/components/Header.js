import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'wouter'
import {logout} from '../actions/userAction'



function Header() {

    const userLogin =useSelector(state=>state.userLogin)
    const {userInfo } = userLogin
    const dispatch= useDispatch()
    const logoutHandler =(e)=>{
        dispatch(logout())
    }

  return (
      <headers>
      <Navbar bg="dark " variant="dark" expand="lg" collapseOnSelect >
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbarscroll</Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav bclassName="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to='/home'>ProShop</Nav.Link>
              <Nav.Link as={Link} to='/cart'><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              {userInfo ?(
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler} >
                    LogOut
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                ):(
                  <Nav.Link as={Link} to='/login'><i className='fas fa-user'></i>Login</Nav.Link>
                )

                }
              
              
            
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button 
                variant='outline-success'

                >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </headers>
  )
}

export default Header
