import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.location !== this.props.location) {
      this.loadMap();
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
      new maps.Marker({
        position: center,
        map: this.map
      });
      this.props.onMapLoad(this.map);
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '400px'
    };
    return (
      <div style={style} ref='map'>
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
