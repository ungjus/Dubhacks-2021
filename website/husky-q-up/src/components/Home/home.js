import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Main = () => {
    return(<main>
        <h1>hello world!</h1>
    </main>)
}

export default Main

const Home = () => {
    return(<main>
        <h1>Home page</h1>
    </main>)
}
export default Home;