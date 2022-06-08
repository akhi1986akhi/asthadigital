const express = require('express');
const app = express();
const path = require('path');
const hostname = '159.223.224.249';
// const hostname = 'localhost';
const portname = process.env.PORT || 3000;
// app.use access public folder assets
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render('pages/index');
})

app.listen(portname,()=>{
    console.log(`Application started successfully on port ${portname}`);
});