const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
router.get("/test-me", function (req, res) {

    let x = req.body
    res.send(x)
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/createPublisher", publisherController.createPublisher  )

router.get("/getPublishersData", publisherController.getPublishersData)

router.post("/getIDofAuth", bookController.getIDofAuth)

router.post("/getIDofPub", bookController.getIDofPub)
router.get("/getBookWithAuthPub", bookController.getBookWithAuthPub)
router.get("/updatedHC", bookController.updatedHC)
module.exports = router;