const express = require('express')
const Log = require('../models/log.js')
const logs = express.Router()





//Routes

// logs.get('/new', (req, res) => {
//   res.render('logs/new.ejs')
// })
//
logs.get('/', (req, res) => {
  Log.find({}, (err, foundLogs) => {
    res.render('logs/index.ejs',
                {
                  logs: foundLogs
                })
  })
})

module.exports = logs
