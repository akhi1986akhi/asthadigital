const express = require('express');
const path = require('path');
const fs = require('fs');
const contact = fs.readFileSync('contact.html','utf-8');
const app = express();
// mongoes conection start here
const mongoose = require('mongoose');
const Student = require('./student');  //import student module

mongoose.connect('mongodb+srv://akhi1986akhi:5ZT2CNDB7K3mPjwY@cluster0.wucuh.mongodb.net/mydb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connection done");

});
const port = process.env.PORT || 3000;;

// const userSchema =  new mongoose.Schema({
//     // _id:mongoose.Schema.Types.ObjectId(),
//     name:String,
//     father:String,
//     contact:String,
//     email:String,
//     address:String
// });
// const Student = new mongoose.model('Student',userSchema);

const getdocument = async () =>{

    const result = await Student.find();
    console.log(result);
} 
getdocument();

// mongoes conection end here
app.use('/assets',express.static('assets'));

app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    // res.status(200).send("This is home page of my first express app");
    res.render('pages/index');


});
// app.get("/home",(req,res)=>{
//     res.status(200).send("This is home page of my first express app");

// });
app.get("/about",(req,res)=>{
    // res.status(200).send("This is about page of my first express app");
    res.render('pages/about');

});
app.get("/service",(req,res)=>{
    // res.status(200).send("This is service page of my first express app");
    res.render('pages/service');

});
app.get("/contact",(req,res)=>{
    // res.status(200).send("This is contact page of my first express app");
    // res.status(200).end(contact);
    res.render('pages/contact');

});

app.listen(port,()=>{
    console.log(`Applicatio started successfully on port ${port}`);
});