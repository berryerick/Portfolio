var mongoose = require('mongoose')
var fs = require('fs');

var projectSchema = new mongoose.Schema({
  title:      {type: String, required: true, minlength: 5  },
  abstract:   {type: String, required: true, minlength: 10 },
}, {timestamps: true})

var Project = mongoose.model("Project", projectSchema)
