const quiz = require("../modul/quiz")


exports.Addquiz = async function (req, res, next) {

    try {
  
      console.log(req.body);
      if (!req.body.Question || !req.body.Option || !req.body.Question_catagery || !req.body.Answer) {
        throw new Error("fielp all data")
      }
      let data = await quiz.create(req.body)
      res.status(201).json({
        message: "created",
        data: data
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  
    res.render('index', { title: 'Express' });
  }
exports.Getquiz = async function (req, res, next) {
    try {
  
      let data = await quiz.find()
      res.status(202).json({
        message: "all data find",
        data: data
      })
    }
  
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  
    res.render('index', { title: 'Express' });
  }  
exports.deletequiz = async function (req, res, next) {
    try {
      await quiz.findByIdAndDelete(req.query.id)
      res.status(201).json({
        message: "data Delete"
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
    res.render('index', { title: 'Express' });
  
  
  }
exports.Updatequiz = async function (req, res, next) {
    try {
       await quiz.findByIdAndUpdate(req.query.id, req.body)
       res.status(200).json({
         message: "data Update"
       })
     } catch (error) {
       res.status(404).json({
         message: error.message
       })
     }
     res.render('index', { title: 'Express' });
   }