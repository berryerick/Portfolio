var mongoose = require('mongoose')
var Project = mongoose.model('Project')
module.exports = {

  index: function(req, res){
    Project.find({}, function(err, data){
      if(err) console.log(err)
      else {
        console.log(data);
        res.json(data)
      }
    })
  },

  create: function (req, res) {
    var newproject = new Project(req.body)
    console.log("creating newproject",newproject);
    newproject.save(function(err, project){
      if (err) {
        console.log(err);
        res.json({saved:false, messages: "invalid entry"})
      } else {
        console.log("saved!!!!");
        res.json({saved: true, project: project})

      }
    })
  }



}
