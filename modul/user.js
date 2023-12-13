const mongoose = require('mongoose')
const { schema } = require('./catagory')
const Schema = mongoose.Schema

let loginuser = new Schema({
    name:String,
    Email:String,
    password:String,
})
const user = mongoose.model('user',loginuser)
module.exports = user