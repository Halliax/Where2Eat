var mongoose = require('mongoose');

// Create a Schema
var robotSchema = mongoose.Schema({
  name: String,
  abilities: [String],
  isEvil: Boolean
});

module.exports = mongoose.model("robot", robotSchema);
