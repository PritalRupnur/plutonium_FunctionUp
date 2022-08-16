const { count } = require("console")
const BookModel1= require("../models/bookModel1")


//createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel1.create(data)
    res.send({msg: savedData})
}

//bookList :gives all the books- their bookName and authorName only 
const bookList= async function (req, res) {

    let allBooks= await BookModel1.find({},{ bookName: 1, authorName: 1})
    res.send({msg: allBooks})

}


//getBooksInYear: takes year as input in post request and gives list of all books published that year
const bookYear= async function (req, res) {

    let year= req.query.WhichYear

    let allBooks1= await BookModel1.find({bookYear :  year})

    res.send({msg: allBooks1})
}


//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as 
//a condition to fetch books that satisfy that condition
//e.g if body had { name: “hi”} then you would fetch the books with this name
//if body had { year: 2020} then you would fetch the books in this year
//hence the condition will differ based on what you input in the request body
const getParticularBooks= async function (req, res) {

    let allBooks2= await BookModel1.find({"prices.europePrice": {$gt:"10"}})

    res.send({msg: allBooks2})
}


//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getINRBooks= async function (req, res) {

    let allBooks3= await BookModel1.find({$or:[{"prices.indianPrice": {$eq:"100"}},{"prices.indianPrice": {$eq:"200"}},{"prices.indianPrice": {$eq:"500"}} ]} )

    res.send({msg: allBooks3})
}


//getRandomBooks - returns books that are available in stock or 
//have more than 500 pages
const getRandonBooks= async function (req, res) {

    let allBooks4= await BookModel1.find({$or:[{totalPages: { $gt: 500}},{isAvailable: true}]})
    

    res.send({msg: allBooks4})
}



module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports. bookYear=  bookYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getINRBooks= getINRBooks
module.exports.getRandonBooks= getRandonBooks

