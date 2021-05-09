import React from 'react'

import {Navbar, Nav, Button, FormControl, Form, NavDropdown} from 'react-bootstrap';

import {Link, useHistory} from 'react-router-dom';
function Header() {
  const item=JSON.parse( localStorage.getItem('user-info'));
 const history=useHistory();
  console.log(item);
  function Logout(){
    localStorage.clear();
    history.push('/logout');
  }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto nav_bar_wrapper">
      {localStorage.getItem('user-info')?
      <>
      <Link to='/add' href="#home">Add Product</Link>
      <Link to='/update'>Update Product</Link>
      {/* <Link to='/logout'>Logout</Link> */}
   
      </> :
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
}
    </Nav>
    <Nav>
    {localStorage.getItem('user-info')?
      <>
    <NavDropdown title={`${item.name}`} style={{marginRight:'20px'}}>
<NavDropdown.Item>Profile</NavDropdown.Item>
<NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
    </NavDropdown>
   
      </> :
      
     null
    
}
    </Nav>
   
  </Navbar>
        </div>
    )
}

export default Header
