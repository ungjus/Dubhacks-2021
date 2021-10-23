import React from 'react';
import { Button } from 'react-bootstrap';
import sio from "socket.io-client";




const Home = () => {
    const socket =  sio("http://localhost:4040");

    let newPerson = () => {
        console.log('click');
        socket.emit("New Person");
    }

    return(<main>
        <h1>Home page</h1>
        <Button variant="primary" onClick={newPerson}>Q Up Gamer</Button>{' '}
    </main>)
    
}
export default Home;