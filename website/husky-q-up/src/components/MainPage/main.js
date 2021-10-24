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
    const [locations, setLocations] = useState([]);
    const [userData, setUserData] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [numPeople, setNumPeople] = useState(0);

    const socket =  sio("http://localhost:4040");

    useEffect(() => {
        socket.emit("Send Location");
        socket.on("Get Locations", (loc_list) => {
            console.log('Got locations!');
            // console.log(locations);
            setLocations(loc_list);
        });
        console.log("remove get locations socky");
    }, []);


    // useEffect(() => {
    //     console.log("TURN off socket");
    //     return () => socket.off('Number People', (numPeople) => {
    //         console.log(numPeople);
    //         setNumPeople(numPeople);
    //     });
    // }, [selectedLocation])



    const getLocation = (loc) => {
        console.log("update location", loc.value);
        setSelectedLocation(loc.value);

        console.log("here" + loc.value);

        // get number of people in line
        socket.emit("Get Number People", loc.value);

        socket.on("Number People", (numPeople) => {
            console.log(numPeople);
            setNumPeople(numPeople);
        }); 
    }

    const getLocationData = () => {
        
    }

    const getUserData = (userData) => {
        // store it in state
        console.log('got user data', userData);
        setUserData(userData);
        // pass down as prop to home
    }

    const sendUserData = () => {
        // send to server with userData
        const updated = {...userData};
        updated.location = selectedLocation;
        
        setUserData(updated);

        console.log('sent user data to server', updated);
        socket.emit("New Person", updated); 
    }

    const removeUser = () => {
        socket.emit("Remove Person", userData); 
    }

    return(<Router>
        <NavBar getUserData={getUserData} userData = {userData}/>

        <Switch>
            <Route exact path="/">
                <Home 
                    locations={locations}
                    sendUserData={sendUserData}
                    removeUser={removeUser}
                    getLocation={getLocation}
                    selectedLocation={selectedLocation}
                    getLocationData={getLocationData}
                    numPeople={numPeople}
                />
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
        <Footer/>
    </Router>)
}

export default Main;