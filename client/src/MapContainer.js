import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApiComponent';
import GMap from './GMap';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <GMap google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyACytkaIa-Cq_2L4WE-D1eVWG0e0AIU7ic'
})(MapContainer)
