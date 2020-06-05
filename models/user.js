const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Log = require('./log.js')

const userSchema = Schema(
  {
    username: {type: String, unique: true, required: true},
    password: String,
    logs: [{type: Schema.Types.ObjectId, ref: 'Log'}]
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
