var mongoose = require('mongoose')
var projects = require('../controllers/projects.js')

module.exports = function(app){
  app.get('/', function(req,res){
    projects.index(req,res)
  })

}
