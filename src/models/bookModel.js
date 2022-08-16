const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName: {type:String,
             required: true},
    AuthorName: String,
   
    category: String,
    
    year: Number,
    tags:[string],//it implies array of strings
    isPublished:Boolean, 
    date: {Date,
            default:Date.now},
    prices: {
            indianPrice:string,
            europePrice:String
    },
    sales:{type:Number, default:10} 
   
}, { timestamps: true });

module.exports = mongoose.model('BOOK', bookSchema)