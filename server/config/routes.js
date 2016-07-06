var mongoose = require('mongoose')
var projects = require('../controllers/projects.js')
var admins = require('../controllers/admins.js')

module.exports = function(app){

  app.get('/', function(req,res){
    projects.index(req,res)
  })
  // app.get('/admin', function(req,res){
  //   projects.index(req,res)
  // }),
  // app.get('/projects/:id/edit', function(req,res){
  //   projects.edit(req,res)
  // }),
  // app.post('/projects', function(req,res){
  //   projects.index(req,res)
  // }),
  app.post('/login', function(req,res){
    console.log('req.body', req.body);
    admins.login(req,res)
  })

}
