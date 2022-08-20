const AuthorModel= require("../models/authorModel")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const getIDofBooks = async function (req, res) {

    let Book = req.body
    let auth_ID = Book.Author;
    let specificID = await AuthorModel.find().select({_id:1})
    console.log(specificID)
    let details;

     specificID.forEach(a=>{
        if(a.Author==auth_ID){
            details = auth_ID;

        }
        else{
            details = "does not exist"
        }
    })
    console.log(details);
    res.send({data: details});

}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData