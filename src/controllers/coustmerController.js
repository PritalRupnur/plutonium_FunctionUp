// { 
//     _id: ObjectId("61951bfa4d9fe0d34da86829"),
//     name: "Sabiha Khan",
// 	balance:100, // Default balance at user registration is 100
// 	address:"New delhi",
// 	age: 90,
//  	gender: “female” // Allowed values are - “male”, “female”, “other”
// 	isFreeAppUser: false // Default false value.
// }

const { count } = require("console");
const { nextTick } = require("process");
const costumerModel = require("../models/coustemermodel")



const headerValidationCoust =  async function (req, res, next) {
    let appUser = req.headers["isfreeappuser"]
    let x = 'true'
    let y  = 'false'
    if (appUser === undefined) {
        return res.send({msg:"request is missing a mandatory header"})
    } 
    else if
     
      (req.headers["isfreeappuser"]==x){

        req.isFreeAppUser=Boolean(appUser)
        console.log(req.isFreeAppUser)
    }

     else {
      
        req.isFreeAppUser=!appUser
        console.log(req.isFreeAppUser)
     }
     next()
       
    }
   
      



const createCoustmer= async function (req, res) {
    let data= req.body
    let x = 'true'
    let y  = 'false'
     
     if (req.headers["isfreeappuser"]==x){

        req.isFreeAppUser=Boolean(x)
    }

     else {
      
        req.isFreeAppUser=(!y)
     }

     data.isFreeAppUser=req.isFreeAppUser
     let savedData1= await costumerModel.create(data)
     res.send({msg: savedData1})
}




module.exports.createCoustmer= createCoustmer
module.exports.headerValidationCoust= headerValidationCoust