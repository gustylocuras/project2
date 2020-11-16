const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.js')


const logSchema = new Schema(
  {
    glycemia: {type: Number, required: true},
    bp: {type: Number, required: true},
    weight: {type: Number, required: true},
    insulin: String,
    units: Number,
    date: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
  }
)

logSchema.pre('save', function(next){
  let now = new Date()
  this.date = now
  if(!this.date){
    this.date = now
  }
  next()
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
