const express = require('express')
const { create, read, update, remove } = require('../common/crud')
const Todo = require('../models/Todo')
const router = express.Router()

router
  .post('/', create(Todo))
  .get('/', read(Todo))
  .get('/:_id', readById, read(Todo))
  .put('/:_id', update(Todo))
  .delete('/:_id', remove(Todo))

function readById (req, res, next) {
  req.body = { _id: req.params._id }
  return next()
}

module.exports = router