import React from 'react';
import './queue-info.css';
import Plot from "react-plotly.js";
import { Container } from 'react-bootstrap';

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
                        <p className="label" >Number of People in Line</p>
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
                            <p className="data-extra">Minutes</p>
                        </div>
                        <p className="pun">Yes, this is the wait. We are not squidding!</p>
                    </div>
                </div>}
                
                <div>
                    {console.log(graph)}
                        {graph && <Plot
                            data={[
                                {
                                    x: graph.x,
                                    y: graph.y,
                                    name: "Scatter Plot",
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: {color: '#e39291'},
                                },
                                {   
                                    type: 'bar', 
                                    x: graph.x, 
                                    y: graph.y, 
                                    name:"Bar Graph",
                                    marker:{color: '#B1D4E0'}
    
                                },
                            ]}
                            layout={ {width: 1000, height: 500, title: selectedLocation, 
                                    yaxis:{title:{text:"Number of People"}}, xaxis:{title: {text:"Time of day"}} }}
                            config={ {responsive: 'true'}}
                        />}
                    </div>
            </ div>
        </Container>
    )
}
export default QueueInfo;