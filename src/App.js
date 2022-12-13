import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Summaries from './components/Summaries/Summaries'
import Transaction from './components/Transaction/Transaction'
import Planning from './components/Planning/Planning'
import Planningresult from './components/Planning/Planningresult'
import Calculator from './components/Calculator/Calculator'
import firebase from './components/firebase/firebase'

const App =()=> {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/Home' exact component={Home}></Route>
        <Route path='/Summaries' exact component={Summaries}></Route>
        <Route path='/Transaction'exact component={Transaction}></Route>
        <Route path='/Planning' exact component={Planning}></Route>
        <Route path='/Planningresult' exact component={Planningresult}></Route>
        <Route path='/Calculator' exact component={Calculator}></Route>
      </Switch>
    </Router>
  );
}
export default App;
