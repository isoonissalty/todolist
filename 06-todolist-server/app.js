const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const api = require('./api')
const { notFound } = require('./common/middleware')

const app = express()

app
  .use(cors())
  .use(logger('dev'))
  .use(bodyParser.json())

  .use('/api', api)

.use(notFound)

module.exports = app