const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Log = require('./log.js')

const userSchema = Schema(
  {
    username: {type: String, unique: true, required: true},
    password: String,
    logs: [Log.schema]
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
