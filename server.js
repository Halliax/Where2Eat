var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var shortid = require('shortid');
var index = require('./routes/index');

var app = express();

var PORT = process.env.PORT || 3001;
var mongoURI = process.env.MONGOURI || 'mongodb://localhost/where2eat';

var mongoose = require('mongoose');
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connection Successful");
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var Event = require('./models/eventURLModel.js');

app.get('/votes', (req, res) => {
  var id = shortid.generate();
  var newEvent = new Event({
    "_id": id,
    "places": []
  });
  newEvent.save(function(err, newEvent) {
    if (err) return console.error(err);
  });
  res.json(id);
});

app.post('/votes', (req,res) => {
  var places = req.body['places[]'];
  console.log(req.body.id)
  Event.findOneAndUpdate({'_id': req.body.id}, {$set:{'places':places}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
  });
});

app.get('/votes/id', (req, res) => {
  console.log(req.query.id)
  Event.findOne({'_id':req.query.id}, 'places', function(err, places){
    res.json(places)
    if(err){
        console.log("Something wrong when updating data!");
    }
  });
  // var newEvent = new Event({
  //   "_id": id,
  //   "places": []
  // });
  // newEvent.save(function(err, newEvent) {
  //   if (err) return console.error(err);
  // });
  // res.json(id);
});

app.listen(PORT, function() {
  console.log("Running on port: ", PORT);
});

module.exports = app;
