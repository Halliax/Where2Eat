import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/vote/:id" component={Vote}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Vote = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
)

export default App;
