import React from 'react';
import $ from 'jquery';
import EventUrl from './EventUrl';

var NewEvent = React.createClass({
  //The component for the add item form

  // propTypes: {
  //   places: React.PropTypes.Array,
  // },


  getInitialState: function(){
    return{
      random: ""
    }
  },

  addPlaces: function(){
      var placeNames = this.props.places.map(function(place){
        return place.name;
      });
      var data = {'id': this.state.random, 'places': placeNames};
      $.ajax({
      type: 'POST',
      url: '/votes',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('Successfully added');
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  generateId: function(){   
      $.ajax({
      url: '/votes',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({random: data});
        this.addPlaces();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  createEvent: function(e){
    e.preventDefault();
    this.generateId();
   },

  render: function(){
    return(
      <div>
      <form id="newEvent" onSubmit={this.createEvent}>
        <input type="submit" value="New Event"/>
      </form>
        <EventUrl newUrl={this.state.random}/>
      </div>
    );
  }
});

export default NewEvent;
