const catagory = require('../modul/catagory')

exports.Addcatagory =  async function (req, res, next) {

    try {
  
      console.log(req.body);
      if (!req.body.name || !req.body.color) {
        throw new Error("fielp all data")
      }
      let data = await catagory.create(req.body)
      res.status(201).json({
        message: "Created",
        data: data
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }

exports.Getcatagories =  async function (req, res, next) {
    try {
  
      let data = await catagory.find()
      res.status(202).json({
        message: "All data find",
        data: data
      })
    }
  
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  
}  

exports.Deletcatagories = async function (req, res, next) {
    try {
      await catagory.findByIdAndDelete(req.query.id)
      res.status(200).json({
        message: "Data Delete"
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }

exports.Updatescatagories = async function (req, res, next) {

    try {
      await catagory.findByIdAndUpdate(req.query.id, req.body)
      res.status(200).json({
        message: "Data Update"
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }