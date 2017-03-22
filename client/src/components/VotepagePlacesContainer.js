import React, { Component } from 'react';
import $ from 'jquery';


class VotepagePlacesContainer extends Component {
  
  state = {

  }



  render() {
    console.log(this.props.places)
    var places = this.props.places;
    if (places === "Error! No places found.") {
      return (
        <div>
          {places}
        </div>
      );
    }
    else {
      var listItems = places.map(function(item,i){
        return <li>{item}</li>
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

};

export default VotepagePlacesContainer;
