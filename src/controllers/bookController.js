const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const book_hc = require("../models/newBookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    console.log(book.Author)
   // let bookCreated = await bookModel.create(book)
  let bookCreated = await book_hc.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
     let books = await book_hc.find()

    res.send({data: books})
}

const getIDofAuth = async function (req, res) {

    let Book = req.body
    let auth_ID = Book.Author;
    
    let validAuth = mongoose.Types.ObjectId.isValid(auth_ID)
   
    if (validAuth === false) {
        return res.send("invalid lenght of author")
    } 
    let specificID = await bookModel.find().select({Author:1})
    let details;
   
    for (let i=0; i<specificID.length; i++){
        console.log(specificID[0].Author)
        if(auth_ID==specificID[i].Author){
            details = auth_ID;
        }

        else{
            details = "this detail is required!!";
        }   

            
        
    }
    console.log(details);
    res.send({data: details});

}

const getIDofPub = async function (req, res) {

    let Book = req.body
    let pub_ID = Book.publisher;
    let validPub = mongoose.Types.ObjectId.isValid(pub_ID)
    if (validPub === false) {
        return res.send("invalid length of publisher id ")
    }
    let specificID = await bookModel.find().select({publisher:1})
    let details;
    specificID.forEach(a=>{
        if(a.publisher==pub_ID){
            details = pub_ID;

        }
        else{
            details = "Publisher does not exist"
        }
    })
    res.send({data: details});}


    const getBookWithAuthPub= async function (req, res) {
        let books = await bookModel.find().populate(['Author' , 'publisher'])
        res.send({data: books})
    }

    const updatedHC= async function (req, res) {
        
        let pub = await publisherModel.find({name:["Penguine","HarperCollins"]}).select({_id:1});
        let bookid = await book_hc.updateMany({ publisher : pub },{ $set : {hardCover : true , new : true }})
      
         let auth = await authorModel.find({ratings:{ $gt: 3 }}).select({_id:1})
         let price = await book_hc.updateMany({Author:auth}, { $inc : {price :10 }})


        console.log(price);
        
        
        
       

        res.send({data:bookid});
   }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getIDofAuth = getIDofAuth
module.exports.getIDofPub = getIDofPub
module.exports.getBookWithAuthPub = getBookWithAuthPub
module.exports.updatedHC = updatedHC
