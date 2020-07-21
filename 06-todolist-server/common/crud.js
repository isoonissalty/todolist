const mongoose = require('mongoose')
const { responseData, errRes } = require('./response')

function create(model, populate = []) {
  return (req, res) => {
    const newData = new model({
      _id: new mongoose.Types.ObjectId(),
      ...req.body
    })
    
    return newData.save()
    .then(t => t.populate(...populate, responseData(res)))
    .catch(err => errRes(res, err))
  }
}

function read(model, populate = []) {
  return (req, res) => (
    model.find({...req.body}, responseData(res)).populate(...populate)
  )
}

function update(model, populate = []) {
  return (req, res) => {
    req.body.updated_at = new Date()
    return model.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true },
      responseData(res)
    ).populate(...populate)
  }
}

function remove(model) {
  return (req, res) => (
    model.deleteOne({ _id: req.params._id }, responseData(res))
  )
}

module.exports = { read, create, update, remove }