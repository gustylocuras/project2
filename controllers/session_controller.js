const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/user.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs',
                {
                  currentUser: req.session.currentUser
                })
})

sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err){
      res.send('Sorry! try again later')
    } else if(!foundUser){
      res.send('<a href="/logs">Sorry, no user found</a>')
    } else {
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser = foundUser
        res.redirect('/logs')
      } else {
        res.send('<a href="/logs">Sorry password does not match')
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy( () => {
    res.redirect('/')
  })
})

module.exports = sessions
