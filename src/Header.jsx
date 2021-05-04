import React from 'react'

import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';

import {Link} from 'react-router-dom';
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto nav_bar_wrapper">
      <Link to='/add' href="#home">Add Product</Link>
      <Link to='/update'>Update Product</Link>
      <Link to="/login">Login Product</Link>
      <Link to="/register">Register</Link>
    </Nav>
   
  </Navbar>
        </div>
    )
}

export default Header
