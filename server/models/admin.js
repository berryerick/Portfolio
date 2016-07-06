var mongoose = require('mongoose')
var bcrypt = require("bcryptjs")
// var salt = bcrypt.genSaltSync(10);


var adminSchema = new mongoose.Schema({
  password: {type: String, required: true}
}, {timestamps: true})


adminSchema.pre('save', function(done){
  var admin = this
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(admin.password, salt, function(err, hash){
      admin.password = hash
      done()
    })
  })
})

adminSchema.methods.valid = function(password, hash){
  console.log(' in validate function', hash, password)
  return bcrypt.compareSync(password, hash)
}

var Admin = mongoose.model("Admin", adminSchema)
