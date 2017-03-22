import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomepageContainer from './components/HomepageContainer';


const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Where2Eat</h2>
    </div>
    <HomepageContainer />
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

const Results = ({ match }) => (
  <div>
    <h3>Get ready! The group is going to {match.params.id}</h3>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/vote/:id" component={Vote}/>
      <Route path="/results/:id" component={Results}/>
    </div>
  </Router>
)

export default App;
