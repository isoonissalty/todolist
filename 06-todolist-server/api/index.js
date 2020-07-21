const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const todo = require('./todo')

const mongoUrl = 'mongodb://127.0.0.1:27017/todo'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

router
  .get('/ping', (req, res) => res.send('pong'))

  .use('/todos', todo)


module.exports = router