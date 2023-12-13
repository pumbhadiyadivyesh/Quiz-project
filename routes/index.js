var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/catagory")
const quizcontroller = require("../controllers/quiz");
const usercontroller = require("../controllers/user");

// CATAGORY POST API
router.post('/catgory',categoryController.Addcatagory);  

// CATAGORY GET API
router.get('/catgory',categoryController.Getcatagories);

// CATAGORY DELETE API
router.delete('/catgory', categoryController.Deletcatagories);

// CATAGORY PUT API
router.put('/catgory', categoryController.Updatescatagories);

//QUIZ POST API
router.post('/quiz',quizcontroller.Addquiz);

// QUIZ GET API
router.get('/quiz', usercontroller.Securety , quizcontroller.Getquiz);

// QUIZ DELETE API
router.delete('/quiz', quizcontroller.deletequiz);

// QUIZ PUT API
router.put('/quiz', quizcontroller.Updatequiz);

  // SINGUP DATA
router.post('/singup',usercontroller.signpuser );

  //Login Data
router.post('/login', usercontroller.loginuser);


module.exports = router;
