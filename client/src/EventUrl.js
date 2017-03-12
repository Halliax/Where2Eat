import React, { Component } from 'react';

var EventUrl = React.createClass({
  propTypes: {
    newUrl: React.PropTypes.string,
  },

  render() {
    var url = window.location.href;
    if(this.props.newUrl !== "") {
      return (
        <p className="EventURL">
          {url}vote/{this.props.newUrl}
        </p>
      )
    }
    else {
      return (
        <p className="EventURL">
        Click the button to make an event.
        </p>
      );
    }
  }
});

module.exports = EventUrl