import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import Register from './components/Login/Register';
import Home from './components/Home/Home';
import * as serviceworker from "./serviceWorker";
import 'antd/dist/antd.css';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,document.getElementById('root'));
serviceworker.unregister()