import React from 'react';
import Dropdown from '../Dropdown/dropdown';
import { Button, Container } from 'react-bootstrap';

const Admin = ({ locations, getLocation, getTableData, table }) => {
    const columns = [{heading: "ID", property: "position"}, {heading: "First Name", property: "fname"},  {heading: "Last Name", property: "lname"}, {heading: "Email", property: "email"}]

    const formatTable = () => {
        let betterTable = []; 

        for (let i = 0; i < table[0].length; i++) {
            betterTable.push({
                                position: table[0][i], 
                                fname: table[1][i], 
                                lname: table[2][i], 
                                email: table[3][i]
                            });
        }

        return betterTable;
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

    return(
        <div>
            <Container>
                <h1 id="custom-h1">Admin Page!</h1>
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
                            <Button id="button-style" onClick={console.log('click')}>
                                Dequeue
                            </Button>{' '}
                        </div>
                    </div>
                </div>
                <br/>
                <div className="table">
                    {table && showTable()}
                </div>
            </Container>
        </ div>
    )
}
export default Admin;