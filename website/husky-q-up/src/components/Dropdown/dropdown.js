import React, { useState } from 'react';
import Select from 'react-select';

const Dropdown = ({ id, locations, getLocation, getTableData }) => {

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

    const handleChangeUser = (loc) => {
        console.log('location picked'); 
        console.log(id);  
        getLocation(loc);
    }

    const handleChangeAdmin = (loc) => {
        getTableData(loc.value);
        console.log(loc.value);
    }

    return (
        <div>
            <Select
                options={generateOptions()}
                onChange={id === "user" ? handleChangeUser : handleChangeAdmin}
            />
        </div>
    );

}

export default Dropdown;