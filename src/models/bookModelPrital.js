const mongoose = require('mongoose');
const prital = require('../models/AuthorModelPrital')
const bookSchema = new mongoose.Schema( {
    
        Bookname:String,
        author_id:{type:Number,
            required:true},
        price:Number,
        ratings:Number
    } 
    , 
    { timestamps: true });


module.exports = mongoose.model('Book17', bookSchema) //users