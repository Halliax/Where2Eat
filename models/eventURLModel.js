var mongoose = require('mongoose');

// Create a Schema
var eventURLSchema = mongoose.Schema({
   // "createdAt": new Date(),
   "_id": String
});

module.exports = mongoose.model("eventURL", eventURLSchema);
