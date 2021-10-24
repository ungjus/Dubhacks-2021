import React from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar, Container, Header } from 'react-bootstrap';
import Login from '../Login/login';
import './navbar.css'

const NavBar = ({ getUserData, userData }) => {


    return(

    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    {userData === null ? <Login getUserData={getUserData}/> :
                    (<Navbar.Text>
                        Signed in as: {userData.name}
                        <img src={userData.imageUrl}></img>
                    </Navbar.Text>)}
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
    
}
export default NavBar;
