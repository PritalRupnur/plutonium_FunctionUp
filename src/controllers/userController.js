const UserModel= require("../models/userModel")
const moment = require('moment');




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }
    const date= async function(req, res) {
        let tokenDataInHeaders= req.headers.token
        console.log(moment().format())
        console.log(req.ip)
        //console.log(req.path)
        res.send({msg: "All details required are in console"})
        
        }

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.date= date