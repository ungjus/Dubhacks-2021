import React, { useState, useEffect } from 'react';
import sio from "socket.io-client";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Login from '../Login/login';
import Home from '../Home/home'
import About from '../About/about'
import Admin from '../Admin/admin'
import Footer from '../Footer/footer'

import { Nav, Navbar, Container } from 'react-bootstrap';

const Main = () => {
    const [profile, setProfile] = useState(null);
    const [locations, setLocations] = useState(['lander', 'local point']);

    useEffect(() => {
        const socket =  sio("http://localhost:4040");

        socket.emit("Send Location");
        socket.on("Get Locations", (loc_list) => {
            console.log('Got locations!');
            console.log(locations);
            setLocations(loc_list);
        });
    }, []);

    const updateLocation = () => {

        // setLocations
    }

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
                <Home locations={locations} />
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </Switch>
        <Footer/>
    </Router>)
}

export default Main;