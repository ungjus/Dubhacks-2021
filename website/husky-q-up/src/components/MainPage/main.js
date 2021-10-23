import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Login from '../Login/login';
import Home from '../Home/home'
import About from '../About/about'
import Footer from '../Footer/footer'


const Main = () => {
    const [profile, setProfile] = useState(null);

    return(<Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Login/>
          </li>
        </ul>

        <hr />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
        <Footer/>
    </Router>)
}

export default Main;