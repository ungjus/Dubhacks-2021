import React from 'react';
import './queue-info.css';

const QueueInfo = ({ selectedLocation, numPeople }) => {
    // let numPeople = getLocationData(selectedLocation);

    return(
        <div className="info-container">
            {selectedLocation}
            <p>Number of people in line:</p>
            <p>People here: {numPeople}</p>
        </ div>
    )
}
export default QueueInfo;