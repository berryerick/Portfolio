var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

app.use(express.static(__dirname + '/client'))
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json({
  extended: true
}));


// db models
require('./server/config/mongoose.js')

//routes
var routes_setter = require('./server/config/routes.js')
routes_setter(app)

//server port
app.listen(8000, function(){
  console.log("active on port 8000")
})
