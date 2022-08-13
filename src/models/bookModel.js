const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName: {type:String,
             required: true},
    AuthorName: String,
   
    category: String,
    
    year: Number,
   
}, { timestamps: true });

module.exports = mongoose.model('BOOK', bookSchema)