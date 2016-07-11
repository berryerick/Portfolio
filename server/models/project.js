var mongoose = require('mongoose')
var fs = require('fs');

var projectSchema = new mongoose.Schema({
  title:      {type: String, required: true, minlength: 5  },
  abstract:   {type: String, required: true, minlength: 10 },
  image: {type: String, required: true},
  links: [{title:{type: String}, url: {type: String}}],
  category: [{type:String, required: true}]
}, {timestamps: true})

var Project = mongoose.model("Project", projectSchema)
