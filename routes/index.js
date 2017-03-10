var Event = require('../models/eventURLModel.js');


var postNewEvent = function(req, res){
  console.log("hello" + req.body);
  // var newEvent = new Event({
  //   "created_at" : req.body.ingredient,
  //   "_id": r
  // });
  // newIng.save(function(err, newIng) {
  //   if (err) return console.error(err);
  // });  
  res.end();
};

module.exports.postNewEvent = postNewEvent;
