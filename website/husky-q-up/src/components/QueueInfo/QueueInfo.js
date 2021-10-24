import React from 'react';
import './queue-info.css';
import Plot from "react-plotly.js";
import { Container } from 'react-bootstrap';
<<<<<<< HEAD
=======

>>>>>>> c7d486cd09a8a0384a018fe9742a059722b6bac1

const QueueInfo = ({ selectedLocation, queueData, graph }) => {
    // let numPeople = getLocationData(selectedLocation);
    console.log('queue data')
    console.log(queueData)
    let numPeople = queueData['numberInLine'];
    let predictedTime = queueData['predictedTime'];
    return(
        <Container>
            <div className="info-container">
                {selectedLocation && <div className="info-box">
                    <div className="left-container">
                        <p className="label" >Number of people in line</p>
                        <div className="circle">
                            <p className="data" >{numPeople}</p>
                            <p className="data-extra">people</p>
                        </div>
                        <p className="pun">Do you want to queue up? Ink about it...</p>
                    </div>

                    <div className="right-container">
                        <p className="label" >Estimated Wait Time</p> 
                        <div className="circle">
                            <p className="data" >{predictedTime}</p>
                            <p className="data-extra">time units</p>
                        </div>
                        <p className="pun">Yes, this is the wait. We are not squidding!</p>
                    </div>
                </div>}
                
                <div className="graph-container" >
                    {console.log(graph)}
                        {graph && <Plot
                            data={[
                            {
                                x: graph.x,
                                y: graph.y,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color: 'red'},
                            },
                            {type: 'bar', x: graph.x, y: graph.y},
                            ]}
                            layout={ {width: 500, height: 500, title: selectedLocation} }
                        />}
                    </div>
            </ div>
        </Container>
    )
}
export default QueueInfo;