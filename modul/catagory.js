const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schemauser = new Schema({

    name:String,
    color:String,
})
let catagory = mongoose.model('catagory',schemauser)
module.exports = catagory