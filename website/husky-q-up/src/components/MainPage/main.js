import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Login from '../Login/login';

const Main = () => {
    return(<main>
        <h1>hello world!</h1>
        <Login></Login>
    </main>)
}

export default Main;