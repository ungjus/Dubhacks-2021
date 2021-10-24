import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import sio from "socket.io-client";
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
import './home.css';


const Home = ({ locations, sendUserData, removeUser, getLocation, selectedLocation, getLocationData, queueData, graph }) => {
    const [inQueue, setInQueue] = useState(false);

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
                    queueData={queueData}
                    graph={graph}    
                />
                
                <br/>
                <div className="container">
                    <div className="row">
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