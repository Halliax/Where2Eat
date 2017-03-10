import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';



// class EventUrl extends React.Component {

//   render() {
//     // if(this.props.random != null) {
//       return (
//         <p className="EventURL">
//           {this.props}
//         </p>
//       )
//     }
//   //   else {
//   //     return (
//   //       <p className="EventURL">
//   //       NULLLLLLL {this.props.random}
//   //       </p>
//   //     );
//   //   })
//   // }
// };

var NewEvent = React.createClass({
  //The component for the add item form
  generateId: function(){
      $.ajax({
      url: '/votes',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({random: data}); // Notice this
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  createDbEntry: function(){
      $.ajax('/postNewEvent',
      {
        url: this.random
      })


  },


  createEvent: function(e){
    e.preventDefault();
    this.generateId();
    this.createDbEntry();
   },

  render: function(){
    return(
      <form id="newEvent" onSubmit={this.createEvent}>
        <input type="submit" value="New Event" />
      </form>
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
