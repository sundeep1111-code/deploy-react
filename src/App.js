import React from 'react';
import './App.css';
import Home from './pages/Home';
import {Route, Switch} from 'react-router-dom'
import ConservativeFashion from './pages/ConservativeFashion';
import NavBar from './Components/NavBar';
import Fotter from './Components/Fotter';
import Appearance from './pages/Appearance';
import Budget from './pages/Budget';
import Profile from './pages/Profile';
import Address from './pages/Address';
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path='/'  component={Home}></Route>
    <Route exact path='/ConservativeFashion' component={ConservativeFashion}></Route>
    <Route exact path='/Appearance' component={Appearance}></Route>
    <Route exact path='/Budget' component={Budget}></Route>
    <Route exact path='/Profile' component={Profile}></Route>
    <Route exact path='/Address' component={Address}></Route>
    </Switch>
    <Fotter/>
     </>
  );
}

export default App;
