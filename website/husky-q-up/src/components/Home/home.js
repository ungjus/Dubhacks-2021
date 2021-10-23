import React from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
// import {profile} from'../Login/login';

import './home.css';

const Home = ({ locations, sendUserData, getLocation, selectedLocation }) => {
    // const socket =  sio("http://localhost:4040");

    // let newPerson = () => {
    //     console.log('click');
    //     let person_info = profile.profileObj;
    //     console.log(person_info);
    //     socket.emit("New Person", person_info); 
    // }

    return(
        <main>
            <Container>
                <h1>Home page</h1>
                <Button variant="primary" onClick={sendUserData} >Q Up Gamer</Button>{' '}
                <Dropdown locations={locations} getLocation={getLocation}/>
                <QueueInfo selectedLocation={selectedLocation} />
                {/* <div className="queue-data">There are this many people in line</div> */}
            </ Container>
        </main>
    )
    
}
export default Home;