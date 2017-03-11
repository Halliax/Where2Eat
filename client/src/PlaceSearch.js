// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlGYNtbgXnfy-Wt4dStomFOTjlpkWLuD0&libraries=places"></script>
import React, { Component } from 'react';
var map;
var google;
var service;

class PlaceSearch extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }

  state = {
      radius: 5,
      type: ""
  }

  updateParams(e) {
    const target = e.target
    const name = target.name
    this.setState({
      [name]: target.value
    });
  }

  onSearch(e) {
    e.preventDefault();
    var places;
    var handleSearchResults = this.props.handleSearchResults;
    map = this.props.map;
    google = this.props.google;
    service = new google.maps.places.PlacesService(map)
    var request = {
      location: this.props.location,
      radius: this.state.radius * 1609.34,
      types: ['restaurant'],
      keyword: this.state.type
    };
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        places = results;
      } else {
        places = "Error! No places found.";
      }
      handleSearchResults(places);
    });

  }
  render() {
    return (
        <div>
          <form onSubmit={this.onSearch}>
            How far are you willing to go? (in miles) <br />
            <input
              type="number"
              name="radius"
              value={this.state.radius}
              onChange={this.updateParams} /> <br /> <br />
            What type of food do you want? <br />
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.updateParams} /> <br />
            <input type="submit" value="Search" />
          </form>
        </div>
    );
  }
}

PlaceSearch.propTypes = {
  google: React.PropTypes.object,
  location: React.PropTypes.object
}
PlaceSearch.defaultProps = {
  // Boston by default
  location: {
    lat: 42.3601,
    lng: -71.0589
  }
}

export default PlaceSearch;
