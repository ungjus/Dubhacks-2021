import React from 'react';
import Select from 'react-select';

const Dropdown = (props) => {

    // generate options for dropdown list
    // generateOptions = () => {
    //     let options = [];
    //     Object.entries(this.props.buildings).forEach(([key, val]) => {
    //         options.push({value: key.toString(), label: val});
    //     });
    //     return options;
    // };


    const options = [
        {value: "lander", label: "Lander Desk"},
        {value: "lopo", label: "Local Point"}
    ];

    return (
        <div>
            <Select
                options={options}
            />
        </div>
    );

}

export default Dropdown;