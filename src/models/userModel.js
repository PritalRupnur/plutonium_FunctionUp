const mongoose = require('mongoose');

//import mongoose from 'mongoose';
//const { Schema } = mongoose;
//userSchema-name of the collection of users in dataBase
const userSchema = new Schema({
  firstName:  String, // String is shorthand for {type: String}
  lastName: String,
  mobile:  {
             type:String,
             unique:true,
             required: true
            } ,

   emailId:String,
   gender:{String,
        enum: ["male", "female", "LGBTQ", "other"]
    },

   age:Number,
   createdAt: Date,
   modifiedAt:Date
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
},{timestamps:true});

module.export = mongoose.model('user', userSchema)//users