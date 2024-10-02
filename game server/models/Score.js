const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  score:{
    type:Number,
    default: 0
  }
 
})

module.exports = mongoose.model('Score', scoreSchema)
