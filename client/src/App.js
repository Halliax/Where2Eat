import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer';
import PlaceSearch from './PlaceSearch';
import Results from './Results';

class App extends Component {

  constructor(props) {
    super(props);
    this.getMap = this.getMap.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
  }

  state = {
    map: null,
    places: []
  }

  getMap(m) {
    this.setState({
      map: m
    });
  }

  handleSearchResults(res) {
    this.setState({
      places: res
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Where2Eat</h2>
        </div>
        <MapContainer getMap={this.getMap} />
        <PlaceSearch google={window.google} map={this.state.map} handleSearchResults={this.handleSearchResults} />
        <Results places={this.state.places} />
      </div>
    );
  }
}

export default App;
