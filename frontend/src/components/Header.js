import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'wouter'

function header() {
  return (
    <headers>

 

    <Navbar bg="dark " variant="dark" expand="lg" collapseOnSelect >
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav bclassName="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to='/home'>ProShop</Nav.Link>
            <Nav.Link as={Link} to='/cart'><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link as={Link} to='/login'><i className='fas fa-user'></i>Login</Nav.Link>
            {/* 
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/cart">cart</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
             
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </headers>
  )
}

export default header
