const mongoose = require('mongoose');
const { Schema } = mongoose;
const adminSchema = new Schema({
    userid: {
        type:String,
        required:true,
        unique:true
    },
    userpass:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("Admin", adminSchema);