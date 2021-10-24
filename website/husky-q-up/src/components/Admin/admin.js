import React from 'react';
import Dropdown from '../Dropdown/dropdown';

const Admin = ({ locations, getLocation, getLocationData}) => {

    return(
        <div>
            <h1 id="custom-h1">Admin Page!</h1>
            <Dropdown locations={locations} getLocation={getLocation} getLocationData={getLocationData}/>

        </ div>
    )
}
export default Admin;