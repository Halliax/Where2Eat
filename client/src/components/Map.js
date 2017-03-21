import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.location !== this.props.location || prevProps.places !== this.props.places) {
      this.loadMap();
    }
  }


  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      const places = this.props.places;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {location, zoom} = this.props;
      const {lat, lng} = location;
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
        scrollwheel: false,
        zoomControl: false,
        streetViewControl: false,
        draggable: false,
        disableDoubleClickZoom: true,
        clickableIcons: false,
        minZoom: 5,
        maxZoom: 15
      })
      this.map = new maps.Map(node, mapConfig);
      new maps.Marker({
        position: center,
        map: this.map,
        clickable: false
      });
      if (typeof(places) === "object") {
        for (var i = 0; i < places.length; i++) {
          new maps.Marker({
            position: places[i].geometry.location,
            map: this.map,
            clickable: false
          });
        }
      }
      var _this = this;
      maps.event.addDomListener(window, "resize", function() {
        var center = _this.map.getCenter();
        maps.event.trigger(_this.map, "resize");
        _this.map.setCenter(center);
      });
      this.props.onMapLoad(this.map);
    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '60vh'
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
  zoom: 12,
  // Boston by default
  location: {
    lat: 42.3601,
    lng: -71.0589
  }
}

export default Map;
