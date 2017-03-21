import React, { Component } from 'react';
var map;
var google;
var service;

class PlaceSearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }

  state = {
      radius: 4,
      type: "",
      circle: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.map !== this.props.map) {
      map = this.props.map;
      google = this.props.google;

      this.setState({
        circle: new google.maps.Circle({
                  strokeColor: '#0000FF',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#0000FF',
                  fillOpacity: 0.35,
                  map: map,
                  center: this.props.location,
                  radius: this.state.radius * 1609.34
        })
      });
    }
  }

  updateParams(e) {
    const target = e.target
    const name = target.name
    this.setState({
      [name]: target.value
    });
    if (name === "radius") {
      this.state.circle.set("radius",target.value * 1609.34);
    }
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
        if (places.length >= 10) {
          places = places.slice(0, 10);
        }
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
            <p>How far are you willing to go? (in miles)</p>
            <input
              type="number"
              name="radius"
              step="0.1"
              value={this.state.radius}
              onChange={this.updateParams} /> <br /> <br />
            <p>What type of food do you want?</p>
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

PlaceSearchForm.propTypes = {
  google: React.PropTypes.object,
  location: React.PropTypes.object
}
PlaceSearchForm.defaultProps = {
  // Boston by default
  location: {
    lat: 42.3601,
    lng: -71.0589
  }
}

export default PlaceSearchForm;
