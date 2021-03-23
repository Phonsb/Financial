import React, { Component } from 'react';
import { Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

class App extends Component{
  render(){
    return (
      <div className="App container">
          <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Navbar/>
          <Route exact path="/Home" component={Home} />
          </Switch>
      </div>
    );
  }
}
export default App;