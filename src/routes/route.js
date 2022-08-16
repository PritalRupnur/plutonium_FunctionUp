const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
 const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
 const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController1.createBook  )

router.post("/bookList", BookController1.bookList  )


router.get("/getParticularBooks", BookController1.getParticularBooks)

router.get("/getXINRBooks", BookController1.getINRBooks)

router.post("/getBooksInYear", BookController1.bookYear)

//router.get("/getBooksData", BookController1.getBooksData)

router.get("/getRandomBooks", BookController1.getRandonBooks)


module.exports = router;