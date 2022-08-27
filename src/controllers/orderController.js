// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”,
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }


const { count } = require("console")
const orderModel = require("../models/orderModel")
const coustmerModel = require("../models/coustemermodel")
const productModel = require("../models/productModel")


const headerValidationOrder =  async function (req, res, next) {
    let appUser = req.headers["isfreeappuser"]
    let x = 'true'
   
    if (appUser === undefined) {
        return res.send({msg:"request is missing a mandatory header"})
    } 
    else if(req.headers["isfreeappuser"]==x){

        req.isFreeAppUser=Boolean(appUser)
        
    }

     else {
      
        req.isFreeAppUser=!appUser
        
     }
     next()
       
    }


const createOrder= async function (req, res) {
    let data= req.body
   
    let coustmer = data.coustmerID
    let Product = data.productID
    let isValidc =  await coustmerModel.findById({_id :coustmer}).select({_id : 1})
    let isValidp =  await productModel.findById({_id :Product}).select({_id : 1})
   
  
    if (!isValidc) {
        return res.send({msg:"valid coustmer id is required"})
    } else if (!isValidp) {
        return res.send({msg:"valid product id is required"})
    }
    
    let x = 'true'
    let y  = 'false'
     
     if (req.headers["isfreeappuser"]==x){

        req.isFreeAppUser=Boolean(x)
    }

     else {
      
        req.isFreeAppUser=(!y)
     }

     data.isFreeAppUser=req.isFreeAppUser

    let savedData= await orderModel.create(data)
    res.send({msg: savedData})
    
    }

    const orderandamoutupdation =  async function (req, res) {
       let data = req.body
       let coustmer = data.coustmerID
       let Product = data.productID 
       let x = 'true'
       let y  = 'false'
       let appUser = req.headers["isfreeappuser"]
       let isValidc =  await coustmerModel.findById({_id :coustmer}).select({_id : 1})
    let isValidp =  await productModel.findById({_id :Product}).select({_id : 1})
   
  
    if (!isValidc) {
        return res.send({msg:"valid coustmer id is required"})
    } else if (!isValidp) {
        return res.send({msg:"valid product id is required"})
    }
    let coust_Balance = await coustmerModel.findById({_id:coustmer}).select({balance:1})
    let product_Price = await productModel.findById({_id:Product}).select({price:1})
   
     let a = coust_Balance.balance
     let b = product_Price.price

       if(appUser==y){
           if(a>b){

            let c = a-b
           req.isFreeAppUser=!appUser
           let updated_coustmer = await coustmerModel.findByIdAndUpdate(({_id:coustmer}),{ $set : {balance : c, isFreeAppUser:req.isFreeAppUse, new : true }})
           let updated_order = await orderModel.findOneAndUpdate({ coustmerID:coustmer,productID:Product },{ $set : {amount :b , isFreeAppUser:req.isFreeAppUse, new : true }})
           let element = {updated_coustmer,updated_order}
           
           
           res.send({msg: element})
       }
       else{
           res.send({msg: "Insufficient Balance"})
       }
   
   }

       else  if(appUser==x){
           req.isFreeAppUser=Boolean(appUser)
           let updated_order = await orderModel.findOneAndUpdate({ coustmerID:coustmer,productID:Product },{ $set : {amount : 0, isFreeAppUser:req.isFreeAppUse, new : true }})
           res.send({msg: updated_order})
       }


}


module.exports.createOrder= createOrder
module.exports.headerValidationOrder= headerValidationOrder
module.exports.orderandamoutupdation= orderandamoutupdation
