var mongoose = require('mongoose')

var projectSchema = new mongoose.Schema({
  title:      {type: String, required: true, minlength: 5  },
  abstract:   {type: String, required: true, minlength: 10 },
  content:    [mongoose.Schema.Types.ObjectId],
}, {timestamps: true})

var Project = mongoose.model("Project", projectSchema)
