var mongoose = require('mongoose')

var contentSchema = new mongoose.Schema({
  title: String,
  abstract: String,
  content: [mongoose.Schema.Types.ObjectId]
}, {timestamps: true})

var Content = mongoose.model("Content", contentSchema)
