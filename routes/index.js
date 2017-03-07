var Robot = require('../models/robotModel.js');

Robot.find({}, function(err, robots){
  console.log(robots);
});

snipBot = new Robot({name:'SnipBot',abilities:["snipping","clacking"],isEvil:'false'});
snipBot.save(function(err) {
  if(err) {
    console.log("save error:", err);
  }
});

var home = function(req, res){
  res.render("home", {"robots": [snipBot]});
};

module.exports.home = home;
