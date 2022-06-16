const mongoose = require('mongoose');
let jobSchema = new mongoose.Schema({
    date:String,
    post:String,
    postname:String,
    title:String,
    fdate:String,
    tdate:String,
    gfee:String,
    ofee:String,
    scfee:String,
    stfee:String,
    pfee:String,
    efee:String
})
module.exports = mongoose.model('job',jobSchema)
