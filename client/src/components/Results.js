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
        var photo = item.icon;
        if (item.hasOwnProperty("photos")) {
          photo = item.photos[0].getUrl({'maxWidth': 45, 'maxHeight': 45});
        }
        return (
          <li key={item.place_id} className="list-group-item">
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={photo} alt="place"/>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{item.name}</h4>
                  Rating: {item.rating}   Price level: {item.price_level}
              </div>
            </div>
          </li>
        )
      });
      return (
          <div>
            <ul className="list-group">
              {listItems}
            </ul>
          </div>
      );
    }
  }
}

export default Results;
