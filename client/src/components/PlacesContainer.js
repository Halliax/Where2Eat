import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PlaceSearchForm from './PlaceSearchForm';
import Results from './Results';

class PlacesContainer extends Component {

  constructor(props) {
    super(props);
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleZoomChange = this.handleZoomChange.bind(this);
  }

  state = {
    map: null,
    location: {
      lat: 42.3601,
      lng: -71.0589
    },
    zoom: 12
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

  handleZoomChange(z) {
    this.setState({
      zoom: z
    });
  }

  render() {
    return (
        <div>
          <MapContainer onMapLoad={this.handleMapLoad}
                        location={this.state.location}
                        zoom={this.state.zoom}
                        places={this.props.places} />
          <PlaceSearchForm google={window.google}
                        map={this.state.map}
                        location={this.state.location}
                        handleSearchResults={this.props.handleSearchResults}
                        handleZoomChange={this.handleZoomChange} />
          <Results places={this.props.places} />
        </div>
    )
  }
};
  export default PlacesContainer;
