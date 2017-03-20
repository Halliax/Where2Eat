import React from 'react';
import { Link } from 'react-router-dom';

var EventUrl = React.createClass({
  propTypes: {
    newUrl: React.PropTypes.string,
  },

  render() {
    var url = window.location.href;
    if(this.props.newUrl !== "") {
      var fullUrl = "/vote/" + this.props.newUrl;
      return (
        <p className="EventURL">
          <Link to={fullUrl}>{url}vote/{this.props.newUrl}</Link>
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

module.exports = EventUrl;
