<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlGYNtbgXnfy-Wt4dStomFOTjlpkWLuD0&libraries=places"></script>
import React, { Component } from 'react';
var map;
var service;
var infowindow;

class PlacesTest extends Component {
  constructor(props) {
    super(props);
    map = new google.maps.Map(this.props.mapElement, {
      center:{lat:42.360,long:-71.059}
    });
    service = new google.maps.places.PlacesService(map);
  }
  search() {
    var request = {
      location: {lat:42.360,long:-71.059},
      radius: 5000,
      types: ['restaurant']
    };
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(place);
        }
      }
    });
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default PlacesTest;
