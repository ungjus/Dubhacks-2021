import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import Login from '../Login/login';

const NavBar = ({ getUserData }) => {


    return(
        <Navbar className="custom-nav">
            <Container>
            <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Login getUserData={getUserData}/>
            </Nav>
            </Container>
        </Navbar>
    )
    
}
export default NavBar;