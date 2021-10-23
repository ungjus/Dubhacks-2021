import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/MainPage/main';
import Home from './components/Home/home';
import { BrowserRouter} from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
);