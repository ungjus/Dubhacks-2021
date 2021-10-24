import React from 'react';


const QueueInfo = ({ selectedLocation, numPeople }) => {
    // let numPeople = getLocationData(selectedLocation);

    return(
        <div className="queue-info">
            {selectedLocation}
            <p>People here: {numPeople}</p>
        </ div>
    )
}
export default QueueInfo;