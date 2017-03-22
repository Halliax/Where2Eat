import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './burger.svg';
import './css/bootstrap.css';
import './App.css';
import HomepageContainer from './components/HomepageContainer';
import VotepageContainer from './components/VotepageContainer';

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
    <VotepageContainer eventId={match.params.id} />
  </div>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/vote/:id" component={Vote}/>
    </div>
  </Router>
)

export default App;
