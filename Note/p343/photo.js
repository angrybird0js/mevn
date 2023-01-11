const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
})

module.exports = mongoose.model('Photo', PhotoSchema, 'Photo') // 3번째 매개변수로 collection 이름을 고정
