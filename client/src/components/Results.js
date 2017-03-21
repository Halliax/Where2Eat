// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlGYNtbgXnfy-Wt4dStomFOTjlpkWLuD0&libraries=places"></script>
import React, { Component } from 'react';

class Results extends Component {

  render() {
    var places = this.props.places;
    if (typeof(places) === "string") {
      return (
        <div>
          {places}
        </div>
      );
    }
    else {
      var listItems = places.map(function(item,i){
        return <li key={item.place_id}>{item.name}</li>
      });
      return (
          <div>
            <ul>
              {listItems}
            </ul>
          </div>
      );
    }
  }
}

export default Results;
