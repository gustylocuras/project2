const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Log = require('./log.js')
const User = require('./user')

const adminSchema = Schema(
  {
    adminName: {type: String, unique: true, required: true},
    password: String,
    patients: [User.schema],
    logs: [Log.schema]
  }
)

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
