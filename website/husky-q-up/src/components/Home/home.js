import React from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
import {profile} from'../Login/login';

import './home.css';

const Home = ({ locations }) => {
    const socket =  sio("http://localhost:4040");

    let newPerson = () => {
        console.log('click');
        let person_info = profile.profileObj;
        console.log(person_info);
        socket.emit("New Person", person_info);
        
    }

    return(
        <main>
            <Container>
                <h1>Home page</h1>
                <Button variant="primary" onClick={newPerson}>Q Up Gamer</Button>{' '}
                <Dropdown locations={locations} />
                <div className="queue-data">There are this many people in line</div>
            </ Container>
        </main>
    )
    
}
export default Home;