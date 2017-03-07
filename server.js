var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
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

// app.get('/', index.home);

app.listen(PORT, function() {
  console.log("Running on port: ", PORT);
});

module.exports = app;
