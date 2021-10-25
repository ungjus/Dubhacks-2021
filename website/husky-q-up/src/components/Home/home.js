import React, {useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import Dropdown from '../Dropdown/dropdown';
import QueueInfo from '../QueueInfo/QueueInfo';
import './home.css';


const Home = ({ locations, sendUserData, removeUser, getLocation, selectedLocation, getTableData, queueData, setQueueData, graph, signedIn }) => {
    const [inQueue, setInQueue] = useState(false);

    const [time, setTime] = useState(0);

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

    useEffect(() => {
        let timerId = null;
        if (inQueue) {
            timerId = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        } else {
            clearInterval(timerId);
            timerId = null;
            setTime(0);
        }

        return () => {
            clearInterval(timerId);
          };
    }, [inQueue]);

    return(
        <main>
            <Container>
                <header>
                    <h1 id="custom-h1">Welcome to Husky Q Up!</h1>
                    <p id="header-slogan"><em>Dont get tangled up in lines, use Husky Q Up!</em></p>
                </header>
                <div className="steps-container">
                    <p className="instructions">1. Select a location to see the number of people in line.</p> 
                    <p className="instructions">2. Then decide to enter the queue or not.</p>
                    <p className="instructions">3. Sign in with your UW email and enter the queue! </p>
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

                        {selectedLocation &&
                            <Button id={inQueue ? "cancel-style" : "button-style"} onClick={handleClick} disabled={!signedIn || selectedLocation === ""}>
                                {inQueue ? "Cancel" : "Queue up"}
                            </Button>}
                            {inQueue && <p>Time in Queue: {time}</p>}
                        </div>
                    </div>
                </div>
            </ Container>
        </main>
    )
    
}
export default Home;