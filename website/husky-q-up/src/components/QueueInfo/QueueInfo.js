import React from 'react';


const QueueInfo = ({ selectedLocation, getLocationData }) => {
    let numPeople = getLocationData(selectedLocation);
    console.log(numPeople); 
    return(
        <div className="queue-info">
            {selectedLocation}
            <p>People here: {getLocationData(selectedLocation)}</p>
        </ div>
    )
}
export default QueueInfo;