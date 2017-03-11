import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevProps.location !== this.props.location) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const loc = this.props.location;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(loc.lat, loc.lng);
        map.panTo(center);
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {location, zoom} = this.props;
      const {lat, lng} = location;
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
      this.props.onMapLoad(this.map);
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  location: React.PropTypes.object
}
Map.defaultProps = {
  zoom: 13,
  // Boston by default
  location: {
    lat: 42.3601,
    lng: -71.0589
  }
}

export default Map;
