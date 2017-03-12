var CreateEvent = React.createClass({
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


  newEvent: function(e){
    e.preventDefault();
    this.generateId();

  render: function(){
    return(
      <form id="newEvent" onSubmit={this.createEvent}>
        <input type="submit" value="New Event" />
      </form>
    );
  }
});


