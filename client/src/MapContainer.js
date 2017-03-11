import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApiComponent';
import Map from './Map';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '400px'
    };
    return (
      <div style={style}>
        <Map google={this.props.google} onMapLoad={this.props.onMapLoad} location={this.props.location} zoom={this.props.zoom} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyACytkaIa-Cq_2L4WE-D1eVWG0e0AIU7ic'
})(MapContainer)
