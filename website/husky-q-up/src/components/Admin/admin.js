import React, { useState } from 'react';
import Dropdown from '../Dropdown/dropdown';
import { Button, Container } from 'react-bootstrap';
import './admins.css'
import setting from './settings-icon.png';

const Admin = ({ locations, getLocation, getTableData, table, removeUser, adminLocation }) => {
    const columns = [{heading: "ID", property: "position"}, {heading: "First Name", property: "fname"},  {heading: "Last Name", property: "lname"}, {heading: "Email", property: "email"}]


    // const [betterTable, setBetterTable] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);
    let bettererTable = [];

    const formatTable = () => {
        

        for (let i = 0; i < table[0].length; i++) {
            bettererTable.push({
                                position: table[0][i], 
                                fname: table[1][i], 
                                lname: table[2][i], 
                                email: table[3][i]
                            });
        }
        // setBetterTable(bettererTable);
        
        return bettererTable;
    }

    const showTable = () => {
        return(
        <table className='table'>
             <thead>
                <tr>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
            </thead>
            <tbody>
                {formatTable().map(item =>
                    <tr  key={`${item["position"]}-row`}>
                        {columns.map(col => <td key={`${item["position"]}-${col.property}`}>{item[col.property]}</td>)}
                    </tr>
                )}
            </tbody>
    </table>);
    }

    const handleClick = () => {
        let result = {email: bettererTable[0].email, location: adminLocation};
        console.log(result);
        removeUser(result);
        // bettererTable = bettererTable.filter(x => x.email !== result.email);
        getTableData(adminLocation);
    }

    const handleSubmit = () => {
        setLoggedIn(true);
    }

    return(
        loggedIn ? 
        (<div>
            <Container>
                <h1 id="custom-h1">Admin Page!</h1>
                <img id="settings" src={setting}></img>
                <Dropdown 
                    id="admin"
                    locations={locations}
                    getLocation={getLocation}
                    getTableData={getTableData}
                />
                <br/>
                <div className="container">
                    <div className="row">
                        <div class="col text-center">
                        {adminLocation &&
                            <Button id="button-style" onClick={handleClick} disabled={table === null || table.length === 0}>
                                Dequeue
                            </Button>}
                        </div>
                    </div>
                </div>
                <br/>
                <div className="table">
                    {table && showTable()}
                </div>
            </Container>
        </div>) : 
        
        (<Container>
            <div className="form-style">
                <h2>Enter Credentials</h2>
                <br/>
                <form onSubmit={handleSubmit}>
                    <label className="lable-style">
                        Password:
                        <input className="password-style" type="password" name="name" />
                    </label>
                    <input className="submit-style" type="submit" value="Submit" />
                </form>
            </div>
        </Container>)
    )
}
export default Admin;