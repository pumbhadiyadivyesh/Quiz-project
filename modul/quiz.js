const mongoose = require('mongoose')
const Schema = mongoose.Schema

let quiauser = new Schema ({
    Question : String,
    Option : [String],
    Answer:String,
    Question_catagery:{
        type:Schema.Types.ObjectId,
        ref:"catagory"
    }
})

let quiz = mongoose.model('quiz',quiauser)
module.exports = quiz