import React, { Component } from 'react';
import NewEvent from './NewEvent';
import PlacesContainer from './PlacesContainer';

class HomepageContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSearchResults = this.handleSearchResults.bind(this);
  }

  state = {
    places: []
  }

  handleSearchResults(res) {
    this.setState({
      places: res
    });
  }

  render() {
    return (
        <div>
          <PlacesContainer handleSearchResults={this.handleSearchResults} places={this.state.places} />
          <NewEvent places={this.state.places} />
        </div>
    )
  }
};

export default HomepageContainer;
