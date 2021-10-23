import React, { useState, useEffect } from 'react';
import sio from "socket.io-client";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import Home from '../Home/home'
import About from '../About/about'
import Admin from '../Admin/admin'
import Footer from '../Footer/footer'
import NavBar from '../Navbar/navbar'

import { Nav, Navbar, Container } from 'react-bootstrap';

const Main = () => {
    const [profile, setProfile] = useState(null);
    const [locations, setLocations] = useState(['lander', 'local point']);
    const [userData, setUserData] = useState({});
    const socket =  sio("http://localhost:4040");
    useEffect(() => {
        

        socket.emit("Send Location");
        socket.on("Get Locations", (loc_list) => {
            console.log('Got locations!');
            console.log(locations);
            setLocations(loc_list);
        });
    }, []);

    const getUserData = (userData) => {
        // store it in state
        console.log('in sendUserData');
        console.log(userData);
        setUserData(userData);
        // pass down as prop to home
    }

    const sendUserData = () => {
        // send to server with userData
        socket.emit("New Person", userData); 
    }

    const updateLocation = () => {

        // setLocations
    }

    return(<Router>
        <NavBar/>

        <Switch>
            <Route exact path="/">
                <Home locations={locations} sendUserData={sendUserData} />
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