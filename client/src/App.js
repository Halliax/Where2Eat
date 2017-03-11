import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer';
import PlaceSearch from './PlaceSearch';
import Results from './Results';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
  }

  state = {
    map: null,
    places: [],
    location: {
      lat: 42.3601,
      lng: -71.0589
    },
    zoom: 13
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          location: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        })
      })
    }
  }

  handleMapLoad(m) {
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
        <MapContainer google={window.google} onMapLoad={this.handleMapLoad} location={this.state.location} zoom={this.state.zoom} />
        <PlaceSearch google={window.google} map={this.state.map} handleSearchResults={this.handleSearchResults} location={this.state.location} />
        <Results places={this.state.places} />
      </div>
    );
  }
}

export default App;
