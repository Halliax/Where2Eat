import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PlaceSearchForm from './PlaceSearchForm';
import Results from './Results';

class PlacesContainer extends Component {

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
        <div>
          <MapContainer onMapLoad={this.handleMapLoad} location={this.state.location} zoom={this.state.zoom} />
          <PlaceSearchForm google={window.google} map={this.state.map} handleSearchResults={this.handleSearchResults} location={this.state.location} />
          <Results places={this.state.places} />
        </div>
    )
  }
};
  export default PlacesContainer;
