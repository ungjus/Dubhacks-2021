import React from 'react';
import './queue-info.css';

const QueueInfo = ({ selectedLocation, getLocationData }) => {
    let numPeople = getLocationData(selectedLocation);
    console.log(numPeople); 
    return(
        <div className="info-container">
            {selectedLocation}
            <p>Number of people in line:</p>
            <p>5</p>
        </ div>
    )
}
export default QueueInfo;