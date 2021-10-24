import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
// import {profile} from'../Login/login';

import './home.css';

const Home = ({ locations, sendUserData, removeUser, getLocation, selectedLocation, getLocationData, numPeople }) => {
    const [inQueue, setInQueue] = useState(false);
    //const []

    // const socket =  sio("http://localhost:4040");

    // let newPerson = () => {
    //     console.log('click');
    //     let person_info = profile.profileObj;
    //     console.log(person_info);
    //     socket.emit("New Person", person_info); 
    // }
    const handleClick = () => {
        inQueue ? removeUser(): sendUserData();
        setInQueue(!inQueue);
    }

    return(
        <main>
            <Container>
                <h1 id="custom-h1">Welcome to Husky Q Up!</h1>
                <p id="instructions">
                    Sign in with your UW email. Select a location to see the number of people in line. 
                    Then queue up to see how blah blah blah blah
                </p>

                <Dropdown locations={locations} getLocation={getLocation} getLocationData={getLocationData}/>
                <QueueInfo 
                    selectedLocation={selectedLocation} 
                    numPeople={numPeople}    
                />

                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <Button id="button-style" onClick={handleClick}>
                                {inQueue ? "Cancel" : "Queue up"}
                            </Button>{' '}
                        </div>
                    </div>
                </div>
            </ Container>
        </main>
    )
    
}
export default Home;