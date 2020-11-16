//Dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user.js')

//config
const users = express.Router()

//Routes

users.get('/new', (req, res) => {
  res.render('users/new.ejs',
              {
                currentUser: req.session.currentUser
              })
})

users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    res.redirect('/')
  })
})

module.exports = users
