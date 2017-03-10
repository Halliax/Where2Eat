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

var Event = require('models/eventURLModel.js');

app.get('/votes', (req, res) => {
  console.log(shortid.generate())
  res.json([shortid.generate()]);
});

// app.post('/postNewEvent', index.postNewEvent);

app.post('/postNewEvent', (req, res) => {
    console.log("hello" + req.body);
  // var newEvent = new Event({
  //   "created_at" : req.body.ingredient,
  //   "_id": r
  // });
  // newIng.save(function(err, newIng) {
  //   if (err) return console.error(err);
  // });  
  res.end();
});

app.listen(PORT, function() {
  console.log("Running on port: ", PORT);
});

module.exports = app;
