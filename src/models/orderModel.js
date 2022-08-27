// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }

const mongoose = require('mongoose');
const moment = require('moment');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
coustmerID:  {
    type: ObjectId,
    ref: "Coustmer"
},
productID:{
    type: ObjectId,
    ref: "Product"
},
category:String,
amount:Number,
isFreeAppUser: Boolean,
date:String
    
 
},{ timestamps: true })

module.exports = mongoose.model('Order', orderSchema)