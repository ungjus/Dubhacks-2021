import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
import './home.css';


const Home = ({ locations, sendUserData, removeUser, getLocation, selectedLocation, getTableData, queueData, setQueueData, graph }) => {
    const [inQueue, setInQueue] = useState(false);

    const handleClick = () => {
        // inQueue ? removeUser(): sendUserData();
        // setInQueue(!inQueue);

        // let numPeople = queueData['numberInLine'];
        // setQueueData({...queueData, 'numberInLine': numPeople + 1});

        if (inQueue) {
            removeUser();
            let numPeople = queueData['numberInLine'];
            setQueueData({...queueData, 'numberInLine': numPeople - 1});
        } else {
            sendUserData();
            let numPeople = queueData['numberInLine'];
            setQueueData({...queueData, 'numberInLine': numPeople + 1});
        }

        setInQueue(!inQueue);
    }

    return(
        <main>
            <Container>
                <header>
                    <h1 id="custom-h1">Welcome to Husky Q Up!</h1>
                    <p id="header-slogan"><em>Dont get tangled up in lines, use Husky Q Up!</em></p>
                </header>
                <div className="steps-container">
                    <p className="instructions">1. Sign in with your UW email.</p> 
                    <p className="instructions">2. Select a location and see the number of people in line. </p>
                    <p className="instructions">3. Then decide to enter the queue up to not</p>
                </div>

                <Dropdown 
                    id="user"
                    locations={locations}
                    getLocation={getLocation}
                    getTableData={getTableData}
                />
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