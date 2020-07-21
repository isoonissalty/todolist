const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const todoSchema = new Schema({
  _id: ObjectId,
  title: { type: String, required: true },
  detail: String,
  due: { type: Date, default: Date.now, required: true },
  color: {
    type: String,
    enum: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#000000'],
    required: true,
    default: "#000000"
  },
  isDone: { type: Boolean, default: false },

  updated_at: Date
})

module.exports = mongoose.model('Todo', todoSchema, 'todos')