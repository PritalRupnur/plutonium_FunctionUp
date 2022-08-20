const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    Author: {
        type: ObjectId,
        ref: "new_Author"
    }, 

    hardCover:Boolean,
    
   
    price:Number,
    ratings: Number,
    publisher:{
        type: ObjectId,
        ref: "new_Publisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('Book_HC', bookSchema)
