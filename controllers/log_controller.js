const express = require('express')
const Log = require('../models/log.js')
const logs = express.Router()



const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}



//Routes

//NEW

logs.get('/new', isAuthenticated, (req, res) => {
  res.render('logs/new.ejs',
                {
                  currentUser: req.session.currentUser
                })
})

//EDIT

logs.get('/:id/edit', isAuthenticated, (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('logs/edit.ejs',
                {
                  log: foundLog,
                  currentUser: req.session.currentUser
                })
  })
})

//UPDATE

logs.put('/:id', (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true},
     (err, updatedLog) => {
    res.redirect('/logs')
  })
})

//SHOW

logs.get('/:id', isAuthenticated, (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('logs/show.ejs',
                {
                  log: foundLog,
                  currentUser: req.session.currentUser
                })
  })
})


//INDEX

logs.get('/', isAuthenticated, (req, res) => {
  console.log(req.session.currentUser);
  Log.find({user:req.session.currentUser._id}, (err, foundLogs) => {
    res.render('logs/index.ejs',
                {
                  logs: foundLogs,
                  currentUser: req.session.currentUser
                })
  })
})


//CREATE

logs.post('/', (req, res) => {
  req.body.user = JSON.parse(req.body.user)
  Log.create(req.body, (err, createdLog) => {
    res.send(req.body)
  })
})

//DELETE

logs.delete('/:id', isAuthenticated, (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.redirect('/logs')
  })
})





module.exports = logs
