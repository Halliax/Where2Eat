import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import EventUrl from './EventUrl.js'




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
        console.log(this.state)
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




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>/src/App.js</code> and save to reload.
        </p>
        <NewEvent/>
      </div>
    );
  }
}

export default App;
