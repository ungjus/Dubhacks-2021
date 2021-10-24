import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/MainPage/main';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
);