import React from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar, Container, Header } from 'react-bootstrap';
import Login from '../Login/login';

const NavBar = ({ getUserData }) => {


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
                    <Login getUserData={getUserData}/>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    // <Navbar fluid="true" collapseOnSelect>
    //     <Container>
    //         <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
    //         <Navbar.Toggle />
    //         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //             <Nav>
    //                 <Nav.Link as={Link} to="/">Home</Nav.Link>
    //                 <Nav.Link as={Link} to="/about">About</Nav.Link>
    //                 <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
    //                 <Login getUserData={getUserData}/>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    )
    
}
export default NavBar;

{/* <Navbar fluid="true" collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    <Login getUserData={getUserData}/>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar> */}