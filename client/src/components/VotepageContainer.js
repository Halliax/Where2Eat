import React, { Component } from 'react';
import $ from 'jquery';
import VotepagePlacesContainer from './VotepagePlacesContainer';

class VotepageContainer extends Component {

  state= {
    'places': []
  }

  getPlaces() {   
      var id = this.props.eventId;
      console.log(id);
      $.ajax({
      url: '/votes/id',
      data: {'id': id},
      cache: false,
      success: function(data) {
        this.setState({'places': data['places']});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }

  componentWillMount() {
    this.getPlaces();
  }


  render() {
    return (
        <div>
          <VotepagePlacesContainer places={this.state.places} />
        </div>
    )
  }
};


export default VotepageContainer;
