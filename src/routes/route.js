const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authentication = require("../authentication/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", authentication.authToken,userController.createUser  )

router.post("/login",authentication.authToken, userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authentication.authToken, userController.getUserData)

router.put("/users/:userId", authentication.authToken,userController.updateUser)
router.put("/users1/:userId", authentication.authToken,userController.deletedUser)

module.exports = router;