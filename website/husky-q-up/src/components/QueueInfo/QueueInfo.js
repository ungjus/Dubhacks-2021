import React from 'react';
import './queue-info.css';
import Plot from "react-plotly.js";

const QueueInfo = ({ selectedLocation, numPeople, graph }) => {
    // let numPeople = getLocationData(selectedLocation);

    return(
        <div className="info-container">
            {selectedLocation}
            <p>Number of people in line:</p>
            <p>People here: {numPeople}</p>
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
    )
}
export default QueueInfo;