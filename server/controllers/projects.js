var mongoose = require('mongoose')
var Project = mongoose.model('Project')
module.exports = {

  index: function(req, res){
    Project.find({}, null, {sort: '-updatedAt'}, function(err, data){
      if(err) console.log(err)
      else {
        // console.log(data);
        res.json(data)
      }
    })
  },

  create: function (req, res) {
    var newproject = new Project(req.body)
    // console.log("creating newproject",newproject);
    newproject.save(function(err, project){
      if (err) {
        // console.log(err);
        res.json({saved:false, messages: "invalid entry"})
      } else {
        // console.log("saved!!!!");
        res.json({saved: true, project: project})

      }
    })
  },

  update: function (req,res) {
    // console.log('updating', req.params.id, req.body);
    Project.update({_id: req.params.id}, {$set: req.body}, function (err, project) {
      if (err) {
        res.json({saved: false, messages: err})
      }
      else{
        res.json({saved: true, project: project})
      }
    })
  },

  delete: function (req,res){
    // console.log('deleting', req.params.id);
    Project.remove({_id: req.params.id}, function(err){
      if (err) {
        console.log(err);
      }
    })
  }

}
