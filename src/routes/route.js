const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookModel= require("../models/bookModel")
const bookController=require("../controllers/bookControllers")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )
router.post("/createBook", bookController.createBook  )

//router.get("/getUsersData", UserController.getUsersData)
router.get("/getBooksData", bookController.getBooksData)

module.exports = router;