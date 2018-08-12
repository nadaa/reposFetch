import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Bookmarkedrepo from './components/Bookmarkedrepo';
import './App.css';

const App=()=>(
  <div>
    <Route path='/' exact component={Home}/>
	<Route path='/login' exact component={Login}/>
	<Route path='/bookmarked' exact component={Bookmarkedrepo}/>
  </div>
)

export default App;
