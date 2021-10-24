import React from 'react';
import './queue-info.css';
import Plot from "react-plotly.js";

const QueueInfo = ({ selectedLocation, queueData, graph }) => {
    // let numPeople = getLocationData(selectedLocation);
    console.log('queue data')
    console.log(queueData)
    let numPeople = queueData['numberInLine'];
    let predictedTime = queueData['predictedTime'];
    return(
        <div className="info-container">
            <div className="info-box">
                <div className="left-box">
                    <p className="label" >Number of people in line</p> 
                    <p className="data" >{numPeople}</p>
                </div>
                <div className="right-box">
                    <p className="label" >Time Until at the Front</p> 
                    <p className="data" >{predictedTime}</p>
                </div>
            </div>
            
            <div className="graph-container" >
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
                        layout={ {width: 500, height: 500, title: selectedLocation, yaxis:{title:{text:"Number of People"}}, xaxis:{title: {text:"Time of day"}}} }
                    />}
                </div>
        </ div>
    )
}
export default QueueInfo;