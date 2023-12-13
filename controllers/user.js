const user = require("../modul/user")
var jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
const { token } = require("morgan");
const { findById } = require("../modul/catagory");

exports.Securety = async function (req, res, next) {
  try {
    let token = req.headers.Authorization
    if(!token)
    {
      throw new Error("please attached token")
    }
    let tokenData = jwt.verify(token,"Divyesh")
    console.log(tokenData.id);
    let checkuser = await user.findById(tokenData.id)
    if (!checkuser) {
      throw new Error("user not found")
    }
    next()
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}



exports.signpuser = async function (req, res, next) {
    try {
      let singup = req.body
      if (!singup.name || !singup.Email || !singup.password) {
        throw new Error("field all data")
      }
      singup.password = await bcrypt.hash(singup.password, 10)
      let data = await user.create(req.body)
      var token = jwt.sign({ id: data._id }, 'Divyesh');
      res.status(200).json({
        message: "signup successe",
        data,
        token
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
exports.loginuser = async function (req, res, next) {
    try {
  
      let logindata = req.body
      if (!logindata.Email || !logindata.password) {
        throw new Error("field all data")
      }
      const checkuser = await user.findOne({ Email: logindata.Email })
      if (!checkuser) {
        throw new Error("email wrong")
      }
      let checkpass = await bcrypt.compare(logindata.password, checkuser.password)
      if (!checkpass) {
        throw new Error("wrong password")
      }
      res.status(200).json({
        message: "success login",
        data: checkuser
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }  