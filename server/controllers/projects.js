var mongoose = require('mongoose')
var Project = mongoose.model('Project')
module.exports = {

  index: function(req, res){
    Project.find({}, function(err, data){
      if(err) console.log(err)
      else {
        // res.json('index')
      }
    })
  },



}
