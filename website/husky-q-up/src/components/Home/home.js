import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
// import {profile} from'../Login/login';

import './home.css';

const Home = ({ locations, sendUserData, removeUserData, getLocation }) => {
    const [inQueue, setInQueue] = useState(false);
    // const socket =  sio("http://localhost:4040");

    // let newPerson = () => {
    //     console.log('click');
    //     let person_info = profile.profileObj;
    //     console.log(person_info);
    //     socket.emit("New Person", person_info); 
    // }
    const handleClick = () => {
        inQueue ? removeUserData(): sendUserData()
        setInQueue(!inQueue);
    }
    return(
        <main>
            <Container>
                <h1>Home page</h1>
                
                <Dropdown locations={locations} getLocation={getLocation}/>
                <div className="queue-data">There are this many people in line</div>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <Button className="text-center" size="lg" variant="primary" onClick={handleClick}>
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