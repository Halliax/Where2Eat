import React from 'react';
import $ from 'jquery';
import EventUrl from './EventUrl';

var NewEvent = React.createClass({
  //The component for the add item form
  propTypes: {

  },


  getInitialState: function(){
    return{
      random: ""
    }
  },

  generateId: function(){
      $.ajax({
      url: '/votes',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({random: data});
        // console.log(this.state)
        // this.createDbEntry(); // Notice this
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
