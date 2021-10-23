import React from 'react';
import { Button } from 'react-bootstrap';
import sio from "socket.io-client";
import {profile} from'../Login/login';



const Home = () => {
    const socket =  sio("http://localhost:4040");
    let newPerson = () => {
        console.log('click');
        let person_info = profile.profileObj;
        console.log(person_info);
        socket.emit("New Person", person_info);
        
    }

    return(<main>
        <h1>Home page</h1>
        <Button variant="primary" onClick={newPerson}>Q Up Gamer</Button>{' '}
    </main>)
    
}
export default Home;