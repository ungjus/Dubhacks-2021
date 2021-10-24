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
import './main.css';

const Main = () => {
    const [profile, setProfile] = useState(null);
    const [locations, setLocations] = useState([]);
    const [userData, setUserData] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [numPeople, setNumPeople] = useState(0);
    const [graph, setGraph] = useState(null);

    const socket =  sio("http://localhost:4040");

    useEffect(() => {
        socket.emit("Send Location");
        socket.on("Get Locations", (loc_list) => {
            console.log('Got locations!');
            // console.log(locations);
            setLocations(loc_list);
        });
        socket.emit("Send Table Data", 'lander_desk')
        socket.on("Get Table Data", (tableData) => {
            console.log("got table data")
            console.log(tableData);
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


    // FIX THIS HAN PLS IT NO WORK HELP
    const getTableData = (loc) => {
        socket.emit("Send Table Data")
        socket.on("Get Table Data", (tableData) => {
            console.log(tableData);
        })
    }

    const getLocation = (loc) => {
        console.log("update location", loc.value);
        setSelectedLocation(loc.value);

        console.log("here" + loc.value);

        // get number of people in line
        socket.emit("Get Number People", loc.value);

        socket.on("Number People", (numPeople) => {
            console.log('number poeple')
            console.log(numPeople);
            setNumPeople(numPeople);
            socket.off("Number People");
        });

        socket.on("Queue Data", (data) => {
            console.log('table Data')
            console.log(data);
        })
        
        socket.emit("Send Graph", loc.value);
        socket.on("Get Graph", (graph) => {
            console.log("got graph!")
            setGraph(graph);
        })
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
        {/* <Plot data={graph.data} /> */}
        <Switch>
            <Route exact path="/">
                <Home 
                    locations={locations}
                    sendUserData={sendUserData}
                    removeUser={removeUser}
                    getLocation={getLocation}
                    selectedLocation={selectedLocation}
                    numPeople={numPeople}
                    graph={graph}
                />
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/admin">
                <Admin 
                    locations={locations}
                    getLocation={getLocation}
                    getTableData={getTableData}
                    selectedLocation={selectedLocation}
                />
            </Route>
        </Switch>
        <Footer/>
    </Router>)
}

export default Main;