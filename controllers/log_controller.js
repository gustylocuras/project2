const express = require('express')
const Log = require('../models/log.js')
const logs = express.Router()





//Routes

logs.get('/new', (req, res) => {
  res.render('logs/new.ejs')
})
