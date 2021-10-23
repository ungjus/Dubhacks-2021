import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Login from '../Login/login';
import Home from '../Home/home'
import About from '../About/about'
import Footer from '../Footer/footer'

import { Nav, Navbar, Container } from 'react-bootstrap';

const Main = () => {
    const [profile, setProfile] = useState(null);

    return(<Router>
        <Navbar className="custom-nav">
            <Container>
            <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
        <Footer/>
    </Router>)
}

export default Main;