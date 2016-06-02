var mongoose = require('mongoose')
var Content = mongoose.model('Content')
module.exports = {

  index: function(req, res){
    Content.find({}, function(err, data){
      if(err) console.log(err)
      else {
        // res.json('index')
      }
    })
  },



}
