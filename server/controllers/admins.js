var mongoose = require('mongoose')
var Admin = mongoose.model('Admin')
var sessionAdmin = {loggedIn: false}

module.exports = {

  index: function(req, res){
    Admin.find({}, function(err, data){
      if(err) console.log(err)
      else {
        // res.json('index')
      }
    })
  },

  login: function(req, res){
    var result = {}
    Admin.find({}, function(err, admins){
      if (err) {
        console.log(err);
      } else {
        console.log("length",admins.length);
        var admin = new Admin(req.body)
        if (admins.length != 1) {
          console.log("making admin");
          admin.save(function(err, admin) {
            console.log("Saving admin");
            if (err) {
              console.log(err);
              result = {status:false, messages: err}
            }else {
              console.log("%%%%%%%%%%%%%%%%%%%", admin);
              result = {status: true, admin: admin}
            }
          })
        } else {
          console.log('comparing', req.body, admins[0]);
          var compare = admin.valid(req.body.password, admins[0].password)
          console.log("compare: ", compare);
          if (compare) {
            console.log('comparing passwords success');
            result = {status: true, admin: admins[0]}
          }
          else {
            console.log('comparing passwords failed');
            result = {status: false, messages: err}
          }
        }
        console.log(result);
        res.json(result)
      }
    })

  }
}
