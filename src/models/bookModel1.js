const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema( {
    bookName: {type:String,
               required:true}, 
    authorName: String, 
    tags: [String],
    totalPages:Number,
    
    isAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    bookYear:{
        type:Number,
        default:2021
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema1)