const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema( {
    Author: {
        type: ObjectId,
        ref: "new_Author"
    },
    name: String,
    headQuater:String
    

}, { timestamps: true });

module.exports = mongoose.model('new_Publisher', publisherSchema)