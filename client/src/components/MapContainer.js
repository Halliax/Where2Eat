import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} onMapLoad={this.props.onMapLoad} location={this.props.location} zoom={this.props.zoom} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyACytkaIa-Cq_2L4WE-D1eVWG0e0AIU7ic'
})(MapContainer)
