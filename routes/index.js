var Robot = require('../models/robotModel.js');

Robot.find({}, function(err, robots){
  console.log(robots);
});

routes.home = function(req, res){
  res.render("home", {"robots": [snipBot]});
};

module.exports = routes;
