import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Button } from 'react-bootstrap';



const Home = () => {
    let newPerson = () => {
        console.log('click');
    }
    return(<main>
        <h1>Home page</h1>
        <Button variant="primary" onClick={newPerson}>Q Up Gamer</Button>{' '}
    </main>)
}
export default Home;