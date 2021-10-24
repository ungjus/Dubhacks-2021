import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
// import {profile} from'../Login/login';
import './home.css';
import Plot from "react-plotly.js";


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
                <h1>Home page</h1>
                
                <Dropdown locations={locations} getLocation={getLocation} getLocationData={getLocationData}/>
                <QueueInfo 
                    selectedLocation={selectedLocation} 
                    numPeople={numPeople}    
                />
                <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
                <br/>
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