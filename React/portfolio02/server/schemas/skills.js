const mongoose = require('mongoose');

const { Schema } = mongoose;
const skillsSchema = new Schema({
    name:{
        type:String,

    },
    value:{
        type:Number,
        required:true
    },
    orimg:String,
    img:String,
    createAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Skills',skillsSchema)