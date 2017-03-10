// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlGYNtbgXnfy-Wt4dStomFOTjlpkWLuD0&libraries=places"></script>
import React, { Component } from 'react';
var map;
var google;
var service;

class PlacesTest extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  state = {
    result: ["results","here"]
  }

  onSearch() {
    var res;
    map = this.props.map;
    google = this.props.google;
    service = new google.maps.places.PlacesService(map)
    var request = {
      location: {lat:42.360,lng:-71.059},
      radius: 5000,
      types: ['restaurant']
    };
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        res = results;
      } else {
        res = ['fuck','fuck'];
      }
      console.log(res);
    });
    // this.setState({
    //   result: res
    // });
  }
  render() {
    var result = this.state.result;
    var listItems = result.map(function(item,i){
      return <li>{item}</li>
    });
    return (
        <div>
          <ul>
            {listItems}
          </ul>
          <input
              type="button"
              value="Search"
              onClick={this.onSearch} />
        </div>
    );
  }
}

export default PlacesTest;
