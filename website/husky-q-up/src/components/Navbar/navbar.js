import React from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import Login from '../Login/login';
import './navbar.css'
import logo from '../Navbar/logo.png'
const NavBar = ({ getUserData, userData, setSignedIn }) => {


    return(
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img id="logo"
                        src={logo}
                        alt="Husky Q Up logo"
                    />
                    Husky Q Up
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        {userData === null ? <Login getUserData={getUserData} setSignedIn={setSignedIn}/> :
                        (<Navbar.Text>
                            <span id="signed-in">Signed in as:</span> <span id="username">{userData.name}</span>
                            <img id="google-pfp" src={userData.imageUrl}></img>
                        </Navbar.Text>)}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
    
}
export default NavBar;
