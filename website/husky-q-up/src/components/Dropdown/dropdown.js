import React from 'react';
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
    const customStyles = {
        option: (provided) => ({
            ...provided,
            padding: 20,
        }),
 
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? .5 : .8;
            const transition = 'opacity 300ms';
        
            return { ...provided, opacity, transition };
        }
      }

    return (
        <div>
            <Select
                styles={customStyles}
                options={generateOptions()}
                onChange={id === "user" ? handleChangeUser : handleChangeAdmin}
            />
        </div>
    );

}

export default Dropdown;