const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jobs = require('./models/latestjob')
const path = require('path');
const portname = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://akhi1986akhi:5ZT2CNDB7K3mPjwY@cluster0.wucuh.mongodb.net/mydb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connected");
});
// app.use access public folder assets
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render('pages/index');
})
app.get('/latestJob',function(req,res){
    jobs.find({}).then((data) => {
        res.render('pages/latestJob', { records: data });
    })
})

app.listen(portname,()=>{
    console.log(`Application started successfully on port ${portname}`);
});