const { count } = require("console")
const BookModel= require("../models/bookModelPrital")
const AuthorModel = require("../models/AuthorModelPrital")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let author_Author= req.body

    let savedData= await AuthorModel.create(author_Author)
    res.send({msg: savedData})
}

const cbBooks= async function (req, res) {
    let name_Author= req.params.author_name
    let allBooks2= await AuthorModel.find({author_name: name_Author})

    // console.log(allBooks2)
    // for( let i=0; i<=allBooks2.length; i++){
    //     let id = allBooks2[i].author_id
    //     console.log(id)
    // }
   
    let book_name = await BookModel.find({author_id:allBooks2[0].author_id})
    console.log(book_name)

   // let savedData= await AuthorModel.create(author_Author)
    res.send({msg: book_name})
}
const updatedBookPrice= async function (req, res) {
    let Book= req.query.book

    let allBooks2= await BookModel.find({Bookname: Book})
    let id = allBooks2[0].author_id
    let book_name = await BookModel.findOneAndUpdate({author_id:id},{$set:{price: 100}},{ new: true , upsert: true})
    let Author = await AuthorModel.findOne({author_id:id})
      let Author_Name = Author.author_name
     let Book_Name = book_name.price
    let obj = {Author_Name,Book_Name}
    res.send({msg:obj})
  //  res.send()
}



// Find the books which costs between 50-100(50,100 inclusive) and respond 
//back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run
// a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)


const particularPriceBooks= async function (req, res) {
    let Author= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let Authors = await AuthorModel.find()
    console.log(Authors)
    let Name = [];
    
       
       // let name = await AuthorModel.find({author_id:Author[i].author_id})
        let name1 =  Authors.forEach(a=>
            {if (a.author_id=Author.author_id);{Name.push(a.author_name)}})
        console.log(name1)
        
        
      
    
    
    
    
    res.send({msg:x})
    
   
}




module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.updatedBookPrice= updatedBookPrice
module.exports.cbBooks= cbBooks
module.exports.particularPriceBooks= particularPriceBooks