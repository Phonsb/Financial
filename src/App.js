import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Balance from './components/Balalnce/Balance'
import Ledger from './components/Ledger/Ledger'
import Planning from './components/Planning/Planning'
import Planningresult from './components/Planning/Planningresult'

const App =()=> {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login'>
          <Login/>
        </Route>
        <Route path='/Register'>
          <Register/>
          </Route>
        <Route path='/Balance'>
          <Balance/>
        </Route>
        <Route path='/Ledger'>
          <Ledger/>
        </Route>
        <Route path='/Planning'>
          <Planning/>
        </Route>
        <Route path='/Planningresult'>
          <Planningresult/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
