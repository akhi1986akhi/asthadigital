const mongoose = require('mongoose');
let userSchema =  new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId(),
    name:String,
    father:String,
    contact:String,
    email:String,
    address:String
});
const Student = new mongoose.model('Student',userSchema);
module.exports = Student;

