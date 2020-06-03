const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = Schema(
  {
    glycemia: {type: Number, required: true},
    bp: {type: Number, required: true},
    weight: {type: Number, required: true},
    insulin: {name: String, qty: Number},
    date: {type: Date, default: Date.now}
  }
)

const Log = mongoose.model('Log', logSchema)

module.exports = Log
