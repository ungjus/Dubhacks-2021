import React, { useState } from 'react';
import Select from 'react-select';

const Dropdown = ({ locations, getLocation, getLocationData }) => {

    const generateOptions = () => {
        let options = [];

        options = locations.map(option => {
            return {
                value: option,
                label: option
            }
        });

        //console.log(options);
        return options;
    }

    const handleChange = (loc) => {
        console.log('location picked');   
        getLocation(loc);
    }


    return (
        <div>
            <Select
                options={generateOptions()}
                onChange={handleChange}
            />
        </div>
    );

}

export default Dropdown;