import React, { useState } from 'react';
import Select from 'react-select';

const Dropdown = ({ locations }) => {

    // generate options for dropdown list
    // generateOptions = () => {
    //     let options = [];
    //     Object.entries(this.props.buildings).forEach(([key, val]) => {
    //         options.push({value: key.toString(), label: val});
    //     });
    //     return options;
    // };

    const generateOptions = () => {
        let options = [];

        options = locations.map(option => {
            return {
                value: option,
                label: option
            }
        });

        console.log(options);
        return options;
    }

    // const options = [
    //     {value: "lander", label: "Lander Desk"},
    //     {value: "lopo", label: "Local Point"}
    // ];

    // const handleChange = () => {
    //     console.log('location picked');           
    // }

    return (
        <div>
            <Select
                options={generateOptions()}
            />
        </div>
    );

}

export default Dropdown;